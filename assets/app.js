/* =====================================================================
   Motor compartido de la app de estudio.
   Requiere que ANTES se hayan cargado (en este orden):
     data/<examen>/exam.js       → const EXAM, const DOMAINS
     data/<examen>/study.js      → const STUDY
     data/<examen>/cards.js      → const CARDS
     data/<examen>/questions.js  → const QUESTIONS
   ===================================================================== */

/* clave de localStorage con prefijo por examen (aif_..., clf_...) */
const LS = k => EXAM.prefix + '_' + k;

function dlabel(dom){ return appLang==='en' ? dom.label_en : dom.label; }

/* ================= STATE ================= */
let currentDomain = 'all';
let deck = [...CARDS.keys()];
let pos = 0;
let cardStatus = {};
let flipped = false;

let qDeck = [...QUESTIONS.keys()];
let quizDomain = 'all';
let qPos = 0;
let qAnswered = {};
let qScore = 0;

let readDomain = 'exam';
let readSec = 0;

/* ================= IDIOMA (ES/EN) ================= */
let appLang = localStorage.getItem(LS('lang')) || 'es';
function t(obj, base){
  // obj: el item de datos (STUDY item, card, o question). base: nombre de campo ej. 'f'
  if(appLang==='en') return obj[base+'_en'] ?? obj[base+'_es'] ?? obj[base];
  return obj[base+'_es'] ?? obj[base];
}
function qField(item, base){
  // Preguntas: los campos base son q_es/q_en, opts_es/opts_en, exp_es/exp_en
  // (algunas aun no traducidas usan fallback al otro idioma para no romperse).
  if(appLang==='en') return item[base+'_en'] ?? item[base+'_es'];
  return item[base+'_es'] ?? item[base+'_en'];
}
const UI_STRINGS = {
  subText: {es: EXAM.sub_es, en: EXAM.sub_en},
  plabelText:{es:'👤 Perfil:', en:'👤 Profile:'},
  btnNewProfile:{es:'＋ Nuevo', en:'＋ New'},
  btnRenameProfile:{es:'✎ Renombrar', en:'✎ Rename'},
  psavedText:{es:'tu progreso se guarda en este navegador', en:'your progress is saved in this browser'},
  btnRead:{es:'📖 Estudiar', en:'📖 Study'},
  btnFlash:{es:'🗂 Flashcards', en:'🗂 Flashcards'},
  btnQuiz:{es:'📝 Preguntas de práctica', en:'📝 Practice questions'},
  lblFront:{es:'Término / Concepto', en:'Term / Concept'},
  hintText:{es:'toca la tarjeta para ver la respuesta', en:'tap the card to see the answer'},
  lblBack:{es:'Explicación', en:'Explanation'},
  btnReview:{es:'Repasar de nuevo', en:'Review again'},
  btnKnow:{es:'Ya lo sé', en:'I know it'},
  btnShuffleCards:{es:'barajar', en:'shuffle'},
  btnResetCards:{es:'reiniciar progreso', en:'reset progress'},
  lblTotal:{es:'Total', en:'Total'},
  lblKnow:{es:'Ya lo sé', en:'I know it'},
  lblReview:{es:'A repasar', en:'To review'},
  btnShuffleQuiz:{es:'barajar', en:'shuffle'},
  btnResetQuiz:{es:'reiniciar respuestas', en:'reset answers'},
  qSubmit:{es:'Comprobar respuesta', en:'Check answer'},
  lblScore:{es:'Aciertos', en:'Correct'},
  lblDone:{es:'Respondidas', en:'Answered'},
  eyebrowText:{es:'Certificación &middot; Estudio', en:'Certification &middot; Study'},
};
function applyStaticI18n(){
  for(const id in UI_STRINGS){
    const el = document.getElementById(id);
    if(el) el.innerHTML = UI_STRINGS[id][appLang];
  }
  document.getElementById('langToggle').textContent = '🌐 ' + appLang.toUpperCase();
  const idx0 = STUDY.findIndex(x=>x.id===readDomain);
  document.getElementById('readPrev').textContent = idx0>0 ? '← '+t(STUDY[idx0-1],'chip') : '←';
  document.getElementById('readNext').textContent = idx0<STUDY.length-1 ? t(STUDY[idx0+1],'chip')+' →' : '→';
}

