export type Locale = "pt-BR" | "en";

export interface ProjectItem {
  id: string;
  orderIndex: string;
  date: {
    "pt-BR": string;
    en: string;
  };
  yearTimestamp: number;
  title: {
    "pt-BR": string;
    en: string;
  };
  subtitle: {
    "pt-BR": string;
    en: string;
  };
  description: {
    "pt-BR": string;
    en: string;
  };
  technologies: string[];
  liveUrl?: string;
  images?: string[];
}

export interface ExperienceItem {
  id: string;
  index: string;
  company: {
    "pt-BR": string;
    en: string;
  };
  role: {
    "pt-BR": string;
    en: string;
  };
  period: {
    "pt-BR": string;
    en: string;
  };
  description: {
    "pt-BR": string;
    en: string;
  };
  tags: {
    "pt-BR": string[];
    en: string[];
  };
}

export interface CertificateItem {
  id: string;
  year: string;
  badgeText: {
    "pt-BR": string;
    en: string;
  };
  title: {
    "pt-BR": string;
    en: string;
  };
  issuer: {
    "pt-BR": string;
    en: string;
  };
  description: {
    "pt-BR": string;
    en: string;
  };
  externalUrl?: string;
  externalUrlLabel?: {
    "pt-BR": string;
    en: string;
  };
  featured?: boolean;
}

export interface PortfolioContent {
  profile: {
    name: string;
    initials: string;
    handle: string;
    age: number;
    role: Record<Locale, string>;
    availability: Record<Locale, string>;
    headline: Record<Locale, string>;
    subheadline: Record<Locale, string>;
    location: Record<Locale, string>;
    university: Record<Locale, string>;
    course: Record<Locale, string>;
    highSchool: Record<Locale, string>;
    email: string;
    github: string;
    githubDisplay: string;
    linkedin: string;
    linkedinDisplay: string;
  };
  nav: {
    about: Record<Locale, string>;
    projects: Record<Locale, string>;
    experience: Record<Locale, string>;
    certificates: Record<Locale, string>;
    contact: Record<Locale, string>;
    cta: Record<Locale, string>;
  };
  hero: {
    badge: Record<Locale, string>;
    primaryBtn: Record<Locale, string>;
    secondaryBtn: Record<Locale, string>;
    certificatesBtn: Record<Locale, string>;
  };
  about: {
    sectionNumber: string;
    sectionTag: Record<Locale, string>;
    title: Record<Locale, string>;
    bioParagraphs: Record<Locale, string[]>;
    skillsTitle: Record<Locale, string>;
    languagesTitle: Record<Locale, string>;
    languagesSubtitle: Record<Locale, string>;
    languages: string[];
    creativeTitle: Record<Locale, string>;
    creativeSubtitle: Record<Locale, string>;
    creativeSkills: Record<Locale, string[]>;
  };
  projects: {
    sectionNumber: string;
    sectionTag: Record<Locale, string>;
    title: Record<Locale, string>;
    subtitle: Record<Locale, string>;
    chronologicalBadge: Record<Locale, string>;
    viewSiteBtn: Record<Locale, string>;
    items: ProjectItem[];
  };
  experience: {
    sectionNumber: string;
    sectionTag: Record<Locale, string>;
    title: Record<Locale, string>;
    subtitle: Record<Locale, string>;
    items: ExperienceItem[];
  };
  certificates: {
    sectionNumber: string;
    sectionTag: Record<Locale, string>;
    title: Record<Locale, string>;
    items: CertificateItem[];
  };
  contact: {
    sectionNumber: string;
    sectionTag: Record<Locale, string>;
    title: Record<Locale, string>;
    subtitle: Record<Locale, string>;
    directChannelsTitle: Record<Locale, string>;
    formTitle: Record<Locale, string>;
    fields: {
      nameLabel: Record<Locale, string>;
      namePlaceholder: Record<Locale, string>;
      emailLabel: Record<Locale, string>;
      emailPlaceholder: Record<Locale, string>;
      messageLabel: Record<Locale, string>;
      messagePlaceholder: Record<Locale, string>;
    };
    validation: {
      nameRequired: Record<Locale, string>;
      nameMin: Record<Locale, string>;
      emailRequired: Record<Locale, string>;
      emailInvalid: Record<Locale, string>;
      messageRequired: Record<Locale, string>;
      messageMin: Record<Locale, string>;
    };
    submitBtn: Record<Locale, string>;
    submittingBtn: Record<Locale, string>;
    successTitle: Record<Locale, string>;
    successMessage: Record<Locale, string>;
    errorTitle: Record<Locale, string>;
    errorMessage: Record<Locale, string>;
  };
  footer: {
    rights: Record<Locale, string>;
    builtWith: Record<Locale, string>;
    backToTop: Record<Locale, string>;
  };
}

