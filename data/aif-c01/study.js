/* ================= STUDY CONTENT (teoría de lectura) ================= */
/* Cubre todo lo necesario para las flashcards y las preguntas de práctica. */
const STUDY = [
{
  id:'exam',
  chip:'Sobre el examen',
  chip_en:'About the exam',
  title:'Sobre el examen AIF-C01',
  title_en:'About the AIF-C01 exam',
  lead:'Qué evalúa, formato, estrategia y cómo estudiar con esta app. Léelo primero para saber dónde poner el foco.',
  lead_en:'What it tests, the format, strategy, and how to study with this app. Read this first to know where to focus.',
  sections:[
    {h:'Formato y logística', h_en:'Format and logistics', html:`
      <ul>
        <li><b>65 preguntas</b> en total: <b>50 puntuadas</b> + 15 no puntuadas (de prueba, no sabes cuáles son).</li>
        <li><b>90 minutos</b>. Puntaje: escala 100–1000, <b>apruebas con 700</b>.</li>
        <li>Es una certificación <b>foundational</b> (de fundamentos): no exige programar ni experiencia profunda de ingeniería.</li>
        <li>5 tipos de pregunta: <b>opción única</b> (1 correcta de 4), <b>respuesta múltiple</b> (2+ correctas de 5+), <b>ordenar</b> una secuencia (3–5), <b>emparejar</b> (3–7 pares) y <b>case study</b> (un escenario con varias preguntas).</li>
      </ul>
      <div class="note tip"><b>Truco de negocio:</b> ante dos respuestas técnicamente válidas, suele ganar la que es <b>administrada por AWS</b>, la más <b>simple/rápida</b> de implementar o la de <b>menor costo operativo</b>.</div>
      <div class="note"><b>Fuente:</b> este material sigue la <b>Guía oficial del examen AWS Certified AI Practitioner (AIF-C01), versión 1.4</b>, y la documentación oficial de AWS. Está organizado por los mismos 5 dominios y task statements del examen.</div>`,
     html_en:`
      <ul>
        <li><b>65 questions</b> total: <b>50 scored</b> + 15 unscored (pilot questions, you don't know which ones).</li>
        <li><b>90 minutes</b>. Score: 100–1000 scale, <b>you pass with 700</b>.</li>
        <li>It's a <b>foundational</b> certification: it doesn't require coding or deep engineering experience.</li>
        <li>5 question types: <b>single choice</b> (1 correct out of 4), <b>multiple response</b> (2+ correct out of 5+), <b>ordering</b> a sequence (3–5), <b>matching</b> (3–7 pairs), and a <b>case study</b> (one scenario with several questions).</li>
      </ul>
      <div class="note tip"><b>Business rule of thumb:</b> when two answers are technically valid, the one <b>managed by AWS</b>, the <b>simplest/fastest</b> to implement, or the one with <b>lowest operational cost</b> usually wins.</div>
      <div class="note"><b>Source:</b> this material follows the <b>official AWS Certified AI Practitioner (AIF-C01) Exam Guide, version 1.4</b>, and official AWS documentation. It's organized by the same 5 domains and task statements as the exam.</div>`},
    {h:'Los 5 dominios y su peso', h_en:'The 5 domains and their weight', html:`
      <table class="tbl">
        <tr><th>Dominio</th><th>Peso</th><th>De qué va</th></tr>
        <tr><td><b>1 · Fundamentos de IA y ML</b></td><td>20%</td><td>Conceptos base, tipos de aprendizaje, cuándo (y cuándo no) usar ML, métricas.</td></tr>
        <tr><td><b>2 · Fundamentos de IA generativa</b></td><td>24%</td><td>Tokens, embeddings, transformers, ciclo de vida, servicios GenAI de AWS.</td></tr>
        <tr><td><b>3 · Aplicación de modelos fundacionales</b></td><td>28%</td><td>El dominio más grande: prompting, RAG, fine-tuning, parámetros de inferencia, evaluación, agentes.</td></tr>
        <tr><td><b>4 · IA responsable</b></td><td>14%</td><td>Sesgo, equidad, explicabilidad, transparencia, herramientas de AWS.</td></tr>
        <tr><td><b>5 · Seguridad, cumplimiento y gobernanza</b></td><td>14%</td><td>IAM, cifrado, auditoría, ataques a modelos, gobernanza de datos.</td></tr>
      </table>
      <p>El <b>Dominio 3 (28%)</b> es el que más pesa: domina RAG vs fine-tuning y los parámetros de inferencia. Junto con el Dominio 2, la IA generativa es casi la mitad del examen.</p>`,
     html_en:`
      <table class="tbl">
        <tr><th>Domain</th><th>Weight</th><th>What it covers</th></tr>
        <tr><td><b>1 · Fundamentals of AI and ML</b></td><td>20%</td><td>Base concepts, learning types, when (and when not) to use ML, metrics.</td></tr>
        <tr><td><b>2 · Fundamentals of Generative AI</b></td><td>24%</td><td>Tokens, embeddings, transformers, lifecycle, AWS GenAI services.</td></tr>
        <tr><td><b>3 · Applications of Foundation Models</b></td><td>28%</td><td>The biggest domain: prompting, RAG, fine-tuning, inference parameters, evaluation, agents.</td></tr>
        <tr><td><b>4 · Responsible AI</b></td><td>14%</td><td>Bias, fairness, explainability, transparency, AWS tools.</td></tr>
        <tr><td><b>5 · Security, Compliance, and Governance</b></td><td>14%</td><td>IAM, encryption, auditing, attacks on models, data governance.</td></tr>
      </table>
      <p><b>Domain 3 (28%)</b> carries the most weight: master RAG vs fine-tuning and the inference parameters. Together with Domain 2, generative AI is almost half of the exam.</p>`},
    {h:'Cómo usar esta app', h_en:'How to use this app', html:`
      <ul>
        <li><b>📖 Estudiar</b> (esta sección): la teoría completa por dominio. Cubre todo lo que preguntan las flashcards y el quiz.</li>
        <li><b>🗂 Flashcards</b>: memoriza términos y servicios. Marca "ya lo sé" / "a repasar".</li>
        <li><b>📝 Práctica</b>: preguntas tipo examen con explicación de por qué cada opción es correcta o no.</li>
      </ul>
      <div class="note">Recorrido recomendado: leer un dominio aquí → repasar sus flashcards → resolver las preguntas de práctica de ese dominio.</div>`,
     html_en:`
      <ul>
        <li><b>📖 Study</b> (this section): the full theory by domain. Covers everything asked in the flashcards and the quiz.</li>
        <li><b>🗂 Flashcards</b>: memorize terms and services. Mark "I know it" / "review again".</li>
        <li><b>📝 Practice</b>: exam-style questions with an explanation of why each option is correct or not.</li>
      </ul>
      <div class="note">Recommended path: read a domain here → review its flashcards → work through that domain's practice questions.</div>`},
  ]
},
{
  id:'d1',
  chip:'D1 · AI/ML',
  chip_en:'D1 · AI/ML',
  title:'Dominio 1 · Fundamentos de IA y ML (20%)',
  title_en:'Domain 1 · Fundamentals of AI and ML (20%)',
  lead:'La base conceptual: qué es un modelo, cómo aprende, tipos de aprendizaje, cuándo conviene ML, y cómo se mide si funciona.',
  lead_en:'The conceptual foundation: what a model is, how it learns, types of learning, when ML makes sense, and how to measure if it works.',
  sections:[
    {h:'Conceptos base', h_en:'Base concepts', html:`
      <ul>
        <li><span class="term">Algoritmo</span>: conjunto de instrucciones/pasos para resolver un problema.</li>
        <li><span class="term">Modelo</span>: el resultado de <b>entrenar</b> un algoritmo con datos; es lo "aprendido" que luego se usa para predecir.</li>
        <li><span class="term">Inferencia</span>: cuando el modelo ya entrenado responde ante <b>datos nuevos</b>.</li>
        <li><span class="term">Endpoint</span> (en <span class="svc">SageMaker</span>): el punto donde se publica el modelo para que otras aplicaciones lo consuman.</li>
        <li><span class="term">LLM</span> (Large Language Model): modelo de lenguaje grande basado en transformers.</li>
      </ul>
      <h4>Tipos de datos que debes reconocer</h4>
      <ul>
        <li><span class="term">Etiquetados vs no etiquetados</span>: con/sin la "respuesta correcta" ya marcada (supervisado vs no supervisado).</li>
        <li><span class="term">Estructurados vs no estructurados</span>: tablas/columnas vs texto libre, imágenes, audio.</li>
        <li><span class="term">Tabulares</span> (filas/columnas), <span class="term">series de tiempo</span> (valores en el tiempo, para forecasting), <span class="term">imagen</span> y <span class="term">texto</span>.</li>
      </ul>`,
     html_en:`
      <ul>
        <li><span class="term">Algorithm</span>: a set of instructions/steps to solve a problem.</li>
        <li><span class="term">Model</span>: the result of <b>training</b> an algorithm on data; it's the "learned" thing later used to predict.</li>
        <li><span class="term">Inference</span>: when the already-trained model responds to <b>new data</b>.</li>
        <li><span class="term">Endpoint</span> (in <span class="svc">SageMaker</span>): the point where the model is published so other applications can consume it.</li>
        <li><span class="term">LLM</span> (Large Language Model): a large language model based on transformers.</li>
      </ul>
      <h4>Data types you should recognize</h4>
      <ul>
        <li><span class="term">Labeled vs unlabeled</span>: with/without the "correct answer" already marked (supervised vs unsupervised).</li>
        <li><span class="term">Structured vs unstructured</span>: tables/columns vs free text, images, audio.</li>
        <li><span class="term">Tabular</span> (rows/columns), <span class="term">time-series</span> (values over time, for forecasting), <span class="term">image</span>, and <span class="term">text</span>.</li>
      </ul>`},
    {h:'La jerarquía: IA ⊃ ML ⊃ Deep Learning ⊃ GenAI ⊃ Agentic AI', h_en:'The hierarchy: AI ⊃ ML ⊃ Deep Learning ⊃ GenAI ⊃ Agentic AI', html:`
      <ul>
        <li><span class="term">IA</span>: sistemas que imitan capacidades humanas.</li>
        <li><span class="term">Machine Learning</span>: aprende patrones de los datos <b>sin programación explícita</b>.</li>
        <li><span class="term">Deep Learning</span>: redes neuronales multicapa; más datos y cómputo, patrones más complejos.</li>
        <li><span class="term">GenAI</span>: genera contenido nuevo (texto, imagen, audio).</li>
        <li><span class="term">Agentic AI</span>: GenAI que además <b>actúa de forma autónoma</b> (planifica, usa herramientas).</li>
      </ul>`,
     html_en:`
      <ul>
        <li><span class="term">AI</span>: systems that imitate human capabilities.</li>
        <li><span class="term">Machine Learning</span>: learns patterns from data <b>without explicit programming</b>.</li>
        <li><span class="term">Deep Learning</span>: multi-layer neural networks; more data and compute, more complex patterns.</li>
        <li><span class="term">GenAI</span>: generates new content (text, image, audio).</li>
        <li><span class="term">Agentic AI</span>: GenAI that also <b>acts autonomously</b> (plans, uses tools).</li>
      </ul>`},
    {h:'Tipos de aprendizaje', h_en:'Types of learning', html:`
      <table class="tbl">
        <tr><th>Tipo</th><th>Datos</th><th>Ejemplos</th></tr>
        <tr><td><b>Supervisado</b></td><td>Etiquetados</td><td>Clasificación, regresión</td></tr>
        <tr><td><b>No supervisado</b></td><td>Sin etiquetas</td><td>Clustering, detección de anomalías</td></tr>
        <tr><td><b>Por refuerzo</b></td><td>Recompensa/castigo</td><td>Ensayo y error, robótica, RLHF</td></tr>
      </table>
      <h4>Algoritmos que debes reconocer</h4>
      <ul>
        <li><span class="term">Regresión lineal</span>: ajusta una línea → predice <b>valores continuos</b> (numéricos).</li>
        <li><span class="term">Regresión logística</span>: pese al nombre, se usa para <b>clasificación</b> (ej. spam / no spam); da una probabilidad 0–1.</li>
        <li><span class="term">K-means</span>: <b>clustering no supervisado</b>, agrupa datos sin etiquetas.</li>
        <li><span class="term">Árboles de decisión / Random Forest</span>: <b>interpretables</b>, explican cada decisión con reglas sí/no. Ideales cuando hay que <b>justificar</b> una predicción (crédito, auditoría). En cambio, las redes profundas son más precisas pero "caja negra".</li>
        <li><span class="term">k-NN</span> (k vecinos más cercanos): <b>clasificación supervisada</b> — asigna la clase mayoritaria de los vecinos más cercanos (ej. clasificar flores por sus medidas).</li>
        <li><span class="term">SVM</span> (Support Vector Machine): clasificación supervisada clásica; separa clases con el margen máximo.</li>
        <li><span class="term">XGBoost / gradient boosting</span>: clasificación/regresión sobre datos tabulares; muy preciso, poco interpretable.</li>
        <li><span class="term">ARIMA / DeepAR</span>: pronóstico de <b>series de tiempo</b> (DeepAR es el algoritmo integrado de SageMaker; requiere datos de series de tiempo).</li>
        <li><span class="term">Autoencoders</span>: <b>no supervisados</b>; aprenden a reconstruir la entrada — un error de reconstrucción alto delata una <b>anomalía</b>. Respuesta típica para detectar anomalías <b>sin etiquetas</b>.</li>
      </ul>
      <h4>Otros tipos de aprendizaje que aparecen como opciones</h4>
      <ul>
        <li><span class="term">Semisupervisado</span>: pocos datos etiquetados + muchos sin etiquetar. Trampa típica: si TODO está etiquetado → supervisado; si NADA lo está → no supervisado.</li>
        <li><span class="term">Autosupervisado</span> (self-supervised): el modelo genera sus propias etiquetas desde los datos (así se pre-entrenan los LLMs).</li>
        <li><span class="term">Federado</span> (federated learning): entrena un modelo compartido <b>sin mover los datos crudos</b> de cada participante → privacidad y cumplimiento.</li>
      </ul>`,
     html_en:`
      <table class="tbl">
        <tr><th>Type</th><th>Data</th><th>Examples</th></tr>
        <tr><td><b>Supervised</b></td><td>Labeled</td><td>Classification, regression</td></tr>
        <tr><td><b>Unsupervised</b></td><td>No labels</td><td>Clustering, anomaly detection</td></tr>
        <tr><td><b>Reinforcement</b></td><td>Reward/penalty</td><td>Trial and error, robotics, RLHF</td></tr>
      </table>
      <h4>Algorithms you should recognize</h4>
      <ul>
        <li><span class="term">Linear regression</span>: fits a line → predicts <b>continuous values</b> (numeric).</li>
        <li><span class="term">Logistic regression</span>: despite the name, it's used for <b>classification</b> (e.g. spam / not spam); gives a 0–1 probability.</li>
        <li><span class="term">K-means</span>: <b>unsupervised clustering</b>, groups data with no labels.</li>
        <li><span class="term">Decision trees / Random Forest</span>: <b>interpretable</b>, explain each decision with yes/no rules. Ideal when you need to <b>justify</b> a prediction (credit, audit). Deep networks, by contrast, are more accurate but a "black box".</li>
        <li><span class="term">k-NN</span> (k-nearest neighbors): <b>supervised classification</b> — assigns the majority class of the nearest neighbors (e.g. classifying flowers by their measurements).</li>
        <li><span class="term">SVM</span> (Support Vector Machine): classic supervised classification; separates classes with the maximum margin.</li>
        <li><span class="term">XGBoost / gradient boosting</span>: classification/regression on tabular data; very accurate, not very interpretable.</li>
        <li><span class="term">ARIMA / DeepAR</span>: <b>time-series</b> forecasting (DeepAR is SageMaker's built-in algorithm; it requires time-series data).</li>
        <li><span class="term">Autoencoders</span>: <b>unsupervised</b>; they learn to reconstruct the input — a high reconstruction error flags an <b>anomaly</b>. The typical answer for anomaly detection <b>without labels</b>.</li>
      </ul>
      <h4>Other learning types that show up as options</h4>
      <ul>
        <li><span class="term">Semi-supervised</span>: a little labeled data + lots of unlabeled data. Typical trap: if EVERYTHING is labeled → supervised; if NOTHING is → unsupervised.</li>
        <li><span class="term">Self-supervised</span>: the model generates its own labels from the data (this is how LLMs are pre-trained).</li>
        <li><span class="term">Federated learning</span>: trains a shared model <b>without moving each participant's raw data</b> → privacy and compliance.</li>
      </ul>`},
    {h:'Transfer learning', h_en:'Transfer learning', html:`
      <p><span class="term">Transfer learning</span>: tomar un modelo ya entrenado en una tarea y <b>adaptarlo a una tarea nueva relacionada</b> sin entrenar desde cero. Ahorra tiempo, datos y costo. Es la base de por qué se parte de modelos pre-entrenados en casi todos los proyectos empresariales.</p>`,
     html_en:`
      <p><span class="term">Transfer learning</span>: taking a model already trained on one task and <b>adapting it to a new, related task</b> without training from scratch. It saves time, data, and cost. It's why almost every enterprise project starts from pre-trained models.</p>`},
    {h:'Overfitting vs Underfitting', h_en:'Overfitting vs Underfitting', html:`
      <table class="tbl">
        <tr><th></th><th>Overfitting</th><th>Underfitting</th></tr>
        <tr><td>Síntoma</td><td>Excelente en entrenamiento, <b>malo con datos nuevos</b></td><td>Malo en todo</td></tr>
        <tr><td>Causa</td><td>Alta <b>varianza</b>: "memoriza"</td><td>Alto <b>sesgo</b>: demasiado simple</td></tr>
        <tr><td>Solución</td><td>Más datos, regularización, simplificar, data augmentation, early stopping</td><td>Más complejidad/features, entrenar más</td></tr>
      </table>
      <div class="note"><span class="svc">SageMaker Debugger</span> monitorea el entrenamiento en tiempo real y avisa si hay overfitting/underfitting.</div>`,
     html_en:`
      <table class="tbl">
        <tr><th></th><th>Overfitting</th><th>Underfitting</th></tr>
        <tr><td>Symptom</td><td>Excellent on training, <b>bad on new data</b></td><td>Bad on everything</td></tr>
        <tr><td>Cause</td><td>High <b>variance</b>: "memorizes"</td><td>High <b>bias</b>: too simple</td></tr>
        <tr><td>Fix</td><td>More data, regularization, simplify, data augmentation, early stopping</td><td>More complexity/features, train longer</td></tr>
      </table>
      <div class="note"><span class="svc">SageMaker Debugger</span> monitors training in real time and warns about overfitting/underfitting.</div>`},
    {h:'Hiperparámetros y épocas', h_en:'Hyperparameters and epochs', html:`
      <ul>
        <li><span class="term">Hiperparámetros</span>: configuración que se fija <b>antes</b> de entrenar (learning rate, batch size, número de épocas, capas). No los aprende el modelo.</li>
        <li><span class="term">Parámetros</span>: los pesos internos que el modelo <b>sí</b> aprende durante el entrenamiento.</li>
        <li><span class="term">Época (epoch)</span>: una pasada completa por todos los datos de entrenamiento. Más épocas → mejor ajuste… hasta que empieza el <b>overfitting</b>. Es configuración de entrenamiento, <b>no una métrica</b> de evaluación.</li>
        <li><span class="term">Learning rate</span>: cuánto se ajustan los pesos en cada paso. <span class="term">Batch size</span>: cuántos ejemplos se procesan por paso.</li>
        <li><span class="term">Ajuste de hiperparámetros</span> (hyperparameter tuning): buscar la combinación que da el <b>mejor rendimiento</b>. <span class="svc">SageMaker Automatic Model Tuning</span> lo automatiza; <span class="svc">SageMaker Autopilot</span> (AutoML) automatiza el ciclo completo: construye, entrena y ajusta el modelo por ti.</li>
      </ul>
      <div class="note warn">Trampa de examen: "número de épocas" o "tiempo de entrenamiento" ofrecidos como métrica de evaluación — <b>nunca</b> lo son.</div>`,
     html_en:`
      <ul>
        <li><span class="term">Hyperparameters</span>: settings fixed <b>before</b> training (learning rate, batch size, number of epochs, layers). The model does not learn them.</li>
        <li><span class="term">Parameters</span>: the internal weights the model <b>does</b> learn during training.</li>
        <li><span class="term">Epoch</span>: one full pass over all the training data. More epochs → better fit… until <b>overfitting</b> kicks in. It's a training setting, <b>not an evaluation metric</b>.</li>
        <li><span class="term">Learning rate</span>: how much the weights are adjusted at each step. <span class="term">Batch size</span>: how many examples are processed per step.</li>
        <li><span class="term">Hyperparameter tuning</span>: searching for the combination that yields the <b>best performance</b>. <span class="svc">SageMaker Automatic Model Tuning</span> automates it; <span class="svc">SageMaker Autopilot</span> (AutoML) automates the full cycle: it builds, trains, and tunes the model for you.</li>
      </ul>
      <div class="note warn">Exam trap: "number of epochs" or "training time" offered as an evaluation metric — they <b>never</b> are.</div>`},
    {h:'Los 4 tipos de inferencia (SageMaker)', h_en:'The 4 types of inference (SageMaker)', html:`
      <table class="tbl">
        <tr><th>Tipo</th><th>Cuándo usarlo</th></tr>
        <tr><td><b>Tiempo real</b></td><td>Baja latencia, tráfico <b>constante</b> (chatbots, Lex, Personalize).</td></tr>
        <tr><td><b>Batch (Transform)</b></td><td>Muchos registros a la vez, <b>sin</b> respuesta inmediata.</td></tr>
        <tr><td><b>Asíncrona</b></td><td>Inputs <b>grandes</b> (hasta 1 GB); encola y entrega al terminar.</td></tr>
        <tr><td><b>Serverless</b></td><td>Tráfico <b>intermitente/impredecible</b>; no pagas infra ociosa.</td></tr>
      </table>`,
     html_en:`
      <table class="tbl">
        <tr><th>Type</th><th>When to use it</th></tr>
        <tr><td><b>Real-time</b></td><td>Low latency, <b>steady</b> traffic (chatbots, Lex, Personalize).</td></tr>
        <tr><td><b>Batch (Transform)</b></td><td>Many records at once, <b>no</b> immediate response needed.</td></tr>
        <tr><td><b>Asynchronous</b></td><td><b>Large</b> inputs (up to 1 GB); queues and delivers when done.</td></tr>
        <tr><td><b>Serverless</b></td><td><b>Intermittent/unpredictable</b> traffic; you don't pay for idle infra.</td></tr>
      </table>`},
    {h:'Servicios de IA administrados de AWS (muy preguntados)', h_en:'AWS managed AI services (heavily tested)', html:`
      <p>Servicios "listos para usar" — no entrenas nada, solo llamas la API. Reconócelos por su <b>tarea</b>:</p>
      <table class="tbl">
        <tr><th>Servicio</th><th>Para qué</th></tr>
        <tr><td><span class="svc">Textract</span></td><td>Extrae <b>texto</b> de documentos escaneados (OCR — qué dice).</td></tr>
        <tr><td><span class="svc">Comprehend</span></td><td>Entiende el <b>significado</b> del texto (sentimiento, entidades, idioma, PII).</td></tr>
        <tr><td><span class="svc">Transcribe</span></td><td>Voz → texto (speech-to-text).</td></tr>
        <tr><td><span class="svc">Polly</span></td><td>Texto → voz (text-to-speech).</td></tr>
        <tr><td><span class="svc">Translate</span></td><td>Traducción entre idiomas.</td></tr>
        <tr><td><span class="svc">Lex</span></td><td>Chatbots conversacionales (la tecnología detrás de Alexa).</td></tr>
        <tr><td><span class="svc">Rekognition</span></td><td>Análisis de <b>imágenes y video</b> (objetos, caras, moderación).</td></tr>
        <tr><td><span class="svc">Kendra</span></td><td><b>Búsqueda inteligente</b> en documentos empresariales.</td></tr>
        <tr><td><span class="svc">Personalize</span></td><td>Recomendaciones personalizadas (estilo Amazon.com).</td></tr>
        <tr><td><span class="svc">Fraud Detector</span></td><td>Detección de fraude en línea.</td></tr>
        <tr><td><span class="svc">Comprehend Medical</span></td><td>Extrae <b>entidades clínicas</b> y relaciones de texto médico.</td></tr>
        <tr><td><span class="svc">A2I</span> (Augmented AI)</td><td>Revisión <b>humana</b> de predicciones de baja confianza, con umbrales ajustables (human-in-the-loop).</td></tr>
        <tr><td><span class="svc">Mechanical Turk</span></td><td>Fuerza laboral humana bajo demanda (ej. etiquetar datos).</td></tr>
        <tr><td><span class="svc">DeepRacer</span></td><td>Carrito de carreras para <b>aprender refuerzo</b> — educativo, no para modelos de negocio.</td></tr>
      </table>
      <p>Combos típicos: <span class="svc">Transcribe</span> → <span class="svc">Comprehend</span> (analizar llamadas), o <span class="svc">Textract</span> → <span class="svc">Comprehend</span> (procesar documentos).</p>
      <h4>Ecosistema SageMaker</h4>
      <ul>
        <li><span class="svc">SageMaker</span>: plataforma para <b>construir, entrenar y desplegar</b> modelos propios.</li>
        <li><span class="svc">Canvas</span>: construir modelos <b>sin escribir código</b> (interfaz visual, para no programadores).</li>
        <li><span class="svc">Autopilot</span> (AutoML): construye, entrena y <b>ajusta hiperparámetros</b> automáticamente.</li>
        <li><span class="svc">Ground Truth</span>: <b>etiquetado</b> de datos con trabajadores humanos; <b>Ground Truth Plus</b> = servicio de etiquetado totalmente gestionado por AWS.</li>
        <li><span class="svc">Data Wrangler</span>: preparación/limpieza de datos.</li>
        <li><span class="svc">Feature Store</span>: almacén centralizado de features (compartir variables entre equipos).</li>
        <li><span class="svc">Model Registry</span>: catálogo central para <b>guardar, versionar y gestionar</b> modelos.</li>
        <li><span class="svc">Model Monitor</span>: vigila el modelo en producción (drift).</li>
        <li><span class="svc">Clarify</span>: sesgo + explicabilidad (ver Dominio 4).</li>
      </ul>
      <h4>Datos y analítica (aparecen como opciones)</h4>
      <ul>
        <li><span class="svc">Glue</span>: ETL / integración de datos (<span class="svc">Glue DataBrew</span>: preparación visual sin código).</li>
        <li><span class="svc">Athena</span>: consultas SQL serverless directo sobre S3.</li>
        <li><span class="svc">QuickSight / Amazon Quick</span>: BI y dashboards; con <b>Q</b> acepta preguntas en lenguaje natural y genera gráficos.</li>
        <li><span class="svc">Kinesis</span>: ingesta de datos en <b>streaming</b> (tiempo real).</li>
        <li><span class="svc">Redshift</span>: data warehouse. <span class="svc">EMR</span>: big data (Spark/Hadoop).</li>
      </ul>
      <div class="note warn"><b>¿Cuándo NO usar ML?</b> Cuando necesitas exactitud <b>determinística</b>, cuando ya existe una fórmula simple, o cuando la decisión pone en riesgo directo la vida de alguien sin supervisión humana.</div>`,
     html_en:`
      <p>"Ready to use" services — you don't train anything, you just call the API. Recognize them by their <b>task</b>:</p>
      <table class="tbl">
        <tr><th>Service</th><th>What for</th></tr>
        <tr><td><span class="svc">Textract</span></td><td>Extracts <b>text</b> from scanned documents (OCR — what it says).</td></tr>
        <tr><td><span class="svc">Comprehend</span></td><td>Understands the <b>meaning</b> of text (sentiment, entities, language, PII).</td></tr>
        <tr><td><span class="svc">Transcribe</span></td><td>Speech → text (speech-to-text).</td></tr>
        <tr><td><span class="svc">Polly</span></td><td>Text → speech (text-to-speech).</td></tr>
        <tr><td><span class="svc">Translate</span></td><td>Translation between languages.</td></tr>
        <tr><td><span class="svc">Lex</span></td><td>Conversational chatbots (the technology behind Alexa).</td></tr>
        <tr><td><span class="svc">Rekognition</span></td><td>Image and video analysis (objects, faces, moderation).</td></tr>
        <tr><td><span class="svc">Kendra</span></td><td><b>Intelligent search</b> across enterprise documents.</td></tr>
        <tr><td><span class="svc">Personalize</span></td><td>Personalized recommendations (Amazon.com-style).</td></tr>
        <tr><td><span class="svc">Fraud Detector</span></td><td>Online fraud detection.</td></tr>
        <tr><td><span class="svc">Comprehend Medical</span></td><td>Extracts <b>clinical entities</b> and relationships from medical text.</td></tr>
        <tr><td><span class="svc">A2I</span> (Augmented AI)</td><td><b>Human</b> review of low-confidence predictions, with adjustable thresholds (human-in-the-loop).</td></tr>
        <tr><td><span class="svc">Mechanical Turk</span></td><td>On-demand human workforce (e.g. labeling data).</td></tr>
        <tr><td><span class="svc">DeepRacer</span></td><td>A race car for <b>learning reinforcement learning</b> — educational, not for business models.</td></tr>
      </table>
      <p>Typical combos: <span class="svc">Transcribe</span> → <span class="svc">Comprehend</span> (analyze calls), or <span class="svc">Textract</span> → <span class="svc">Comprehend</span> (process documents).</p>
      <h4>SageMaker ecosystem</h4>
      <ul>
        <li><span class="svc">SageMaker</span>: platform to <b>build, train, and deploy</b> your own models.</li>
        <li><span class="svc">Canvas</span>: build models <b>without writing code</b> (visual interface, for non-programmers).</li>
        <li><span class="svc">Autopilot</span> (AutoML): automatically builds, trains, and <b>tunes hyperparameters</b>.</li>
        <li><span class="svc">Ground Truth</span>: data <b>labeling</b> with human workers; <b>Ground Truth Plus</b> = fully AWS-managed labeling service.</li>
        <li><span class="svc">Data Wrangler</span>: data preparation/cleaning.</li>
        <li><span class="svc">Feature Store</span>: centralized feature store (share variables across teams).</li>
        <li><span class="svc">Model Registry</span>: central catalog to <b>store, version, and manage</b> models.</li>
        <li><span class="svc">Model Monitor</span>: watches the model in production (drift).</li>
        <li><span class="svc">Clarify</span>: bias + explainability (see Domain 4).</li>
      </ul>
      <h4>Data and analytics (show up as options)</h4>
      <ul>
        <li><span class="svc">Glue</span>: ETL / data integration (<span class="svc">Glue DataBrew</span>: visual no-code preparation).</li>
        <li><span class="svc">Athena</span>: serverless SQL queries directly on S3.</li>
        <li><span class="svc">QuickSight / Amazon Quick</span>: BI and dashboards; with <b>Q</b> it accepts natural-language questions and generates charts.</li>
        <li><span class="svc">Kinesis</span>: <b>streaming</b> data ingestion (real time).</li>
        <li><span class="svc">Redshift</span>: data warehouse. <span class="svc">EMR</span>: big data (Spark/Hadoop).</li>
      </ul>
      <div class="note warn"><b>When NOT to use ML?</b> When you need <b>deterministic</b> accuracy, when a simple formula already exists, or when the decision directly risks someone's life without human oversight.</div>`},
    {h:'Métricas: cómo saber si el modelo funciona', h_en:'Metrics: how to know if the model works', html:`
      <h4>Métricas de clasificación</h4>
      <ul>
        <li><span class="term">Matriz de confusión</span>: tabla con TP / FP / TN / FN. Es la base de todas las métricas de clasificación y LA respuesta cuando piden "evaluar en detalle un clasificador" (ej. clasificador de imágenes por categorías).</li>
        <li><span class="term">Accuracy</span>: % total de predicciones correctas. Engañosa con clases desbalanceadas.</li>
        <li><span class="term">Precision</span>: de lo que el modelo dijo "positivo", cuánto lo era de verdad → optimízala para evitar <b>falsos positivos</b> (ej. no perder tiempo revisando pedidos legítimos marcados como fraude).</li>
        <li><span class="term">Recall</span>: de todos los positivos reales, cuántos detectó → optimízalo para evitar <b>falsos negativos</b> (ej. no dejar pasar un fraude real).</li>
        <li><span class="term">F1 Score</span>: media armónica de precision y recall; útil cuando hay <b>desbalance de clases</b>.</li>
        <li><span class="term">AUC</span> (Area Under the ROC Curve): mide qué tan bien el modelo separa clases; 1.0 = perfecto, 0.5 = azar.</li>
      </ul>
      <h4>Métricas de regresión (predicción de valores numéricos)</h4>
      <ul>
        <li><span class="term">MSE / RMSE</span>: error cuadrático medio / su raíz. Penalizan más los errores grandes.</li>
        <li><span class="term">MAE</span>: error absoluto medio.</li>
        <li><span class="term">R²</span> (coeficiente de determinación): cuánta varianza del resultado explica el modelo (0–1).</li>
        <li><span class="term">MAPE</span>: error porcentual absoluto medio.</li>
      </ul>
      <div class="note warn"><b>Trampa nº1 del examen:</b> ofrecer métricas de regresión (RMSE, MSE, R²) para un problema de <b>clasificación</b>, o viceversa. Clasificación → accuracy / precision / recall / F1 / AUC / matriz de confusión. Regresión → MSE / RMSE / MAE / R².</div>
      <h4>Métricas de modelos de lenguaje</h4>
      <ul>
        <li><span class="term">Perplexity</span>: qué tan bien predice el modelo el siguiente token (menor = mejor). Mide el ajuste del lenguaje, <b>no</b> la exactitud de una tarea (para eso: F1, ROUGE, etc.).</li>
        <li>ROUGE / BLEU / BERTScore → ver Dominio 3 (evaluación de GenAI).</li>
      </ul>
      <h4>Métricas de negocio</h4>
      <p>Costo por usuario/interacción, ROI, satisfacción del cliente (CSAT), tasa de conversión, ingreso medio por usuario, time-to-value. Son las que <b>justifican</b> el proyecto ante el negocio. El examen distingue mucho entre "métrica técnica" (F1, RMSE) y "métrica de negocio" (ROI, CSAT). La <b>latencia media de inferencia</b> es la métrica de <b>eficiencia operativa</b> del modelo en producción.</p>`,
     html_en:`
      <h4>Classification metrics</h4>
      <ul>
        <li><span class="term">Confusion matrix</span>: table with TP / FP / TN / FN. It's the foundation of every classification metric and THE answer when asked to "evaluate a classifier in detail" (e.g. an image classifier across categories).</li>
        <li><span class="term">Accuracy</span>: total % of correct predictions. Misleading with imbalanced classes.</li>
        <li><span class="term">Precision</span>: of what the model called "positive", how much really was → optimize it to avoid <b>false positives</b> (e.g. not wasting time reviewing legitimate orders flagged as fraud).</li>
        <li><span class="term">Recall</span>: of all real positives, how many it caught → optimize it to avoid <b>false negatives</b> (e.g. not letting real fraud through).</li>
        <li><span class="term">F1 Score</span>: harmonic mean of precision and recall; useful when there's <b>class imbalance</b>.</li>
        <li><span class="term">AUC</span> (Area Under the ROC Curve): measures how well the model separates classes; 1.0 = perfect, 0.5 = random chance.</li>
      </ul>
      <h4>Regression metrics (predicting numeric values)</h4>
      <ul>
        <li><span class="term">MSE / RMSE</span>: mean squared error / its square root. Penalize large errors more.</li>
        <li><span class="term">MAE</span>: mean absolute error.</li>
        <li><span class="term">R²</span> (coefficient of determination): how much of the outcome's variance the model explains (0–1).</li>
        <li><span class="term">MAPE</span>: mean absolute percentage error.</li>
      </ul>
      <div class="note warn"><b>The exam's #1 trap:</b> offering regression metrics (RMSE, MSE, R²) for a <b>classification</b> problem, or vice versa. Classification → accuracy / precision / recall / F1 / AUC / confusion matrix. Regression → MSE / RMSE / MAE / R².</div>
      <h4>Language model metrics</h4>
      <ul>
        <li><span class="term">Perplexity</span>: how well the model predicts the next token (lower = better). It measures language fit, <b>not</b> task accuracy (for that: F1, ROUGE, etc.).</li>
        <li>ROUGE / BLEU / BERTScore → see Domain 3 (GenAI evaluation).</li>
      </ul>
      <h4>Business metrics</h4>
      <p>Cost per user/interaction, ROI, customer satisfaction (CSAT), conversion rate, average revenue per user, time-to-value. These are what <b>justify</b> the project to the business. The exam draws a sharp line between "technical metric" (F1, RMSE) and "business metric" (ROI, CSAT). <b>Average inference latency</b> is the <b>operational efficiency</b> metric of a model in production.</p>`},
    {h:'MLOps y puesta en producción', h_en:'MLOps and going to production', html:`
      <ul>
        <li><span class="term">Managed API</span> (ej. <span class="svc">Bedrock</span>): AWS gestiona la infraestructura.</li>
        <li><span class="term">Self-hosted</span> (ej. en <span class="svc">SageMaker</span>/EC2): más control, más responsabilidad operativa.</li>
        <li><span class="term">MLOps</span>: experimentación estructurada, procesos repetibles, sistemas escalables, monitoreo continuo y re-entrenamiento periódico.</li>
      </ul>`,
     html_en:`
      <ul>
        <li><span class="term">Managed API</span> (e.g. <span class="svc">Bedrock</span>): AWS manages the infrastructure.</li>
        <li><span class="term">Self-hosted</span> (e.g. on <span class="svc">SageMaker</span>/EC2): more control, more operational responsibility.</li>
        <li><span class="term">MLOps</span>: structured experimentation, repeatable processes, scalable systems, continuous monitoring, and periodic re-training.</li>
      </ul>`},
  ]
},
{
  id:'d2',
  chip:'D2 · GenAI',
  chip_en:'D2 · GenAI',
  title:'Dominio 2 · Fundamentos de IA generativa (24%)',
  title_en:'Domain 2 · Fundamentals of Generative AI (24%)',
  lead:'Cómo funciona la GenAI por dentro (tokens, embeddings, transformers), su ciclo de vida, sus riesgos y los servicios GenAI de AWS.',
  lead_en:'How GenAI works under the hood (tokens, embeddings, transformers), its lifecycle, its risks, and AWS\'s GenAI services.',
  sections:[
    {h:'Vocabulario esencial', h_en:'Essential vocabulary', html:`
      <ul>
        <li><span class="term">Token</span>: pedazo de texto; una palabra completa o solo parte de ella. <b>Se cobra por token</b>.</li>
        <li><span class="term">Chunking</span>: dividir un texto largo en fragmentos más pequeños.</li>
        <li><span class="term">Embeddings / vectores</span>: lista de números que representa el <b>significado</b> de un dato. Permiten comparar significados en vez de palabras exactas → <b>búsqueda semántica</b>.</li>
        <li><span class="term">Transformer</span>: la arquitectura que permite al modelo usar el <b>contexto</b> para saber qué información es relevante.</li>
        <li><span class="term">Latent space</span>: el espacio matemático donde el modelo "guarda" lo aprendido.</li>
      </ul>`,
     html_en:`
      <ul>
        <li><span class="term">Token</span>: a piece of text; a whole word or just part of one. <b>You're billed per token</b>.</li>
        <li><span class="term">Chunking</span>: splitting a long text into smaller pieces.</li>
        <li><span class="term">Embeddings / vectors</span>: a list of numbers representing the <b>meaning</b> of a piece of data. They let you compare meanings instead of exact words → <b>semantic search</b>.</li>
        <li><span class="term">Transformer</span>: the architecture that lets the model use <b>context</b> to know what information is relevant.</li>
        <li><span class="term">Latent space</span>: the mathematical space where the model "stores" what it has learned.</li>
      </ul>`},
    {h:'Tipos de modelos', h_en:'Types of models', html:`
      <ul>
        <li><span class="term">Foundation Model (modelo fundacional)</span>: modelo base entrenado a gran escala, adaptable a muchas tareas.</li>
        <li><span class="term">Multimodal</span>: entiende más de un tipo de dato a la vez (texto + imagen).</li>
        <li><span class="term">Modelos de difusión</span>: generan imágenes partiendo de ruido aleatorio que "limpian" (Stable Diffusion, Titan Image Generator).</li>
        <li><span class="term">GANs</span>: dos redes (generador vs discriminador) compiten para producir datos realistas.</li>
      </ul>`,
     html_en:`
      <ul>
        <li><span class="term">Foundation Model</span>: a base model trained at massive scale, adaptable to many tasks.</li>
        <li><span class="term">Multimodal</span>: understands more than one data type at once (text + image).</li>
        <li><span class="term">Diffusion models</span>: generate images starting from random noise that they "clean up" (Stable Diffusion, Titan Image Generator).</li>
        <li><span class="term">GANs</span>: two networks (generator vs discriminator) compete to produce realistic data.</li>
      </ul>`},
    {h:'Ciclo de vida de un modelo GenAI', h_en:'Lifecycle of a GenAI model', html:`
      <p>Selección de datos → selección del modelo → <b>pre-training</b> → <b>fine-tuning</b> → <b>evaluación</b> → <b>despliegue</b> → <b>feedback</b>. El feedback retroalimenta el ciclo: por eso es <b>iterativo</b>.</p>`,
     html_en:`
      <p>Data selection → model selection → <b>pre-training</b> → <b>fine-tuning</b> → <b>evaluation</b> → <b>deployment</b> → <b>feedback</b>. Feedback loops back into the cycle: that's why it's <b>iterative</b>.</p>`},
    {h:'Riesgos y límites (¡muy preguntado!)', h_en:'Risks and limitations (heavily tested!)', html:`
      <ul>
        <li><span class="term">Alucinaciones</span>: información que suena plausible pero es <b>incorrecta</b>.</li>
        <li><span class="term">No determinismo</span>: puede dar respuestas <b>distintas</b> al mismo input.</li>
        <li>Inexactitud heredada de los datos de entrenamiento.</li>
        <li>Interpretabilidad limitada ("caja negra").</li>
      </ul>
      <div class="note warn">Si una pregunta describe "el modelo inventó datos" o "respuestas inconsistentes", la causa es alucinación / no determinismo — no un fallo de configuración.</div>`,
     html_en:`
      <ul>
        <li><span class="term">Hallucinations</span>: information that sounds plausible but is <b>incorrect</b>.</li>
        <li><span class="term">Nondeterminism</span>: can give <b>different</b> answers to the same input.</li>
        <li>Inaccuracy inherited from the training data.</li>
        <li>Limited interpretability ("black box").</li>
      </ul>
      <div class="note warn">If a question describes "the model made up data" or "inconsistent answers", the cause is hallucination / nondeterminism — not a configuration failure.</div>`},
    {h:'Servicios GenAI de AWS', h_en:'AWS GenAI services', html:`
      <table class="tbl">
        <tr><th>Servicio</th><th>Para qué</th></tr>
        <tr><td><span class="svc">Amazon Bedrock</span></td><td><b>El servicio principal.</b> Acceso a modelos de varios proveedores (Claude, Llama, Stability) por API unificada, sin gestionar servidores, pago por token.</td></tr>
        <tr><td><span class="svc">Amazon Q</span></td><td>Asistente experto: <b>Q Business</b> (responde sobre documentos de la empresa) y <b>Q Developer</b> (código y tareas AWS).</td></tr>
        <tr><td><span class="svc">SageMaker JumpStart</span></td><td>Catálogo de modelos pre-entrenados para perfiles <b>técnicos</b> que quieren control del entrenamiento/despliegue.</td></tr>
        <tr><td><span class="svc">PartyRock</span></td><td>"Patio de juegos" sobre Bedrock para crear apps de IA <b>sin código</b> — prototipos rápidos, usuarios no técnicos.</td></tr>
        <tr><td><span class="svc">Amazon Nova</span></td><td>Familia de FMs <b>propios de Amazon</b>: Micro/Lite/Pro (texto y multimodal; <b>Lite</b> = multimodal multilenguaje económico), <b>Nova Canvas</b> (genera imágenes), <b>Nova Reel</b> (genera video). Titan es la familia anterior.</td></tr>
        <tr><td><span class="svc">AWS HealthScribe</span></td><td>Voz→texto + GenAI para <b>dictar y generar notas clínicas</b> de consultas médicas.</td></tr>
        <tr><td><span class="svc">AWS Transform</span></td><td>Moderniza y migra <b>aplicaciones legadas</b> con IA agéntica.</td></tr>
      </table>`,
     html_en:`
      <table class="tbl">
        <tr><th>Service</th><th>What for</th></tr>
        <tr><td><span class="svc">Amazon Bedrock</span></td><td><b>The main service.</b> Access to models from multiple providers (Claude, Llama, Stability) via a unified API, no server management, pay per token.</td></tr>
        <tr><td><span class="svc">Amazon Q</span></td><td>Expert assistant: <b>Q Business</b> (answers about company documents) and <b>Q Developer</b> (code and AWS tasks).</td></tr>
        <tr><td><span class="svc">SageMaker JumpStart</span></td><td>Catalog of pre-trained models for <b>technical</b> users who want control over training/deployment.</td></tr>
        <tr><td><span class="svc">PartyRock</span></td><td>A Bedrock "playground" for building AI apps with <b>no code</b> — fast prototypes, non-technical users.</td></tr>
        <tr><td><span class="svc">Amazon Nova</span></td><td><b>Amazon's own</b> FM family: Micro/Lite/Pro (text and multimodal; <b>Lite</b> = low-cost multilingual multimodal), <b>Nova Canvas</b> (image generation), <b>Nova Reel</b> (video generation). Titan is the previous family.</td></tr>
        <tr><td><span class="svc">AWS HealthScribe</span></td><td>Speech-to-text + GenAI to <b>dictate and generate clinical notes</b> from medical visits.</td></tr>
        <tr><td><span class="svc">AWS Transform</span></td><td>Modernizes and migrates <b>legacy applications</b> with agentic AI.</td></tr>
      </table>`},
    {h:'Precios e infraestructura: On-Demand vs Provisioned', h_en:'Pricing and infrastructure: On-Demand vs Provisioned', html:`
      <table class="tbl">
        <tr><th>Modo (Bedrock)</th><th>Cuándo usarlo</th></tr>
        <tr><td><b>On-Demand</b></td><td>Pago por <b>token</b> procesado, sin compromiso. Prototipos, tráfico bajo o <b>impredecible</b> → lo más barato para empezar.</td></tr>
        <tr><td><b>Provisioned Throughput</b></td><td>Capacidad <b>reservada</b> con compromiso de tiempo. Tráfico <b>alto y constante</b> → menor costo por request. <b>Obligatorio para servir modelos personalizados (fine-tuned) en Bedrock.</b></td></tr>
        <tr><td><b>Batch</b></td><td>Trabajos por lotes sin urgencia → más barato que on-demand.</td></tr>
      </table>
      <ul>
        <li>El costo de inferencia depende de los <b>tokens de entrada + salida</b>: prompts más cortos, menos ejemplos few-shot y menor límite de tokens de salida = menos costo (y menos latencia).</li>
        <li>Incluir el historial completo de conversación en cada prompt hace crecer los tokens (y el costo) en cada turno.</li>
      </ul>
      <h4>Chips e instancias de AWS</h4>
      <ul>
        <li><span class="svc">Trainium</span> (instancias <b>Trn</b>): <b>entrenamiento</b> de modelos grandes con eficiencia energética → la opción de <b>menor impacto ambiental</b>.</li>
        <li><span class="svc">Inferentia</span> (instancias <b>Inf</b>): <b>inferencia</b> de bajo costo y bajo consumo.</li>
        <li>Instancias <b>P</b> y <b>G</b>: GPU de propósito general para ML (máximo rendimiento, más consumo).</li>
      </ul>`,
     html_en:`
      <table class="tbl">
        <tr><th>Mode (Bedrock)</th><th>When to use it</th></tr>
        <tr><td><b>On-Demand</b></td><td>Pay per <b>token</b> processed, no commitment. Prototypes, low or <b>unpredictable</b> traffic → the cheapest way to start.</td></tr>
        <tr><td><b>Provisioned Throughput</b></td><td><b>Reserved</b> capacity with a time commitment. <b>High, steady</b> traffic → lower cost per request. <b>Required to serve custom (fine-tuned) models on Bedrock.</b></td></tr>
        <tr><td><b>Batch</b></td><td>Bulk jobs with no urgency → cheaper than on-demand.</td></tr>
      </table>
      <ul>
        <li>Inference cost depends on <b>input + output tokens</b>: shorter prompts, fewer few-shot examples, and a lower output-token limit = lower cost (and lower latency).</li>
        <li>Including the full conversation history in every prompt makes tokens (and cost) grow with each turn.</li>
      </ul>
      <h4>AWS chips and instances</h4>
      <ul>
        <li><span class="svc">Trainium</span> (<b>Trn</b> instances): energy-efficient <b>training</b> of large models → the option with the <b>lowest environmental impact</b>.</li>
        <li><span class="svc">Inferentia</span> (<b>Inf</b> instances): low-cost, low-power <b>inference</b>.</li>
        <li><b>P</b> and <b>G</b> instances: general-purpose GPUs for ML (top performance, higher power draw).</li>
      </ul>`},
    {h:'Cómo elegir el modelo correcto', h_en:'How to choose the right model', html:`
      <ul>
        <li>Tipo de modelo (texto / imagen / multimodal).</li>
        <li>Rendimiento y latencia.</li>
        <li>Restricciones de datos (información sensible).</li>
        <li>Cumplimiento normativo.</li>
        <li><b>Costo</b> (se cobra por token).</li>
      </ul>
      <div class="note tip">Un buen <b>prompt</b> lleva: <b>rol + contexto + tarea específica + formato de salida</b>.</div>`,
     html_en:`
      <ul>
        <li>Model type (text / image / multimodal).</li>
        <li>Performance and latency.</li>
        <li>Data constraints (sensitive information).</li>
        <li>Regulatory compliance.</li>
        <li><b>Cost</b> (billed per token).</li>
      </ul>
      <div class="note tip">A good <b>prompt</b> includes: <b>role + context + specific task + output format</b>.</div>`},
    {h:'Novedades agénticas (2026)', h_en:'Agentic AI news (2026)', html:`
      <ul>
        <li><span class="term">Context Engineering</span>: gestionar TODO el contexto que recibe el modelo (historial, documentos, herramientas, memoria), no solo el prompt individual.</li>
        <li><span class="svc">Bedrock AgentCore</span>: plataforma para <b>operar agentes en producción</b> (runtime serverless, memoria, identidad, gateway de herramientas, observabilidad). Funciona con cualquier framework y modelo.</li>
        <li><span class="svc">Strands Agents</span>: framework open source de AWS para construir agentes con pocas líneas; se integra con AgentCore.</li>
        <li><span class="svc">Amazon Quick</span>: evolución agéntica de Q Business — no solo responde, <b>ejecuta acciones</b> de varios pasos.</li>
        <li><span class="svc">Kiro</span>: IDE agéntico de AWS con "spec-driven development" (requisitos → especificación → código, pruebas y docs).</li>
      </ul>`,
     html_en:`
      <ul>
        <li><span class="term">Context Engineering</span>: managing ALL the context the model receives (history, documents, tools, memory), not just the individual prompt.</li>
        <li><span class="svc">Bedrock AgentCore</span>: a platform to <b>run agents in production</b> (serverless runtime, memory, identity, tool gateway, observability). Works with any framework and any model.</li>
        <li><span class="svc">Strands Agents</span>: AWS's open source framework for building agents in a few lines; integrates natively with AgentCore.</li>
        <li><span class="svc">Amazon Quick</span>: the agentic evolution of Q Business — it doesn't just answer, it <b>executes multi-step actions</b>.</li>
        <li><span class="svc">Kiro</span>: AWS's agentic IDE with "spec-driven development" (requirements → spec → code, tests, and docs).</li>
      </ul>`},
  ]
},
{
  id:'d3',
  chip:'D3 · Aplicación',
  chip_en:'D3 · Applications',
  title:'Dominio 3 · Aplicación de modelos fundacionales (28%)',
  title_en:'Domain 3 · Applications of Foundation Models (28%)',
  lead:'El dominio más pesado. Aquí viven los parámetros de inferencia, RAG vs fine-tuning, prompting, agentes y evaluación. Domínalo bien.',
  lead_en:'The heaviest domain. This is where inference parameters, RAG vs fine-tuning, prompting, agents, and evaluation live. Master it well.',
  sections:[
    {h:'El "trilema" al elegir un modelo', h_en:'The "trilemma" of choosing a model', html:`
      <p>Siempre se balancean tres cosas: <b>Costo</b> vs <b>Latencia</b> vs <b>Calidad</b> (incluye soporte multilenguaje). No existe el modelo perfecto en las tres.</p>
      <ul>
        <li><span class="term">Ventana de contexto</span>: máximo de tokens (input + output) que el modelo "ve" en una interacción.</li>
        <li><span class="term">Prompt caching</span>: guarda el procesamiento de partes repetidas del prompt → reduce latencia y costo en llamadas repetidas.</li>
      </ul>`,
     html_en:`
      <p>You're always balancing three things: <b>Cost</b> vs <b>Latency</b> vs <b>Quality</b> (includes multilingual support). No model is perfect at all three.</p>
      <ul>
        <li><span class="term">Context window</span>: the max tokens (input + output) the model "sees" in one interaction.</li>
        <li><span class="term">Prompt caching</span>: saves the processing of repeated prompt parts → reduces latency and cost on repeated calls.</li>
      </ul>`},
    {h:'Parámetros de inferencia (memorízalos)', h_en:'Inference parameters (memorize these)', html:`
      <table class="tbl">
        <tr><th>Parámetro</th><th>Qué hace</th></tr>
        <tr><td><span class="term">Temperature</span></td><td>Aleatoriedad. <b>Baja (≈0)</b> → respuestas consistentes/deterministas. <b>0.7–1</b> → más creatividad.</td></tr>
        <tr><td><span class="term">Top-K</span></td><td>Restringe a los K tokens más probables (número <b>fijo</b>).</td></tr>
        <tr><td><span class="term">Top-P</span> (nucleus)</td><td>Elige el conjunto mínimo cuya probabilidad acumulada ≥ P (número <b>variable</b>).</td></tr>
        <tr><td><span class="term">Max tokens</span></td><td>Limita la longitud de la respuesta.</td></tr>
        <tr><td><span class="term">Stop sequences</span></td><td>Secuencias que, al aparecer, detienen la generación.</td></tr>
      </table>
      <div class="note warn"><b>Clave de examen:</b> temperature, top-k y top-p <b>NO afectan el costo ni la latencia</b>, solo la aleatoriedad. El precio depende de la <b>cantidad de tokens</b>. Para reportes financieros/consistencia → temperature baja.</div>`,
     html_en:`
      <table class="tbl">
        <tr><th>Parameter</th><th>What it does</th></tr>
        <tr><td><span class="term">Temperature</span></td><td>Randomness. <b>Low (≈0)</b> → consistent/deterministic answers. <b>0.7–1</b> → more creativity.</td></tr>
        <tr><td><span class="term">Top-K</span></td><td>Restricts to the K most likely tokens (a <b>fixed</b> number).</td></tr>
        <tr><td><span class="term">Top-P</span> (nucleus)</td><td>Picks the smallest set whose cumulative probability ≥ P (a <b>variable</b> number).</td></tr>
        <tr><td><span class="term">Max tokens</span></td><td>Limits the length of the response.</td></tr>
        <tr><td><span class="term">Stop sequences</span></td><td>Sequences that, when they appear, stop generation.</td></tr>
      </table>
      <div class="note warn"><b>Exam key point:</b> temperature, top-k, and top-p <b>do NOT affect cost or latency</b>, only randomness. Price depends on the <b>number of tokens</b>. For financial reports/consistency → low temperature.</div>`},
    {h:'RAG vs Fine-tuning (la comparación estrella)', h_en:'RAG vs Fine-tuning (the star comparison)', html:`
      <table class="tbl">
        <tr><th></th><th>RAG</th><th>Fine-tuning</th></tr>
        <tr><td>Qué hace</td><td>Recupera info externa <b>al momento</b> de responder</td><td>Reentrena los <b>pesos</b> del modelo</td></tr>
        <tr><td>Ideal para</td><td>Datos que <b>cambian</b> a menudo, documentos privados/actualizables</td><td>Cambiar <b>tono/estilo/dominio</b> especializado</td></tr>
        <tr><td>Costo</td><td>Bajo, sin reentrenar</td><td>Moderado/alto</td></tr>
        <tr><td>En AWS</td><td><span class="svc">Bedrock Knowledge Bases</span> orquesta el flujo</td><td>Fine-tuning en Bedrock/SageMaker</td></tr>
      </table>
      <div class="note tip">Regla rápida: <b>"datos que cambian" → RAG</b> · <b>"tono/formato/especialización" → fine-tuning</b>.</div>`,
     html_en:`
      <table class="tbl">
        <tr><th></th><th>RAG</th><th>Fine-tuning</th></tr>
        <tr><td>What it does</td><td>Retrieves external info <b>at response time</b></td><td>Retrains the model's <b>weights</b></td></tr>
        <tr><td>Best for</td><td>Data that <b>changes</b> often, private/updatable documents</td><td>Changing specialized <b>tone/style/domain</b></td></tr>
        <tr><td>Cost</td><td>Low, no retraining</td><td>Moderate/high</td></tr>
        <tr><td>On AWS</td><td><span class="svc">Bedrock Knowledge Bases</span> orchestrates the flow</td><td>Fine-tuning on Bedrock/SageMaker</td></tr>
      </table>
      <div class="note tip">Quick rule: <b>"data that changes" → RAG</b> · <b>"tone/format/specialization" → fine-tuning</b>.</div>`},
    {h:'Bases de datos vectoriales en AWS', h_en:'Vector databases on AWS', html:`
      <table class="tbl">
        <tr><th>Servicio</th><th>Cuándo</th></tr>
        <tr><td><span class="svc">OpenSearch Service</span></td><td>Búsqueda vectorial a gran escala / alta concurrencia.</td></tr>
        <tr><td><span class="svc">Aurora / RDS PostgreSQL + pgvector</span></td><td>Ya usas SQL y quieres simplicidad, sin migrar de motor.</td></tr>
        <tr><td><span class="svc">Neptune</span></td><td>Modelar <b>relaciones</b> entre documentos (grafos).</td></tr>
        <tr><td><span class="svc">DocumentDB</span></td><td>Datos JSON, compatible con MongoDB.</td></tr>
      </table>`,
     html_en:`
      <table class="tbl">
        <tr><th>Service</th><th>When</th></tr>
        <tr><td><span class="svc">OpenSearch Service</span></td><td>Vector search at large scale / high concurrency.</td></tr>
        <tr><td><span class="svc">Aurora / RDS PostgreSQL + pgvector</span></td><td>You already use SQL and want simplicity, without migrating engines.</td></tr>
        <tr><td><span class="svc">Neptune</span></td><td>Model <b>relationships</b> between documents (graphs).</td></tr>
        <tr><td><span class="svc">DocumentDB</span></td><td>JSON data, MongoDB-compatible.</td></tr>
      </table>`},
    {h:'Niveles de personalización (de barato a caro)', h_en:'Levels of customization (from cheap to expensive)', html:`
      <ul>
        <li><span class="term">Prompt engineering</span>: el más económico y rápido. No toca los pesos.</li>
        <li><span class="term">In-Context Learning</span>: das ejemplos dentro del prompt. Sin tocar pesos, bajo costo.</li>
        <li><span class="term">Fine-tuning</span>: ajusta pesos con datos específicos. Costo moderado.</li>
        <li><span class="term">Continuous pre-training</span>: sigue entrenando un modelo existente con datos nuevos.</li>
        <li><span class="term">Pre-training desde cero</span>: control absoluto, costo extremo.</li>
      </ul>
      <h4>Técnicas de fine-tuning que debes conocer</h4>
      <ul>
        <li><span class="term">RLHF</span>: humanos califican respuestas y esa señal ajusta el modelo hacia las <b>preferencias humanas</b> (tono, utilidad).</li>
        <li><span class="term">Instruction tuning</span>: entrena con pares instrucción→respuesta para que siga mejor las instrucciones.</li>
        <li><span class="term">Distillation</span>: entrena un modelo pequeño ("estudiante") para imitar a uno grande ("maestro") con menor costo/latencia.</li>
      </ul>`,
     html_en:`
      <ul>
        <li><span class="term">Prompt engineering</span>: the cheapest and fastest. Doesn't touch the weights.</li>
        <li><span class="term">In-Context Learning</span>: you give examples inside the prompt. No weight changes, low cost.</li>
        <li><span class="term">Fine-tuning</span>: adjusts weights with specific data. Moderate cost.</li>
        <li><span class="term">Continuous pre-training</span>: keeps training an existing model on new data.</li>
        <li><span class="term">Pre-training from scratch</span>: absolute control, extreme cost.</li>
      </ul>
      <h4>Fine-tuning techniques you should know</h4>
      <ul>
        <li><span class="term">RLHF</span>: humans rate responses and that signal adjusts the model toward <b>human preferences</b> (tone, helpfulness).</li>
        <li><span class="term">Instruction tuning</span>: trains on instruction→response pairs so the model follows instructions better.</li>
        <li><span class="term">Distillation</span>: trains a small model (the "student") to mimic a large one (the "teacher") at lower cost/latency.</li>
      </ul>`},
    {h:'Tipos de prompting', h_en:'Types of prompting', html:`
      <ul>
        <li><span class="term">Zero-shot</span>: sin ejemplos.</li>
        <li><span class="term">Single-shot</span>: un ejemplo.</li>
        <li><span class="term">Few-shot</span>: 2–5 ejemplos.</li>
        <li><span class="term">Chain-of-thought</span>: pide razonamiento paso a paso.</li>
        <li><span class="term">Prompt templates</span>: estructuras reutilizables.</li>
        <li><span class="term">Negative prompt</span>: indica qué NO debe incluir.</li>
        <li><span class="term">Prompt routing</span>: dirige la solicitud al modelo/flujo más adecuado.</li>
        <li><span class="term">Prompt chaining</span>: divide una tarea compleja en subtareas enviadas en <b>secuencia</b>; cada paso usa la salida del anterior.</li>
        <li><span class="term">Tree of thoughts</span>: explora <b>varias ramas</b> de razonamiento en paralelo (chain-of-thought es UNA sola cadena).</li>
        <li><span class="term">ReAct</span> (Reason + Act): intercala razonamiento con <b>acciones/llamadas a herramientas</b> — la técnica cuando hay que consultar datos en vivo (ej. inventario por API).</li>
        <li><span class="term">Adversarial prompting</span>: probar el modelo con prompts hostiles para <b>endurecerlo</b> contra inyecciones.</li>
      </ul>
      <div class="note"><span class="svc">Bedrock Prompt Management</span> permite versionar y gestionar prompts de forma centralizada (crear versiones, compararlas, desplegarlas y <b>revertir</b> si baja la calidad).</div>`,
     html_en:`
      <ul>
        <li><span class="term">Zero-shot</span>: no examples.</li>
        <li><span class="term">Single-shot</span>: one example.</li>
        <li><span class="term">Few-shot</span>: 2–5 examples.</li>
        <li><span class="term">Chain-of-thought</span>: asks for step-by-step reasoning.</li>
        <li><span class="term">Prompt templates</span>: reusable structures.</li>
        <li><span class="term">Negative prompt</span>: states what should NOT be included.</li>
        <li><span class="term">Prompt routing</span>: routes the request to the most suitable model/flow.</li>
        <li><span class="term">Prompt chaining</span>: splits a complex task into subtasks sent in <b>sequence</b>; each step uses the previous step's output.</li>
        <li><span class="term">Tree of thoughts</span>: explores <b>several branches</b> of reasoning in parallel (chain-of-thought is a SINGLE chain).</li>
        <li><span class="term">ReAct</span> (Reason + Act): interleaves reasoning with <b>actions/tool calls</b> — the technique when live data is needed (e.g. inventory via API).</li>
        <li><span class="term">Adversarial prompting</span>: testing the model with hostile prompts to <b>harden it</b> against injections.</li>
      </ul>
      <div class="note"><span class="svc">Bedrock Prompt Management</span> lets you version and manage prompts centrally (create versions, compare them, deploy them, and <b>roll back</b> if quality drops).</div>`},
    {h:'Generación de imágenes: parámetros', h_en:'Image generation: parameters', html:`
      <ul>
        <li><span class="term">CFG scale</span> (classifier-free guidance): qué tanto <b>obedece la imagen al prompt</b>. Si las imágenes salen aleatorias o ignoran detalles pedidos → <b>subir el CFG</b>.</li>
        <li><span class="term">Steps</span> (pasos de generación): más pasos → más <b>detalle</b>; menos pasos → más abstracto/rápido.</li>
        <li><span class="term">Seed</span> (semilla): fijarla hace los resultados <b>reproducibles</b> (mismo prompt = misma imagen), no más fieles.</li>
        <li><span class="term">Negative prompt</span>: lista lo que NO debe aparecer en la imagen (ej. con Nova Canvas o Stable Diffusion).</li>
      </ul>`,
     html_en:`
      <ul>
        <li><span class="term">CFG scale</span> (classifier-free guidance): how closely <b>the image follows the prompt</b>. If images come out random or ignore requested details → <b>raise the CFG</b>.</li>
        <li><span class="term">Steps</span> (generation steps): more steps → more <b>detail</b>; fewer steps → more abstract/faster.</li>
        <li><span class="term">Seed</span>: fixing it makes results <b>reproducible</b> (same prompt = same image), not more faithful.</li>
        <li><span class="term">Negative prompt</span>: lists what should NOT appear in the image (e.g. with Nova Canvas or Stable Diffusion).</li>
      </ul>`},
    {h:'Riesgos de los prompts', h_en:'Prompt risks', html:`
      <ul>
        <li><span class="term">Prompt injection / hijacking</span>: instrucciones maliciosas metidas en el input del usuario para cambiar el comportamiento. Se mitiga con <span class="svc">Bedrock Guardrails</span>.</li>
        <li><span class="term">Prompt exposure</span>: se filtran instrucciones confidenciales del sistema.</li>
        <li><span class="term">Jailbreaking</span>: evadir las restricciones de seguridad del modelo.</li>
        <li><span class="term">Poisoning</span>: ataque a los datos de entrenamiento.</li>
      </ul>`,
     html_en:`
      <ul>
        <li><span class="term">Prompt injection / hijacking</span>: malicious instructions embedded in user input to change behavior. Mitigated with <span class="svc">Bedrock Guardrails</span>.</li>
        <li><span class="term">Prompt exposure</span>: confidential system instructions leak out.</li>
        <li><span class="term">Jailbreaking</span>: evading the model's safety restrictions.</li>
        <li><span class="term">Poisoning</span>: an attack on the training data.</li>
      </ul>`},
    {h:'Agentes y MCP', h_en:'Agents and MCP', html:`
      <ul>
        <li><span class="term">Agente</span>: completa tareas multi-paso usando herramientas externas, decidiendo qué usar y en qué orden.</li>
        <li><span class="svc">Agents for Bedrock</span>: implementación de AWS.</li>
        <li><span class="term">MCP</span>: estándar abierto para conectar agentes con herramientas externas; reduce el esfuerzo de integración.</li>
      </ul>`,
     html_en:`
      <ul>
        <li><span class="term">Agent</span>: completes multi-step tasks using external tools, deciding what to use and in what order.</li>
        <li><span class="svc">Agents for Bedrock</span>: AWS's implementation.</li>
        <li><span class="term">MCP</span>: an open standard for connecting agents to external tools; reduces integration effort.</li>
      </ul>`},
    {h:'Evaluación de modelos y aplicaciones', h_en:'Evaluating models and applications', html:`
      <ul>
        <li><span class="svc">Bedrock Model Evaluation</span>: evaluaciones automáticas y con revisores humanos desde la consola, sin infraestructura propia.</li>
        <li><span class="term">ROUGE</span> → resúmenes (superposición con referencia; ROUGE-L: subsecuencia común más larga).</li>
        <li><span class="term">BLEU</span> → traducción (n-gramas vs referencia).</li>
        <li><span class="term">BERTScore</span> → equivalencia <b>semántica</b> vía embeddings.</li>
        <li><span class="term">LLM-as-a-judge</span>: usar OTRO modelo para calificar respuestas con más matiz que ROUGE/BLEU, y a mayor escala que humanos.</li>
        <li><span class="term">Benchmark datasets</span>: datasets estándar (MMLU, HumanEval) para medir de forma objetiva.</li>
      </ul>
      <div class="note tip">No basta con evaluar el modelo aislado: en RAG o agentes hay que evaluar el <b>sistema completo</b> (¿recupera los documentos correctos? ¿ejecuta los pasos correctos?). Métricas de negocio: task completion rate, user satisfaction, cost per interaction.</div>`,
     html_en:`
      <ul>
        <li><span class="svc">Bedrock Model Evaluation</span>: automatic and human-reviewer evaluations from the console, no infrastructure to build.</li>
        <li><span class="term">ROUGE</span> → summarization (overlap with a reference; ROUGE-L: longest common subsequence).</li>
        <li><span class="term">BLEU</span> → translation (n-grams vs. reference).</li>
        <li><span class="term">BERTScore</span> → <b>semantic</b> equivalence via embeddings.</li>
        <li><span class="term">LLM-as-a-judge</span>: using ANOTHER model to score responses with more nuance than ROUGE/BLEU, and at greater scale than humans.</li>
        <li><span class="term">Benchmark datasets</span>: standard datasets (MMLU, HumanEval) to measure objectively.</li>
      </ul>
      <div class="note tip">Evaluating the model in isolation isn't enough: for RAG or agents you need to evaluate the <b>whole system</b> (does it retrieve the right documents? does it execute the right steps?). Business metrics: task completion rate, user satisfaction, cost per interaction.</div>`},
  ]
},
{
  id:'d4',
  chip:'D4 · Responsable',
  chip_en:'D4 · Responsible',
  title:'Dominio 4 · IA responsable (14%)',
  title_en:'Domain 4 · Responsible AI (14%)',
  lead:'Sesgo, equidad, explicabilidad y transparencia — y las herramientas de AWS para lograrlas.',
  lead_en:'Bias, fairness, explainability, and transparency — and the AWS tools to achieve them.',
  sections:[
    {h:'Dimensiones de la IA responsable', h_en:'Dimensions of responsible AI', html:`
      <ul>
        <li><span class="term">Bias (sesgo)</span>: trato desigual a grupos; viene de los <b>datos</b>.</li>
        <li><span class="term">Fairness (equidad)</span>: decisiones consistentes sin importar datos sensibles.</li>
        <li><span class="term">Inclusivity</span>: funciona bien para todos los grupos.</li>
        <li><span class="term">Robustness</span>: sigue funcionando ante entradas inusuales.</li>
        <li><span class="term">Safety</span>: no causa daño ni pone en riesgo a personas.</li>
        <li><span class="term">Veracity</span>: es honesto, reconoce cuando no sabe.</li>
      </ul>
      <p>Principios oficiales de AWS: <b>Fairness, Explainability, Privacy &amp; Security, Robustness, Governance, Transparency, Safety, Veracity &amp; Controllability</b>.</p>`,
     html_en:`
      <ul>
        <li><span class="term">Bias</span>: unequal treatment of groups; comes from the <b>data</b>.</li>
        <li><span class="term">Fairness</span>: consistent decisions regardless of sensitive attributes.</li>
        <li><span class="term">Inclusivity</span>: works well for all groups.</li>
        <li><span class="term">Robustness</span>: keeps working under unusual inputs.</li>
        <li><span class="term">Safety</span>: doesn't cause harm or put people at risk.</li>
        <li><span class="term">Veracity</span>: is honest, acknowledges when it doesn't know.</li>
      </ul>
      <p>AWS's official principles: <b>Fairness, Explainability, Privacy &amp; Security, Robustness, Governance, Transparency, Safety, Veracity &amp; Controllability</b>.</p>`},
    {h:'Sesgo y varianza: causa y efecto', h_en:'Bias and variance: cause and effect', html:`
      <ul>
        <li>Sesgo en los <b>datos</b> → errores sistemáticos (subrepresenta grupos).</li>
        <li>Alta <b>varianza</b> → overfitting.</li>
        <li>Alto sesgo + baja varianza → underfitting.</li>
      </ul>`,
     html_en:`
      <ul>
        <li>Bias in the <b>data</b> → systematic errors (underrepresents groups).</li>
        <li>High <b>variance</b> → overfitting.</li>
        <li>High bias + low variance → underfitting.</li>
      </ul>`},
    {h:'Transparencia vs Explicabilidad', h_en:'Transparency vs Explainability', html:`
      <table class="tbl">
        <tr><th>Transparencia</th><th>Explicabilidad</th></tr>
        <tr><td>Ver <b>cómo está construido</b> el modelo (arquitectura, datos, parámetros).</td><td>Entender <b>por qué</b> tomó una decisión específica.</td></tr>
      </table>
      <p>"Caja negra" = ni transparencia ni explicabilidad. <span class="svc">SageMaker Model Cards</span> documenta ambas.</p>`,
     html_en:`
      <table class="tbl">
        <tr><th>Transparency</th><th>Explainability</th></tr>
        <tr><td>Seeing <b>how the model is built</b> (architecture, data, parameters).</td><td>Understanding <b>why</b> it made a specific decision.</td></tr>
      </table>
      <p>"Black box" = neither transparency nor explainability. <span class="svc">SageMaker Model Cards</span> documents both.</p>`},
    {h:'Herramientas de AWS', h_en:'AWS tools', html:`
      <table class="tbl">
        <tr><th>Servicio</th><th>Para qué</th></tr>
        <tr><td><span class="svc">SageMaker Clarify</span></td><td>Detecta <b>sesgo</b> (pre y post-entrenamiento) y <b>explica</b> predicciones con feature attribution (<b>valores SHAP</b>: cuánto pesa cada variable).</td></tr>
        <tr><td><span class="svc">SageMaker Model Monitor</span></td><td>Vigila el <b>drift</b> en producción (cuándo se degrada el modelo). Alerta vía CloudWatch.</td></tr>
        <tr><td><span class="svc">Amazon A2I</span></td><td>Augmented AI: envía a <b>revisión humana</b> los casos de baja confianza o error inaceptable.</td></tr>
        <tr><td><span class="svc">Bedrock Guardrails</span></td><td>Define límites del comportamiento en tiempo real: <b>filtros de contenido</b> (categorías como Odio, Violencia, Insultos, Sexual), <b>temas denegados</b> (ej. política), <b>filtros de palabras</b>, protección de <b>PII</b> y <b>contextual grounding</b> (reduce alucinaciones).</td></tr>
        <tr><td><span class="svc">SageMaker Model Cards</span></td><td>Documentación <b>estandarizada</b> de TUS modelos: uso previsto, datos de entrenamiento, métricas, limitaciones y versiones → transparencia, gobernanza y auditoría.</td></tr>
        <tr><td><span class="term">AWS AI Service Cards</span></td><td>Documentación de AWS sobre <b>sus propios servicios</b> de IA (casos de uso responsables, limitaciones). Model Cards = tus modelos; Service Cards = los servicios de AWS.</td></tr>
        <tr><td><span class="term">Watermark detection</span></td><td>Bedrock detecta la <b>marca de agua</b> de imágenes generadas por modelos de Amazon → transparencia sobre contenido generado por IA.</td></tr>
      </table>
      <div class="note tip"><b>Clarify</b> = sesgo + el "por qué" (SHAP, también <b>partial dependence plots</b> para ver cómo influye cada variable). <b>Model Monitor</b> = vigilancia en producción. Se integran: Clarify detecta, Model Monitor alerta.</div>`,
     html_en:`
      <table class="tbl">
        <tr><th>Service</th><th>What for</th></tr>
        <tr><td><span class="svc">SageMaker Clarify</span></td><td>Detects <b>bias</b> (pre- and post-training) and <b>explains</b> predictions via feature attribution (<b>SHAP values</b>: how much each variable matters).</td></tr>
        <tr><td><span class="svc">SageMaker Model Monitor</span></td><td>Watches for <b>drift</b> in production (when the model degrades). Alerts via CloudWatch.</td></tr>
        <tr><td><span class="svc">Amazon A2I</span></td><td>Augmented AI: routes low-confidence or unacceptable-error cases to <b>human review</b>.</td></tr>
        <tr><td><span class="svc">Bedrock Guardrails</span></td><td>Defines real-time behavior limits: <b>content filters</b> (categories like Hate, Violence, Insults, Sexual), <b>denied topics</b> (e.g. politics), <b>word filters</b>, <b>PII</b> protection, and <b>contextual grounding</b> (reduces hallucinations).</td></tr>
        <tr><td><span class="svc">SageMaker Model Cards</span></td><td><b>Standardized</b> documentation of YOUR models: intended use, training data, metrics, limitations, and versions → transparency, governance, and audits.</td></tr>
        <tr><td><span class="term">AWS AI Service Cards</span></td><td>AWS's documentation about <b>its own AI services</b> (responsible use cases, limitations). Model Cards = your models; Service Cards = AWS's services.</td></tr>
        <tr><td><span class="term">Watermark detection</span></td><td>Bedrock detects the <b>watermark</b> in images generated by Amazon models → transparency about AI-generated content.</td></tr>
      </table>
      <div class="note tip"><b>Clarify</b> = bias + the "why" (SHAP, plus <b>partial dependence plots</b> to see how each variable influences output). <b>Model Monitor</b> = production watch. They combine: Clarify detects, Model Monitor alerts.</div>`},
    {h:'Riesgos legales y diseño centrado en el humano', h_en:'Legal risks and human-centered design', html:`
      <ul>
        <li>Infracción de propiedad intelectual (salidas similares a obras protegidas).</li>
        <li>Salidas sesgadas → demandas por discriminación.</li>
        <li>Alucinaciones en salud/finanzas → responsabilidad legal.</li>
        <li><span class="term">Pérdida de confianza del cliente</span>: respuestas incorrectas → quejas, prensa negativa, escrutinio regulatorio.</li>
        <li><span class="term">Plagio</span>: presentar salida de IA como trabajo propio sin atribución.</li>
      </ul>
      <p>Diseño centrado en el humano: incorporar <b>feedback del usuario</b> y priorizar la <b>transparencia</b> desde el diseño, no como parche técnico posterior. Aumenta la confianza <b>citar las fuentes</b> que respaldan cada respuesta (ej. enlazar la sección del manual).</p>
      <h4>Sostenibilidad</h4>
      <p>Elegir un modelo del <b>tamaño adecuado a la tarea</b> (no el más grande) reduce cómputo, energía e impacto ambiental. Para entrenar con menor huella → instancias <b>Trn (Trainium)</b>.</p>`,
     html_en:`
      <ul>
        <li>Intellectual property infringement (outputs similar to protected works).</li>
        <li>Biased outputs → discrimination lawsuits.</li>
        <li>Hallucinations in healthcare/finance → legal liability.</li>
        <li><span class="term">Loss of customer trust</span>: incorrect answers → complaints, negative press, regulatory scrutiny.</li>
        <li><span class="term">Plagiarism</span>: presenting AI output as one's own work without attribution.</li>
      </ul>
      <p>Human-centered design: build in <b>user feedback</b> and prioritize <b>transparency</b> from the design stage, not as a technical patch after the fact. Trust increases when you <b>cite the sources</b> backing each answer (e.g. linking the manual section).</p>
      <h4>Sustainability</h4>
      <p>Choosing a model <b>sized for the task</b> (not the biggest one) reduces compute, energy, and environmental impact. For lower-footprint training → <b>Trn (Trainium)</b> instances.</p>`},
  ]
},
{
  id:'d5',
  chip:'D5 · Seguridad',
  chip_en:'D5 · Security',
  title:'Dominio 5 · Seguridad, cumplimiento y gobernanza (14%)',
  title_en:'Domain 5 · Security, Compliance, and Governance (14%)',
  lead:'Cómo proteger, auditar y gobernar soluciones de IA en AWS, y qué ataques específicos amenazan a los modelos.',
  lead_en:'How to secure, audit, and govern AI solutions on AWS, and which specific attacks threaten models.',
  sections:[
    {h:'Servicios de seguridad base', h_en:'Baseline security services', html:`
      <table class="tbl">
        <tr><th>Servicio</th><th>Para qué</th></tr>
        <tr><td><span class="svc">IAM</span></td><td>Controla accesos (principio de <b>mínimo privilegio</b>).</td></tr>
        <tr><td><span class="svc">KMS</span></td><td>Crea/controla claves de <b>cifrado</b> y su rotación.</td></tr>
        <tr><td><span class="svc">Macie</span></td><td>Usa ML para <b>descubrir datos sensibles (PII)</b> en S3.</td></tr>
        <tr><td><span class="svc">PrivateLink</span></td><td>Conecta apps con servicios de AWS por <b>red privada</b>, sin salir a internet.</td></tr>
        <tr><td><span class="svc">VPC / Security Groups</span></td><td>Aísla recursos en red privada; los SG controlan el tráfico permitido.</td></tr>
        <tr><td><span class="svc">Shield</span></td><td>Protege contra ataques <b>DDoS</b>.</td></tr>
      </table>`,
     html_en:`
      <table class="tbl">
        <tr><th>Service</th><th>What for</th></tr>
        <tr><td><span class="svc">IAM</span></td><td>Controls access (<b>least privilege</b> principle).</td></tr>
        <tr><td><span class="svc">KMS</span></td><td>Creates/controls <b>encryption</b> keys and their rotation.</td></tr>
        <tr><td><span class="svc">Macie</span></td><td>Uses ML to <b>discover sensitive data (PII)</b> in S3.</td></tr>
        <tr><td><span class="svc">PrivateLink</span></td><td>Connects apps to AWS services over a <b>private network</b>, without going out to the internet.</td></tr>
        <tr><td><span class="svc">VPC / Security Groups</span></td><td>Isolates resources on a private network; SGs control allowed traffic.</td></tr>
        <tr><td><span class="svc">Shield</span></td><td>Protects against <b>DDoS</b> attacks.</td></tr>
      </table>`},
    {h:'Modelo de responsabilidad compartida', h_en:'Shared responsibility model', html:`
      <table class="tbl">
        <tr><th>AWS — seguridad DE la nube</th><th>Cliente — seguridad EN la nube</th></tr>
        <tr><td>Infraestructura física, hardware, virtualización.</td><td>Configuración, datos, accesos, modelos, código.</td></tr>
      </table>`,
     html_en:`
      <table class="tbl">
        <tr><th>AWS — security OF the cloud</th><th>Customer — security IN the cloud</th></tr>
        <tr><td>Physical infrastructure, hardware, virtualization.</td><td>Configuration, data, access, models, code.</td></tr>
      </table>`},
    {h:'Auditoría y monitoreo (no los confundas)', h_en:'Auditing and monitoring (don\'t mix these up)', html:`
      <table class="tbl">
        <tr><th>Servicio</th><th>Responde a…</th></tr>
        <tr><td><span class="svc">Config</span></td><td><b>Cómo</b> está configurado y <b>qué cambió</b> (estado de recursos).</td></tr>
        <tr><td><span class="svc">CloudTrail</span></td><td><b>Quién</b> hizo <b>qué</b> (auditoría de llamadas a la API).</td></tr>
        <tr><td><span class="svc">CloudWatch</span></td><td><b>Cómo se desempeña</b> (métricas y logs).</td></tr>
      </table>
      <div class="note">"¿Quién llamó a la API y cuándo?" → <b>CloudTrail</b>. "¿Qué métricas/logs de rendimiento?" → <b>CloudWatch</b>. "¿Qué cambió en la config?" → <b>Config</b>.</div>`,
     html_en:`
      <table class="tbl">
        <tr><th>Service</th><th>Answers…</th></tr>
        <tr><td><span class="svc">Config</span></td><td><b>How</b> it's configured and <b>what changed</b> (resource state).</td></tr>
        <tr><td><span class="svc">CloudTrail</span></td><td><b>Who</b> did <b>what</b> (API call auditing).</td></tr>
        <tr><td><span class="svc">CloudWatch</span></td><td><b>How it's performing</b> (metrics and logs).</td></tr>
      </table>
      <div class="note">"Who called the API and when?" → <b>CloudTrail</b>. "What performance metrics/logs?" → <b>CloudWatch</b>. "What changed in the config?" → <b>Config</b>.</div>`},
    {h:'Cumplimiento y buenas prácticas', h_en:'Compliance and best practices', html:`
      <table class="tbl">
        <tr><th>Servicio</th><th>Para qué</th></tr>
        <tr><td><span class="svc">Inspector</span></td><td>Escanea vulnerabilidades en código/infra automáticamente.</td></tr>
        <tr><td><span class="svc">Audit Manager</span></td><td>Automatiza la <b>evidencia de auditoría</b> para cumplimiento (GDPR, HIPAA, ISO 27001).</td></tr>
        <tr><td><span class="svc">Artifact</span></td><td>Repositorio de informes de cumplimiento y certificaciones de AWS.</td></tr>
        <tr><td><span class="svc">Trusted Advisor</span></td><td>Recomendaciones en 5 áreas: seguridad, rendimiento, costo, tolerancia a fallos y límites de servicio.</td></tr>
      </table>`,
     html_en:`
      <table class="tbl">
        <tr><th>Service</th><th>What for</th></tr>
        <tr><td><span class="svc">Inspector</span></td><td>Automatically scans code/infrastructure for vulnerabilities.</td></tr>
        <tr><td><span class="svc">Audit Manager</span></td><td>Automates <b>audit evidence</b> for compliance (GDPR, HIPAA, ISO 27001).</td></tr>
        <tr><td><span class="svc">Artifact</span></td><td>Repository of AWS compliance reports and certifications.</td></tr>
        <tr><td><span class="svc">Trusted Advisor</span></td><td>Recommendations in 5 areas: security, performance, cost, fault tolerance, and service limits.</td></tr>
      </table>`},
    {h:'Ataques específicos a modelos de IA', h_en:'Attacks specific to AI models', html:`
      <ul>
        <li><span class="term">Prompt injection</span>: instrucciones maliciosas vía input (mitiga: <span class="svc">Guardrails</span>).</li>
        <li><span class="term">Jailbreaking</span>: evadir restricciones de seguridad.</li>
        <li><span class="term">Data poisoning</span>: envenenar datos de entrenamiento.</li>
        <li><span class="term">Model inversion / extraction</span>: reconstruir datos de entrenamiento o el propio modelo a partir de sus salidas.</li>
      </ul>`,
     html_en:`
      <ul>
        <li><span class="term">Prompt injection</span>: malicious instructions via input (mitigated by: <span class="svc">Guardrails</span>).</li>
        <li><span class="term">Jailbreaking</span>: evading safety restrictions.</li>
        <li><span class="term">Data poisoning</span>: poisoning training data.</li>
        <li><span class="term">Model inversion / extraction</span>: reconstructing training data or the model itself from its outputs.</li>
      </ul>`},
    {h:'Gobernanza de datos y de agentes', h_en:'Data and agent governance', html:`
      <ul>
        <li><span class="term">Data lineage</span>: rastrea el <b>origen y recorrido</b> de los datos — la respuesta cuando el regulador exige "trazar cada dato de entrenamiento hasta su fuente".</li>
        <li><span class="term">Data cataloging</span>: inventario organizado de todos los datos.</li>
        <li><span class="term">Data residency</span>: los datos se almacenan y procesan solo en una <b>ubicación geográfica</b> concreta (ej. "no puede salir del país").</li>
        <li><span class="term">Data retention</span>: cuánto tiempo se guarda la información y cuándo se elimina. <span class="term">Data lifecycle management</span>: reglas de todo el ciclo — creación → archivado → borrado.</li>
        <li><span class="term">Monitoreo/observación de datos</span>: vigilancia <b>continua</b> de cómo se accede y usa los datos (detecta patrones no autorizados). El <b>logging</b> solo registra eventos individuales.</li>
        <li>Políticas de <b>ciclo de vida de S3</b>: transición entre clases de almacenamiento, expiración → gobernanza automática. Para retener logs años al menor costo → <span class="svc">S3 Intelligent-Tiering</span>.</li>
        <li><span class="term">Leyes de accountability algorítmico</span>: regulan las decisiones <b>automatizadas sobre personas</b> (crédito, contratación) — revísalas al entrar a un nuevo mercado.</li>
        <li><span class="term">Federated learning</span>: entrena un modelo compartido <b>sin mover los datos crudos</b> de su origen → privacidad y cumplimiento.</li>
        <li><span class="term">Generative AI Security Scoping Matrix</span>: marco de AWS que califica apps GenAI por nivel de riesgo. A más control sobre el modelo (entrenar desde cero &gt; fine-tunear &gt; usar API &gt; app de terceros), <b>más responsabilidad de seguridad</b> tuya.</li>
        <li><span class="svc">AgentCore Identity/Policy</span>: identidad y control de acceso <b>granular</b> para agentes autónomos (cada agente con su propia identidad, sin credenciales compartidas).</li>
      </ul>
      <div class="note"><b>Bedrock model invocation logging</b>: registra los <b>prompts y respuestas</b> del modelo (CloudTrail solo registra la llamada a la API, no el contenido). <b>SageMaker network isolation</b>: entrenar/inferir <b>sin acceso a internet</b> para entornos regulados.</div>`,
     html_en:`
      <ul>
        <li><span class="term">Data lineage</span>: tracks the <b>origin and path</b> of data — the answer when a regulator demands "trace every piece of training data back to its source".</li>
        <li><span class="term">Data cataloging</span>: an organized inventory of all data.</li>
        <li><span class="term">Data residency</span>: data is stored and processed only in a specific <b>geographic location</b> (e.g. "it cannot leave the country").</li>
        <li><span class="term">Data retention</span>: how long information is kept and when it's deleted. <span class="term">Data lifecycle management</span>: rules for the whole cycle — creation → archival → deletion.</li>
        <li><span class="term">Data observation/monitoring</span>: <b>continuous</b> watching of how data is accessed and used (detects unauthorized patterns). <b>Logging</b> only records individual events.</li>
        <li><b>S3 lifecycle</b> policies: transitions between storage classes, expiration → automatic governance. To keep logs for years at the lowest cost → <span class="svc">S3 Intelligent-Tiering</span>.</li>
        <li><span class="term">Algorithm accountability laws</span>: regulate <b>automated decisions about people</b> (credit, hiring) — review them when entering a new market.</li>
        <li><span class="term">Federated learning</span>: trains a shared model <b>without moving the raw data</b> from where it lives → privacy and compliance.</li>
        <li><span class="term">Generative AI Security Scoping Matrix</span>: AWS's framework that rates GenAI apps by risk level. The more control you have over the model (training from scratch &gt; fine-tuning &gt; using an API &gt; third-party app), the <b>more security responsibility</b> is yours.</li>
        <li><span class="svc">AgentCore Identity/Policy</span>: identity and <b>granular</b> access control for autonomous agents (each agent gets its own identity, no shared credentials).</li>
      </ul>
      <div class="note"><b>Bedrock model invocation logging</b>: records the model's <b>prompts and responses</b> (CloudTrail only logs the API call, not the content). <b>SageMaker network isolation</b>: train/infer <b>without internet access</b> for regulated environments.</div>`},
    {h:'Exactitud, grounding y filtrado de salida', h_en:'Accuracy, grounding, and output filtering', html:`
      <ul>
        <li><span class="term">RAG grounding</span>: anclar respuestas a fuentes recuperadas <b>verificables</b>.</li>
        <li><span class="term">Output validation</span>: validar la salida antes de mostrarla.</li>
        <li><span class="term">Confidence scoring</span>: medir qué tan segura está la respuesta.</li>
        <li><span class="term">Filtrado de toxicidad</span>: bloquear contenido dañino antes de llegar al usuario.</li>
        <li><b>Logging</b> de prompts/respuestas/decisiones para trazabilidad y cumplimiento (se apoya en CloudTrail/CloudWatch).</li>
      </ul>`,
     html_en:`
      <ul>
        <li><span class="term">RAG grounding</span>: anchoring answers to <b>verifiable</b> retrieved sources.</li>
        <li><span class="term">Output validation</span>: validating the output before showing it.</li>
        <li><span class="term">Confidence scoring</span>: measuring how confident the answer is.</li>
        <li><span class="term">Toxicity filtering</span>: blocking harmful content before it reaches the user.</li>
        <li><b>Logging</b> prompts/responses/decisions for traceability and compliance (relies on CloudTrail/CloudWatch).</li>
      </ul>`},
  ]
},
];