function toggleLang(){
  appLang = appLang==='es' ? 'en' : 'es';
  localStorage.setItem(LS('lang'), appLang);
  document.documentElement.lang = appLang;
  applyStaticI18n();
  if(document.getElementById('readMode').style.display!=='none') renderRead();
  renderChips(); renderCard();
  if(document.getElementById('quizMode').classList.contains('active')){ renderQuizChips(); renderQuestion(); }
}

/* ================= PERFILES + PROGRESO (localStorage) ================= */
let profiles = {};
let currentProfile = '';

function loadProfiles(){ try{ return JSON.parse(localStorage.getItem(LS('profiles')))||{}; }catch(e){ return {}; } }
function saveProfiles(){ localStorage.setItem(LS('profiles'), JSON.stringify(profiles)); }
function progKey(name){ return LS('prog_'+name); }

function saveProgress(){
  if(!currentProfile) return;
  localStorage.setItem(progKey(currentProfile), JSON.stringify({cardStatus, qAnswered, qScore}));
}
function loadProgress(){
  cardStatus = {}; qAnswered = {}; qScore = 0;
  if(!currentProfile) return;
  try{
    const d = JSON.parse(localStorage.getItem(progKey(currentProfile)));
    if(d){ cardStatus = d.cardStatus||{}; qAnswered = d.qAnswered||{}; qScore = d.qScore||0; }
  }catch(e){}
}

function refreshProfileSelect(){
  const sel = document.getElementById('profileSelect');
  sel.innerHTML = '';
  Object.keys(profiles).forEach(n=>{
    const o = document.createElement('option');
    o.value = n; o.textContent = n;
    if(n===currentProfile) o.selected = true;
    sel.appendChild(o);
  });
}

function switchProfile(name){
  if(!profiles[name]) return;
  currentProfile = name;
  localStorage.setItem(LS('current'), name);
  loadProgress();
  pos = 0; qPos = 0;
  renderChips(); renderCard();
  if(document.getElementById('quizMode').classList.contains('active')) renderQuestion();
  refreshProfileSelect();
}

function newProfile(){
  const name = (prompt('Nombre del nuevo perfil:')||'').trim();
  if(!name) return;
  if(profiles[name]){ alert('Ya existe un perfil con ese nombre.'); switchProfile(name); return; }
  profiles[name] = true; saveProfiles();
  switchProfile(name);
}

function renameProfile(){
  if(!currentProfile) return;
  const name = (prompt('Nuevo nombre para "'+currentProfile+'":', currentProfile)||'').trim();
  if(!name || name===currentProfile) return;
  if(profiles[name]){ alert('Ya existe un perfil con ese nombre.'); return; }
  // migra progreso al nuevo nombre
  const prog = localStorage.getItem(progKey(currentProfile));
  if(prog) localStorage.setItem(progKey(name), prog);
  localStorage.removeItem(progKey(currentProfile));
  delete profiles[currentProfile];
  profiles[name] = true; saveProfiles();
  currentProfile = name; localStorage.setItem(LS('current'), name);
  refreshProfileSelect();
}

function initProfiles(){
  profiles = loadProfiles();
  if(Object.keys(profiles).length===0){ profiles['Yo'] = true; saveProfiles(); }
  currentProfile = localStorage.getItem(LS('current'));
  if(!currentProfile || !profiles[currentProfile]){ currentProfile = Object.keys(profiles)[0]; }
  localStorage.setItem(LS('current'), currentProfile);
  loadProgress();
  refreshProfileSelect();
}

function domainLabel(id){ const d=DOMAINS.find(x=>x.id===id); return d ? dlabel(d).split('·')[0].trim() : id.toUpperCase(); }

