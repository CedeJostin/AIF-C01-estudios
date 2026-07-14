/* ================= EXAM META (AIF-C01) ================= */
const EXAM = {
  code: 'AIF-C01',
  prefix: 'aif',   // prefijo de claves en localStorage (no cambiar: conserva tu progreso)
  sub_es: 'AIF-C01 &middot; 65 preguntas &middot; 90 min &middot; puntaje m&iacute;nimo 700/1000 &middot; teor&iacute;a + flashcards + pr&aacute;ctica',
  sub_en: 'AIF-C01 &middot; 65 questions &middot; 90 min &middot; minimum score 700/1000 &middot; theory + flashcards + practice',
};

const DOMAINS = [
  {id:'d1', label:'D1 · Fundamentos AI/ML', label_en:'D1 · Fundamentals of AI/ML', weight:20},
  {id:'d2', label:'D2 · Fundamentos GenAI', label_en:'D2 · Fundamentals of Generative AI', weight:24},
  {id:'d3', label:'D3 · Aplicación de Modelos', label_en:'D3 · Applications of FMs', weight:28},
  {id:'d4', label:'D4 · IA Responsable', label_en:'D4 · Responsible AI', weight:14},
  {id:'d5', label:'D5 · Seguridad y Gobernanza', label_en:'D5 · Security & Governance', weight:14},
];
