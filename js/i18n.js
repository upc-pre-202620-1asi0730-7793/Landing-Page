(function () {
  'use strict';

  const translations = {
    en_US: {

      'page.title': 'Noxway | Your safe path while the city sleeps',
      'page.meta_desc': 'Digital safety and well-being platform by Noctiva for night-shift workers: safe route check-in, trusted contacts companion view, 24h map, and sleep health.',
      'a11y.skip': 'Skip to main content',

      'nav.brand_tagline': 'by Noctiva',
      'nav.home': 'Home',
      'nav.protocol': 'Protocol',
      'nav.ecosystem': 'Ecosystem',
      'nav.videos': 'Videos',
      'nav.testimonials': 'Testimonials',
      'nav.pricing': 'Plans',
      'nav.faq': 'FAQ',
      'nav.register': 'Sign Up',

      'hero.title_line1': 'Your safe path,',
      'hero.title_line2': 'while the city sleeps.',
      'hero.subtitle': 'Active route check-in, smart incident detection, and a 24-hour open services network designed for night-shift workers and their loved ones\' peace of mind.',
      'hero.cta_worker': 'Protect My Commute',
      'hero.cta_companion': "I'm a Trusted Contact",
      'hero.scroll': 'Scroll down',

      'protocol.tag': 'Night Protocol',
      'protocol.title_line1': 'From shift start',
      'protocol.title_line2': 'to safe arrival.',
      'protocol.step1_title': 'Connect',
      'protocol.step1_desc': 'Link your loved ones with a single tap, without intrusive configurations or complex sign-ups.',
      'protocol.step2_title': 'Initiate',
      'protocol.step2_desc': 'Trigger the safe-commute check-in with your destination and estimated arrival time upon leaving your shift.',
      'protocol.step3_title': 'Monitor',
      'protocol.step3_desc': 'Passive background companion mode with smart anomaly detection and tolerance margin for normal transit delays.',
      'protocol.step4_title': 'Confirm',
      'protocol.step4_desc': 'Log your safe arrival with one tap, rate the route safety to help your peers, and rest with total peace of mind.',

      'ecosystem.tag': 'Noxway Ecosystem / 2026',
      'ecosystem.title_line1': 'Technology built',
      'ecosystem.title_line2': 'for those who stay awake.',
      'ecosystem.card1_pill': 'Safe Route',
      'ecosystem.card1_title': 'Route & Commute Check-In',
      'ecosystem.card1_desc': 'Active monitoring during your night travel with dynamic ETA calculations and community route safety ratings.',
      'ecosystem.card2_pill': '24h Geolocation',
      'ecosystem.card2_title': '24-Hour Community Map',
      'ecosystem.card2_desc': 'Verified directory of open late-night pharmacies, illuminated gas stations, and crowd-sourced hazard warnings.',
      'ecosystem.card3_pill': 'Active Alerts',
      'ecosystem.card3_title': 'Smart Alerts & Companion View',
      'ecosystem.card3_desc': 'Automatic possible-incident flagging on unconfirmed delays with immediate notifications to your trusted circle.',
      'ecosystem.card4_pill': 'Health & Benefits',
      'ecosystem.card4_title': 'Rest Log & Collective Benefits',
      'ecosystem.card4_desc': 'Circadian sleep hygiene tracker tailored for rotating shifts, personal accident protection, and negotiated discounts.',

      'videos.tag': 'Noctiva / Multimedia Showcase',
      'videos.title_line1': 'Engineering in action:',
      'videos.title_line2': 'Platform & Team Videos.',
      'videos.subtitle': 'Discover how Noxway works in real scenarios and meet the software engineering team behind this social-impact initiative.',
      'videos.tab_product': 'About the Product (Demo)',
      'videos.tab_team': 'About the Team (Engineering)',
      'videos.prod_badge': 'Official Product Tour',
      'videos.prod_title': 'Noxway: End-to-End Safety for Night-Shift Workers',
      'videos.prod_desc': 'A comprehensive overview of Noxway\'s value proposition, safe-trip check-in workflows, real-time companion view, and verified 24h nighttime points of interest in Lima.',
      'videos.prod_time': 'Duration: 2 min 45 sec',
      'videos.prod_watch_yt': 'Watch on YouTube',
      'videos.prod_watch_stream': 'Microsoft Stream',
      'videos.team_badge': 'Academic & Agile Retrospective',
      'videos.team_title': 'Team Noctiva: Process, Values & ABET Outcome 3',
      'videos.team_desc': 'Meet the Noctiva engineering team. Learn about our design thinking process, Lean UX experiments, and collective commitment to user well-being.',
      'videos.team_time': 'Duration: 5 min 15 sec',
      'videos.team_watch_yt': 'Watch on YouTube',
      'videos.team_watch_stream': 'Microsoft Stream',

      'testimonials.tag': 'TESTIMONIALS / VOICES OF THE NIGHT',
      'testimonials.prev': 'Previous testimonial',
      'testimonials.next': 'Next testimonial',

      'pricing.tag': 'NOXWAY / PLANS 2026',
      'pricing.title_line1': 'Tailored protection,',
      'pricing.title_line2': 'every single night.',
      'pricing.monthly': 'Monthly',
      'pricing.annual': 'Annual',
      'pricing.discount': '-25%',
      'pricing.billing_note': 'No lock-in contracts. Switch or cancel your subscription at any time.',
      'pricing.plan1_name': 'Essential Plan',
      'pricing.plan1_desc': 'Individual companion mode to begin commuting with reassurance during your night shifts.',
      'pricing.plan1_sub_m': 'Free forever',
      'pricing.plan1_sub_a': 'Free forever',
      'pricing.plan1_f1': 'Commute check-in with 1 trusted contact',
      'pricing.plan1_f2': 'Full access to 24h Community Map',
      'pricing.plan1_f3': 'Instant manual SOS emergency trigger',
      'pricing.plan2_name': 'Sentinel Pro',
      'pricing.plan2_badge': 'Recommended',
      'pricing.plan2_desc': 'Priority active monitoring for workers who walk dark, deserted streets on a daily basis.',
      'pricing.plan2_sub_m': 'Standard monthly billing',
      'pricing.plan2_sub_a': 'Billed S/. 110 annually (-25%)',
      'pricing.plan2_f1': 'Smart route deviation & delay detection',
      'pricing.plan2_f2': 'Unlimited trusted contacts with Companion View',
      'pricing.plan2_f3': 'Automated WhatsApp alerts without app install',
      'pricing.plan3_name': 'Family & Crew',
      'pricing.plan3_desc': 'Shared protection for healthcare teams, security guard squads, or worker family units.',
      'pricing.plan3_sub_m': 'Shared monthly billing',
      'pricing.plan3_sub_a': 'Billed S/. 240 annually (-20%)',
      'pricing.plan3_f1': 'Up to 5 active worker profiles in sync',
      'pricing.plan3_f2': 'Priority dispatch link with Lima city patrols',
      'pricing.plan3_f3': 'Shared sleep tracker and group route reports',
      'pricing.summary_label': 'Selected plan:',
      'pricing.summary_cta_prefix': 'Get Started with ',

      'faq.tag': 'NOXWAY / NIGHT FAQ',
      'faq.title_line1': 'Clear answers,',
      'faq.title_line2': 'zero fine print.',
      'faq.desc': 'Co-designed with Lima\'s security guards, nurses, and delivery riders. Absolute transparency for every kilometer of your journey.',
      'faq.trust1_title': 'End-to-End Encryption',
      'faq.trust1_sub': 'Your coordinates are never sold or rented to advertisers.',
      'faq.trust2_title': '100% Ad-Free Experience',
      'faq.trust2_sub': 'No tracking cookies or disruptive promotional banners.',
      'faq.trust3_title': 'District Community Network',
      'faq.trust3_sub': 'Continuous 24/7 collaborative verification.',
      'faq.q1': 'Does Noxway track my GPS location 24/7 or only during my active commute?',
      'faq.a1': 'Your privacy is non-negotiable. Monitoring is ONLY active when you manually trigger your check-in upon clocking out and automatically shuts down the second you confirm safe arrival at your home.',
      'faq.q2': 'Do my trusted contacts need to install an app to accompany me?',
      'faq.a2': 'No app installation or payment is required for your companions. They receive an encrypted web view link via WhatsApp/SMS that opens seamlessly on any mobile or desktop browser without registering.',
      'faq.q3': 'What happens if my phone runs out of battery or loses cellular signal on my route?',
      'faq.a3': 'Noxway incorporates signal-loss tolerance buffers tuned for Lima\'s topography. If no activity is received after your ETA expires, the system alerts your contacts sharing the last verified GPS location and elapsed time.',
      'faq.q4': 'How are 24-hour businesses and stops verified on the Community Map?',
      'faq.a4': 'The map combines real-time ratings from verified night workers with operational validations of 24h services (on-duty drugstores, illuminated fuel stations, and local municipal security booths).',
      'faq.q5': 'Does the mobile application consume high battery or mobile data during the night?',
      'faq.a5': 'No. Noxway uses lightweight pulse telemetry using under 15 megabytes per month. Energy optimization ensures battery drain remains under 3% over an 8-to-12 hour work shift.',
      'faq.q6': 'Does the service operate in all districts across Lima and Callao?',
      'faq.a6': 'Yes. Coverage encompasses all districts of Metropolitan Lima and the Constitutional Province of Callao, with high-density crowdsourced checkpoints in Lima North, Lima South, Lima East, and Downtown Lima.',

      'contact.tag': 'NOCTIVA / 24H ACTIVE NETWORK',
      'contact.title_line1': 'Let\'s walk together',
      'contact.title_line2': 'while the city sleeps.',
      'contact.desc': 'Get prioritized early access to our platform and secure every step of your nighttime commute.',
      'contact.name_label': 'Full Name',
      'contact.name_ph': 'e.g., Jorge Luis Huamán',
      'contact.info_label': 'Mobile Phone or Email',
      'contact.info_ph': 'user@example.com or 987 654 321',
      'contact.role_label': 'What is your role?',
      'contact.role_default': 'Select your profile...',
      'contact.role_worker': 'I am a night-shift worker (security, health, delivery, etc.)',
      'contact.role_companion': 'I am a trusted contact (family member or partner)',
      'contact.plan_pill': 'Requesting access: ',
      'contact.submit': 'Join the Safe Network',
      'contact.submitting': 'Confirming access...',
      'contact.micro1': 'Active 24-hour monitoring',
      'contact.micro2': 'Instant validation & response',
      'contact.feedback_error': 'Please fill in all required fields to request your safe access.',
      'contact.feedback_success': 'Welcome to Noxway\'s active network! Your access has been registered. Your 24h companion channel is ready.',

      'footer.brand_tagline': 'by Noctiva',
      'footer.brand_desc': 'Comprehensive nighttime safety ecosystem, active commute monitoring, and 24h community network for the workforce keeping Metropolitan Lima alive.',
      'footer.col_nav': 'Navigation',
      'footer.col_platform': 'Platform',
      'footer.col_coverage': 'Coverage',
      'footer.coverage_desc': 'Metropolitan Lima & Callao · Active monitoring for late-night and dawn shifts.',
      'footer.status': '24h Services Operational',
      'footer.terms': 'Terms of Service',
      'footer.terms_ethics': 'Code of Ethics & Terms of Service (ACM/IEEE · CIP)',
      'footer.copy': '© 2026 Noxway by Noctiva. All rights reserved.',
      'footer.academic': 'Comprehensive nighttime safety, commute monitoring, and 24h community network.',

      'terms.badge': 'Regulatory Compliance & Ethics',
      'terms.title': 'Terms of Service & Code of Ethics',
      'terms.intro': 'This agreement governs the use of Noxway by Noctiva. It explicitly embodies the professional and ethical standards prescribed by the ACM/IEEE Software Engineering Code of Ethics and the Colegio de Ingenieros del Perú (CIP).',
      'terms.sec1_h': '1. Public Interest & Human Well-Being (ACM/IEEE Principle 1 / CIP Art. 1)',
      'terms.sec1_p': 'Noctiva commits to engineering software that preserves the physical integrity, dignity, and peace of mind of night-shift workers and their families. All algorithmic decisions prioritize user safety above commercial gain or engagement metrics.',
      'terms.sec2_h': '2. Geolocation Privacy & Restricted Data Collection (ACM/IEEE Principle 2 & 3)',
      'terms.sec2_p': 'User telemetry is collected strictly on an opt-in basis and exclusively while a commute check-in is active. Once safe arrival is confirmed, tracking terminates immediately. Coordinate logs are encrypted, never sold, and never shared with third-party advertisers.',
      'terms.sec3_h': '3. Companion View & Consent Protocols',
      'terms.sec3_p': 'Trusted contacts are invited exclusively by the worker. The companion view provides status visibility without invasive surveillance. Both parties may revoke permissions at any moment without penalty.',
      'terms.sec4_h': '4. Non-Replacement of Emergency Services (ACM/IEEE Principle 4)',
      'terms.sec4_p': 'Noxway is a preventative and mutual-aid tool. It does not replace official national emergency response authorities (PNP 105, Bomberos 116, SAMU 106). In life-threatening emergencies, users are urged to contact emergency dispatch directly.',
      'terms.sec5_h': '5. Open-Source Transparency & Academic Integrity (CIP)',
      'terms.sec5_p': 'This project complies with open-source licensing principles, rigorous documentation standards, and ethical peer review in accordance with international software engineering guidelines.',
      'terms.close': 'I Understand & Accept'
    },

    es_419: {

      'page.title': 'Noxway | Tu camino seguro mientras la ciudad duerme',
      'page.meta_desc': 'Plataforma digital para trabajadores nocturnos de Noctiva: check-in de trayecto seguro, contactos de confianza, mapa 24h y bienestar del sueño.',
      'a11y.skip': 'Saltar al contenido principal',

      'nav.brand_tagline': 'by Noctiva',
      'nav.home': 'Inicio',
      'nav.protocol': 'Protocolo',
      'nav.ecosystem': 'Ecosistema',
      'nav.videos': 'Videos',
      'nav.testimonials': 'Testimonios',
      'nav.pricing': 'Planes',
      'nav.faq': 'FAQ',
      'nav.register': 'Registrarse',

      'hero.title_line1': 'Tu camino seguro,',
      'hero.title_line2': 'mientras la ciudad duerme.',
      'hero.subtitle': 'Check-in de trayecto activo, detección inteligente de incidentes y red de servicios abiertos 24h para trabajadores nocturnos y la tranquilidad de sus familias.',
      'hero.cta_worker': 'Proteger mi trayecto',
      'hero.cta_companion': 'Soy contacto de confianza',
      'hero.scroll': 'Desplázate',

      'protocol.tag': 'Protocolo Nocturno',
      'protocol.title_line1': 'Del inicio del turno',
      'protocol.title_line2': 'al regreso seguro.',
      'protocol.step1_title': 'Vincular',
      'protocol.step1_desc': 'Conecta a tus seres queridos mediante un enlace simple, sin configuraciones invasivas ni registros complejos.',
      'protocol.step2_title': 'Iniciar',
      'protocol.step2_desc': 'Activa el check-in de trayecto seguro con destino y tiempo estimado al salir de tu jornada laboral.',
      'protocol.step3_title': 'Monitorear',
      'protocol.step3_desc': 'Acompañamiento pasivo con detección automática de incidentes y margen de tolerancia ante demoras habituales.',
      'protocol.step4_title': 'Confirmar',
      'protocol.step4_desc': 'Registra tu llegada con un solo toque, califica la seguridad de la ruta transitada y descansa con tranquilidad.',

      'ecosystem.tag': 'Ecosistema Noxway / 2026',
      'ecosystem.title_line1': 'Tecnología pensada',
      'ecosystem.title_line2': 'para quienes no duermen.',
      'ecosystem.card1_pill': 'Ruta Segura',
      'ecosystem.card1_title': 'Check-In de Ruta & Trayecto',
      'ecosystem.card1_desc': 'Monitoreo activo durante tu desplazamiento nocturno con cálculo de tiempo estimado y calificación colaborativa de rutas.',
      'ecosystem.card2_pill': 'Geolocalización 24h',
      'ecosystem.card2_title': 'Mapa Comunitario 24 Horas',
      'ecosystem.card2_desc': 'Directorio colaborativo de farmacias, grifos y locales abiertos en la madrugada con reporte de puntos de riesgo.',
      'ecosystem.card3_pill': 'Alertas Activas',
      'ecosystem.card3_title': 'Alertas & Companion View',
      'ecosystem.card3_desc': 'Detección automática de posibles incidentes ante demoras no confirmadas y aviso inmediato a tus contactos de confianza.',
      'ecosystem.card4_pill': 'Salud & Beneficios',
      'ecosystem.card4_title': 'Bitácora de Descanso & Beneficios',
      'ecosystem.card4_desc': 'Monitoreo de higiene del sueño para turnos rotativos, seguro de accidentes y descuentos gremiales colectivos.',

      'videos.tag': 'Noctiva / Muestra Multimedia',
      'videos.title_line1': 'Ingeniería en acción:',
      'videos.title_line2': 'Videos del Producto y Equipo.',
      'videos.subtitle': 'Conoce cómo funciona Noxway en escenarios reales y descubre al equipo de ingeniería de software detrás de esta iniciativa social.',
      'videos.tab_product': 'About the Product (Demo)',
      'videos.tab_team': 'About the Team (Equipo)',
      'videos.prod_badge': 'Tour Oficial del Producto',
      'videos.prod_title': 'Noxway: Seguridad Integral para Trabajadores Nocturnos',
      'videos.prod_desc': 'Demostración de la propuesta de valor, flujo de check-in de trayectos seguros, panel de acompañamiento para familias y mapa 24h verificado en Lima.',
      'videos.prod_time': 'Duración: 2 min 45 seg',
      'videos.prod_watch_yt': 'Ver en YouTube',
      'videos.prod_watch_stream': 'Microsoft Stream',
      'videos.team_badge': 'Retrospectiva Ágil & Académica',
      'videos.team_title': 'Equipo Noctiva: Proceso, Valores y ABET Outcome 3',
      'videos.team_desc': 'Conoce al equipo de desarrollo e ingeniería de Noctiva. Explicación de metodologías ágiles, Lean UX y compromiso social con los trabajadores nocturnos.',
      'videos.team_time': 'Duración: 5 min 15 seg',
      'videos.team_watch_yt': 'Ver en YouTube',
      'videos.team_watch_stream': 'Microsoft Stream',

      'testimonials.tag': 'TESTIMONIOS / VOCES DE LA NOCHE',
      'testimonials.prev': 'Testimonio anterior',
      'testimonials.next': 'Testimonio siguiente',

      'pricing.tag': 'NOXWAY / PLANES 2026',
      'pricing.title_line1': 'Protección a tu medida,',
      'pricing.title_line2': 'cada noche.',
      'pricing.monthly': 'Mensual',
      'pricing.annual': 'Anual',
      'pricing.discount': '-25%',
      'pricing.billing_note': 'Sin contratos forzosos. Cancela o cambia de plan en cualquier momento.',
      'pricing.plan1_name': 'Plan Esencial',
      'pricing.plan1_desc': 'Acompañamiento individual para iniciar con tranquilidad en tu jornada nocturna.',
      'pricing.plan1_sub_m': 'Gratis para siempre',
      'pricing.plan1_sub_a': 'Gratis para siempre',
      'pricing.plan1_f1': 'Check-in de trayecto con 1 contacto',
      'pricing.plan1_f2': 'Acceso libre al Mapa Comunitario 24h',
      'pricing.plan1_f3': 'Botón de alerta SOS manual inmediata',
      'pricing.plan2_name': 'Centinela Pro',
      'pricing.plan2_badge': 'Recomendado',
      'pricing.plan2_desc': 'Monitoreo activo prioritario para quienes transitan calles desiertas a diario.',
      'pricing.plan2_sub_m': 'Facturación mensual estándar',
      'pricing.plan2_sub_a': 'Facturado S/. 110 al año (-25%)',
      'pricing.plan2_f1': 'Detección inteligente de desvíos y demoras',
      'pricing.plan2_f2': 'Red ilimitada de contactos con Companion View',
      'pricing.plan2_f3': 'Alertas por WhatsApp sin requerir app al contacto',
      'pricing.plan3_name': 'Cuadrilla Familiar',
      'pricing.plan3_desc': 'Protección compartida para equipos de salud, seguridad o grupos familiares.',
      'pricing.plan3_sub_m': 'Facturación mensual compartida',
      'pricing.plan3_sub_a': 'Facturado S/. 240 al año (-20%)',
      'pricing.plan3_f1': 'Hasta 5 perfiles activos con monitoreo sincronizado',
      'pricing.plan3_f2': 'Enlace preferencial con serenazgos de Lima',
      'pricing.plan3_f3': 'Bitácora de descanso y reporte grupal de rutas',
      'pricing.summary_label': 'Plan seleccionado:',
      'pricing.summary_cta_prefix': 'Empezar con ',

      'faq.tag': 'NOXWAY / FAQ NOCTURNO',
      'faq.title_line1': 'Preguntas sin',
      'faq.title_line2': 'letra pequeña.',
      'faq.desc': 'Diseñado junto a vigilantes, enfermeros y repartidores de Lima Metropolitana. Transparencia absoluta en cada kilómetro de tu trayecto.',
      'faq.trust1_title': 'Cifrado de extremo a extremo',
      'faq.trust1_sub': 'Tus rutas y coordenadas nunca se venden ni comparten.',
      'faq.trust2_title': '100% libre de publicidad',
      'faq.trust2_sub': 'Sin anuncios invasivos ni rastreadores de terceros.',
      'faq.trust3_title': 'Red comunitaria distrital',
      'faq.trust3_sub': 'Validación colaborativa continua las 24 horas.',
      'faq.q1': '¿Noxway comparte mi ubicación en todo momento o solo en mi trayecto?',
      'faq.a1': 'Tu privacidad es prioritaria. El monitoreo solo se activa cuando inicias manualmente tu check-in al salir del turno nocturno y se desconecta de manera inmediata y automática en el instante en que confirmas tu llegada segura a casa.',
      'faq.q2': '¿Mis contactos de confianza necesitan instalar la app para acompañarme?',
      'faq.a2': 'No necesitan instalar nada ni pagar ninguna suscripción. Tus acompañantes reciben un enlace web seguro vía WhatsApp o SMS que pueden visualizar en tiempo real desde cualquier navegador móvil o de escritorio, sin registrar cuentas ni ocupar memoria en su dispositivo.',
      'faq.q3': '¿Qué ocurre si me quedo sin batería o sin señal móvil en plena ruta?',
      'faq.a3': 'Noxway cuenta con algoritmos de tolerancia adaptados a las zonas con sombra de señal en Lima. Si el dispositivo no reporta actividad tras cumplirse el tiempo estimado de arribo, el sistema alerta preventivamente a tus contactos compartiendo la última coordenada GPS validada y el tiempo transcurrido.',
      'faq.q4': '¿Cómo se valida la seguridad de los locales y paraderos en el Mapa 24h?',
      'faq.a4': 'El mapa combina calificaciones colaborativas de usuarios verificados que transitan el turno noche con validación de puntos operativos 24h (farmacias con guardia, estaciones de servicio iluminadas y módulos de auxilio rápido o serenazgo distrital).',
      'faq.q5': '¿La aplicación consume muchos datos móviles o batería durante la noche?',
      'faq.a5': 'La aplicación utiliza un protocolo ligero de geolocalización por pulsos que consume menos de 15 megabytes al mes. Además, optimiza el consumo energético para que la batería se reduzca en menos del 3% a lo largo de una jornada nocturna habitual de 8 a 12 horas.',
      'faq.q6': '¿El servicio funciona en cualquier distrito de Lima y Callao?',
      'faq.a6': 'Sí. La cobertura abarca todos los distritos de Lima Metropolitana y la Provincia Constitucional del Callao, con atención focalizada en las rutas de transporte público nocturno y paraderos críticos de Lima Norte, Lima Sur, Lima Este y el Cercado.',

      'contact.tag': 'NOCTIVA / RED ACTIVA 24H',
      'contact.title_line1': 'Caminemos juntos',
      'contact.title_line2': 'mientras la ciudad duerme.',
      'contact.desc': 'Accede de forma prioritaria a la plataforma y mantén respaldado cada paso de tu trayecto nocturno.',
      'contact.name_label': 'Nombre completo',
      'contact.name_ph': 'Ej. Jorge Luis Huamán',
      'contact.info_label': 'Teléfono móvil o Correo',
      'contact.info_ph': 'ejemplo@correo.com o 987 654 321',
      'contact.role_label': '¿Cuál es tu rol?',
      'contact.role_default': 'Selecciona tu perfil...',
      'contact.role_worker': 'Soy trabajador nocturno (seguridad, salud, delivery, etc.)',
      'contact.role_companion': 'Soy contacto de confianza (familiar o pareja)',
      'contact.plan_pill': 'Solicitando acceso: ',
      'contact.submit': 'Unirme a la red segura',
      'contact.submitting': 'Confirmando acceso...',
      'contact.micro1': 'Monitoreo activo las 24 horas del día',
      'contact.micro2': 'Respuesta y validación inmediata',
      'contact.feedback_error': 'Por favor, completa los campos requeridos para solicitar tu acceso seguro.',
      'contact.feedback_success': '¡Bienvenido a la red activa de Noxway! Registro completado con éxito. Tu canal de acompañamiento 24h está listo.',

      'footer.brand_tagline': 'by Noctiva',
      'footer.brand_desc': 'Ecosistema integral de seguridad nocturna, monitoreo de trayectos y red comunitaria 24h para los trabajadores que mantienen en marcha Lima Metropolitana.',
      'footer.col_nav': 'Navegación',
      'footer.col_platform': 'Plataforma',
      'footer.col_coverage': 'Cobertura',
      'footer.coverage_desc': 'Lima Metropolitana y Callao · Monitoreo activo para turnos de noche y madrugada.',
      'footer.status': 'Servicios 24h operativos',
      'footer.terms': 'Términos y Condiciones',
      'footer.terms_ethics': 'Código Ético Profesional y Términos de Servicio (ACM/IEEE · CIP)',
      'footer.copy': '© 2026 Noxway by Noctiva. Todos los derechos reservados.',
      'footer.academic': 'Plataforma integral de seguridad, monitoreo de trayectos y red comunitaria 24 horas.',

      'terms.badge': 'Cumplimiento Normativo y Ética',
      'terms.title': 'Términos de Servicio y Código de Ética Profesional',
      'terms.intro': 'El presente acuerdo regula el uso de la plataforma Noxway desarrollada por Noctiva. Se encuentra alineado estrictamente con los principios del Código de Ética de Ingeniería de Software de ACM/IEEE y el Código Deontológico del Colegio de Ingenieros del Perú (CIP).',
      'terms.sec1_h': '1. Interés Público y Bienestar Humano (ACM/IEEE Principio 1 / CIP Art. 1)',
      'terms.sec1_p': 'Noctiva se compromete a priorizar la seguridad, dignidad e integridad física de los trabajadores nocturnos y sus familias por encima de cualquier interés comercial. Nuestras soluciones rechazan cualquier práctica que vulnere la tranquilidad del usuario.',
      'terms.sec2_h': '2. Privacidad de Geolocalización y Protección de Datos (ACM/IEEE Principios 2 y 3)',
      'terms.sec2_p': 'El monitoreo de ubicación por GPS opera exclusivamente mientras el usuario mantenga activo un check-in de trayecto. Al confirmar la llegada, el seguimiento cesa de inmediato. Las coordenadas nunca se comercializan ni se comparten con empresas de publicidad.',
      'terms.sec3_h': '3. Companion View y Consentimiento Informado',
      'terms.sec3_p': 'Los contactos de confianza son vinculados bajo la autorización explícita del trabajador nocturno. Ambos participantes pueden dar por finalizado el vínculo en cualquier momento garantizando el derecho a la privacidad.',
      'terms.sec4_h': '4. No Sustitución de Servicios de Emergencia (ACM/IEEE Principio 4)',
      'terms.sec4_p': 'Noxway es una herramienta preventiva y comunitaria. En situaciones de delito inminente o peligro vital, el usuario o acompañante debe comunicarse de inmediato con las autoridades oficiales del Estado peruano (PNP 105, Bomberos 116, SAMU 106).',
      'terms.sec5_h': '5. Transparencia y Responsabilidad Académica (CIP)',
      'terms.sec5_p': 'Iniciativa orientada a promover el rigor técnico, la trazabilidad del código y el compromiso con el desarrollo social bajo estándares de ingeniería de software y deontología profesional.',
      'terms.close': 'Entendido y Aceptar'
    }
  };

  const localizedTestimonies = {
    en_US: [
      {
        indexStr: '01',
        name: 'Jorge Luis Huamán',
        role: 'Private Security · 38 yrs old',
        quote: '“I used to leave at 6:00 a.m. dreading the desolate bus stop. Now I know which avenues are lit up and I return home without fear.”',
        location: 'Usual route: Los Olivos ⇄ Downtown Lima',
        metric: '100% of night commutes safely confirmed on time'
      },
      {
        indexStr: '02',
        name: 'Rosa Elena Paredes',
        role: 'Trusted Contact · 48 yrs old',
        quote: '“Staying awake all night waiting for news was exhausting. With the companion view, I have complete certainty my son got home safe.”',
        location: 'San Juan de Lurigancho · Mother of night worker',
        metric: '0 distress phone calls in the last 3 months'
      },
      {
        indexStr: '03',
        name: 'Valeria Ríos',
        role: 'On-Duty Nurse · 29 yrs old',
        quote: '“Finding a trustworthy open pharmacy or hot meal at 3:00 a.m. used to be impossible in Lima. The Noxway community protects all of us.”',
        location: 'Emergency Hospital · Central Lima',
        metric: 'Over 15 verified 24h services reported'
      }
    ],
    es_419: [
      {
        indexStr: '01',
        name: 'Jorge Luis Huamán',
        role: 'Seguridad privada · 38 años',
        quote: '«Antes salía a las 6:00 a.m. con el temor del paradero desierto. Ahora sé qué calles están iluminadas y regreso a casa sin miedo.»',
        location: 'Ruta habitual: Los Olivos ⇄ Cercado de Lima',
        metric: '100% de trayectos nocturnos confirmados a tiempo'
      },
      {
        indexStr: '02',
        name: 'Rosa Elena Paredes',
        role: 'Contacto de confianza · 48 años',
        quote: '«Esperar despierta de madrugada sin noticias era agotador. Con el panel de seguimiento tengo la certeza de que mi hijo llegó a salvo.»',
        location: 'San Juan de Lurigancho · Madre de trabajador nocturno',
        metric: '0 llamadas de angustia en los últimos 3 meses'
      },
      {
        indexStr: '03',
        name: 'Valeria Ríos',
        role: 'Enfermera de guardia · 29 años',
        quote: '«Encontrar una botica o comida confiable a las 3:00 a.m. era imposible en Lima. La comunidad de Noxway nos cuida a todos.»',
        location: 'Hospital de Emergencias · Lima Centro',
        metric: 'Más de 15 servicios nocturnos reportados y validados'
      }
    ]
  };

  let currentLang = 'en_US';

  function getTranslation(key, lang = currentLang) {
    if (translations[lang] && translations[lang][key] !== undefined) {
      return translations[lang][key];
    }
    if (translations['en_US'] && translations['en_US'][key] !== undefined) {
      return translations['en_US'][key];
    }
    return key;
  }

  function applyLanguage(lang) {
    if (!translations[lang]) {
      console.warn(`[Noxway i18n] Language ${lang} not found, falling back to en_US`);
      lang = 'en_US';
    }

    currentLang = lang;
    document.documentElement.lang = lang === 'en_US' ? 'en' : 'es';

    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = getTranslation(key, lang);
      if (val) {
        el.textContent = val;
      }
    });

    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = getTranslation(key, lang);
      if (val) {
        el.setAttribute('placeholder', val);
      }
    });

    const ariaLabelElements = document.querySelectorAll('[data-i18n-aria-label]');
    ariaLabelElements.forEach((el) => {
      const key = el.getAttribute('data-i18n-aria-label');
      const val = getTranslation(key, lang);
      if (val) {
        el.setAttribute('aria-label', val);
      }
    });

    const titleVal = getTranslation('page.title', lang);
    if (titleVal) document.title = titleVal;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const descVal = getTranslation('page.meta_desc', lang);
      if (descVal) metaDesc.setAttribute('content', descVal);
    }

    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach((btn) => {
      const targetLang = btn.getAttribute('data-lang');
      const isActive = targetLang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    try {
      localStorage.setItem('noxway_lang', lang);
    } catch (e) {

    }

    window.dispatchEvent(
      new CustomEvent('noxway:languageChanged', {
        detail: {
          lang: currentLang,
          testimonies: localizedTestimonies[currentLang] || localizedTestimonies['en_US']
        }
      })
    );
  }

  function initLanguage() {
    let savedLang = 'en_US';
    try {
      savedLang = localStorage.getItem('noxway_lang') || 'en_US';
    } catch (e) {
      savedLang = 'en_US';
    }

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-btn');
      if (btn) {
        const lang = btn.getAttribute('data-lang');
        if (lang && lang !== currentLang) {
          applyLanguage(lang);
        }
      }
    });

    applyLanguage(savedLang);
  }

  window.NoxwayI18n = {
    getTranslation,
    setLanguage: applyLanguage,
    getCurrentLanguage: () => currentLang,
    getLocalizedTestimonies: () => localizedTestimonies[currentLang] || localizedTestimonies['en_US'],
    init: initLanguage
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
  } else {
    initLanguage();
  }
})();