/* ================= MODE SWITCH ================= */
function setMode(mode){
  document.getElementById('btnRead').classList.toggle('active', mode==='read');
  document.getElementById('btnFlash').classList.toggle('active', mode==='flash');
  document.getElementById('btnQuiz').classList.toggle('active', mode==='quiz');
  document.getElementById('readMode').style.display = mode==='read' ? 'block' : 'none';
  document.getElementById('flashMode').style.display = mode==='flash' ? 'block' : 'none';
  document.getElementById('quizMode').classList.toggle('active', mode==='quiz');
  if(mode==='read') renderRead();
  if(mode==='quiz'){ renderQuizChips(); renderQuestion(); }
  window.scrollTo({top:0, behavior:'smooth'});
}

/* ================= READ MODE ================= */
function renderReadChips(){
  const el = document.getElementById('readChips');
  el.innerHTML = '';
  STUDY.forEach(s=>{
    const chip = document.createElement('button');
    chip.className = 'chip' + (readDomain===s.id ? ' active' : '');
    chip.textContent = t(s,'chip');
    chip.onclick = ()=>{ readDomain = s.id; readSec = 0; renderRead(); window.scrollTo({top:0,behavior:'smooth'}); };
    el.appendChild(chip);
  });
}

function renderRead(){
  renderReadChips();
  const s = STUDY.find(x=>x.id===readDomain) || STUDY[0];

  // TOC
  const toc = document.getElementById('readToc');
  toc.innerHTML = '';
  s.sections.forEach((sec,i)=>{
    const a = document.createElement('a');
    a.href = '#sec'+i;
    a.textContent = (i+1)+'. '+t(sec,'h');
    a.onclick = (e)=>{ e.preventDefault(); readSec=i; document.getElementById('sec'+i).scrollIntoView({behavior:'smooth',block:'start'}); };
    toc.appendChild(a);
  });

  // Article
  const art = document.getElementById('article');
  let html = `<h2>${t(s,'title')}</h2><p class="lead">${t(s,'lead')}</p>`;
  s.sections.forEach((sec,i)=>{
    html += `<div class="sec" id="sec${i}"><h3><span class="n">${i+1}</span>${t(sec,'h')}</h3>${t(sec,'html')}</div>`;
  });
  art.innerHTML = html;

  // nav buttons enable/disable
  const idx = STUDY.findIndex(x=>x.id===readDomain);
  document.getElementById('readPrev').disabled = (idx===0);
  document.getElementById('readNext').disabled = (idx===STUDY.length-1);
  document.getElementById('readPrev').textContent = idx>0 ? '← '+t(STUDY[idx-1],'chip') : '←';
  document.getElementById('readNext').textContent = idx<STUDY.length-1 ? t(STUDY[idx+1],'chip')+' →' : '→';
}

function readStep(dir){
  const idx = STUDY.findIndex(x=>x.id===readDomain);
  const next = idx + dir;
  if(next<0 || next>=STUDY.length) return;
  readDomain = STUDY[next].id;
  readSec = 0;
  renderRead();
  window.scrollTo({top:0, behavior:'smooth'});
}

/* ================= DOMAIN CHIPS (flashcards) ================= */
function renderChips(){
  const el = document.getElementById('domainChips');
  el.innerHTML = '';
  const allChip = document.createElement('button');
  allChip.className = 'chip' + (currentDomain==='all' ? ' active' : '');
  allChip.textContent = appLang==='en' ? 'All' : 'Todos';
  allChip.onclick = () => filterDomain('all');
  el.appendChild(allChip);
  DOMAINS.forEach(dom=>{
    const chip = document.createElement('button');
    chip.className = 'chip' + (currentDomain===dom.id ? ' active' : '');
    chip.innerHTML = dlabel(dom) + `<span class="w">${dom.weight}%</span>`;
    chip.onclick = () => filterDomain(dom.id);
    el.appendChild(chip);
  });
}

function filterDomain(id){
  currentDomain = id;
  deck = CARDS.map((c,i)=>i).filter(i => id==='all' || CARDS[i].d===id);
  pos = 0;
  flipped = false;
  renderChips();
  renderCard();
}

