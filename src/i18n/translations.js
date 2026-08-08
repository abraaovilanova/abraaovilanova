// ATENÇÃO: os números abaixo são PLACEHOLDERS (valores plausíveis, não reais).
// Troque-os pelos números verdadeiros antes de publicar — eles são citados em
// todos os 4 idiomas, então altere aqui em cada bloco correspondente.
//
//   frota .......... 12.000 veículos / -30% eventos de risco
//   EPI ............ 8 unidades, 40 câmeras / 100% dos turnos auditados vs ~5%
//   Web GIS ........ 3 dias -> 2 horas / 500+ usuários
//   Maxtrack ....... 1 milhão de posições GPS por dia
//   Foods GO ....... 120 restaurantes / 15 mil pedidos por mês

export const LANGUAGES = [
  { code: 'pt-BR', label: 'PT-BR' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
];

export const DEFAULT_LANGUAGE = 'pt-BR';

export const EMAIL = 'abraaovilanova@gmail.com';

const translations = {
  'pt-BR': {
    versionLabel: 'VERSÃO',
    languageLabel: 'LÍNGUA',
    languageSelectAria: 'Selecionar idioma',
    header: {
      greeting: 'OLÁ, MEU NOME É ABRAÃO VILA NOVA',
      role: 'DEV FULL STACK / WEB GIS / GAME DESIGN',
    },
    about: {
      title: 'Sobre mim',
      paragraphs: [
        'Dev Full Stack há ~6 anos. Construo sistemas que processam dados em tempo real e transformam imagem e geoinformação em decisão — de monitoramento de frotas com visão computacional a plataformas Web GIS usadas por órgãos públicos.',
        'O que me interessa não é a tecnologia pela tecnologia: é o motorista que não dormiu ao volante, o operário que estava com o EPI certo, o gestor que enxergou o mapa antes de assinar o contrato.',
        'Hoje estudo Unity, com foco em RPG mobile por turnos.',
      ],
      stackLabel: 'Stack principal',
      stack: [
        'Python (FastAPI / Flask)',
        'Java (Spring Boot)',
        'React / TypeScript',
        'PostGIS',
        'Docker',
        'GCP / AWS / Azure',
      ],
    },
    experience: {
      title: 'Experiência',
      resultLabel: 'Resultado',
      jobs: [
        {
          role: 'Desenvolvedor Full Stack',
          company: 'PixForce',
          period: '2023 – 2026',
          entries: [
            {
              problem: 'Fadiga ao volante em rodovias brasileiras.',
              action:
                'Desenvolvi um sistema de monitoramento de frotas em tempo real com visão computacional (Python + FastAPI, pipeline de alertas, painel em React), detectando sinais de fadiga e distração e disparando alerta imediato.',
              result:
                '12.000 veículos monitorados e 30% de redução em eventos de risco.',
            },
            {
              problem: 'Acidentes por falta de EPI no chão de fábrica.',
              action:
                'Implementei detecção automática do uso de Equipamento de Proteção Individual nas câmeras de operação, com modelos de visão computacional integrados via API REST.',
              result:
                '100% dos turnos auditados em 8 unidades e 40 câmeras, contra ~5% por checagem manual amostral.',
            },
            {
              problem: 'Dados geoespaciais parados em arquivos no desktop.',
              action:
                'Construí uma plataforma Web GIS para visualização e análise de imagens de satélite (React + PostGIS + Docker, deploy em AWS e Azure com CI/CD), levando a análise para o navegador.',
              result:
                'Análises que levavam 3 dias passaram a levar 2 horas, para mais de 500 usuários.',
            },
            {
              problem:
                'Serviços de eletricistas em campo praticamente sem auditoria.',
              action:
                'Desenvolvi uma plataforma de auditoria de documentos para a CEMIG, analisando mais de 120 mil documentos por mês para avaliar os serviços executados por eletricistas a partir de imagens e informações cadastradas em campo.',
              result:
                'A cobertura de auditoria saltou de 0,25% para 80% dos serviços.',
            },
          ],
        },
        {
          role: 'Desenvolvedor Full Stack',
          company: 'Maxtrack',
          period: '2021 – 2023',
          entries: [
            {
              problem: 'Rastreamento de frota em escala nacional.',
              action:
                'Desenvolvi APIs e serviços backend em Python (Tornado) e telas em React/Redux para ingestão e visualização contínua de telemetria.',
              result:
                'Mais de 1 milhão de posições GPS processadas por dia sem perda de tempo real.',
            },
            {
              problem: 'Mapas eram só figura, não ferramenta de decisão.',
              action:
                'Construí plataformas de mapeamento e visualização de dados sobre informação geoespacial, com filtros e análise no próprio mapa.',
              result:
                'Equipes de operação passaram a resolver ocorrências direto no mapa, sem exportar planilha.',
            },
          ],
        },
        {
          role: 'Desenvolvedor Frontend',
          company: 'Foods GO',
          period: '2020 – 2021',
          entries: [
            {
              problem: 'Restaurantes perdendo pedido no WhatsApp.',
              action:
                'Desenvolvi a plataforma de pedidos online em React e Vue.js, integrada a um chatbot de atendimento automatizado.',
              result:
                '120 restaurantes atendidos e cerca de 15 mil pedidos por mês automatizados.',
            },
          ],
        },
      ],
    },
    projects: {
      title: 'Projetos',
      items: [
        {
          name: 'Plataforma Energética de Pernambuco',
          url: 'https://plataformaenergetica.pe.gov.br/',
          subtitle: 'Parceria com o Senai',
          bullets: [
            'Plataforma de mapeamento que reúne, num só lugar, a informação energética usada para decisões de investimento no estado.',
            'Implementei a visualização e a análise dos dados no navegador, aberta ao público.',
          ],
        },
        {
          name: 'MangueByte Games',
          url: 'https://manguebytegames.com/',
          subtitle: 'Projeto pessoal',
          bullets: [
            'Jogos 2D e 3D em Unity, com foco em mecânicas de RPG por turnos, design de níveis e experiência do jogador.',
          ],
        },
        {
          name: 'Fun With Maps',
          url: 'https://www.youtube.com/@FunWithMaps-dev',
          subtitle: 'Projeto pessoal',
          bullets: [
            'Canal sobre desenvolvimento de aplicações web voltadas a geoprocessamento.',
          ],
        },
      ],
    },
    education: {
      title: 'Formação',
      items: [
        {
          degree: 'Bacharelado em Engenharia Civil',
          school: 'Universidade Federal de Pernambuco',
          period: '2013 - 2018',
        },
      ],
    },
    contact: {
      title: 'Contato',
      downloadCv: 'Baixar CV',
    },
    footer:
      'Feito com ❤︎ em Recife © 2026 Abraão Vila Nova. Todos os direitos reservados.',
  },

  en: {
    versionLabel: 'VERSION',
    languageLabel: 'LANGUAGE',
    languageSelectAria: 'Select language',
    header: {
      greeting: 'HELLO, MY NAME IS ABRAÃO VILA NOVA',
      role: 'FULL STACK DEV / WEB GIS / GAME DESIGN',
    },
    about: {
      title: 'About me',
      paragraphs: [
        'Full Stack developer for ~6 years. I build systems that process data in real time and turn imagery and geodata into decisions — from computer-vision fleet monitoring to Web GIS platforms used by public agencies.',
        'What interests me is not technology for its own sake: it is the driver who did not fall asleep at the wheel, the worker wearing the right protective gear, the manager who saw the map before signing the contract.',
        'These days I am learning Unity, focused on turn-based mobile RPGs.',
      ],
      stackLabel: 'Core stack',
      stack: [
        'Python (FastAPI / Flask)',
        'Java (Spring Boot)',
        'React / TypeScript',
        'PostGIS',
        'Docker',
        'GCP / AWS / Azure',
      ],
    },
    experience: {
      title: 'Experience',
      resultLabel: 'Result',
      jobs: [
        {
          role: 'Full Stack Developer',
          company: 'PixForce',
          period: '2023 – 2026',
          entries: [
            {
              problem: 'Driver fatigue on Brazilian highways.',
              action:
                'Built a real-time fleet monitoring system using computer vision (Python + FastAPI, alert pipeline, React dashboard) that detects fatigue and distraction and fires an immediate alert.',
              result: '12,000 vehicles monitored and a 30% drop in risk events.',
            },
            {
              problem: 'Accidents caused by missing protective equipment.',
              action:
                'Implemented automatic PPE detection on operational cameras, with computer vision models integrated through a REST API.',
              result:
                '100% of shifts audited across 8 sites and 40 cameras, versus ~5% under manual sampling.',
            },
            {
              problem: 'Geospatial data stuck in files on a desktop.',
              action:
                'Built a Web GIS platform for visualizing and analyzing satellite imagery (React + PostGIS + Docker, deployed on AWS and Azure with CI/CD), moving the analysis into the browser.',
              result:
                'Analyses that took 3 days now take 2 hours, for more than 500 users.',
            },
            {
              problem: 'Field electrician work going essentially unaudited.',
              action:
                'Built a document auditing platform for CEMIG, analyzing over 120,000 documents per month to assess work performed by electricians from field-captured images and records.',
              result:
                'Audit coverage jumped from 0.25% to 80% of all service orders.',
            },
          ],
        },
        {
          role: 'Full Stack Developer',
          company: 'Maxtrack',
          period: '2021 – 2023',
          entries: [
            {
              problem: 'Fleet tracking at national scale.',
              action:
                'Developed APIs and backend services in Python (Tornado) plus React/Redux screens for continuous telemetry ingestion and display.',
              result:
                'Over 1 million GPS positions processed per day with no loss of real time.',
            },
            {
              problem: 'Maps were pictures, not decision tools.',
              action:
                'Built mapping and data visualization platforms on top of geospatial information, with filtering and analysis inside the map itself.',
              result:
                'Operations teams began resolving incidents directly on the map, with no spreadsheet export.',
            },
          ],
        },
        {
          role: 'Frontend Developer',
          company: 'Foods GO',
          period: '2020 – 2021',
          entries: [
            {
              problem: 'Restaurants losing orders in WhatsApp threads.',
              action:
                'Built the online ordering platform in React and Vue.js, integrated with a chatbot for automated customer service.',
              result:
                '120 restaurants served and roughly 15,000 orders per month automated.',
            },
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      items: [
        {
          name: 'Pernambuco Energy Platform',
          url: 'https://plataformaenergetica.pe.gov.br/',
          subtitle: 'Partnership with Senai',
          bullets: [
            'A mapping platform gathering, in one place, the energy data used for investment decisions in the state.',
            'I implemented the in-browser data visualization and analysis, open to the public.',
          ],
        },
        {
          name: 'MangueByte Games',
          url: 'https://manguebytegames.com/',
          subtitle: 'Personal project',
          bullets: [
            '2D and 3D games in Unity, focused on turn-based RPG mechanics, level design and player experience.',
          ],
        },
        {
          name: 'Fun With Maps',
          url: 'https://www.youtube.com/@FunWithMaps-dev',
          subtitle: 'Personal project',
          bullets: [
            'A channel about building web applications for geoprocessing.',
          ],
        },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          degree: "Bachelor's degree in Civil Engineering",
          school: 'Federal University of Pernambuco',
          period: '2013 - 2018',
        },
      ],
    },
    contact: {
      title: 'Contact',
      downloadCv: 'Download CV',
    },
    footer:
      'Made with ❤︎ in Recife © 2026 Abraão Vila Nova. All rights reserved.',
  },

  fr: {
    versionLabel: 'VERSION',
    languageLabel: 'LANGUE',
    languageSelectAria: 'Choisir la langue',
    header: {
      greeting: "BONJOUR, JE M'APPELLE ABRAÃO VILA NOVA",
      role: 'DÉV FULL STACK / WEB SIG / GAME DESIGN',
    },
    about: {
      title: 'À propos de moi',
      paragraphs: [
        "Développeur Full Stack depuis environ 6 ans. Je construis des systèmes qui traitent des données en temps réel et transforment l'image et la géo-information en décision — de la surveillance de flottes par vision par ordinateur aux plateformes Web SIG utilisées par des organismes publics.",
        "Ce qui m'intéresse, ce n'est pas la technologie pour elle-même : c'est le conducteur qui ne s'est pas endormi au volant, l'ouvrier qui portait le bon équipement, le gestionnaire qui a vu la carte avant de signer le contrat.",
        "J'apprends actuellement Unity, avec un accent sur les RPG mobiles au tour par tour.",
      ],
      stackLabel: 'Stack principale',
      stack: [
        'Python (FastAPI / Flask)',
        'Java (Spring Boot)',
        'React / TypeScript',
        'PostGIS',
        'Docker',
        'GCP / AWS / Azure',
      ],
    },
    experience: {
      title: 'Expérience',
      resultLabel: 'Résultat',
      jobs: [
        {
          role: 'Développeur Full Stack',
          company: 'PixForce',
          period: '2023 – 2026',
          entries: [
            {
              problem: 'La fatigue au volant sur les routes brésiliennes.',
              action:
                "J'ai développé un système de surveillance de flottes en temps réel par vision par ordinateur (Python + FastAPI, pipeline d'alertes, tableau de bord React), détectant les signes de fatigue et de distraction et déclenchant une alerte immédiate.",
              result:
                '12 000 véhicules surveillés et 30 % de baisse des événements à risque.',
            },
            {
              problem: "Des accidents faute d'équipement de protection.",
              action:
                "J'ai mis en place la détection automatique du port des EPI sur les caméras d'exploitation, avec des modèles de vision par ordinateur intégrés via une API REST.",
              result:
                '100 % des postes audités sur 8 sites et 40 caméras, contre environ 5 % par échantillonnage manuel.',
            },
            {
              problem: 'Des données géospatiales bloquées dans des fichiers.',
              action:
                "J'ai construit une plateforme Web SIG de visualisation et d'analyse d'images satellites (React + PostGIS + Docker, déploiement sur AWS et Azure avec CI/CD), pour amener l'analyse dans le navigateur.",
              result:
                'Des analyses de 3 jours ramenées à 2 heures, pour plus de 500 utilisateurs.',
            },
            {
              problem:
                'Des interventions d’électriciens sur le terrain quasiment jamais auditées.',
              action:
                "J'ai développé une plateforme d'audit de documents pour CEMIG, analysant plus de 120 000 documents par mois pour évaluer les interventions des électriciens à partir d'images et d'informations saisies sur le terrain.",
              result:
                "La couverture d'audit est passée de 0,25 % à 80 % des interventions.",
            },
          ],
        },
        {
          role: 'Développeur Full Stack',
          company: 'Maxtrack',
          period: '2021 – 2023',
          entries: [
            {
              problem: "Le suivi de flotte à l'échelle nationale.",
              action:
                "J'ai développé des API et services backend en Python (Tornado) ainsi que des écrans React/Redux pour l'ingestion et l'affichage continus de la télémétrie.",
              result:
                "Plus d'un million de positions GPS traitées par jour, sans perte de temps réel.",
            },
            {
              problem: 'Les cartes étaient des images, pas des outils.',
              action:
                "J'ai construit des plateformes de cartographie et de visualisation de données géospatiales, avec filtres et analyse directement dans la carte.",
              result:
                'Les équipes opérationnelles traitent désormais les incidents directement sur la carte, sans export de tableur.',
            },
          ],
        },
        {
          role: 'Développeur Frontend',
          company: 'Foods GO',
          period: '2020 – 2021',
          entries: [
            {
              problem: 'Des restaurants perdant des commandes sur WhatsApp.',
              action:
                "J'ai développé la plateforme de commande en ligne en React et Vue.js, intégrée à un chatbot de service client automatisé.",
              result:
                '120 restaurants servis et environ 15 000 commandes par mois automatisées.',
            },
          ],
        },
      ],
    },
    projects: {
      title: 'Projets',
      items: [
        {
          name: 'Plateforme Énergétique du Pernambouc',
          url: 'https://plataformaenergetica.pe.gov.br/',
          subtitle: 'Partenariat avec le Senai',
          bullets: [
            "Une plateforme cartographique réunissant en un seul endroit les données énergétiques utilisées pour les décisions d'investissement de l'État.",
            "J'ai implémenté la visualisation et l'analyse des données dans le navigateur, ouvertes au public.",
          ],
        },
        {
          name: 'MangueByte Games',
          url: 'https://manguebytegames.com/',
          subtitle: 'Projet personnel',
          bullets: [
            'Jeux 2D et 3D sous Unity, axés sur les mécaniques de RPG au tour par tour, le level design et le ressenti du joueur.',
          ],
        },
        {
          name: 'Fun With Maps',
          url: 'https://www.youtube.com/@FunWithMaps-dev',
          subtitle: 'Projet personnel',
          bullets: [
            "Une chaîne sur le développement d'applications web dédiées au géotraitement.",
          ],
        },
      ],
    },
    education: {
      title: 'Formation',
      items: [
        {
          degree: 'Licence en Génie Civil',
          school: 'Université Fédérale du Pernambouc',
          period: '2013 - 2018',
        },
      ],
    },
    contact: {
      title: 'Contact',
      downloadCv: 'Télécharger le CV',
    },
    footer:
      'Fait avec ❤︎ à Recife © 2026 Abraão Vila Nova. Tous droits réservés.',
  },

  es: {
    versionLabel: 'VERSIÓN',
    languageLabel: 'IDIOMA',
    languageSelectAria: 'Seleccionar idioma',
    header: {
      greeting: 'HOLA, ME LLAMO ABRAÃO VILA NOVA',
      role: 'DEV FULL STACK / WEB SIG / GAME DESIGN',
    },
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Desarrollador Full Stack desde hace ~6 años. Construyo sistemas que procesan datos en tiempo real y convierten imagen y geoinformación en decisiones — desde monitoreo de flotas con visión por computadora hasta plataformas Web SIG usadas por organismos públicos.',
        'Lo que me interesa no es la tecnología por la tecnología: es el conductor que no se durmió al volante, el operario que llevaba el equipo correcto, el gestor que vio el mapa antes de firmar el contrato.',
        'Ahora estudio Unity, con foco en RPG móviles por turnos.',
      ],
      stackLabel: 'Stack principal',
      stack: [
        'Python (FastAPI / Flask)',
        'Java (Spring Boot)',
        'React / TypeScript',
        'PostGIS',
        'Docker',
        'GCP / AWS / Azure',
      ],
    },
    experience: {
      title: 'Experiencia',
      resultLabel: 'Resultado',
      jobs: [
        {
          role: 'Desarrollador Full Stack',
          company: 'PixForce',
          period: '2023 – 2026',
          entries: [
            {
              problem: 'Fatiga al volante en las carreteras de Brasil.',
              action:
                'Desarrollé un sistema de monitoreo de flotas en tiempo real con visión por computadora (Python + FastAPI, pipeline de alertas, panel en React), que detecta señales de fatiga y distracción y dispara una alerta inmediata.',
              result:
                '12.000 vehículos monitoreados y 30% de reducción en eventos de riesgo.',
            },
            {
              problem: 'Accidentes por falta de equipo de protección.',
              action:
                'Implementé la detección automática del uso de EPI en las cámaras de operación, con modelos de visión por computadora integrados mediante una API REST.',
              result:
                '100% de los turnos auditados en 8 plantas y 40 cámaras, frente a ~5% con muestreo manual.',
            },
            {
              problem: 'Datos geoespaciales atrapados en archivos de escritorio.',
              action:
                'Construí una plataforma Web SIG para visualizar y analizar imágenes satelitales (React + PostGIS + Docker, desplegada en AWS y Azure con CI/CD), llevando el análisis al navegador.',
              result:
                'Análisis que tomaban 3 días pasaron a tomar 2 horas, para más de 500 usuarios.',
            },
            {
              problem:
                'Servicios de electricistas en campo prácticamente sin auditar.',
              action:
                'Desarrollé una plataforma de auditoría de documentos para CEMIG, analizando más de 120.000 documentos al mes para evaluar los servicios ejecutados por electricistas a partir de imágenes e información registrada en campo.',
              result:
                'La cobertura de auditoría pasó de 0,25% a 80% de los servicios.',
            },
          ],
        },
        {
          role: 'Desarrollador Full Stack',
          company: 'Maxtrack',
          period: '2021 – 2023',
          entries: [
            {
              problem: 'Rastreo de flotas a escala nacional.',
              action:
                'Desarrollé APIs y servicios backend en Python (Tornado) y pantallas en React/Redux para la ingesta y visualización continua de telemetría.',
              result:
                'Más de 1 millón de posiciones GPS procesadas por día sin perder el tiempo real.',
            },
            {
              problem: 'Los mapas eran imágenes, no herramientas de decisión.',
              action:
                'Construí plataformas de mapeo y visualización sobre información geoespacial, con filtros y análisis dentro del propio mapa.',
              result:
                'Los equipos de operación pasaron a resolver incidencias directamente en el mapa, sin exportar planillas.',
            },
          ],
        },
        {
          role: 'Desarrollador Frontend',
          company: 'Foods GO',
          period: '2020 – 2021',
          entries: [
            {
              problem: 'Restaurantes perdiendo pedidos en WhatsApp.',
              action:
                'Desarrollé la plataforma de pedidos en línea en React y Vue.js, integrada con un chatbot de atención automatizada.',
              result:
                '120 restaurantes atendidos y cerca de 15.000 pedidos por mes automatizados.',
            },
          ],
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      items: [
        {
          name: 'Plataforma Energética de Pernambuco',
          url: 'https://plataformaenergetica.pe.gov.br/',
          subtitle: 'Alianza con el Senai',
          bullets: [
            'Una plataforma de mapeo que reúne, en un solo lugar, la información energética usada para decisiones de inversión en el estado.',
            'Implementé la visualización y el análisis de los datos en el navegador, abiertos al público.',
          ],
        },
        {
          name: 'MangueByte Games',
          url: 'https://manguebytegames.com/',
          subtitle: 'Proyecto personal',
          bullets: [
            'Juegos 2D y 3D en Unity, con foco en mecánicas de RPG por turnos, diseño de niveles y experiencia del jugador.',
          ],
        },
        {
          name: 'Fun With Maps',
          url: 'https://www.youtube.com/@FunWithMaps-dev',
          subtitle: 'Proyecto personal',
          bullets: [
            'Un canal sobre desarrollo de aplicaciones web orientadas al geoprocesamiento.',
          ],
        },
      ],
    },
    education: {
      title: 'Formación',
      items: [
        {
          degree: 'Grado en Ingeniería Civil',
          school: 'Universidad Federal de Pernambuco',
          period: '2013 - 2018',
        },
      ],
    },
    contact: {
      title: 'Contacto',
      downloadCv: 'Descargar CV',
    },
    footer:
      'Hecho con ❤︎ en Recife © 2026 Abraão Vila Nova. Todos los derechos reservados.',
  },
};

export default translations;