export const portfolioData: PortfolioContent = {
  profile: {
    name: "Davi Rocha",
    initials: "DR",
    handle: "davicampolina",
    age: 19,
    role: {
      "pt-BR":
        "Estudante de Ciência da Computação na PUC Minas & Estagiário em Segurança da Informação na Trinité",
      en: "Computer Science Student at PUC Minas & Information Security Intern at Trinité",
    },
    availability: {
      "pt-BR": "Segurança da Informação @ Trinité • PUC Minas",
      en: "Information Security @ Trinité • PUC Minas",
    },
    headline: {
      "pt-BR":
        "Tecnologia para gerar eficiência, proteção e clareza no dia a dia.",
      en: "Technology to drive efficiency, protection, and clarity every day.",
    },
    subheadline: {
      "pt-BR":
        "Estagiando em Segurança da Informação na Trinité enquanto curso Ciência da Computação na PUC Minas, aliando base técnica a uma sólida bagagem em design, direção, edição e fotografia.",
      en: "Interning in Information Security at Trinité while studying Computer Science at PUC Minas, combining technical foundations with extensive experience in design, direction, editing, and photography.",
    },
    location: {
      "pt-BR": "Belo Horizonte, MG — Brasil",
      en: "Belo Horizonte, MG — Brazil",
    },
    university: {
      "pt-BR": "PUC Minas",
      en: "PUC Minas",
    },
    course: {
      "pt-BR": "Ciência da Computação",
      en: "Computer Science",
    },
    highSchool: {
      "pt-BR": "Colégio Santa Maria Minas",
      en: "Colégio Santa Maria Minas",
    },
    email: "davi.rocha@outlook.com",
    github: "https://github.com/davicampolina",
    githubDisplay: "github.com/davicampolina",
    linkedin:
      "https://www.linkedin.com/in/davi-campolina-rocha-3951b0287/?isSelfProfile=true",
    linkedinDisplay: "linkedin.com/in/davi-campolina-rocha",
  },

  nav: {
    about: {
      "pt-BR": "Sobre Mim",
      en: "About Me",
    },
    projects: {
      "pt-BR": "Projetos",
      en: "Projects",
    },
    experience: {
      "pt-BR": "Experiências",
      en: "Experience",
    },
    certificates: {
      "pt-BR": "Certificados",
      en: "Certificates",
    },
    contact: {
      "pt-BR": "Contato",
      en: "Contact",
    },
    cta: {
      "pt-BR": "Contato",
      en: "Contact",
    },
  },

  hero: {
    badge: {
      "pt-BR": "DAVI ROCHA // PORTFÓLIO",
      en: "DAVI ROCHA // PORTFOLIO",
    },
    primaryBtn: {
      "pt-BR": "Ver Projetos",
      en: "View Projects",
    },
    secondaryBtn: {
      "pt-BR": "Entrar em Contato",
      en: "Get in Touch",
    },
    certificatesBtn: {
      "pt-BR": "Certificados",
      en: "Certificates",
    },
  },

  about: {
    sectionNumber: "01.",
    sectionTag: {
      "pt-BR": "// Sobre Mim",
      en: "// About Me",
    },
    title: {
      "pt-BR": "Quem sou e o que me move.",
      en: "Who I am and what drives me.",
    },
    bioParagraphs: {
      "pt-BR": [
        "Tenho 19 anos e estou construindo minha carreira estagiando na área de Segurança da Informação na Trinité enquanto curso Ciência da Computação na PUC Minas, após concluir todo o ensino fundamental e médio no Colégio Santa Maria Minas.",
        "Acredito que a tecnologia é a melhor ferramenta para gerar eficiência e segurança no dia a dia das pessoas e das empresas. Meu objetivo é aplicar meu aprendizado para ajudar as organizações a atuarem de forma mais inteligente e protegida, sempre colaborando com a equipe e buscando novos conhecimentos.",
        "Paralelamente à tecnologia, trago uma vasta experiência com design, edição de vídeo e imagem, direção criativa e fotografia — habilidades que aplico na comunicação visual e na construção de cada projeto.",
      ],
      en: [
        "I am 19 years old and building my career as an Information Security Intern at Trinité while pursuing my Computer Science degree at PUC Minas, having completed my elementary and high school education at Colégio Santa Maria Minas.",
        "I believe technology is the best tool to generate efficiency and security in the daily lives of people and companies. My goal is to apply my learning to help organizations operate more intelligently and securely, always collaborating with the team and seeking new knowledge.",
        "Alongside technology, I bring extensive hands-on experience in design, video and image editing, creative direction, and photography — skills I apply to visual communication and project creation.",
      ],
    },
    skillsTitle: {
      "pt-BR": "// Conhecimentos & Criatividade",
      en: "// Skills & Creativity",
    },
    languagesTitle: {
      "pt-BR": "Linguagens em Aprendizado",
      en: "Languages I'm Learning",
    },
    languagesSubtitle: {
      "pt-BR":
        "Base acadêmica e prática em lógica de programação e interfaces web.",
      en: "Academic and practical foundation in programming logic and web interfaces.",
    },
    languages: ["C", "C++", "Java", "JavaScript", "HTML", "CSS"],
    creativeTitle: {
      "pt-BR": "Experiência Visual & Criativa",
      en: "Visual & Creative Experience",
    },
    creativeSubtitle: {
      "pt-BR":
        "Atuação consolidada em produção audiovisual, direção estética e comunicação.",
      en: "Established background in visual production, aesthetic direction, and communication.",
    },
    creativeSkills: {
      "pt-BR": [
        "Design Gráfico & Interfaces",
        "Edição de Vídeo & Imagem",
        "Direção Criativa & Audiovisual",
        "Fotografia",
      ],
      en: [
        "Graphic & Interface Design",
        "Video & Image Editing",
        "Creative & Visual Direction",
        "Photography",
      ],
    },
  },

  projects: {
    sectionNumber: "02.",
    sectionTag: {
      "pt-BR": "// Projetos",
      en: "// Projects",
    },
    title: {
      "pt-BR": "Linha do Tempo de Projetos.",
      en: "Project Timeline.",
    },
    subtitle: {
      "pt-BR":
        "Iniciativas acadêmicas, protótipos e projetos reais organizados do mais antigo para o mais recente.",
      en: "Academic initiatives, prototypes, and real-world projects ordered from oldest to most recent.",
    },
    chronologicalBadge: {
      "pt-BR": "MAIS ANTIGO → MAIS RECENTE",
      en: "OLDEST → NEWEST",
    },
    viewSiteBtn: {
      "pt-BR": "Acessar Site",
      en: "Visit Website",
    },
    items: [
      {
        id: "proj-01-extensao-ia",
        orderIndex: "01",
        yearTimestamp: 202501,
        date: {
          "pt-BR": "1º Período // Projeto de Extensão",
          en: "1st Semester // Extension Project",
        },
        title: {
          "pt-BR": "Educação em IA & Machine Learning no Ensino Fundamental",
          en: "AI & Machine Learning Literacy for Elementary Students",
        },
        subtitle: {
          "pt-BR":
            "Uso Ético, Consciente e Responsável da Inteligência Artificial",
          en: "Ethical, Conscious, and Responsible Use of Artificial Intelligence",
        },
        description: {
          "pt-BR":
            "Projeto de extensão universitária voltado exclusivamente ao aprendizado sobre Inteligência Artificial, Machine Learning e uso ético e responsável da IA para alunos de instituições de ensino fundamental.",
          en: "University extension project dedicated to teaching Artificial Intelligence, Machine Learning, and ethical, responsible AI usage to elementary school students.",
        },
        technologies: [
          "Inteligência Artificial",
          "Machine Learning",
          "Ética Digital",
          "Educação",
        ],
        images: [
          "/projects/extensao-ia-1.png",
          "/projects/extensao-ia-2.jpg",
        ],
      },
      {
        id: "proj-02-flowback",
        orderIndex: "02",
        yearTimestamp: 202502,
        date: {
          "pt-BR": "Protótipo Inteligente // Automação",
          en: "Smart Prototype // Automation",
        },
        title: {
          "pt-BR": "FlowBack — Recirculação Inteligente de Água",
          en: "FlowBack — Smart Water Recirculation System",
        },
        subtitle: {
          "pt-BR":
            "Reaproveitamento de Água em Chuveiros Elétricos com Arduino e C++",
          en: "Smart Water Reuse for Electric Showers with Arduino & C++",
        },
        description: {
          "pt-BR":
            "Protótipo inteligente de recirculação que reaproveita a água normalmente desperdiçada em chuveiros elétricos enquanto aguardamos o aquecimento, redirecionando-a para atividades produtivas — como regar o jardim — e liberando o fluxo para o banho assim que atinge a temperatura ideal configurada. Desenvolvido com Arduino, programação em C++ e simulação no Tinkercad.",
          en: "Smart water recirculation prototype that captures water normally wasted while waiting for an electric shower to heat up, redirecting it toward productive uses—such as watering the garden—and releasing the shower flow once the target temperature is reached. Built with Arduino, C++ programming, and Tinkercad simulation.",
        },
        technologies: [
          "Arduino",
          "C++",
          "Tinkercad",
          "Automação",
          "Sustentabilidade",
        ],
      },
      {
        id: "proj-03-sidney-rocha",
        orderIndex: "03",
        yearTimestamp: 202503,
        date: {
          "pt-BR": "Projeto Web // Institucional",
          en: "Web Project // Corporate",
        },
        title: {
          "pt-BR": "Sidney Rocha Advocacia",
          en: "Sidney Rocha Law Firm Website",
        },
        subtitle: {
          "pt-BR": "Direito Digital e Adequação à LGPD",
          en: "Digital Law & LGPD Compliance",
        },
        description: {
          "pt-BR":
            "Criação do site institucional do escritório Sidney Rocha Advocacia (sidneyrocha.com.br), estruturando e apresentando com clareza os serviços especializados em Direito Digital e conformidade com a LGPD.",
          en: "Creation of the corporate website for Sidney Rocha Advocacia (sidneyrocha.com.br), clearly detailing specialized legal services in Digital Law and LGPD compliance.",
        },
        technologies: [
          "WordPress",
          "HTML",
          "CSS",
          "JavaScript",
          "Design Visual",
          "Direito Digital & LGPD",
        ],
        liveUrl: "https://sidneyrocha.com.br",
        images: ["/projects/sidney-rocha-site.png"],
      },
      {
        id: "proj-04-cybersense",
        orderIndex: "04",
        yearTimestamp: 202602,
        date: {
          "pt-BR": "TI 2 // Em Desenvolvimento",
          en: "TI 2 // In Development",
        },
        title: {
          "pt-BR":
            "CyberSense — Plataforma Educacional contra Engenharia Social",
          en: "CyberSense — Educational Platform Against Social Engineering",
        },
        subtitle: {
          "pt-BR":
            "Simulações de Spear Phishing, Conscientização e Proteção Digital",
          en: "Spear Phishing Simulations, Awareness & Digital Protection",
        },
        description: {
          "pt-BR":
            "Plataforma SaaS educacional focada na proteção digital contra engenharia social, atendendo desde a terceira idade até profissionais de tecnologia. Desde o mapeamento de histórias de usuários e wireframing até sua evolução atual, resolve o problema por meio de simulações personalizadas de ataques cibernéticos (Spear Phishing), ferramentas de conscientização viral e páginas didáticas de interceptação que ensinam a identificar ameaças na prática — tudo gerenciado por painéis analíticos, testes em tempo real e travas rígidas de privacidade.",
          en: "Educational SaaS platform focused on digital protection against social engineering, serving everyone from seniors to tech professionals. From initial user story mapping and wireframing to its current architecture, it solves the problem through tailored cyberattack simulations (Spear Phishing), viral awareness tools, and didactic interception pages that teach users how to spot threats in practice—managed via real-time analytical dashboards and strict privacy safeguards.",
        },
        technologies: [
          "Cibersegurança",
          "Prevenção a Phishing",
          "UI/UX & Wireframing",
          "JavaScript",
          "HTML/CSS",
          "Privacidade",
        ],
      },
    ],
  },

  experience: {
    sectionNumber: "03.",
    sectionTag: {
      "pt-BR": "// Experiências",
      en: "// Experience",
    },
    title: {
      "pt-BR": "Trajetória Profissional, Criativa & Acadêmica.",
      en: "Professional, Creative & Academic Journey.",
    },
    subtitle: {
      "pt-BR": "Minha vivência prática no mercado e na formação acadêmica.",
      en: "My hands-on experience in the market and academic education.",
    },
    items: [
      {
        id: "exp-01",
        index: "01.",
        company: {
          "pt-BR": "Trinité",
          en: "Trinité",
        },
        role: {
          "pt-BR": "Estagiário em Segurança da Informação",
          en: "Information Security Intern",
        },
        period: {
          "pt-BR": "Atual",
          en: "Current",
        },
        description: {
          "pt-BR":
            "Atuação na área de Segurança da Informação na Trinité, colaborando com a equipe na proteção de dados, prevenção a riscos digitais e aplicação da tecnologia para gerar mais eficiência e segurança nos processos corporativos.",
          en: "Working in Information Security at Trinité, collaborating with the team on data protection, digital risk prevention, and leveraging technology to increase operational efficiency and security.",
        },
        tags: {
          "pt-BR": [
            "Segurança da Informação",
            "Trinité",
            "Proteção Digital",
            "Trabalho em Equipe",
          ],
          en: [
            "Information Security",
            "Trinité",
            "Digital Protection",
            "Team Collaboration",
          ],
        },
      },
      {
        id: "exp-02",
        index: "02.",
        company: {
          "pt-BR": "Produção Visual & Audiovisual",
          en: "Visual & Audiovisual Production",
        },
        role: {
          "pt-BR": "Design, Edição, Direção e Fotografia",
          en: "Design, Editing, Direction & Photography",
        },
        period: {
          "pt-BR": "Experiência Consolidada",
          en: "Established Experience",
        },
        description: {
          "pt-BR":
            "Ampla experiência prática em direção criativa, fotografia, edição de vídeo e imagem e design gráfico, desenvolvendo projetos autorais e institucionais premiados pela qualidade técnica e originalidade.",
          en: "Extensive hands-on experience in creative direction, photography, video and image editing, and graphic design, delivering original and corporate projects recognized for technical quality and originality.",
        },
        tags: {
          "pt-BR": ["Design", "Edição", "Direção", "Fotografia"],
          en: ["Design", "Editing", "Direction", "Photography"],
        },
      },
      {
        id: "exp-03",
        index: "03.",
        company: {
          "pt-BR": "PUC Minas & Colégio Santa Maria Minas",
          en: "PUC Minas & Colégio Santa Maria Minas",
        },
        role: {
          "pt-BR": "Graduação em Ciência da Computação & Formação Escolar",
          en: "Computer Science Undergraduate & School Education",
        },
        period: {
          "pt-BR": "Em andamento (PUC Minas)",
          en: "Ongoing (PUC Minas)",
        },
        description: {
          "pt-BR":
            "Estudante de Ciência da Computação na PUC Minas, após concluir o ensino fundamental e médio no Colégio Santa Maria Minas com conquistas em olimpíadas internacionais de matemática e produção audiovisual.",
          en: "Computer Science student at PUC Minas, having completed elementary and high school at Colégio Santa Maria Minas with awards in international mathematics olympiads and audiovisual production.",
        },
        tags: {
          "pt-BR": [
            "Ciência da Computação",
            "PUC Minas",
            "Colégio Santa Maria Minas",
          ],
          en: [
            "Computer Science",
            "PUC Minas",
            "Colégio Santa Maria Minas",
          ],
        },
      },
    ],
  },

  certificates: {
    sectionNumber: "04.",
    sectionTag: {
      "pt-BR": "// Certificados & Premiações",
      en: "// Certificates & Awards",
    },
    title: {
      "pt-BR": "Certificados, Olimpíadas & Conquistas.",
      en: "Certificates, Olympiads & Achievements.",
    },
    items: [
      {
        id: "cert-paz-2024",
        year: "2024",
        badgeText: {
          "pt-BR": "1º Lugar // Campeão Audiovisual",
          en: "1st Place // Audiovisual Champion",
        },
        title: {
          "pt-BR": 'Campeão da Competição Audiovisual "Construtores da Paz"',
          en: '1st Place Winner — "Peace Builders" Audiovisual Competition',
        },
        issuer: {
          "pt-BR": "Colégio Santa Maria Minas",
          en: "Colégio Santa Maria Minas",
        },
        description: {
          "pt-BR":
            'Conquista do 1º lugar no concurso audiovisual "Construtores da Paz", promovido pelo Colégio Santa Maria Minas. O desafio consistiu na idealização, roteirização, direção e edição de um vídeo vertical totalmente autoral e inédito de até 60 segundos com o tema "Construindo um mundo pacífico e acolhedor". Avaliado por uma comissão externa de especialistas em Comunicação e Produção Audiovisual, o projeto alcançou a liderança pela excelência em qualidade de imagem e áudio, edição, originalidade e potencial de engajamento social.',
          en: 'Won 1st place in the "Peace Builders" audiovisual competition hosted by Colégio Santa Maria Minas. The challenge involved conceiving, scripting, directing, and editing an original 60-second vertical video themed "Building a peaceful and welcoming world." Evaluated by an external panel of Communication and Audiovisual Production experts, the project took first place for excellence in image and audio quality, editing, originality, and social engagement.',
        },
        externalUrl: "https://www.instagram.com/reels/C8ezi2PNQQj/",
        externalUrlLabel: {
          "pt-BR": "Assistir ao Vídeo Premiado (Instagram Reels)",
          en: "Watch Award-Winning Video (Instagram Reels)",
        },
        featured: true,
      },
      {
        id: "cert-oimsf-2024",
        year: "2024",
        badgeText: {
          "pt-BR": "Medalha de Ouro // Nacional & Regional",
          en: "Gold Medal // National & Regional",
        },
        title: {
          "pt-BR": "Olimpíada Internacional Matemática Sem Fronteiras 2024",
          en: "International Mathematics Without Borders Olympiad 2024",
        },
        issuer: {
          "pt-BR": "Rede POC // Mathématiques sans Frontières",
          en: "Rede POC // Mathématiques sans Frontières",
        },
        description: {
          "pt-BR":
            "Premiado com Medalha de Ouro pelo desempenho de excelência nas etapas Nacional e Regional da edição de 2024.",
          en: "Awarded the Gold Medal for outstanding performance in both the National and Regional stages of the 2024 edition.",
        },
      },
      {
        id: "cert-oimsf-2025",
        year: "2025",
        badgeText: {
          "pt-BR": "Prata Regional & Honra ao Mérito Nacional",
          en: "Regional Silver & National Honorable Mention",
        },
        title: {
          "pt-BR": "Olimpíada Internacional Matemática Sem Fronteiras 2025",
          en: "International Mathematics Without Borders Olympiad 2025",
        },
        issuer: {
          "pt-BR": "Rede POC // Mathématiques sans Frontières",
          en: "Rede POC // Mathématiques sans Frontières",
        },
        description: {
          "pt-BR":
            "Conquista de Medalha de Prata pelo desempenho regional e Honra ao Mérito pelo desempenho nacional na edição de 2025.",
          en: "Earned the Silver Medal for regional performance and Honorable Mention for national performance in the 2025 edition.",
        },
      },
      {
        id: "cert-canguru-2024",
        year: "2024",
        badgeText: {
          "pt-BR": "Medalhista // Edição 2024",
          en: "Medalist // 2024 Edition",
        },
        title: {
          "pt-BR": "Medalhista — Concurso Canguru de Matemática Brasil 2024",
          en: "Medalist — Kangaroo Math Competition Brazil 2024",
        },
        issuer: {
          "pt-BR": "Association Kangourou sans Frontières",
          en: "Association Kangourou sans Frontières",
        },
        description: {
          "pt-BR":
            "Premiado como medalhista na edição de 2024 do Concurso Canguru de Matemática.",
          en: "Awarded a medal in the 2024 edition of the Kangaroo Mathematics Competition.",
        },
      },
      {
        id: "cert-canguru-2022",
        year: "2022",
        badgeText: {
          "pt-BR": "Medalhista // Edição 2022",
          en: "Medalist // 2022 Edition",
        },
        title: {
          "pt-BR": "Medalhista — Concurso Canguru de Matemática Brasil 2022",
          en: "Medalist — Kangaroo Math Competition Brazil 2022",
        },
        issuer: {
          "pt-BR": "Association Kangourou sans Frontières",
          en: "Association Kangourou sans Frontières",
        },
        description: {
          "pt-BR":
            "Premiado como medalhista na edição de 2022 do Concurso Canguru de Matemática.",
          en: "Awarded a medal in the 2022 edition of the Kangaroo Mathematics Competition.",
        },
      },
      {
        id: "cert-cambridge",
        year: "Cambridge",
        badgeText: {
          "pt-BR": "Proficiência Internacional em Inglês",
          en: "International English Proficiency",
        },
        title: {
          "pt-BR": "Certificado de Proficiência em Inglês — Cambridge English",
          en: "Cambridge English Language Assessment Certificate",
        },
        issuer: {
          "pt-BR": "Cambridge Assessment English (University of Cambridge)",
          en: "Cambridge Assessment English (University of Cambridge)",
        },
        description: {
          "pt-BR":
            "Certificação internacional oficial que atesta competência e domínio da língua inglesa nos exames de avaliação da Universidade de Cambridge.",
          en: "Official international certification attesting English language proficiency through University of Cambridge assessment examinations.",
        },
      },
    ],
  },

  contact: {
    sectionNumber: "05.",
    sectionTag: {
      "pt-BR": "// Contato",
      en: "// Contact",
    },
    title: {
      "pt-BR": "Vamos conversar.",
      en: "Let's connect.",
    },
    subtitle: {
      "pt-BR":
        "Entre em contato por e-mail, LinkedIn, GitHub ou envie uma mensagem diretamente pelo formulário abaixo.",
      en: "Reach out via email, LinkedIn, GitHub, or send a message directly using the form below.",
    },
    directChannelsTitle: {
      "pt-BR": "// Redes & Contato Direto",
      en: "// Direct Links",
    },
    formTitle: {
      "pt-BR": "// Enviar Mensagem",
      en: "// Send a Message",
    },
    fields: {
      nameLabel: {
        "pt-BR": "NOME *",
        en: "NAME *",
      },
      namePlaceholder: {
        "pt-BR": "Seu nome",
        en: "Your name",
      },
      emailLabel: {
        "pt-BR": "E-MAIL *",
        en: "EMAIL *",
      },
      emailPlaceholder: {
        "pt-BR": "seu.email@exemplo.com",
        en: "your.email@example.com",
      },
      messageLabel: {
        "pt-BR": "MENSAGEM *",
        en: "MESSAGE *",
      },
      messagePlaceholder: {
        "pt-BR": "Escreva sua mensagem...",
        en: "Write your message...",
      },
    },
    validation: {
      nameRequired: {
        "pt-BR": "Informe seu nome.",
        en: "Please enter your name.",
      },
      nameMin: {
        "pt-BR": "Mínimo de 2 caracteres.",
        en: "At least 2 characters.",
      },
      emailRequired: {
        "pt-BR": "Informe seu e-mail.",
        en: "Please enter your email.",
      },
      emailInvalid: {
        "pt-BR": "E-mail inválido.",
        en: "Invalid email address.",
      },
      messageRequired: {
        "pt-BR": "Escreva uma mensagem.",
        en: "Please write a message.",
      },
      messageMin: {
        "pt-BR": "Mínimo de 10 caracteres.",
        en: "At least 10 characters.",
      },
    },
    submitBtn: {
      "pt-BR": "Enviar Mensagem",
      en: "Send Message",
    },
    submittingBtn: {
      "pt-BR": "Enviando...",
      en: "Sending...",
    },
    successTitle: {
      "pt-BR": "Mensagem enviada!",
      en: "Message sent!",
    },
    successMessage: {
      "pt-BR": "Obrigado pelo contato. Responderei em breve.",
      en: "Thank you for reaching out. I will reply soon.",
    },
    errorTitle: {
      "pt-BR": "Erro ao enviar",
      en: "Error sending message",
    },
    errorMessage: {
      "pt-BR": "Tente novamente ou envie diretamente por e-mail.",
      en: "Please try again or send an email directly.",
    },
  },

  footer: {
    rights: {
      "pt-BR": "Todos os direitos reservados.",
      en: "All rights reserved.",
    },
    builtWith: {
      "pt-BR": "Ciência da Computação — PUC Minas",
      en: "Computer Science — PUC Minas",
    },
    backToTop: {
      "pt-BR": "Topo",
      en: "Top",
    },
  },
};