/* ================= FLASHCARDS ================= */
function renderCard(){
  if(deck.length===0){
    document.getElementById('frontText').textContent = appLang==='en' ? 'No cards in this domain.' : 'No hay tarjetas en este dominio.';
    return;
  }
  const idx = deck[pos];
  const c = CARDS[idx];
  document.getElementById('tagFront').textContent = domainLabel(c.d);
  document.getElementById('tagBack').textContent = domainLabel(c.d);
  document.getElementById('idxFront').textContent = (pos+1)+' / '+deck.length;
  document.getElementById('idxBack').textContent = (pos+1)+' / '+deck.length;
  document.getElementById('frontText').textContent = t(c,'f');
  document.getElementById('backText').textContent = t(c,'b');
  document.getElementById('card').classList.remove('flipped');
  flipped = false;
  updateMarkButtons(idx);
  updateProgress();
}

function flipCard(){
  flipped = !flipped;
  document.getElementById('card').classList.toggle('flipped', flipped);
}

function nextCard(){ if(deck.length===0) return; pos = (pos+1) % deck.length; renderCard(); }
function prevCard(){ if(deck.length===0) return; pos = (pos-1+deck.length) % deck.length; renderCard(); }

function markCard(status){
  const idx = deck[pos];
  cardStatus[idx] = (cardStatus[idx]===status) ? undefined : status;
  updateMarkButtons(idx);
  updateProgress();
  saveProgress();
  setTimeout(nextCard, 250);
}

function updateMarkButtons(idx){
  document.getElementById('btnReview').classList.toggle('picked', cardStatus[idx]==='review');
  document.getElementById('btnKnow').classList.toggle('picked', cardStatus[idx]==='know');
}

function shuffleCards(){
  for(let i=deck.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [deck[i],deck[j]] = [deck[j],deck[i]]; }
  pos = 0; renderCard();
}

function resetProgress(){
  if(!confirm('¿Reiniciar el progreso de "'+currentProfile+'"? (flashcards y respuestas)')) return;
  cardStatus = {}; qAnswered = {}; qScore = 0;
  saveProgress();
  updateProgress(); updateMarkButtons(deck[pos]);
}

function updateProgress(){
  const knowCount = Object.values(cardStatus).filter(s=>s==='know').length;
  const reviewCount = Object.values(cardStatus).filter(s=>s==='review').length;
  document.getElementById('statTotal').textContent = CARDS.length;
  document.getElementById('statKnow').textContent = knowCount;
  document.getElementById('statReview').textContent = reviewCount;
  document.getElementById('progLabel').textContent = (pos+1)+' / '+deck.length;
  const pct = deck.length ? Math.round(((pos+1)/deck.length)*100) : 0;
  document.getElementById('progFill').style.width = pct+'%';
}

/* keyboard (solo en flashcards) */
document.addEventListener('keydown', (e)=>{
  if(document.getElementById('flashMode').style.display==='none') return;
  if(e.key==='ArrowRight') nextCard();
  if(e.key==='ArrowLeft') prevCard();
  if(e.key===' '){ e.preventDefault(); flipCard(); }
});

/* ================= QUIZ ================= */
let curSel = new Set();   // selección temporal en preguntas de respuesta múltiple
let curSelIdx = null;

function quizIsCorrect(idx){
  const it = QUESTIONS[idx], a = qAnswered[idx];
  if(a === undefined) return false;
  if(Array.isArray(it.correct)){
    return [...it.correct].sort().join(',') === [...a].sort().join(',');
  }
  return a === it.correct;
}
function scoreCounts(){
  let correct=0, done=0;
  for(const k in qAnswered){ done++; if(quizIsCorrect(k)) correct++; }
  return {correct, done};
}

