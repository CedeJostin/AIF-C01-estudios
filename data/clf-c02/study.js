/* ================= STUDY CONTENT CLF-C02 (teoría de lectura) ================= */
/* Basado en la guía oficial del examen AWS Certified Cloud Practitioner (CLF-C02). */
const STUDY = [
{
  id:'exam',
  chip:'Sobre el examen',
  chip_en:'About the exam',
  title:'Sobre el examen CLF-C02',
  title_en:'About the CLF-C02 exam',
  lead:'Qué evalúa, formato, estrategia y las mejores fuentes gratuitas para prepararte. Léelo primero para saber dónde poner el foco.',
  lead_en:'What it tests, the format, strategy, and the best free resources to prepare. Read this first to know where to focus.',
  sections:[
    {h:'Formato y logística', h_en:'Format and logistics', html:`
      <ul>
        <li><b>65 preguntas</b> en total: <b>50 puntuadas</b> + 15 no puntuadas (de prueba, no sabes cuáles son).</li>
        <li><b>90 minutos</b>. Puntaje: escala 100–1000, <b>apruebas con 700</b>. El modelo es compensatorio: solo importa el total, no aprobar cada dominio.</li>
        <li>Es una certificación <b>foundational</b>: no exige experiencia técnica previa ni saber programar.</li>
        <li>2 tipos de pregunta: <b>opción única</b> (1 correcta de 4) y <b>respuesta múltiple</b> (2 correctas de 5).</li>
        <li>No hay penalización por responder mal: <b>nunca dejes preguntas en blanco</b>.</li>
      </ul>
      <div class="note tip"><b>Truco de negocio:</b> ante dos respuestas técnicamente válidas, suele ganar la <b>administrada por AWS</b> (managed), la más <b>simple</b> o la de <b>menor costo operativo</b>. Y si preguntan "¿quién es responsable de X?", piensa primero en el <b>Modelo de Responsabilidad Compartida</b>.</div>
      <div class="note"><b>Fuente:</b> este material sigue la <b>Guía oficial del examen AWS Certified Cloud Practitioner (CLF-C02)</b> y la documentación oficial de AWS, organizado por los mismos 4 dominios del examen.</div>`,
     html_en:`
      <ul>
        <li><b>65 questions</b> total: <b>50 scored</b> + 15 unscored (pilot questions, you don't know which ones).</li>
        <li><b>90 minutes</b>. Score: 100–1000 scale, <b>you pass with 700</b>. Scoring is compensatory: only the total matters, you don't need to pass each domain.</li>
        <li>It's a <b>foundational</b> certification: no prior technical experience or coding required.</li>
        <li>2 question types: <b>single choice</b> (1 correct out of 4) and <b>multiple response</b> (2 correct out of 5).</li>
        <li>There is no penalty for wrong answers: <b>never leave questions blank</b>.</li>
      </ul>
      <div class="note tip"><b>Business rule of thumb:</b> when two answers are technically valid, the <b>AWS-managed</b> one, the <b>simplest</b>, or the one with the <b>lowest operational cost</b> usually wins. And if they ask "who is responsible for X?", think of the <b>Shared Responsibility Model</b> first.</div>
      <div class="note"><b>Source:</b> this material follows the <b>official AWS Certified Cloud Practitioner (CLF-C02) Exam Guide</b> and official AWS documentation, organized by the same 4 exam domains.</div>`},
    {h:'Los 4 dominios y su peso', h_en:'The 4 domains and their weight', html:`
      <table class="tbl">
        <tr><th>Dominio</th><th>Peso</th><th>De qué va</th></tr>
        <tr><td><b>1 · Conceptos de Nube</b></td><td>24%</td><td>Valor de la nube, Well-Architected Framework, migración (7 Rs, CAF), economía de la nube.</td></tr>
        <tr><td><b>2 · Seguridad y Cumplimiento</b></td><td>30%</td><td>Responsabilidad compartida, IAM, servicios de seguridad, cumplimiento y auditoría.</td></tr>
        <tr><td><b>3 · Tecnología y Servicios</b></td><td>34%</td><td>El más grande: cómputo, almacenamiento, bases de datos, redes, infraestructura global, IA y análisis.</td></tr>
        <tr><td><b>4 · Facturación, Precios y Soporte</b></td><td>12%</td><td>Modelos de precios, herramientas de costos, Organizations, planes de soporte.</td></tr>
      </table>
      <p>Los dominios <b>2 y 3 suman 64%</b> del examen: domina el Modelo de Responsabilidad Compartida, IAM, y saber "qué servicio hace qué" (EC2, S3, RDS, VPC, CloudWatch vs CloudTrail, etc.).</p>`,
     html_en:`
      <table class="tbl">
        <tr><th>Domain</th><th>Weight</th><th>What it covers</th></tr>
        <tr><td><b>1 · Cloud Concepts</b></td><td>24%</td><td>Value of the cloud, Well-Architected Framework, migration (7 Rs, CAF), cloud economics.</td></tr>
        <tr><td><b>2 · Security &amp; Compliance</b></td><td>30%</td><td>Shared responsibility, IAM, security services, compliance and auditing.</td></tr>
        <tr><td><b>3 · Cloud Technology &amp; Services</b></td><td>34%</td><td>The biggest one: compute, storage, databases, networking, global infrastructure, AI and analytics.</td></tr>
        <tr><td><b>4 · Billing, Pricing &amp; Support</b></td><td>12%</td><td>Pricing models, cost tools, Organizations, support plans.</td></tr>
      </table>
      <p>Domains <b>2 and 3 add up to 64%</b> of the exam: master the Shared Responsibility Model, IAM, and knowing "which service does what" (EC2, S3, RDS, VPC, CloudWatch vs CloudTrail, etc.).</p>`},
    {h:'Las mejores fuentes gratuitas', h_en:'The best free resources', html:`
      <p>Todo lo siguiente es <b>gratis</b> y de alta calidad. Con esta app + estos recursos no necesitas pagar ningún curso:</p>
      <ul>
        <li><b>Guía oficial del examen (PDF)</b> — la lista exacta de temas y servicios "in scope": <a href="https://docs.aws.amazon.com/pdfs/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.pdf" target="_blank" style="color:var(--accent)">docs.aws.amazon.com → CLF-C02 Exam Guide</a></li>
        <li><b>AWS Skill Builder (cuenta gratis)</b> — curso oficial <i>AWS Cloud Practitioner Essentials</i> y el <i>Official Practice Question Set</i>: <b>20 preguntas oficiales gratis</b> con explicaciones: <a href="https://skillbuilder.aws/category/exam-prep/cloud-practitioner-foundational-CLF-C02" target="_blank" style="color:var(--accent)">skillbuilder.aws → Exam Prep CLF-C02</a></li>
        <li><b>freeCodeCamp (YouTube)</b> — curso completo gratuito de ~14 horas de Andrew Brown (ExamPro), cubre todo el temario e incluye un examen de práctica gratis: busca <i>"AWS Certified Cloud Practitioner Course CLF-C02 freeCodeCamp"</i>.</li>
        <li><b>Tutorials Dojo</b> — cheat sheets gratuitos por servicio, excelentes tablas comparativas (S3 vs EBS vs EFS, SG vs NACL): <a href="https://tutorialsdojo.com/aws-cheat-sheets/" target="_blank" style="color:var(--accent)">tutorialsdojo.com/aws-cheat-sheets</a></li>
        <li><b>ExamTopics</b> — banco grande de preguntas reales reportadas por la comunidad (revisa los comentarios: a veces la respuesta "oficial" del sitio está mal y la comunidad la corrige): <a href="https://www.examtopics.com/exams/amazon/aws-certified-cloud-practitioner-clf-c02/" target="_blank" style="color:var(--accent)">examtopics.com → CLF-C02</a></li>
        <li><b>Whitepapers de AWS</b> — <i>Overview of Amazon Web Services</i> y <i>AWS Well-Architected Framework</i> (los 6 pilares caen seguro en el examen).</li>
      </ul>
      <div class="note tip"><b>Plan sugerido (2–4 semanas):</b> 1) lee la teoría de esta app dominio por dominio; 2) refuerza con las flashcards hasta marcar todo "Ya lo sé"; 3) haz las preguntas de práctica de aquí; 4) haz las 20 oficiales de Skill Builder; 5) si sacas &gt;80% consistente, agenda el examen.</div>`,
     html_en:`
      <p>Everything below is <b>free</b> and high quality. With this app + these resources you don't need to pay for any course:</p>
      <ul>
        <li><b>Official Exam Guide (PDF)</b> — the exact list of topics and in-scope services: <a href="https://docs.aws.amazon.com/pdfs/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.pdf" target="_blank" style="color:var(--accent)">docs.aws.amazon.com → CLF-C02 Exam Guide</a></li>
        <li><b>AWS Skill Builder (free account)</b> — official <i>AWS Cloud Practitioner Essentials</i> course and the <i>Official Practice Question Set</i>: <b>20 free official questions</b> with explanations: <a href="https://skillbuilder.aws/category/exam-prep/cloud-practitioner-foundational-CLF-C02" target="_blank" style="color:var(--accent)">skillbuilder.aws → Exam Prep CLF-C02</a></li>
        <li><b>freeCodeCamp (YouTube)</b> — full free ~14-hour course by Andrew Brown (ExamPro), covers the whole syllabus and includes a free practice exam: search <i>"AWS Certified Cloud Practitioner Course CLF-C02 freeCodeCamp"</i>.</li>
        <li><b>Tutorials Dojo</b> — free per-service cheat sheets, excellent comparison tables (S3 vs EBS vs EFS, SG vs NACL): <a href="https://tutorialsdojo.com/aws-cheat-sheets/" target="_blank" style="color:var(--accent)">tutorialsdojo.com/aws-cheat-sheets</a></li>
        <li><b>ExamTopics</b> — large bank of community-reported real questions (read the comments: sometimes the site's "official" answer is wrong and the community corrects it): <a href="https://www.examtopics.com/exams/amazon/aws-certified-cloud-practitioner-clf-c02/" target="_blank" style="color:var(--accent)">examtopics.com → CLF-C02</a></li>
        <li><b>AWS Whitepapers</b> — <i>Overview of Amazon Web Services</i> and <i>AWS Well-Architected Framework</i> (the 6 pillars always show up on the exam).</li>
      </ul>
      <div class="note tip"><b>Suggested plan (2–4 weeks):</b> 1) read this app's theory domain by domain; 2) reinforce with the flashcards until everything is marked "I know it"; 3) do the practice questions here; 4) do the 20 official ones on Skill Builder; 5) if you consistently score &gt;80%, schedule the exam.</div>`},
  ]
},
{
  id:'d1',
  chip:'D1 · Conceptos de Nube',
  chip_en:'D1 · Cloud Concepts',
  title:'Dominio 1 · Conceptos de Nube (24%)',
  title_en:'Domain 1 · Cloud Concepts (24%)',
  lead:'Qué es la nube, por qué conviene, los 6 pilares del Well-Architected Framework y cómo se migra a AWS.',
  lead_en:'What the cloud is, why it pays off, the 6 pillars of the Well-Architected Framework, and how you migrate to AWS.',
  sections:[
    {h:'El valor de la nube AWS', h_en:'The value of the AWS Cloud', html:`
      <p>La computación en la nube es la <span class="term">entrega bajo demanda</span> de recursos de TI por internet con precios de <span class="term">pago por uso</span> (pay-as-you-go). Las 6 ventajas clásicas de la nube (caen casi siempre):</p>
      <ul>
        <li><b>Cambiar gasto de capital por gasto variable</b> (CapEx → OpEx): no compras servidores por adelantado, pagas solo lo que consumes.</li>
        <li><b>Economías de escala:</b> AWS compra a escala masiva y traslada el ahorro en precios más bajos.</li>
        <li><b>Dejar de adivinar la capacidad:</b> escalas hacia arriba o abajo según demanda real (elasticidad).</li>
        <li><b>Mayor velocidad y agilidad:</b> recursos nuevos en minutos, no semanas; se experimenta más y más barato.</li>
        <li><b>No gastar en mantener centros de datos:</b> enfocas el dinero y el talento en tus clientes, no en racks.</li>
        <li><b>Globalizarte en minutos:</b> despliegas en Regiones de todo el mundo con pocos clics → baja latencia para tus usuarios.</li>
      </ul>
      <table class="tbl">
        <tr><th>Concepto</th><th>Qué significa</th></tr>
        <tr><td><b>Elasticidad</b></td><td>Adquirir y soltar recursos automáticamente según la demanda (ej. Auto Scaling). "Pagar solo por lo que se usa cuando se usa."</td></tr>
        <tr><td><b>Escalabilidad</b></td><td>Capacidad de crecer: <b>vertical</b> (instancia más grande, scale up) u <b>horizontal</b> (más instancias, scale out).</td></tr>
        <tr><td><b>Alta disponibilidad</b></td><td>El sistema sigue operando ante fallos, típicamente desplegando en <b>múltiples AZs</b>.</td></tr>
        <tr><td><b>Agilidad</b></td><td>Velocidad para experimentar e innovar: aprovisionas en minutos.</td></tr>
        <tr><td><b>Tolerancia a fallos</b></td><td>El sistema soporta la falla de componentes sin interrupción del servicio.</td></tr>
      </table>
      <div class="note"><b>Trampa típica:</b> "elasticidad" ≠ "alta disponibilidad". Elasticidad = ajustarse a la demanda; alta disponibilidad = resistir fallos (multi-AZ).</div>`,
     html_en:`
      <p>Cloud computing is the <span class="term">on-demand delivery</span> of IT resources over the internet with <span class="term">pay-as-you-go</span> pricing. The classic 6 advantages of the cloud (they almost always show up):</p>
      <ul>
        <li><b>Trade capital expense for variable expense</b> (CapEx → OpEx): no upfront servers, you pay only for what you consume.</li>
        <li><b>Economies of scale:</b> AWS buys at massive scale and passes the savings on as lower prices.</li>
        <li><b>Stop guessing capacity:</b> scale up or down based on real demand (elasticity).</li>
        <li><b>Increase speed and agility:</b> new resources in minutes, not weeks; you experiment more, for less.</li>
        <li><b>Stop spending money running data centers:</b> focus money and talent on your customers, not racks.</li>
        <li><b>Go global in minutes:</b> deploy to Regions worldwide in a few clicks → low latency for your users.</li>
      </ul>
      <table class="tbl">
        <tr><th>Concept</th><th>What it means</th></tr>
        <tr><td><b>Elasticity</b></td><td>Automatically acquiring and releasing resources based on demand (e.g. Auto Scaling). "Pay only for what you use when you use it."</td></tr>
        <tr><td><b>Scalability</b></td><td>The ability to grow: <b>vertical</b> (bigger instance, scale up) or <b>horizontal</b> (more instances, scale out).</td></tr>
        <tr><td><b>High availability</b></td><td>The system keeps operating through failures, typically by deploying across <b>multiple AZs</b>.</td></tr>
        <tr><td><b>Agility</b></td><td>Speed to experiment and innovate: you provision in minutes.</td></tr>
        <tr><td><b>Fault tolerance</b></td><td>The system withstands component failure without service interruption.</td></tr>
      </table>
      <div class="note"><b>Typical trap:</b> "elasticity" ≠ "high availability". Elasticity = adjusting to demand; high availability = surviving failures (multi-AZ).</div>`},
    {h:'Modelos de nube y de servicio', h_en:'Cloud and service models', html:`
      <table class="tbl">
        <tr><th>Modelo de despliegue</th><th>Descripción</th></tr>
        <tr><td><b>Nube (cloud)</b></td><td>Todo corre en AWS. Máxima flexibilidad y menor gestión de infraestructura.</td></tr>
        <tr><td><b>On-premises (privada)</b></td><td>Todo en tu propio centro de datos. Máximo control, máxima responsabilidad y costo fijo.</td></tr>
        <tr><td><b>Híbrida</b></td><td>Combina on-premises con AWS (ej. con <span class="svc">Direct Connect</span>, <span class="svc">Storage Gateway</span>, <span class="svc">Outposts</span>). Típica en migraciones graduales o requisitos regulatorios.</td></tr>
      </table>
      <table class="tbl">
        <tr><th>Modelo de servicio</th><th>Tú gestionas</th><th>Ejemplos</th></tr>
        <tr><td><b>IaaS</b> (infraestructura)</td><td>SO, apps, datos</td><td><span class="svc">EC2</span>, <span class="svc">EBS</span>, <span class="svc">VPC</span></td></tr>
        <tr><td><b>PaaS</b> (plataforma)</td><td>Solo apps y datos</td><td><span class="svc">Elastic Beanstalk</span>, <span class="svc">RDS</span></td></tr>
        <tr><td><b>SaaS</b> (software)</td><td>Solo el uso</td><td>Gmail, Salesforce, <span class="svc">Amazon Chime</span></td></tr>
      </table>
      <div class="note tip"><b>Regla mnemónica:</b> IaaS = alquilas la máquina; PaaS = alquilas la plataforma y solo llevas tu código; SaaS = usas la app terminada.</div>`,
     html_en:`
      <table class="tbl">
        <tr><th>Deployment model</th><th>Description</th></tr>
        <tr><td><b>Cloud</b></td><td>Everything runs on AWS. Maximum flexibility, least infrastructure management.</td></tr>
        <tr><td><b>On-premises (private)</b></td><td>Everything in your own data center. Maximum control, maximum responsibility and fixed cost.</td></tr>
        <tr><td><b>Hybrid</b></td><td>Combines on-premises with AWS (e.g. via <span class="svc">Direct Connect</span>, <span class="svc">Storage Gateway</span>, <span class="svc">Outposts</span>). Typical in gradual migrations or regulatory requirements.</td></tr>
      </table>
      <table class="tbl">
        <tr><th>Service model</th><th>You manage</th><th>Examples</th></tr>
        <tr><td><b>IaaS</b> (infrastructure)</td><td>OS, apps, data</td><td><span class="svc">EC2</span>, <span class="svc">EBS</span>, <span class="svc">VPC</span></td></tr>
        <tr><td><b>PaaS</b> (platform)</td><td>Only apps and data</td><td><span class="svc">Elastic Beanstalk</span>, <span class="svc">RDS</span></td></tr>
        <tr><td><b>SaaS</b> (software)</td><td>Only the usage</td><td>Gmail, Salesforce, <span class="svc">Amazon Chime</span></td></tr>
      </table>
      <div class="note tip"><b>Mnemonic:</b> IaaS = you rent the machine; PaaS = you rent the platform and just bring your code; SaaS = you use the finished app.</div>`},
    {h:'Well-Architected Framework: los 6 pilares', h_en:'Well-Architected Framework: the 6 pillars', html:`
      <p>Marco de buenas prácticas para diseñar en AWS. <b>Apréndete los 6 pilares y qué resuelve cada uno</b> — el examen describe un escenario y pregunta a qué pilar corresponde:</p>
      <table class="tbl">
        <tr><th>Pilar</th><th>Palabras clave del escenario</th></tr>
        <tr><td><b>Excelencia operativa</b></td><td>Operar y monitorear sistemas, mejorar procesos, cambios pequeños y reversibles, todo como código (IaC), runbooks.</td></tr>
        <tr><td><b>Seguridad</b></td><td>Proteger datos y sistemas, IAM, cifrado, trazabilidad, seguridad en todas las capas.</td></tr>
        <tr><td><b>Fiabilidad (Reliability)</b></td><td>Recuperarse de fallos, multi-AZ, backups, escalar horizontalmente, probar la recuperación.</td></tr>
        <tr><td><b>Eficiencia de rendimiento</b></td><td>Usar el recurso correcto para cada carga, adoptar tecnologías nuevas, serverless, experimentar.</td></tr>
        <tr><td><b>Optimización de costos</b></td><td>Evitar gastos innecesarios, medir el gasto, right-sizing, apagar lo que no se usa.</td></tr>
        <tr><td><b>Sostenibilidad</b></td><td>Minimizar el impacto ambiental: maximizar utilización, servicios administrados, reducir energía desperdiciada.</td></tr>
      </table>
      <div class="note"><b>Mnemónico:</b> "SOFECS" — Seguridad, Operativa, Fiabilidad, Eficiencia, Costos, Sostenibilidad. Sostenibilidad es el pilar más nuevo (2021) y les encanta preguntarlo.</div>`,
     html_en:`
      <p>A best-practices framework for designing on AWS. <b>Learn the 6 pillars and what each one solves</b> — the exam describes a scenario and asks which pillar it maps to:</p>
      <table class="tbl">
        <tr><th>Pillar</th><th>Scenario keywords</th></tr>
        <tr><td><b>Operational Excellence</b></td><td>Running and monitoring systems, improving processes, small reversible changes, everything as code (IaC), runbooks.</td></tr>
        <tr><td><b>Security</b></td><td>Protecting data and systems, IAM, encryption, traceability, security at every layer.</td></tr>
        <tr><td><b>Reliability</b></td><td>Recovering from failures, multi-AZ, backups, horizontal scaling, testing recovery.</td></tr>
        <tr><td><b>Performance Efficiency</b></td><td>Using the right resource for each workload, adopting new technologies, serverless, experimenting.</td></tr>
        <tr><td><b>Cost Optimization</b></td><td>Avoiding unnecessary spend, measuring spend, right-sizing, turning off what's unused.</td></tr>
        <tr><td><b>Sustainability</b></td><td>Minimizing environmental impact: maximize utilization, managed services, reduce wasted energy.</td></tr>
      </table>
      <div class="note"><b>Note:</b> Sustainability is the newest pillar (2021) and examiners love asking about it.</div>`},
    {h:'Migración a AWS: CAF, 7 Rs y herramientas', h_en:'Migrating to AWS: CAF, the 7 Rs, and tools', html:`
      <p>El <span class="term">AWS Cloud Adoption Framework (CAF)</span> organiza la adopción de la nube en <b>6 perspectivas</b>: <b>Negocio, Personas y Gobernanza</b> (enfocadas en el negocio) + <b>Plataforma, Seguridad y Operaciones</b> (enfocadas en lo técnico). Sus beneficios se agrupan en: reducir riesgo de negocio, mejorar ESG, aumentar ingresos y aumentar eficiencia operativa.</p>
      <p>Las <b>7 estrategias de migración (7 Rs)</b>:</p>
      <table class="tbl">
        <tr><th>Estrategia</th><th>Qué es</th></tr>
        <tr><td><b>Rehost</b> ("lift and shift")</td><td>Mover tal cual, sin cambios. La más rápida y común en migraciones masivas.</td></tr>
        <tr><td><b>Replatform</b> ("lift, tinker and shift")</td><td>Pequeñas optimizaciones sin cambiar la arquitectura (ej. de MySQL propio a <span class="svc">RDS</span>).</td></tr>
        <tr><td><b>Refactor / Re-architect</b></td><td>Rediseñar para ser cloud-native (ej. a microservicios/serverless). Máximo beneficio, máximo esfuerzo.</td></tr>
        <tr><td><b>Repurchase</b> ("drop and shop")</td><td>Cambiar a otro producto, normalmente SaaS (ej. CRM propio → Salesforce).</td></tr>
        <tr><td><b>Relocate</b></td><td>Mover a nivel hipervisor (ej. VMware on-prem → VMware Cloud on AWS) sin comprar hardware nuevo.</td></tr>
        <tr><td><b>Retain</b></td><td>Dejarlo donde está (por ahora): dependencias o cumplimiento lo impiden.</td></tr>
        <tr><td><b>Retire</b></td><td>Apagarlo: ya no se necesita.</td></tr>
      </table>
      <p><b>Herramientas de migración y transferencia:</b></p>
      <ul>
        <li><span class="svc">AWS Migration Hub</span>: panel central para seguir migraciones.</li>
        <li><span class="svc">AWS Application Migration Service (MGN)</span>: rehost automatizado de servidores.</li>
        <li><span class="svc">AWS DMS</span>: migración de bases de datos (homogénea u heterogénea, con <span class="svc">Schema Conversion Tool</span>).</li>
        <li><span class="svc">AWS DataSync</span>: transferencia masiva de archivos on-prem → S3/EFS/FSx por red.</li>
        <li><b>Familia Snow</b>: <span class="svc">Snowcone</span> (8 TB), <span class="svc">Snowball Edge</span> (decenas de TB, también cómputo en el borde), <span class="svc">Snowmobile</span> (exabytes, un camión). Para mover datos masivos <b>sin depender de la red</b> o con conectividad limitada.</li>
      </ul>`,
     html_en:`
      <p>The <span class="term">AWS Cloud Adoption Framework (CAF)</span> organizes cloud adoption into <b>6 perspectives</b>: <b>Business, People, and Governance</b> (business-focused) + <b>Platform, Security, and Operations</b> (technically focused). Its benefits group into: reduce business risk, improve ESG, grow revenue, and increase operational efficiency.</p>
      <p>The <b>7 migration strategies (7 Rs)</b>:</p>
      <table class="tbl">
        <tr><th>Strategy</th><th>What it is</th></tr>
        <tr><td><b>Rehost</b> ("lift and shift")</td><td>Move as-is, no changes. Fastest and most common in mass migrations.</td></tr>
        <tr><td><b>Replatform</b> ("lift, tinker and shift")</td><td>Small optimizations without changing the architecture (e.g. self-managed MySQL to <span class="svc">RDS</span>).</td></tr>
        <tr><td><b>Refactor / Re-architect</b></td><td>Redesign to be cloud-native (e.g. microservices/serverless). Maximum benefit, maximum effort.</td></tr>
        <tr><td><b>Repurchase</b> ("drop and shop")</td><td>Switch to a different product, usually SaaS (e.g. in-house CRM → Salesforce).</td></tr>
        <tr><td><b>Relocate</b></td><td>Move at the hypervisor level (e.g. on-prem VMware → VMware Cloud on AWS) without buying new hardware.</td></tr>
        <tr><td><b>Retain</b></td><td>Leave it where it is (for now): dependencies or compliance prevent moving.</td></tr>
        <tr><td><b>Retire</b></td><td>Shut it down: no longer needed.</td></tr>
      </table>
      <p><b>Migration and transfer tools:</b></p>
      <ul>
        <li><span class="svc">AWS Migration Hub</span>: central dashboard to track migrations.</li>
        <li><span class="svc">AWS Application Migration Service (MGN)</span>: automated server rehosting.</li>
        <li><span class="svc">AWS DMS</span>: database migration (homogeneous or heterogeneous, with the <span class="svc">Schema Conversion Tool</span>).</li>
        <li><span class="svc">AWS DataSync</span>: bulk file transfer on-prem → S3/EFS/FSx over the network.</li>
        <li><b>Snow family</b>: <span class="svc">Snowcone</span> (8 TB), <span class="svc">Snowball Edge</span> (tens of TB, also edge compute), <span class="svc">Snowmobile</span> (exabytes, a truck). For moving massive data <b>without relying on the network</b> or with limited connectivity.</li>
      </ul>`},
    {h:'Economía de la nube', h_en:'Cloud economics', html:`
      <ul>
        <li><b>Costo total de propiedad (TCO):</b> al comparar on-prem vs AWS incluye no solo servidores sino energía, refrigeración, espacio físico y <b>personal de operaciones</b>. La nube lo convierte en gasto variable.</li>
        <li><b>Right-sizing:</b> elegir el tamaño correcto de recursos según uso real (con <span class="svc">Compute Optimizer</span> y <span class="svc">Cost Explorer</span>).</li>
        <li><b>Automatización:</b> aprovisionar con IaC (<span class="svc">CloudFormation</span>) reduce errores y costos operativos.</li>
        <li><b>Servicios administrados</b> (<span class="svc">RDS</span>, <span class="svc">ECS Fargate</span>, <span class="svc">DynamoDB</span>): reducen la carga operativa (parches, backups, escalado) y suelen ser la respuesta correcta a "reducir el esfuerzo operativo".</li>
        <li><b>Licencias:</b> puedes traer tus licencias (BYOL) o usar licencias incluidas en el precio del servicio.</li>
      </ul>`,
     html_en:`
      <ul>
        <li><b>Total Cost of Ownership (TCO):</b> when comparing on-prem vs AWS, include not just servers but power, cooling, physical space, and <b>operations staff</b>. The cloud turns it into variable expense.</li>
        <li><b>Right-sizing:</b> choosing the correct resource size based on real usage (with <span class="svc">Compute Optimizer</span> and <span class="svc">Cost Explorer</span>).</li>
        <li><b>Automation:</b> provisioning with IaC (<span class="svc">CloudFormation</span>) reduces errors and operating costs.</li>
        <li><b>Managed services</b> (<span class="svc">RDS</span>, <span class="svc">ECS Fargate</span>, <span class="svc">DynamoDB</span>): reduce operational burden (patching, backups, scaling) and are usually the right answer to "reduce operational effort".</li>
        <li><b>Licensing:</b> you can bring your own licenses (BYOL) or use licenses included in the service price.</li>
      </ul>`},
  ]
},
{
  id:'d2',
  chip:'D2 · Seguridad',
  chip_en:'D2 · Security',
  title:'Dominio 2 · Seguridad y Cumplimiento (30%)',
  title_en:'Domain 2 · Security & Compliance (30%)',
  lead:'El Modelo de Responsabilidad Compartida, IAM y los servicios de seguridad. Es el segundo dominio más pesado: apréndelo a fondo.',
  lead_en:'The Shared Responsibility Model, IAM, and the security services. The second-heaviest domain: learn it thoroughly.',
  sections:[
    {h:'Modelo de Responsabilidad Compartida', h_en:'Shared Responsibility Model', html:`
      <p>La pregunta más repetida del examen. La regla de oro:</p>
      <table class="tbl">
        <tr><th>Responsable</th><th>De qué</th><th>Ejemplos</th></tr>
        <tr><td><b>AWS</b> — seguridad <b>DE</b> la nube</td><td>La infraestructura que ejecuta los servicios</td><td>Hardware, centros de datos, seguridad física, red global, hipervisor, el software de los servicios administrados.</td></tr>
        <tr><td><b>Cliente</b> — seguridad <b>EN</b> la nube</td><td>Todo lo que pones y configuras</td><td>Tus datos, cifrado de datos, IAM (usuarios/permisos), configuración de security groups, parches del SO invitado en EC2, código de tus apps.</td></tr>
      </table>
      <p>La frontera <b>se mueve según el servicio</b>:</p>
      <ul>
        <li><span class="svc">EC2</span> (IaaS): el cliente parchea el sistema operativo invitado, configura el firewall, gestiona todo lo de arriba.</li>
        <li><span class="svc">RDS</span> (administrado): AWS parchea el SO y el motor de base de datos; el cliente gestiona datos, usuarios y configuración de acceso.</li>
        <li><span class="svc">Lambda / S3</span> (abstraído/serverless): AWS gestiona toda la infraestructura y plataforma; el cliente solo asegura su código, sus datos y sus permisos.</li>
      </ul>
      <div class="note"><b>Siempre del cliente:</b> los datos y la gestión de accesos (IAM). <b>Siempre de AWS:</b> la seguridad física y el hardware. <b>Compartidos:</b> parcheo (AWS la infra, tú el SO invitado), configuración (AWS la infra, tú tus recursos), y concienciación/entrenamiento (cada quien entrena a su gente).</div>`,
     html_en:`
      <p>The most repeated exam question. The golden rule:</p>
      <table class="tbl">
        <tr><th>Responsible</th><th>For what</th><th>Examples</th></tr>
        <tr><td><b>AWS</b> — security <b>OF</b> the cloud</td><td>The infrastructure that runs the services</td><td>Hardware, data centers, physical security, global network, hypervisor, the software of managed services.</td></tr>
        <tr><td><b>Customer</b> — security <b>IN</b> the cloud</td><td>Everything you put in and configure</td><td>Your data, data encryption, IAM (users/permissions), security group configuration, guest OS patching on EC2, your application code.</td></tr>
      </table>
      <p>The boundary <b>moves depending on the service</b>:</p>
      <ul>
        <li><span class="svc">EC2</span> (IaaS): the customer patches the guest OS, configures the firewall, manages everything above it.</li>
        <li><span class="svc">RDS</span> (managed): AWS patches the OS and the database engine; the customer manages data, users, and access configuration.</li>
        <li><span class="svc">Lambda / S3</span> (abstracted/serverless): AWS manages all infrastructure and platform; the customer only secures their code, data, and permissions.</li>
      </ul>
      <div class="note"><b>Always the customer:</b> data and access management (IAM). <b>Always AWS:</b> physical security and hardware. <b>Shared:</b> patching (AWS the infra, you the guest OS), configuration (AWS the infra, you your resources), and awareness/training (each trains their own people).</div>`},
    {h:'IAM: identidades y accesos', h_en:'IAM: identities and access', html:`
      <p><span class="svc">AWS IAM</span> controla <b>quién</b> puede hacer <b>qué</b> sobre <b>qué recurso</b>. Es global (no por región) y gratuito.</p>
      <table class="tbl">
        <tr><th>Concepto</th><th>Qué es</th></tr>
        <tr><td><b>Usuario root</b></td><td>El dueño de la cuenta; acceso total irrestricto. <b>No usarlo para el día a día</b>: actívale MFA, no crees access keys para él, y úsalo solo para tareas que solo el root puede hacer (cerrar la cuenta, cambiar plan de soporte).</td></tr>
        <tr><td><b>Usuario IAM</b></td><td>Identidad para una persona o app con credenciales de largo plazo.</td></tr>
        <tr><td><b>Grupo</b></td><td>Colección de usuarios; las políticas se asignan al grupo (buena práctica).</td></tr>
        <tr><td><b>Rol IAM</b></td><td>Identidad <b>temporal</b> que se asume, sin credenciales fijas. LA respuesta correcta para: dar permisos a una app en EC2, acceso entre cuentas, o servicios que llaman a otros servicios.</td></tr>
        <tr><td><b>Política (policy)</b></td><td>Documento JSON que permite o deniega acciones sobre recursos. Las políticas administradas por AWS ya vienen listas.</td></tr>
        <tr><td><b>MFA</b></td><td>Autenticación multifactor: algo que sabes + algo que tienes. Actívalo en root y usuarios privilegiados.</td></tr>
        <tr><td><b>IAM Identity Center</b></td><td>(antes AWS SSO) Inicio de sesión único para varias cuentas y apps, integrable con Active Directory.</td></tr>
      </table>
      <ul>
        <li><b>Principio de menor privilegio:</b> otorga solo los permisos mínimos necesarios. Respuesta correcta casi siempre que aparezca.</li>
        <li><b>Credenciales de acceso:</b> access keys son para CLI/SDK (programático); contraseña es para la consola. Rota las claves y no las incrustes en código.</li>
        <li><b>IAM Credential Report:</b> CSV con el estado de credenciales de todos los usuarios (contraseñas, claves, MFA). <b>IAM Access Analyzer:</b> detecta recursos compartidos con entidades externas.</li>
      </ul>`,
     html_en:`
      <p><span class="svc">AWS IAM</span> controls <b>who</b> can do <b>what</b> on <b>which resource</b>. It's global (not per-region) and free.</p>
      <table class="tbl">
        <tr><th>Concept</th><th>What it is</th></tr>
        <tr><td><b>Root user</b></td><td>The account owner; unrestricted access. <b>Don't use it day to day</b>: enable MFA, don't create access keys for it, and use it only for root-only tasks (closing the account, changing the support plan).</td></tr>
        <tr><td><b>IAM user</b></td><td>Identity for a person or app with long-term credentials.</td></tr>
        <tr><td><b>Group</b></td><td>Collection of users; policies are attached to the group (best practice).</td></tr>
        <tr><td><b>IAM role</b></td><td><b>Temporary</b> identity that is assumed, no fixed credentials. THE right answer for: giving permissions to an app on EC2, cross-account access, or services calling other services.</td></tr>
        <tr><td><b>Policy</b></td><td>JSON document that allows or denies actions on resources. AWS managed policies come ready-made.</td></tr>
        <tr><td><b>MFA</b></td><td>Multi-factor authentication: something you know + something you have. Enable it on root and privileged users.</td></tr>
        <tr><td><b>IAM Identity Center</b></td><td>(formerly AWS SSO) Single sign-on for multiple accounts and apps, integrates with Active Directory.</td></tr>
      </table>
      <ul>
        <li><b>Least privilege principle:</b> grant only the minimum permissions needed. Almost always the right answer when it appears.</li>
        <li><b>Access credentials:</b> access keys are for CLI/SDK (programmatic); the password is for the console. Rotate keys and never hard-code them.</li>
        <li><b>IAM Credential Report:</b> CSV with the credential status of all users (passwords, keys, MFA). <b>IAM Access Analyzer:</b> detects resources shared with external entities.</li>
      </ul>`},
    {h:'Servicios de seguridad (quién detecta qué)', h_en:'Security services (which one detects what)', html:`
      <table class="tbl">
        <tr><th>Servicio</th><th>Para qué sirve (palabra clave)</th></tr>
        <tr><td><span class="svc">GuardDuty</span></td><td><b>Detección inteligente de amenazas</b>: analiza CloudTrail, VPC Flow Logs y DNS con ML. "Actividad maliciosa / cuentas comprometidas" → GuardDuty.</td></tr>
        <tr><td><span class="svc">Inspector</span></td><td><b>Vulnerabilidades</b> en EC2, ECR y Lambda (CVEs, exposición de red). "Escanear vulnerabilidades de software" → Inspector.</td></tr>
        <tr><td><span class="svc">Macie</span></td><td>Descubre y protege <b>datos sensibles (PII) en S3</b> con ML.</td></tr>
        <tr><td><span class="svc">AWS WAF</span></td><td>Firewall de <b>aplicaciones web</b> (capa 7): bloquea SQL injection, XSS, filtra por IP/geografía. Se acopla a CloudFront, ALB y API Gateway.</td></tr>
        <tr><td><span class="svc">AWS Shield</span></td><td>Protección <b>DDoS</b>. Standard: gratis y automático. Advanced: pago, protección extra, equipo de respuesta (SRT) y protección de costos.</td></tr>
        <tr><td><span class="svc">KMS</span></td><td>Creación y gestión de <b>claves de cifrado</b> (at rest y en tránsito con TLS). Integrado con casi todos los servicios.</td></tr>
        <tr><td><span class="svc">CloudHSM</span></td><td>Módulo de seguridad de hardware <b>dedicado</b>, para cumplimiento estricto donde tú gestionas las claves.</td></tr>
        <tr><td><span class="svc">Secrets Manager</span></td><td>Guarda y <b>rota automáticamente</b> secretos (contraseñas de BD, API keys).</td></tr>
        <tr><td><span class="svc">Security Hub</span></td><td><b>Panel central</b> que agrega hallazgos de GuardDuty, Inspector, Macie, etc. y verifica estándares.</td></tr>
        <tr><td><span class="svc">Amazon Detective</span></td><td><b>Investiga la causa raíz</b> de los hallazgos de seguridad (análisis forense).</td></tr>
        <tr><td><span class="svc">ACM</span></td><td>Certificados <b>SSL/TLS</b> gratuitos y con renovación automática.</td></tr>
        <tr><td><span class="svc">Firewall Manager</span></td><td>Administra reglas de WAF/Shield/SG en <b>varias cuentas</b> de una organización.</td></tr>
      </table>
      <div class="note tip"><b>Truco:</b> GuardDuty = amenazas (comportamiento), Inspector = vulnerabilidades (software sin parchear), Macie = PII en S3, Detective = investigar después del hallazgo.</div>`,
     html_en:`
      <table class="tbl">
        <tr><th>Service</th><th>What it's for (keyword)</th></tr>
        <tr><td><span class="svc">GuardDuty</span></td><td><b>Intelligent threat detection</b>: analyzes CloudTrail, VPC Flow Logs, and DNS with ML. "Malicious activity / compromised accounts" → GuardDuty.</td></tr>
        <tr><td><span class="svc">Inspector</span></td><td><b>Vulnerabilities</b> in EC2, ECR, and Lambda (CVEs, network exposure). "Scan for software vulnerabilities" → Inspector.</td></tr>
        <tr><td><span class="svc">Macie</span></td><td>Discovers and protects <b>sensitive data (PII) in S3</b> using ML.</td></tr>
        <tr><td><span class="svc">AWS WAF</span></td><td><b>Web application</b> firewall (layer 7): blocks SQL injection, XSS, filters by IP/geography. Attaches to CloudFront, ALB, and API Gateway.</td></tr>
        <tr><td><span class="svc">AWS Shield</span></td><td><b>DDoS</b> protection. Standard: free and automatic. Advanced: paid, extra protection, response team (SRT), and cost protection.</td></tr>
        <tr><td><span class="svc">KMS</span></td><td>Creation and management of <b>encryption keys</b> (at rest, and in transit with TLS). Integrated with almost every service.</td></tr>
        <tr><td><span class="svc">CloudHSM</span></td><td><b>Dedicated</b> hardware security module, for strict compliance where you manage the keys.</td></tr>
        <tr><td><span class="svc">Secrets Manager</span></td><td>Stores and <b>automatically rotates</b> secrets (DB passwords, API keys).</td></tr>
        <tr><td><span class="svc">Security Hub</span></td><td><b>Central dashboard</b> aggregating findings from GuardDuty, Inspector, Macie, etc. and checking standards.</td></tr>
        <tr><td><span class="svc">Amazon Detective</span></td><td><b>Investigates the root cause</b> of security findings (forensics).</td></tr>
        <tr><td><span class="svc">ACM</span></td><td>Free <b>SSL/TLS</b> certificates with automatic renewal.</td></tr>
        <tr><td><span class="svc">Firewall Manager</span></td><td>Manages WAF/Shield/SG rules across <b>multiple accounts</b> in an organization.</td></tr>
      </table>
      <div class="note tip"><b>Trick:</b> GuardDuty = threats (behavior), Inspector = vulnerabilities (unpatched software), Macie = PII in S3, Detective = investigate after the finding.</div>`},
    {h:'Cumplimiento, auditoría y gobernanza', h_en:'Compliance, auditing, and governance', html:`
      <table class="tbl">
        <tr><th>Servicio</th><th>Para qué sirve</th></tr>
        <tr><td><span class="svc">AWS Artifact</span></td><td><b>Descargar reportes de cumplimiento</b> de AWS (ISO, SOC, PCI). "El auditor pide evidencia de certificaciones de AWS" → Artifact.</td></tr>
        <tr><td><span class="svc">CloudTrail</span></td><td>Registra <b>quién hizo qué llamada de API, cuándo y desde dónde</b> en tu cuenta. Auditoría de acciones.</td></tr>
        <tr><td><span class="svc">AWS Config</span></td><td>Registra y evalúa la <b>configuración de recursos</b> a lo largo del tiempo y su cumplimiento con reglas ("¿quién cambió el security group?", "¿todos los buckets cifrados?").</td></tr>
        <tr><td><span class="svc">Audit Manager</span></td><td><b>Recolecta evidencia continuamente</b> para auditorías de estándares.</td></tr>
        <tr><td><span class="svc">Trusted Advisor</span></td><td>Recomendaciones automáticas en 5 áreas: costos, rendimiento, <b>seguridad</b>, tolerancia a fallos y límites de servicio.</td></tr>
        <tr><td><span class="svc">Control Tower</span></td><td>Configura y gobierna un entorno <b>multi-cuenta</b> seguro (landing zone) con guardrails.</td></tr>
      </table>
      <ul>
        <li><b>Cumplimiento por región:</b> los requisitos varían; tus datos <b>no salen de la región</b> que elijas (residencia de datos).</li>
        <li><b>Cifrado:</b> at rest (KMS) y in transit (TLS/SSL). En S3, el cifrado del lado del servidor ya es el comportamiento por defecto.</li>
        <li><b>Pruebas de penetración:</b> permitidas sin aprobación previa para varios servicios (EC2, RDS, Lambda...), pero <b>prohibido</b> hacer DDoS o ataques de denegación de servicio.</li>
      </ul>
      <div class="note"><b>CloudTrail vs Config vs CloudWatch:</b> CloudTrail = "quién llamó qué API" (auditoría de acciones); Config = "cómo está/estaba configurado un recurso" (auditoría de configuración); CloudWatch = "cómo está rindiendo" (métricas y logs).</div>`,
     html_en:`
      <table class="tbl">
        <tr><th>Service</th><th>What it's for</th></tr>
        <tr><td><span class="svc">AWS Artifact</span></td><td><b>Download AWS compliance reports</b> (ISO, SOC, PCI). "The auditor asks for evidence of AWS certifications" → Artifact.</td></tr>
        <tr><td><span class="svc">CloudTrail</span></td><td>Records <b>who made which API call, when, and from where</b> in your account. Action auditing.</td></tr>
        <tr><td><span class="svc">AWS Config</span></td><td>Records and evaluates <b>resource configuration</b> over time and its compliance with rules ("who changed the security group?", "are all buckets encrypted?").</td></tr>
        <tr><td><span class="svc">Audit Manager</span></td><td><b>Continuously collects evidence</b> for standards audits.</td></tr>
        <tr><td><span class="svc">Trusted Advisor</span></td><td>Automatic recommendations across 5 areas: cost, performance, <b>security</b>, fault tolerance, and service limits.</td></tr>
        <tr><td><span class="svc">Control Tower</span></td><td>Sets up and governs a secure <b>multi-account</b> environment (landing zone) with guardrails.</td></tr>
      </table>
      <ul>
        <li><b>Compliance per region:</b> requirements vary; your data <b>doesn't leave the region</b> you choose (data residency).</li>
        <li><b>Encryption:</b> at rest (KMS) and in transit (TLS/SSL). In S3, server-side encryption is now the default behavior.</li>
        <li><b>Penetration testing:</b> allowed without prior approval for several services (EC2, RDS, Lambda...), but <b>DDoS/denial-of-service attacks are forbidden</b>.</li>
      </ul>
      <div class="note"><b>CloudTrail vs Config vs CloudWatch:</b> CloudTrail = "who called which API" (action audit); Config = "how a resource is/was configured" (configuration audit); CloudWatch = "how it's performing" (metrics and logs).</div>`},
  ]
},
{
  id:'d3',
  chip:'D3 · Tecnología',
  chip_en:'D3 · Technology',
  title:'Dominio 3 · Tecnología y Servicios de Nube (34%)',
  title_en:'Domain 3 · Cloud Technology & Services (34%)',
  lead:'El dominio más grande del examen: infraestructura global y "qué servicio hace qué" en cómputo, almacenamiento, bases de datos, redes y más.',
  lead_en:'The biggest domain: global infrastructure and "which service does what" across compute, storage, databases, networking, and more.',
  sections:[
    {h:'Infraestructura global: Regiones, AZs y Edge', h_en:'Global infrastructure: Regions, AZs, and Edge', html:`
      <table class="tbl">
        <tr><th>Componente</th><th>Qué es</th></tr>
        <tr><td><b>Región</b></td><td>Área geográfica con <b>3+ AZs</b> (mínimo 3 en las nuevas). Eliges región por: cumplimiento/residencia de datos, latencia a usuarios, servicios disponibles y precio.</td></tr>
        <tr><td><b>Zona de disponibilidad (AZ)</b></td><td>Uno o más centros de datos con energía y redes independientes, conectados entre sí con fibra de baja latencia. Desplegar en <b>múltiples AZs = alta disponibilidad</b>.</td></tr>
        <tr><td><b>Edge locations</b></td><td>Puntos de presencia (400+) donde <span class="svc">CloudFront</span> cachea contenido cerca del usuario y opera <span class="svc">Route 53</span>.</td></tr>
        <tr><td><b>Local Zones</b></td><td>Extensión de una región cerca de grandes ciudades: latencia de milisegundos para cargas específicas.</td></tr>
        <tr><td><b>AWS Outposts</b></td><td>Racks de AWS <b>en tu propio centro de datos</b>: la experiencia AWS on-premises (híbrido total).</td></tr>
        <tr><td><b>AWS Wavelength</b></td><td>Cómputo AWS dentro de redes 5G de operadores, para latencia ultra baja móvil.</td></tr>
      </table>
      <div class="note tip"><b>Trampa clásica:</b> "alta disponibilidad" = multi-<b>AZ</b>; "recuperación ante desastres / latencia global" = multi-<b>Región</b>; "contenido más rápido a usuarios globales" = <b>CloudFront/Edge</b>.</div>`,
     html_en:`
      <table class="tbl">
        <tr><th>Component</th><th>What it is</th></tr>
        <tr><td><b>Region</b></td><td>Geographic area with <b>3+ AZs</b> (minimum 3 in new ones). You choose a region for: compliance/data residency, latency to users, available services, and price.</td></tr>
        <tr><td><b>Availability Zone (AZ)</b></td><td>One or more data centers with independent power and networking, interconnected with low-latency fiber. Deploying across <b>multiple AZs = high availability</b>.</td></tr>
        <tr><td><b>Edge locations</b></td><td>Points of presence (400+) where <span class="svc">CloudFront</span> caches content near the user and <span class="svc">Route 53</span> operates.</td></tr>
        <tr><td><b>Local Zones</b></td><td>Extension of a region near large cities: millisecond latency for specific workloads.</td></tr>
        <tr><td><b>AWS Outposts</b></td><td>AWS racks <b>in your own data center</b>: the AWS experience on-premises (full hybrid).</td></tr>
        <tr><td><b>AWS Wavelength</b></td><td>AWS compute inside carriers' 5G networks, for ultra-low mobile latency.</td></tr>
      </table>
      <div class="note tip"><b>Classic trap:</b> "high availability" = multi-<b>AZ</b>; "disaster recovery / global latency" = multi-<b>Region</b>; "faster content for global users" = <b>CloudFront/Edge</b>.</div>`},
    {h:'Cómputo: EC2, Lambda y contenedores', h_en:'Compute: EC2, Lambda, and containers', html:`
      <p><span class="svc">Amazon EC2</span>: servidores virtuales. Familias de instancias que caen en el examen:</p>
      <ul>
        <li><b>Uso general</b> (t3, m5): balance CPU/memoria — web apps, repositorios de código.</li>
        <li><b>Optimizadas para cómputo</b> (c5): CPU intensivo — gaming, HPC, batch.</li>
        <li><b>Optimizadas para memoria</b> (r5, x1): bases de datos en memoria, big data.</li>
        <li><b>Cómputo acelerado</b> (p3, g4): GPUs — ML, gráficos.</li>
        <li><b>Optimizadas para almacenamiento</b> (i3, d2): alto I/O local — data warehousing.</li>
      </ul>
      <table class="tbl">
        <tr><th>Servicio</th><th>Cuándo usarlo</th></tr>
        <tr><td><span class="svc">Lambda</span></td><td><b>Serverless</b>: ejecuta funciones por eventos, máximo 15 min, pagas por invocación y duración. Cero servidores que administrar.</td></tr>
        <tr><td><span class="svc">ECS</span></td><td>Orquestación de <b>contenedores Docker</b>, nativa de AWS.</td></tr>
        <tr><td><span class="svc">EKS</span></td><td>Contenedores con <b>Kubernetes</b> administrado (si piden "estándar de la industria / portabilidad").</td></tr>
        <tr><td><span class="svc">Fargate</span></td><td>Motor <b>serverless para contenedores</b> (ECS o EKS sin gestionar instancias EC2).</td></tr>
        <tr><td><span class="svc">Elastic Beanstalk</span></td><td><b>PaaS</b>: subes tu código y AWS aprovisiona todo (EC2, ELB, Auto Scaling). Tú conservas el control de los recursos.</td></tr>
        <tr><td><span class="svc">Lightsail</span></td><td>Servidores virtuales <b>simples con precio fijo mensual</b>: ideal para empezar, WordPress, proyectos pequeños.</td></tr>
        <tr><td><span class="svc">AWS Batch</span></td><td>Ejecuta trabajos batch a cualquier escala.</td></tr>
      </table>
      <p><b>Escalado y balanceo:</b></p>
      <ul>
        <li><span class="svc">EC2 Auto Scaling</span>: agrega/quita instancias según demanda (elasticidad) y reemplaza instancias no saludables (auto-recuperación).</li>
        <li><span class="svc">Elastic Load Balancing (ELB)</span>: reparte tráfico entre destinos en múltiples AZs. <b>ALB</b> = HTTP/HTTPS capa 7; <b>NLB</b> = TCP/UDP capa 4, latencia ultra baja; <b>GWLB</b> = appliances de red.</li>
      </ul>`,
     html_en:`
      <p><span class="svc">Amazon EC2</span>: virtual servers. Instance families that show up on the exam:</p>
      <ul>
        <li><b>General purpose</b> (t3, m5): CPU/memory balance — web apps, code repositories.</li>
        <li><b>Compute optimized</b> (c5): CPU-intensive — gaming, HPC, batch.</li>
        <li><b>Memory optimized</b> (r5, x1): in-memory databases, big data.</li>
        <li><b>Accelerated computing</b> (p3, g4): GPUs — ML, graphics.</li>
        <li><b>Storage optimized</b> (i3, d2): high local I/O — data warehousing.</li>
      </ul>
      <table class="tbl">
        <tr><th>Service</th><th>When to use it</th></tr>
        <tr><td><span class="svc">Lambda</span></td><td><b>Serverless</b>: runs functions on events, 15-minute max, you pay per invocation and duration. Zero servers to manage.</td></tr>
        <tr><td><span class="svc">ECS</span></td><td><b>Docker container</b> orchestration, AWS-native.</td></tr>
        <tr><td><span class="svc">EKS</span></td><td>Containers with managed <b>Kubernetes</b> (when they ask for "industry standard / portability").</td></tr>
        <tr><td><span class="svc">Fargate</span></td><td><b>Serverless engine for containers</b> (ECS or EKS without managing EC2 instances).</td></tr>
        <tr><td><span class="svc">Elastic Beanstalk</span></td><td><b>PaaS</b>: upload your code and AWS provisions everything (EC2, ELB, Auto Scaling). You keep control of the resources.</td></tr>
        <tr><td><span class="svc">Lightsail</span></td><td><b>Simple virtual servers with fixed monthly pricing</b>: great for getting started, WordPress, small projects.</td></tr>
        <tr><td><span class="svc">AWS Batch</span></td><td>Runs batch jobs at any scale.</td></tr>
      </table>
      <p><b>Scaling and load balancing:</b></p>
      <ul>
        <li><span class="svc">EC2 Auto Scaling</span>: adds/removes instances based on demand (elasticity) and replaces unhealthy instances (self-healing).</li>
        <li><span class="svc">Elastic Load Balancing (ELB)</span>: distributes traffic across targets in multiple AZs. <b>ALB</b> = HTTP/HTTPS layer 7; <b>NLB</b> = TCP/UDP layer 4, ultra-low latency; <b>GWLB</b> = network appliances.</li>
      </ul>`},
    {h:'Almacenamiento: S3, EBS, EFS y más', h_en:'Storage: S3, EBS, EFS, and more', html:`
      <p><span class="svc">Amazon S3</span>: almacenamiento de <b>objetos</b>, durabilidad de 11 nueves (99.999999999%), tamaño ilimitado (objetos hasta 5 TB). Clases de almacenamiento:</p>
      <table class="tbl">
        <tr><th>Clase</th><th>Cuándo</th></tr>
        <tr><td><b>S3 Standard</b></td><td>Acceso frecuente, baja latencia.</td></tr>
        <tr><td><b>S3 Intelligent-Tiering</b></td><td>Patrones de acceso <b>desconocidos o cambiantes</b>: mueve objetos automáticamente entre niveles.</td></tr>
        <tr><td><b>S3 Standard-IA</b></td><td>Acceso infrecuente pero recuperación inmediata; multi-AZ.</td></tr>
        <tr><td><b>S3 One Zone-IA</b></td><td>Infrecuente, <b>una sola AZ</b> (más barato, menos resiliente): datos re-creables.</td></tr>
        <tr><td><b>Glacier Instant Retrieval</b></td><td>Archivo con recuperación en milisegundos.</td></tr>
        <tr><td><b>Glacier Flexible Retrieval</b></td><td>Archivo, recuperación en minutos a horas.</td></tr>
        <tr><td><b>Glacier Deep Archive</b></td><td>El más barato; recuperación en <b>12+ horas</b>. Retención a largo plazo (7-10 años, cumplimiento).</td></tr>
      </table>
      <ul>
        <li><b>Lifecycle policies:</b> mueven objetos automáticamente entre clases con el tiempo (ej. Standard → IA a los 30 días → Glacier a los 90).</li>
        <li><b>Versioning:</b> conserva versiones anteriores; protege contra borrado accidental.</li>
      </ul>
      <table class="tbl">
        <tr><th>Servicio</th><th>Tipo</th><th>Clave</th></tr>
        <tr><td><span class="svc">EBS</span></td><td>Bloques</td><td>"Disco duro" de una instancia EC2; vive en <b>una AZ</b>; persiste si la instancia termina (configurable); snapshots a S3.</td></tr>
        <tr><td><span class="svc">Instance Store</span></td><td>Bloques</td><td>Disco físico del host: <b>efímero</b>, se pierde al detener la instancia. Solo caché/datos temporales.</td></tr>
        <tr><td><span class="svc">EFS</span></td><td>Archivos (NFS, Linux)</td><td>Sistema de archivos compartido, <b>multi-AZ</b>, elástico, montable por <b>miles de instancias a la vez</b>.</td></tr>
        <tr><td><span class="svc">FSx</span></td><td>Archivos</td><td>Sistemas de archivos administrados: <b>FSx for Windows</b> (SMB/Active Directory) y <b>FSx for Lustre</b> (HPC).</td></tr>
        <tr><td><span class="svc">Storage Gateway</span></td><td>Híbrido</td><td>Conecta almacenamiento on-premises con la nube (file, volume y tape gateway).</td></tr>
        <tr><td><span class="svc">AWS Backup</span></td><td>Backup</td><td>Backups <b>centralizados y automatizados</b> de EBS, RDS, DynamoDB, EFS, etc.</td></tr>
      </table>
      <div class="note"><b>Trampa:</b> S3 = objetos (fotos, backups, datalake); EBS = disco de UNA instancia; EFS = carpeta compartida entre MUCHAS instancias Linux. Si dicen "Windows file share" → FSx for Windows.</div>`,
     html_en:`
      <p><span class="svc">Amazon S3</span>: <b>object</b> storage, 11 nines of durability (99.999999999%), unlimited size (objects up to 5 TB). Storage classes:</p>
      <table class="tbl">
        <tr><th>Class</th><th>When</th></tr>
        <tr><td><b>S3 Standard</b></td><td>Frequent access, low latency.</td></tr>
        <tr><td><b>S3 Intelligent-Tiering</b></td><td><b>Unknown or changing</b> access patterns: moves objects between tiers automatically.</td></tr>
        <tr><td><b>S3 Standard-IA</b></td><td>Infrequent access but instant retrieval; multi-AZ.</td></tr>
        <tr><td><b>S3 One Zone-IA</b></td><td>Infrequent, <b>single AZ</b> (cheaper, less resilient): re-creatable data.</td></tr>
        <tr><td><b>Glacier Instant Retrieval</b></td><td>Archive with millisecond retrieval.</td></tr>
        <tr><td><b>Glacier Flexible Retrieval</b></td><td>Archive, retrieval in minutes to hours.</td></tr>
        <tr><td><b>Glacier Deep Archive</b></td><td>Cheapest; retrieval in <b>12+ hours</b>. Long-term retention (7-10 years, compliance).</td></tr>
      </table>
      <ul>
        <li><b>Lifecycle policies:</b> automatically move objects between classes over time (e.g. Standard → IA at 30 days → Glacier at 90).</li>
        <li><b>Versioning:</b> keeps previous versions; protects against accidental deletion.</li>
      </ul>
      <table class="tbl">
        <tr><th>Service</th><th>Type</th><th>Key point</th></tr>
        <tr><td><span class="svc">EBS</span></td><td>Block</td><td>An EC2 instance's "hard drive"; lives in <b>one AZ</b>; persists if the instance terminates (configurable); snapshots to S3.</td></tr>
        <tr><td><span class="svc">Instance Store</span></td><td>Block</td><td>Physical host disk: <b>ephemeral</b>, lost when the instance stops. Cache/temp data only.</td></tr>
        <tr><td><span class="svc">EFS</span></td><td>File (NFS, Linux)</td><td>Shared file system, <b>multi-AZ</b>, elastic, mountable by <b>thousands of instances at once</b>.</td></tr>
        <tr><td><span class="svc">FSx</span></td><td>File</td><td>Managed file systems: <b>FSx for Windows</b> (SMB/Active Directory) and <b>FSx for Lustre</b> (HPC).</td></tr>
        <tr><td><span class="svc">Storage Gateway</span></td><td>Hybrid</td><td>Connects on-premises storage with the cloud (file, volume, and tape gateway).</td></tr>
        <tr><td><span class="svc">AWS Backup</span></td><td>Backup</td><td><b>Centralized, automated</b> backups of EBS, RDS, DynamoDB, EFS, etc.</td></tr>
      </table>
      <div class="note"><b>Trap:</b> S3 = objects (photos, backups, data lake); EBS = ONE instance's disk; EFS = shared folder for MANY Linux instances. If they say "Windows file share" → FSx for Windows.</div>`},
    {h:'Bases de datos', h_en:'Databases', html:`
      <table class="tbl">
        <tr><th>Servicio</th><th>Tipo</th><th>Palabras clave</th></tr>
        <tr><td><span class="svc">RDS</span></td><td>Relacional (SQL)</td><td>Administrada: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server. <b>Multi-AZ = alta disponibilidad</b> (standby); <b>read replicas = escalar lecturas</b>.</td></tr>
        <tr><td><span class="svc">Aurora</span></td><td>Relacional</td><td>Compatible MySQL/PostgreSQL, hasta 5x más rápida, nativa de nube. <b>Aurora Serverless</b> escala sola.</td></tr>
        <tr><td><span class="svc">DynamoDB</span></td><td>NoSQL (clave-valor)</td><td><b>Serverless</b>, latencia de milisegundos a cualquier escala. "NoSQL / escala masiva / serverless" → DynamoDB.</td></tr>
        <tr><td><span class="svc">ElastiCache</span></td><td>En memoria</td><td>Caché con <b>Redis o Memcached</b>: microsegundos, alivia la carga de la BD.</td></tr>
        <tr><td><span class="svc">Redshift</span></td><td>Data warehouse</td><td><b>Análisis/OLAP</b> sobre petabytes; consultas SQL complejas de BI. No es para transacciones.</td></tr>
        <tr><td><span class="svc">Neptune</span></td><td>Grafos</td><td>Relaciones complejas: redes sociales, recomendaciones, detección de fraude.</td></tr>
        <tr><td><span class="svc">DocumentDB</span></td><td>Documentos</td><td>Compatible con <b>MongoDB</b> (JSON).</td></tr>
        <tr><td><span class="svc">QLDB</span></td><td>Ledger</td><td>Registro <b>inmutable y verificable criptográficamente</b> (historial de cambios).</td></tr>
        <tr><td><span class="svc">Timestream</span></td><td>Series de tiempo</td><td>IoT, métricas, telemetría.</td></tr>
      </table>
      <div class="note tip"><b>OLTP vs OLAP:</b> transacciones del día a día → RDS/Aurora/DynamoDB; análisis histórico masivo para BI → Redshift.</div>`,
     html_en:`
      <table class="tbl">
        <tr><th>Service</th><th>Type</th><th>Keywords</th></tr>
        <tr><td><span class="svc">RDS</span></td><td>Relational (SQL)</td><td>Managed: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server. <b>Multi-AZ = high availability</b> (standby); <b>read replicas = scale reads</b>.</td></tr>
        <tr><td><span class="svc">Aurora</span></td><td>Relational</td><td>MySQL/PostgreSQL compatible, up to 5x faster, cloud-native. <b>Aurora Serverless</b> scales by itself.</td></tr>
        <tr><td><span class="svc">DynamoDB</span></td><td>NoSQL (key-value)</td><td><b>Serverless</b>, millisecond latency at any scale. "NoSQL / massive scale / serverless" → DynamoDB.</td></tr>
        <tr><td><span class="svc">ElastiCache</span></td><td>In-memory</td><td>Cache with <b>Redis or Memcached</b>: microseconds, offloads the database.</td></tr>
        <tr><td><span class="svc">Redshift</span></td><td>Data warehouse</td><td><b>Analytics/OLAP</b> over petabytes; complex BI SQL queries. Not for transactions.</td></tr>
        <tr><td><span class="svc">Neptune</span></td><td>Graph</td><td>Complex relationships: social networks, recommendations, fraud detection.</td></tr>
        <tr><td><span class="svc">DocumentDB</span></td><td>Document</td><td><b>MongoDB</b>-compatible (JSON).</td></tr>
        <tr><td><span class="svc">QLDB</span></td><td>Ledger</td><td><b>Immutable, cryptographically verifiable</b> record (change history).</td></tr>
        <tr><td><span class="svc">Timestream</span></td><td>Time series</td><td>IoT, metrics, telemetry.</td></tr>
      </table>
      <div class="note tip"><b>OLTP vs OLAP:</b> day-to-day transactions → RDS/Aurora/DynamoDB; massive historical analytics for BI → Redshift.</div>`},
    {h:'Redes: VPC, Route 53 y CloudFront', h_en:'Networking: VPC, Route 53, and CloudFront', html:`
      <table class="tbl">
        <tr><th>Componente</th><th>Qué hace</th></tr>
        <tr><td><span class="svc">VPC</span></td><td>Tu <b>red privada virtual</b> en AWS: subredes públicas (con ruta a internet) y privadas.</td></tr>
        <tr><td><b>Internet Gateway</b></td><td>Puerta de la VPC hacia internet.</td></tr>
        <tr><td><b>NAT Gateway</b></td><td>Permite que subredes <b>privadas salgan</b> a internet sin ser accesibles desde fuera.</td></tr>
        <tr><td><b>Security Group</b></td><td>Firewall <b>de instancia</b>: stateful, solo reglas de PERMITIR.</td></tr>
        <tr><td><b>Network ACL</b></td><td>Firewall <b>de subred</b>: stateless, reglas de permitir Y denegar.</td></tr>
        <tr><td><b>VPC Peering</b></td><td>Conecta dos VPCs de forma privada.</td></tr>
        <tr><td><span class="svc">Direct Connect</span></td><td>Conexión <b>física dedicada</b> on-premises ↔ AWS: ancho de banda consistente, no pasa por internet.</td></tr>
        <tr><td><b>Site-to-Site VPN</b></td><td>Túnel <b>cifrado por internet</b> on-premises ↔ AWS: rápido de montar, más barato que Direct Connect.</td></tr>
        <tr><td><span class="svc">Route 53</span></td><td><b>DNS</b> administrado: registra dominios, enruta con políticas (latencia, geolocalización, failover). SLA 100%.</td></tr>
        <tr><td><span class="svc">CloudFront</span></td><td><b>CDN</b>: cachea contenido en edge locations para servirlo con baja latencia global. Incluye protección Shield Standard.</td></tr>
        <tr><td><span class="svc">Global Accelerator</span></td><td>Mejora el rendimiento de apps <b>no cacheables</b> enrutando por la red global de AWS con IPs estáticas.</td></tr>
        <tr><td><span class="svc">API Gateway</span></td><td>Crear, publicar y proteger <b>APIs</b> a cualquier escala (típico frente a Lambda).</td></tr>
      </table>
      <div class="note"><b>Trampa SG vs NACL:</b> Security Group = instancia, stateful, solo allow; NACL = subred, stateless, allow+deny. Y <b>Direct Connect ≠ VPN</b>: dedicado físico vs túnel cifrado por internet.</div>`,
     html_en:`
      <table class="tbl">
        <tr><th>Component</th><th>What it does</th></tr>
        <tr><td><span class="svc">VPC</span></td><td>Your <b>virtual private network</b> on AWS: public subnets (with an internet route) and private ones.</td></tr>
        <tr><td><b>Internet Gateway</b></td><td>The VPC's door to the internet.</td></tr>
        <tr><td><b>NAT Gateway</b></td><td>Lets <b>private subnets reach out</b> to the internet without being reachable from outside.</td></tr>
        <tr><td><b>Security Group</b></td><td><b>Instance-level</b> firewall: stateful, ALLOW rules only.</td></tr>
        <tr><td><b>Network ACL</b></td><td><b>Subnet-level</b> firewall: stateless, allow AND deny rules.</td></tr>
        <tr><td><b>VPC Peering</b></td><td>Connects two VPCs privately.</td></tr>
        <tr><td><span class="svc">Direct Connect</span></td><td><b>Dedicated physical</b> connection on-premises ↔ AWS: consistent bandwidth, bypasses the internet.</td></tr>
        <tr><td><b>Site-to-Site VPN</b></td><td><b>Encrypted tunnel over the internet</b> on-premises ↔ AWS: quick to set up, cheaper than Direct Connect.</td></tr>
        <tr><td><span class="svc">Route 53</span></td><td>Managed <b>DNS</b>: registers domains, routes with policies (latency, geolocation, failover). 100% SLA.</td></tr>
        <tr><td><span class="svc">CloudFront</span></td><td><b>CDN</b>: caches content at edge locations to serve it with low global latency. Includes Shield Standard protection.</td></tr>
        <tr><td><span class="svc">Global Accelerator</span></td><td>Improves performance of <b>non-cacheable</b> apps by routing over the AWS global network with static IPs.</td></tr>
        <tr><td><span class="svc">API Gateway</span></td><td>Create, publish, and secure <b>APIs</b> at any scale (typically in front of Lambda).</td></tr>
      </table>
      <div class="note"><b>SG vs NACL trap:</b> Security Group = instance, stateful, allow only; NACL = subnet, stateless, allow+deny. And <b>Direct Connect ≠ VPN</b>: dedicated physical vs encrypted tunnel over the internet.</div>`},
    {h:'Integración, IaC, desarrollo y monitoreo', h_en:'Integration, IaC, developer tools, and monitoring', html:`
      <p><b>Desacoplar aplicaciones (mensajería):</b></p>
      <ul>
        <li><span class="svc">SQS</span>: <b>colas</b> de mensajes — un consumidor procesa cada mensaje; desacopla y absorbe picos.</li>
        <li><span class="svc">SNS</span>: <b>pub/sub</b> — un mensaje a muchos suscriptores (email, SMS, Lambda, SQS).</li>
        <li><span class="svc">EventBridge</span>: bus de <b>eventos</b> entre servicios AWS y apps SaaS.</li>
        <li><span class="svc">Step Functions</span>: <b>orquesta flujos de trabajo</b> serverless de varios pasos con lógica visual.</li>
      </ul>
      <p><b>Infraestructura como código y despliegue:</b></p>
      <ul>
        <li><span class="svc">CloudFormation</span>: plantillas JSON/YAML que despliegan infraestructura <b>repetible en cualquier región/cuenta</b>.</li>
        <li><span class="svc">CDK</span>: define infraestructura con <b>lenguajes de programación</b> (Python, TypeScript...).</li>
        <li><span class="svc">CodePipeline / CodeBuild / CodeDeploy</span>: CI/CD administrado.</li>
        <li><span class="svc">Systems Manager</span>: administra flotas de instancias (parcheo, <b>Session Manager</b> sin SSH, Parameter Store).</li>
      </ul>
      <p><b>Formas de interactuar con AWS:</b> Consola (web, humano), <b>CLI</b> (terminal/scripts), <b>SDKs</b> (desde código), IaC. Las APIs están detrás de todo.</p>
      <p><b>Monitoreo y observabilidad:</b></p>
      <ul>
        <li><span class="svc">CloudWatch</span>: <b>métricas, logs, alarmas y dashboards</b> ("CPU al 90% → alarma → Auto Scaling").</li>
        <li><span class="svc">CloudTrail</span>: auditoría de <b>llamadas API</b> (quién hizo qué).</li>
        <li><span class="svc">X-Ray</span>: <b>trazado distribuido</b> — sigue una petición a través de microservicios para hallar cuellos de botella.</li>
        <li><span class="svc">AWS Health Dashboard</span>: estado de los servicios AWS y eventos que afectan <b>tu</b> cuenta.</li>
      </ul>
      <p><b>Análisis e IA (los básicos que caen):</b> <span class="svc">Athena</span> (SQL directo sobre S3, serverless), <span class="svc">Glue</span> (ETL serverless), <span class="svc">Kinesis</span> (streaming en tiempo real), <span class="svc">QuickSight</span> (dashboards BI), <span class="svc">EMR</span> (big data Hadoop/Spark). IA: <span class="svc">Rekognition</span> (imágenes/video), <span class="svc">Comprehend</span> (texto), <span class="svc">Polly</span> (texto→voz), <span class="svc">Transcribe</span> (voz→texto), <span class="svc">Translate</span> (traducción), <span class="svc">Lex</span> (chatbots), <span class="svc">SageMaker</span> (ML personalizado), <span class="svc">Bedrock</span> (IA generativa).</p>`,
     html_en:`
      <p><b>Decoupling applications (messaging):</b></p>
      <ul>
        <li><span class="svc">SQS</span>: message <b>queues</b> — one consumer processes each message; decouples and absorbs spikes.</li>
        <li><span class="svc">SNS</span>: <b>pub/sub</b> — one message to many subscribers (email, SMS, Lambda, SQS).</li>
        <li><span class="svc">EventBridge</span>: <b>event</b> bus between AWS services and SaaS apps.</li>
        <li><span class="svc">Step Functions</span>: <b>orchestrates multi-step serverless workflows</b> with visual logic.</li>
      </ul>
      <p><b>Infrastructure as code and deployment:</b></p>
      <ul>
        <li><span class="svc">CloudFormation</span>: JSON/YAML templates that deploy <b>repeatable infrastructure in any region/account</b>.</li>
        <li><span class="svc">CDK</span>: define infrastructure with <b>programming languages</b> (Python, TypeScript...).</li>
        <li><span class="svc">CodePipeline / CodeBuild / CodeDeploy</span>: managed CI/CD.</li>
        <li><span class="svc">Systems Manager</span>: manages instance fleets (patching, <b>Session Manager</b> without SSH, Parameter Store).</li>
      </ul>
      <p><b>Ways to interact with AWS:</b> Console (web, human), <b>CLI</b> (terminal/scripts), <b>SDKs</b> (from code), IaC. APIs sit behind everything.</p>
      <p><b>Monitoring and observability:</b></p>
      <ul>
        <li><span class="svc">CloudWatch</span>: <b>metrics, logs, alarms, and dashboards</b> ("CPU at 90% → alarm → Auto Scaling").</li>
        <li><span class="svc">CloudTrail</span>: <b>API call</b> auditing (who did what).</li>
        <li><span class="svc">X-Ray</span>: <b>distributed tracing</b> — follows a request across microservices to find bottlenecks.</li>
        <li><span class="svc">AWS Health Dashboard</span>: AWS service status and events affecting <b>your</b> account.</li>
      </ul>
      <p><b>Analytics and AI (the basics that show up):</b> <span class="svc">Athena</span> (SQL directly on S3, serverless), <span class="svc">Glue</span> (serverless ETL), <span class="svc">Kinesis</span> (real-time streaming), <span class="svc">QuickSight</span> (BI dashboards), <span class="svc">EMR</span> (Hadoop/Spark big data). AI: <span class="svc">Rekognition</span> (images/video), <span class="svc">Comprehend</span> (text), <span class="svc">Polly</span> (text→speech), <span class="svc">Transcribe</span> (speech→text), <span class="svc">Translate</span> (translation), <span class="svc">Lex</span> (chatbots), <span class="svc">SageMaker</span> (custom ML), <span class="svc">Bedrock</span> (generative AI).</p>`},
  ]
},
{
  id:'d4',
  chip:'D4 · Facturación',
  chip_en:'D4 · Billing',
  title:'Dominio 4 · Facturación, Precios y Soporte (12%)',
  title_en:'Domain 4 · Billing, Pricing & Support (12%)',
  lead:'Modelos de precios, herramientas de costos, AWS Organizations y los planes de soporte. Pesa poco pero es fácil de puntear: son datos memorizables.',
  lead_en:'Pricing models, cost tools, AWS Organizations, and the support plans. Low weight but easy points: it is memorizable material.',
  sections:[
    {h:'Modelos de precios de cómputo', h_en:'Compute pricing models', html:`
      <table class="tbl">
        <tr><th>Modelo</th><th>Cuándo conviene</th><th>Ahorro</th></tr>
        <tr><td><b>On-Demand</b></td><td>Cargas impredecibles o de corto plazo; sin compromiso. Pagas por segundo/hora.</td><td>—</td></tr>
        <tr><td><b>Savings Plans</b></td><td>Compromiso de <b>gasto por hora (USD/h) por 1 o 3 años</b>. Compute SP: flexible entre EC2, Fargate y Lambda.</td><td>hasta ~72%</td></tr>
        <tr><td><b>Reserved Instances</b></td><td>Compromiso de <b>instancia concreta por 1 o 3 años</b> (Standard o Convertible). Cargas estables (ej. una BD siempre encendida). Mayor descuento: 3 años, todo por adelantado.</td><td>hasta ~72%</td></tr>
        <tr><td><b>Spot Instances</b></td><td>Capacidad sobrante de AWS: AWS puede <b>interrumpirlas con 2 min de aviso</b>. Solo cargas tolerantes a interrupciones (batch, análisis, CI).</td><td>hasta ~90%</td></tr>
        <tr><td><b>Dedicated Hosts</b></td><td>Servidor <b>físico completo</b> para ti: licencias BYOL por socket/núcleo, cumplimiento estricto. Lo más caro.</td><td>—</td></tr>
        <tr><td><b>Dedicated Instances</b></td><td>Instancias en hardware no compartido con otros clientes (sin control del host físico).</td><td>—</td></tr>
      </table>
      <ul>
        <li><b>Transferencia de datos:</b> la entrada (ingress) a AWS es gratis; la <b>salida (egress) a internet se cobra</b>; entre AZs/regiones también se cobra.</li>
        <li><b>Capa gratuita (Free Tier):</b> siempre gratis (Lambda 1M invocaciones/mes, DynamoDB 25 GB), 12 meses gratis (EC2 t2/t3.micro 750 h/mes, S3 5 GB), y pruebas cortas (trials).</li>
      </ul>
      <div class="note tip"><b>Trampa:</b> "carga estable 24/7 por años" → Reserved/Savings Plans; "batch que puede reiniciarse" → Spot; "picos impredecibles" → On-Demand; "licencias por servidor físico / requisito regulatorio de hardware dedicado" → Dedicated Hosts.</div>`,
     html_en:`
      <table class="tbl">
        <tr><th>Model</th><th>When it fits</th><th>Savings</th></tr>
        <tr><td><b>On-Demand</b></td><td>Unpredictable or short-term workloads; no commitment. Pay per second/hour.</td><td>—</td></tr>
        <tr><td><b>Savings Plans</b></td><td>Commitment to an <b>hourly spend (USD/h) for 1 or 3 years</b>. Compute SP: flexible across EC2, Fargate, and Lambda.</td><td>up to ~72%</td></tr>
        <tr><td><b>Reserved Instances</b></td><td>Commitment to a <b>specific instance for 1 or 3 years</b> (Standard or Convertible). Steady workloads (e.g. an always-on DB). Biggest discount: 3 years, all upfront.</td><td>up to ~72%</td></tr>
        <tr><td><b>Spot Instances</b></td><td>AWS spare capacity: AWS can <b>interrupt them with a 2-minute warning</b>. Only interruption-tolerant workloads (batch, analytics, CI).</td><td>up to ~90%</td></tr>
        <tr><td><b>Dedicated Hosts</b></td><td>A <b>whole physical server</b> for you: BYOL per-socket/core licenses, strict compliance. The most expensive.</td><td>—</td></tr>
        <tr><td><b>Dedicated Instances</b></td><td>Instances on hardware not shared with other customers (without control of the physical host).</td><td>—</td></tr>
      </table>
      <ul>
        <li><b>Data transfer:</b> ingress into AWS is free; <b>egress to the internet is charged</b>; between AZs/regions is charged too.</li>
        <li><b>Free Tier:</b> always free (Lambda 1M invocations/month, DynamoDB 25 GB), 12 months free (EC2 t2/t3.micro 750 h/month, S3 5 GB), and short trials.</li>
      </ul>
      <div class="note tip"><b>Trap:</b> "steady 24/7 workload for years" → Reserved/Savings Plans; "restartable batch" → Spot; "unpredictable spikes" → On-Demand; "per-physical-server licenses / dedicated hardware compliance" → Dedicated Hosts.</div>`},
    {h:'Herramientas de costos', h_en:'Cost tools', html:`
      <table class="tbl">
        <tr><th>Herramienta</th><th>Para qué</th></tr>
        <tr><td><span class="svc">Cost Explorer</span></td><td><b>Visualizar y analizar</b> el gasto histórico (13 meses) y pronosticar 12 meses. "¿En qué se me fue el dinero?"</td></tr>
        <tr><td><span class="svc">AWS Budgets</span></td><td>Crear <b>presupuestos con alertas</b> (por costo, uso, RI/SP) que avisan al acercarse o superar el umbral.</td></tr>
        <tr><td><span class="svc">Cost &amp; Usage Report (CUR)</span></td><td>El informe <b>más detallado</b> (por hora/recurso), exportable a S3 para analizar con Athena/QuickSight.</td></tr>
        <tr><td><span class="svc">Pricing Calculator</span></td><td><b>Estimar el costo ANTES</b> de desplegar una arquitectura.</td></tr>
        <tr><td><span class="svc">Cost Anomaly Detection</span></td><td>Detecta con ML <b>gastos inusuales</b> y te alerta.</td></tr>
        <tr><td><b>Etiquetas de asignación de costos</b></td><td>Tags (ej. proyecto, departamento) para <b>desglosar la factura por equipo/proyecto</b>.</td></tr>
        <tr><td><span class="svc">Compute Optimizer</span></td><td>Recomienda con ML el <b>tamaño óptimo</b> de recursos (right-sizing).</td></tr>
      </table>
      <div class="note"><b>Trampa:</b> estimar ANTES de migrar → Pricing Calculator; analizar DESPUÉS → Cost Explorer; alertar en tiempo real → Budgets; el detalle máximo para auditoría → CUR.</div>`,
     html_en:`
      <table class="tbl">
        <tr><th>Tool</th><th>What for</th></tr>
        <tr><td><span class="svc">Cost Explorer</span></td><td><b>Visualize and analyze</b> historical spend (13 months) and forecast 12 months. "Where did my money go?"</td></tr>
        <tr><td><span class="svc">AWS Budgets</span></td><td>Create <b>budgets with alerts</b> (by cost, usage, RI/SP) that notify you when approaching or exceeding the threshold.</td></tr>
        <tr><td><span class="svc">Cost &amp; Usage Report (CUR)</span></td><td>The <b>most detailed</b> report (hourly/per resource), exportable to S3 for analysis with Athena/QuickSight.</td></tr>
        <tr><td><span class="svc">Pricing Calculator</span></td><td><b>Estimate cost BEFORE</b> deploying an architecture.</td></tr>
        <tr><td><span class="svc">Cost Anomaly Detection</span></td><td>Uses ML to detect <b>unusual spend</b> and alert you.</td></tr>
        <tr><td><b>Cost allocation tags</b></td><td>Tags (e.g. project, department) to <b>break the bill down by team/project</b>.</td></tr>
        <tr><td><span class="svc">Compute Optimizer</span></td><td>ML-based recommendations for the <b>optimal resource size</b> (right-sizing).</td></tr>
      </table>
      <div class="note"><b>Trap:</b> estimate BEFORE migrating → Pricing Calculator; analyze AFTER → Cost Explorer; real-time alerts → Budgets; maximum detail for audit → CUR.</div>`},
    {h:'AWS Organizations y multi-cuenta', h_en:'AWS Organizations and multi-account', html:`
      <ul>
        <li><span class="svc">AWS Organizations</span>: administra <b>varias cuentas</b> centralizadamente con unidades organizativas (OUs).</li>
        <li><b>Facturación consolidada:</b> una sola factura para todas las cuentas, y el uso se <b>agrega para alcanzar descuentos por volumen</b> antes; las RIs/Savings Plans se comparten entre cuentas.</li>
        <li><b>SCPs (Service Control Policies):</b> ponen <b>límites máximos de permisos</b> a cuentas/OUs enteras (ej. "nadie en esta OU puede salir de la región eu-west-1"). No otorgan permisos, solo los limitan.</li>
        <li><span class="svc">Control Tower</span>: monta el entorno multi-cuenta con buenas prácticas y guardrails automáticos.</li>
      </ul>`,
     html_en:`
      <ul>
        <li><span class="svc">AWS Organizations</span>: manage <b>multiple accounts</b> centrally with organizational units (OUs).</li>
        <li><b>Consolidated billing:</b> a single bill for all accounts, and usage is <b>aggregated to reach volume discounts</b> sooner; RIs/Savings Plans are shared across accounts.</li>
        <li><b>SCPs (Service Control Policies):</b> set <b>maximum permission boundaries</b> for whole accounts/OUs (e.g. "nobody in this OU can leave eu-west-1"). They don't grant permissions, only limit them.</li>
        <li><span class="svc">Control Tower</span>: sets up the multi-account environment with best practices and automatic guardrails.</li>
      </ul>`},
    {h:'Planes de soporte y recursos', h_en:'Support plans and resources', html:`
      <table class="tbl">
        <tr><th>Plan</th><th>Precio</th><th>Qué incluye (clave)</th></tr>
        <tr><td><b>Basic</b></td><td>Gratis</td><td>Solo soporte de cuenta/facturación, documentación, re:Post, Trusted Advisor básico (checks core) y Health Dashboard.</td></tr>
        <tr><td><b>Developer</b></td><td>desde $29/mes</td><td>Email en horario laboral; guía general &lt;24h, sistema deteriorado &lt;12h. Entornos de prueba/desarrollo.</td></tr>
        <tr><td><b>Business</b></td><td>desde $100/mes</td><td>24/7 teléfono/chat/email, <b>Trusted Advisor completo</b>, producción deteriorada &lt;4h, <b>producción caída &lt;1h</b>.</td></tr>
        <tr><td><b>Enterprise On-Ramp</b></td><td>desde $5,500/mes</td><td>Pool de asesores TAM, <b>negocio crítico caído &lt;30 min</b>.</td></tr>
        <tr><td><b>Enterprise</b></td><td>desde $15,000/mes</td><td><b>TAM designado</b> (Technical Account Manager), Concierge de facturación, <b>negocio crítico caído &lt;15 min</b>, Infrastructure Event Management.</td></tr>
      </table>
      <p><b>Otros recursos que caen en el examen:</b></p>
      <ul>
        <li><span class="svc">AWS Marketplace</span>: catálogo digital de <b>software de terceros</b> listo para desplegar (se factura junto con AWS).</li>
        <li><b>AWS Partner Network (APN):</b> partners consultores y de software certificados.</li>
        <li><b>AWS Professional Services:</b> el equipo de consultoría de AWS para grandes migraciones.</li>
        <li><b>AWS re:Post:</b> comunidad de preguntas y respuestas (reemplazó a los foros).</li>
        <li><b>AWS Prescriptive Guidance / Whitepapers / Quick Starts:</b> guías y arquitecturas de referencia.</li>
        <li><b>AWS Solutions Architects:</b> ayudan a diseñar arquitecturas correctas.</li>
      </ul>
      <div class="note tip"><b>Trampa clásica:</b> "necesita TAM designado" → Enterprise; "producción caída &lt;1h y Trusted Advisor completo al menor costo" → Business; "solo facturación" → Basic (gratis). Trusted Advisor completo empieza en <b>Business</b>.</div>`,
     html_en:`
      <table class="tbl">
        <tr><th>Plan</th><th>Price</th><th>Key inclusions</th></tr>
        <tr><td><b>Basic</b></td><td>Free</td><td>Account/billing support only, documentation, re:Post, basic Trusted Advisor (core checks), and Health Dashboard.</td></tr>
        <tr><td><b>Developer</b></td><td>from $29/mo</td><td>Email during business hours; general guidance &lt;24h, impaired system &lt;12h. Test/dev environments.</td></tr>
        <tr><td><b>Business</b></td><td>from $100/mo</td><td>24/7 phone/chat/email, <b>full Trusted Advisor</b>, impaired production &lt;4h, <b>production down &lt;1h</b>.</td></tr>
        <tr><td><b>Enterprise On-Ramp</b></td><td>from $5,500/mo</td><td>Pool of TAM advisors, <b>business-critical down &lt;30 min</b>.</td></tr>
        <tr><td><b>Enterprise</b></td><td>from $15,000/mo</td><td><b>Designated TAM</b> (Technical Account Manager), billing Concierge, <b>business-critical down &lt;15 min</b>, Infrastructure Event Management.</td></tr>
      </table>
      <p><b>Other resources that show up on the exam:</b></p>
      <ul>
        <li><span class="svc">AWS Marketplace</span>: digital catalog of <b>third-party software</b> ready to deploy (billed together with AWS).</li>
        <li><b>AWS Partner Network (APN):</b> certified consulting and software partners.</li>
        <li><b>AWS Professional Services:</b> AWS's consulting team for large migrations.</li>
        <li><b>AWS re:Post:</b> Q&amp;A community (replaced the forums).</li>
        <li><b>AWS Prescriptive Guidance / Whitepapers / Quick Starts:</b> guides and reference architectures.</li>
        <li><b>AWS Solutions Architects:</b> help design the right architectures.</li>
      </ul>
      <div class="note tip"><b>Classic trap:</b> "needs a designated TAM" → Enterprise; "production down &lt;1h and full Trusted Advisor at lowest cost" → Business; "billing only" → Basic (free). Full Trusted Advisor starts at <b>Business</b>.</div>`},
  ]
},
];
