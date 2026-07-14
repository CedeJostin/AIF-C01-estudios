/* ================= EXAM META (CLF-C02) ================= */
const EXAM = {
  code: 'CLF-C02',
  prefix: 'clf',   // prefijo de claves en localStorage (progreso independiente del AIF-C01)
  sub_es: 'CLF-C02 &middot; 65 preguntas &middot; 90 min &middot; puntaje m&iacute;nimo 700/1000 &middot; teor&iacute;a + flashcards + pr&aacute;ctica',
  sub_en: 'CLF-C02 &middot; 65 questions &middot; 90 min &middot; minimum score 700/1000 &middot; theory + flashcards + practice',
};

/* Dominios oficiales de la guía del examen CLF-C02 */
const DOMAINS = [
  {id:'d1', label:'D1 · Conceptos de Nube', label_en:'D1 · Cloud Concepts', weight:24},
  {id:'d2', label:'D2 · Seguridad y Cumplimiento', label_en:'D2 · Security & Compliance', weight:30},
  {id:'d3', label:'D3 · Tecnología y Servicios', label_en:'D3 · Cloud Technology & Services', weight:34},
  {id:'d4', label:'D4 · Facturación y Soporte', label_en:'D4 · Billing, Pricing & Support', weight:12},
];