function renderQuizChips(){
  const el = document.getElementById('quizChips'); el.innerHTML = '';
  const mk = (id,label)=>{ const c=document.createElement('button');
    c.className='chip'+(quizDomain===id?' active':''); c.innerHTML=label;
    c.onclick=()=>filterQuiz(id); el.appendChild(c); };
  mk('all', (appLang==='en'?'All':'Todas')+`<span class="w">${QUESTIONS.length}</span>`);
  DOMAINS.forEach(d=>{ const n=QUESTIONS.filter(q=>q.d===d.id).length;
    mk(d.id, dlabel(d).split('·')[0].trim()+`<span class="w">${n}</span>`); });
}
function filterQuiz(id){
  quizDomain=id;
  qDeck=QUESTIONS.map((q,i)=>i).filter(i=>id==='all'||QUESTIONS[i].d===id);
  qPos=0; curSelIdx=null; renderQuizChips(); renderQuestion();
}
function shuffleQuiz(){
  for(let i=qDeck.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [qDeck[i],qDeck[j]]=[qDeck[j],qDeck[i]]; }
  qPos=0; curSelIdx=null; renderQuestion();
}
function resetQuiz(){
  if(!confirm('¿Borrar tus respuestas del quiz para "'+currentProfile+'"?')) return;
  qAnswered={}; saveProgress(); curSelIdx=null; renderQuestion();
}

function renderQuestion(){
  if(qDeck.length===0) return;
  const idx = qDeck[qPos];
  const item = QUESTIONS[idx];
  const multi = Array.isArray(item.correct);
  const chosen = qAnswered[idx];
  const answered = chosen !== undefined;
  if(multi && !answered && curSelIdx !== idx){ curSel = new Set(); curSelIdx = idx; }

  const isEn = appLang==='en';
  document.getElementById('qTag').textContent = domainLabel(item.d);
  document.getElementById('qCount').textContent =
    (isEn?'Question ':'Pregunta ')+(qPos+1)+' / '+qDeck.length + (multi ? (isEn?' · choose ':' · elige ')+item.correct.length : '');
  document.getElementById('qText').textContent = qField(item,'q');

  const optsEl = document.getElementById('qOptions');
  optsEl.innerHTML = '';
  qField(item,'opts').forEach((opt, i)=>{
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.textContent = String.fromCharCode(65+i) + '. ' + opt;
    if(answered){
      btn.disabled = true;
      const isC = multi ? item.correct.includes(i) : (i === item.correct);
      const wasChosen = multi ? chosen.includes(i) : (i === chosen);
      if(isC) btn.classList.add('correct');
      else if(wasChosen) btn.classList.add('wrong');
    } else if(multi){
      if(curSel.has(i)) btn.classList.add('sel');
      btn.onclick = ()=>{ curSel.has(i) ? curSel.delete(i) : curSel.add(i); renderQuestion(); };
    } else {
      btn.onclick = ()=> answerSingle(idx, i);
    }
    optsEl.appendChild(btn);
  });

  document.getElementById('qSubmit').style.display = (multi && !answered) ? 'inline-block' : 'none';

  const ex = document.getElementById('qExplain');
  if(answered){
    const okMsg = isEn ? '<b>✔ Correct. </b>' : '<b>✔ Correcto. </b>';
    const badMsg = isEn ? '<b>✘ Incorrect. </b>' : '<b>✘ Incorrecto. </b>';
    ex.innerHTML = (quizIsCorrect(idx) ? okMsg : badMsg) + (qField(item,'exp')||'');
    ex.classList.add('show');
  } else ex.classList.remove('show');

  const sc = scoreCounts();
  document.getElementById('qScore').textContent = sc.correct;
  document.getElementById('qDone').textContent = sc.done;
}

function answerSingle(idx, choice){
  if(qAnswered[idx] !== undefined) return;
  qAnswered[idx] = choice;
  saveProgress();
  renderQuestion();
}
function submitMulti(){
  const idx = qDeck[qPos];
  if(qAnswered[idx] !== undefined || curSel.size === 0) return;
  qAnswered[idx] = [...curSel];
  saveProgress();
  renderQuestion();
}

function nextQuestion(){ qPos = (qPos+1) % qDeck.length; renderQuestion(); }
function prevQuestion(){ qPos = (qPos-1+qDeck.length) % qDeck.length; renderQuestion(); }

/* ================= INIT ================= */
document.documentElement.lang = appLang;
applyStaticI18n();
initProfiles();
renderChips();
renderCard();
setMode('read');
