/**
 * Lógica do Aplicativo de Totem AlimentaSesi
 * Mapeado para o diretório físico de mídias assets/
 */

const alimentaSesiData = {
  mainPhoto: "assets/bg_main_totem.jpg",
  totemTitle: "AlimentaSesi<br><span class='text-emerald-400 font-light text-4xl tracking-wide'>Nutrição, Saúde e Acolhimento</span>",
  
  logoImgSrc: "assets/logo_alimentasesi_white.svg",
  panelLogoSrc: "assets/logo_alimentasesi_dark.svg",
  
  tapHintText: "Toque nas tags piscantes para interagir",
  
  hotspots: {
    buffet: "Nosso Buffet",
    kitchen: "Cozinha Inteligente",
    team: "Nossa Equipe",
    education: "Educação & Campanhas"
  },
  
  buffet: {
    img: "assets/img_buffet_main.jpg",
    photo2: "assets/img_buffet_detail_01.jpg",
    photo3: "assets/img_buffet_detail_02.jpg",
    title: "Nosso Buffet",
    intro: "Refeições planejadas sob medida para manter a energia diária dos colaboradores das indústrias, com muito mais sabor.",
    servicesTitle: "Selecione o Serviço para Detalhes:",
    services: [
      { id: 1, title: "Buffet Sesi", icon: "🍱", desc: "Refeições completas formuladas para atender às regulamentações nutricionais diárias do Programa de Alimentação do Trabalhador (PAT)." },
      { id: 2, title: "Buffet Gourmet", icon: "🥩", desc: "Cardápios especiais contendo cortes assados de altíssima qualidade, massas finas artesanais e guarnições gourmet." },
      { id: 3, title: "Sabor & Cor", icon: "🥗", desc: "Buffet de saladas e vegetais crus e cozidos, molhos aromatizados de ervas e acompanhamentos ricos em micronutrientes." },
      { id: 4, title: "Sabor & Arte", icon: "🍲", desc: "Ações gastronômicas temáticas com apresentações especiais inspiradas nas cozinhas regionais e internacionais." },
      { id: 5, title: "Refeição Transportada", icon: "🚛", desc: "Pratos preparados em centrais produtivas seguras e transportados até as indústrias em caixas térmicas herméticas." },
      { id: 6, title: "Cafeteria", icon: "☕", desc: "Serviço contínuo com opções de lanches rápidos, sucos naturais e cafés especiais para as pausas de turno das fábricas." },
      { id: 7, title: "Buffet Escola", icon: "🏫", desc: "Garante a saúde dos alunos da rede SESI de Ensino com foco em um desenvolvimento integral de novos sabores." },
      { id: 8, title: "Cantinas", icon: "🥪", desc: "Instalações de acolhimento estudantil em conformidade integral com a regulamentação de cantinas escolares saudáveis." }
    ],
    message: "💡 Redução inteligente: Substituímos frituras e temperos prontos por carnes assadas e ervas aromáticas."
  },
  
  kitchen: {
    img: "assets/img_kitchen_main.jpg",
    title: "Cozinha Inteligente",
    intro: "Equipamentos que garantem a segurança alimentar e padronização absoluta das refeições sem perda nutricional.",
    qualityTitle: "Gestão da Qualidade",
    qualityDesc: "Rastreabilidade completa de todas as etapas de recebimento, fracionamento e distribuição, com análises laboratoriais sistemáticas de amostras térmicas.",
    safetyTitle: "Saúde e Segurança",
    safetyDesc: "Treinamentos rígidos sobre riscos biológicos e ergonômicos na produção diária industrial.",
    innovativeTitle: "Cozinha Inovadora",
    innovativeDesc: "Utilização pioneira de cocção inteligente sob pressão e controle combinado de umidade nas frentes de trabalho.",
    equipTitle: "Selecione o Equipamento:",
    equipments: [
      { id: "forno", title: "Forno Combinado", img: "assets/equip_forno_combinado.jpg", desc: "Tecnologia alemã de cozimento combinado que elimina óleos em processos de assados, preservando as texturas." },
      { id: "ivario", title: "Tecnologia iVario", img: "assets/equip_ivario.jpg", desc: "Sistema que ferve e frita em tempo recorde com redução de até 40% no consumo energético." },
      { id: "cafeteira", title: "Sistemas Bunn", img: "assets/equip_cafeteiras_bunn.jpg", desc: "Prepara café em larga escala na temperatura exata, conservando o aroma fresco sem queimar os grãos." },
      { id: "processador", title: "Processador Rápido", img: "assets/equip_processador_folhas.jpg", desc: "Padroniza cortes de folhas e legumes, acelerando o fluxo de higienização das saladas cruas diárias." }
    ]
  },
  
  team: {
    img: "assets/img_team_main.jpg",
    title: "Equipe Especialista",
    intro: "Profissionais técnicos treinados continuamente sob os rígidos padrões industriais de nutrição e serviço corporativo.",
    roles: [
      { id: 1, name: "Nutricionistas Operacionais", desc: "Planejam a harmonização de macros e micronutrientes diariamente, garantindo cardápios variados." },
      { id: 2, name: "Chefs Gastronômicos", desc: "Lideram o desenvolvimento prático do tempero saudável, inovando no uso de molhos de base natural." },
      { id: 3, name: "Técnicos de Produção", desc: "Garantem a execução das regras de vigilância sanitária em conformidade total de temperatura das panelas." },
      { id: 4, name: "Atendentes de Buffet", desc: "Foco integral no acolhimento, servindo com carinho e agilidade para evitar filas desnecessárias." }
    ],
    chefsPhoto: "assets/img_team_chefs.jpg",
    chefsExtraText: "A equipe de especialistas adapta receitas regionais famosas para versões funcionais, reduzindo compostos sódicos em até 30% sem perder o gosto característico.",
    jeitoTitle: "O Jeito AlimentaSesi de Atender",
    jeitoIntro: "Nossa cultura une tradição e afeto. Cada refeição servida expressa respeito, confiança e dedicação pela culinária e pelas pessoas.",
    jeitoListTitle: "OS 4 PILARES DO ATENDIMENTO",
    bullets: [
      "Ambiente de refeitório aconchegante e limpo",
      "Atendimento amigável com foco na escuta ativa",
      "Adaptação flexível para restrições alimentares",
      "Sabor caseiro com garantia de segurança industrial"
    ],
    jeitoFooter: "✨ Atendemos indústrias de todos os portes com paixão, dedicação e carinho.",
    jeitoPhoto: "assets/img_atendimento_humanizado.jpg.jpg",
    trainingsTitle: "Capacitação Contínua",
    trainingsIntro: "Nossas equipes participam de capacitações constantes nos canais físicos e digitais.",
    teamTrainingImg: "assets/img_team_training.jpg",
    trainingPresencialTitle: "Presencial",
    trainingPresencialDesc: "Aulas de campo com foco em Boas Práticas de Fabricação (BPF), ergonomia física industrial e recepção humanizada do colaborador.",
    trainingOnlineTitle: "Plataforma Online",
    trainingOnlineDesc: "Cursos interativos acessíveis sobre novas tendências da nutrição industrial, receitas saudáveis e controle dinâmico do desperdício de insumos."
  },
  
  education: {
    headline: "Educação & Campanhas",
    img: "assets/img_education_main.jpg.jpg",
    intro: "Disseminamos conhecimento alimentar de ponta para os trabalhadores realizarem escolhas equilibradas e colherem mais saúde.",
    campaignsIntro: "Ações contínuas realizadas diretamente nas linhas do refeitório de forma lúdica:",
    campaigns: [
      { id: 1, title: "📉 Desperdício Zero", desc: "Combate o refugo de buffet por meio da conscientização no tamanho de porções, engajando no consumo consciente integral." },
      { id: 2, title: "🧂 Controle de Sódio", desc: "Substituição progressiva do sal de cozinha por sais vegetais de ervas frescas produzidas regionalmente." },
      { id: 3, title: "🥗 Escolha Saudável", desc: "Campanhas dinâmicas auxiliando na divisão ideal de um prato harmonioso (50% saladas, 25% proteínas, 25% grãos)." },
      { id: 4, title: "🩺 Nutrição Preventiva", desc: "Ações de monitoramento focadas na prevenção primária de doenças crônicas como hipertensão e diabetes." }
    ],
    img2: "assets/img_education_footer.jpg.jpg"
  },
  
  numbers: {
    title: "Indicadores Globais",
    subtitle: "A força operacional da rede AlimentaSesi descrita no Relatório de Sustentabilidade",
    cards: [
      { value: "115 Mil", label: "Refeições diárias prontas" },
      { value: "53 Ton", label: "De insumos de alta qualidade/dia" },
      { value: "119", label: "Restaurantes corporativos em atividade" },
      { value: "10", label: "Estados brasileiros atendidos" },
      { value: "100 Mil", label: "Estudantes em cantinas saudáveis" },
      { value: "R$ 15M", label: "Em tecnologias de automação em 2024/25" }
    ]
  }
};

// Variáveis de Controle de Estado Interno
let currentKitchenTab = 'quality';
let currentBuffetService = 1;
let currentKitchenEquip = 'forno';
let currentEduCamp = 1;

// Inicialização Global
document.addEventListener('DOMContentLoaded', () => {
  hydrateData();
  lucide.createIcons();
  adjustScale();
  
  // Define os estados iniciais dos componentes
  selectBuffetService(1);
  setKitchenTab('quality');
  selectKitchenEquip('forno');
  selectCampaign(1);
  
  // Previne drag and drop de imagens no totem touch (padrão kiosk)
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', (e) => e.preventDefault());
  });
});

/**
 * Função de Escalonamento Robusta por Proporção Física em Matriz (translate e scale combinados)
 */
function adjustScale() {
  const stage = document.querySelector('.totem-stage');
  if (!stage) return;
  
  const targetWidth = 1080;
  const targetHeight = 1920;
  
  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;
  
  const scaleX = winWidth / targetWidth;
  const scaleY = winHeight / targetHeight;
  
  const scale = Math.min(scaleX, scaleY);
  
  // Posicionamento absoluto centralizado por matriz de transformação sem conflitos com flexbox
  stage.style.transform = `translate(-50%, -50%) scale(${scale})`;
}

window.addEventListener('resize', adjustScale);
window.addEventListener('orientationchange', () => setTimeout(adjustScale, 150));

/**
 * Hidrata os dados fixos e gera os elementos dinâmicos do painel
 */
function hydrateData() {
  // Tela Principal
  setElementAttr("main-photo", "src", alimentaSesiData.mainPhoto);
  setElementHTML("totem-title", alimentaSesiData.totemTitle);
  setElementAttr("logo-img", "src", alimentaSesiData.logoImgSrc);
  setElementHTML("tap-hint-text", alimentaSesiData.tapHintText);
  
  // Labels das Tags
  setElementHTML("hotspot-buffet-label", alimentaSesiData.hotspots.buffet);
  setElementHTML("hotspot-kitchen-label", alimentaSesiData.hotspots.kitchen);
  setElementHTML("hotspot-team-label", alimentaSesiData.hotspots.team);
  setElementHTML("hotspot-education-label", alimentaSesiData.hotspots.education);
  
  // Logo do Painel
  setElementAttr("panel-logo", "src", alimentaSesiData.panelLogoSrc);
  
  // ============ HIDRATAÇÃO SEÇÃO BUFFET ============
  setElementAttr("buffet-img", "src", alimentaSesiData.buffet.img);
  setElementHTML("buffet-title", alimentaSesiData.buffet.title);
  setElementHTML("buffet-intro", alimentaSesiData.buffet.intro);
  setElementAttr("buffet-photo-2", "src", alimentaSesiData.buffet.photo2);
  setElementAttr("buffet-photo-3", "src", alimentaSesiData.buffet.photo3);
  setElementHTML("buffet-services-title", alimentaSesiData.buffet.servicesTitle);
  setElementHTML("buffet-message", alimentaSesiData.buffet.message);
  
  // Geração do Grid de Botões para os Serviços do Buffet
  const buffetGrid = document.getElementById("buffet-services-grid");
  if (buffetGrid) {
    buffetGrid.innerHTML = alimentaSesiData.buffet.services.map(srv => `
      <button type="button" id="buffet-btn-${srv.id}" onclick="selectBuffetService(${srv.id})" class="canva-card w-full py-2 px-3 border border-slate-200 bg-white rounded-xl text-left flex items-center gap-2.5 active:scale-95 transition-all">
        <span class="text-xl shrink-0">${srv.icon}</span>
        <span class="text-[12px] font-bold text-slate-700 truncate leading-tight">${srv.title}</span>
      </button>
    `).join("");
  }
  
  // ============ HIDRATAÇÃO SEÇÃO COZINHA ============
  setElementAttr("kitchen-img", "src", alimentaSesiData.kitchen.img);
  setElementHTML("kitchen-title", alimentaSesiData.kitchen.title);
  setElementHTML("kitchen-intro", alimentaSesiData.kitchen.intro);
  setElementHTML("kitchen-quality-title", alimentaSesiData.kitchen.qualityTitle);
  setElementHTML("kitchen-quality-desc", alimentaSesiData.kitchen.qualityDesc);
  setElementHTML("kitchen-safety-title", alimentaSesiData.kitchen.safetyTitle);
  setElementHTML("kitchen-safety-desc", alimentaSesiData.kitchen.safetyDesc);
  setElementHTML("kitchen-innovative-title", alimentaSesiData.kitchen.innovativeTitle);
  setElementHTML("kitchen-innovative-desc", alimentaSesiData.kitchen.innovativeDesc);
  setElementHTML("kitchen-equip-title", alimentaSesiData.kitchen.equipTitle);
  
  // Geração dos botões de equipamentos
  const kitchenGrid = document.getElementById("kitchen-equip-grid");
  if (kitchenGrid) {
    kitchenGrid.innerHTML = alimentaSesiData.kitchen.equipments.map(eq => `
      <button type="button" id="kitchen-eq-btn-${eq.id}" onclick="selectKitchenEquip('${eq.id}')" class="canva-card w-full p-2 border border-slate-200 bg-white rounded-xl text-center active:scale-95 transition-all flex flex-col items-center gap-1">
        <img src="${eq.img}" class="w-11 h-11 object-cover rounded-md pointer-events-none" draggable="false">
        <span class="text-[9px] font-extrabold text-slate-600 truncate w-full leading-tight">${eq.title}</span>
      </button>
    `).join("");
  }
  
  // ============ HIDRATAÇÃO SEÇÃO EQUIPE ============
  setElementAttr("team-img", "src", alimentaSesiData.team.img);
  setElementHTML("team-title", alimentaSesiData.team.title);
  setElementHTML("team-intro", alimentaSesiData.team.intro);
  setElementHTML("team-role-1", alimentaSesiData.team.roles[0].name);
  setElementHTML("team-role-2", alimentaSesiData.team.roles[1].name);
  setElementHTML("team-role-3", alimentaSesiData.team.roles[2].name);
  setElementHTML("team-role-4", alimentaSesiData.team.roles[3].name);
  setElementAttr("chefs-photo", "src", alimentaSesiData.team.chefsPhoto);
  setElementHTML("chefs-extra-text", alimentaSesiData.team.chefsExtraText);
  
  setElementHTML("jeito-title", alimentaSesiData.team.jeitoTitle);
  setElementHTML("jeito-intro", alimentaSesiData.team.jeitoIntro);
  setElementHTML("jeito-list-title", alimentaSesiData.team.jeitoListTitle);
  setElementHTML("jeito-bullet-1", alimentaSesiData.team.bullets[0]);
  setElementHTML("jeito-bullet-2", alimentaSesiData.team.bullets[1]);
  setElementHTML("jeito-bullet-3", alimentaSesiData.team.bullets[2]);
  setElementHTML("jeito-bullet-4", alimentaSesiData.team.bullets[3]);
  setElementHTML("jeito-footer", alimentaSesiData.team.jeitoFooter);
  setElementAttr("jeito-photo", "src", alimentaSesiData.team.jeitoPhoto);
  
  setElementHTML("trainings-title", alimentaSesiData.team.trainingsTitle);
  setElementHTML("trainings-intro", alimentaSesiData.team.trainingsIntro);
  setElementAttr("team-training-img", "src", alimentaSesiData.team.teamTrainingImg);
  setElementHTML("training-presencial-title", alimentaSesiData.team.trainingPresencialTitle);
  setElementHTML("training-presencial-desc", alimentaSesiData.team.trainingPresencialDesc);
  setElementHTML("training-online-title", alimentaSesiData.team.trainingOnlineTitle);
  setElementHTML("training-online-desc", alimentaSesiData.team.trainingOnlineDesc);
  
  // Geração dos botões de papéis
  const teamRolesGrid = document.getElementById("team-roles-grid");
  if (teamRolesGrid) {
    teamRolesGrid.innerHTML = alimentaSesiData.team.roles.map(role => `
      <button type="button" id="team-role-btn-${role.id}" onclick="openTeamModal(${role.id})" class="canva-card w-full py-2.5 px-2 bg-white border border-slate-200 rounded-lg text-center text-[10px] font-bold text-slate-700 leading-tight flex flex-col justify-center min-h-[52px]">
        ${role.name.split(" ")[0]}
      </button>
    `).join("");
  }
  
  // ============ HIDRATAÇÃO SEÇÃO EDUCAÇÃO ============
  setElementHTML("edu-headline", alimentaSesiData.education.headline);
  setElementAttr("edu-img", "src", alimentaSesiData.education.img);
  setElementHTML("edu-intro", alimentaSesiData.education.intro);
  setElementHTML("edu-campaigns-intro", alimentaSesiData.education.campaignsIntro);
  
  setElementHTML("edu-camp-title-1", alimentaSesiData.education.campaigns[0].title);
  setElementHTML("edu-camp-desc-1", alimentaSesiData.education.campaigns[0].desc);
  setElementHTML("edu-camp-title-2", alimentaSesiData.education.campaigns[1].title);
  setElementHTML("edu-camp-desc-2", alimentaSesiData.education.campaigns[1].desc);
  setElementHTML("edu-camp-title-3", alimentaSesiData.education.campaigns[2].title);
  setElementHTML("edu-camp-desc-3", alimentaSesiData.education.campaigns[2].desc);
  setElementHTML("edu-camp-title-4", alimentaSesiData.education.campaigns[3].title);
  setElementHTML("edu-camp-desc-4", alimentaSesiData.education.campaigns[3].desc);
  setElementAttr("edu-img-2", "src", alimentaSesiData.education.img2);
  
  // Elementos de Backup Ocultos
  setElementHTML("edu-camp-1-title", alimentaSesiData.education.campaigns[0].title);
  setElementHTML("edu-camp-1-desc", alimentaSesiData.education.campaigns[0].desc);
  setElementHTML("edu-camp-2-title", alimentaSesiData.education.campaigns[1].title);
  setElementHTML("edu-camp-2-desc", alimentaSesiData.education.campaigns[1].desc);
  setElementHTML("edu-camp-3-title", alimentaSesiData.education.campaigns[2].title);
  setElementHTML("edu-camp-3-desc", alimentaSesiData.education.campaigns[2].desc);
  setElementHTML("edu-camp-4-title", alimentaSesiData.education.campaigns[3].title);
  setElementHTML("edu-camp-4-desc", alimentaSesiData.education.campaigns[3].desc);
  
  // ============ HIDRATAÇÃO SEÇÃO NÚMEROS ============
  setElementHTML("numbers-title", alimentaSesiData.numbers.title);
  setElementHTML("numbers-subtitle", alimentaSesiData.numbers.subtitle);
  for (let i = 1; i <= 6; i++) {
    const cardData = alimentaSesiData.numbers.cards[i - 1];
    if (cardData) {
      setElementHTML(`num-${i}-value`, cardData.value);
      setElementHTML(`num-${i}-label`, cardData.label);
    }
  }
}

/**
 * Função de manipulação segura de HTML de Elementos
 */
function setElementHTML(id, html) {
  const el = document.querySelector(`[data-template-id="${id}"]`);
  if (el) el.innerHTML = html;
}

/**
 * Função de manipulação segura de atributos de Elementos
 */
function setElementAttr(id, attr, val) {
  const el = document.querySelector(`[data-template-id="${id}"]`);
  if (el) el.setAttribute(attr, val);
}

// Controle de Visibilidade de Painéis Laterais
const panel = document.querySelector('.side-panel');
const backdrop = document.getElementById('backdrop');
const sections = document.querySelectorAll('.panel-section');

/**
 * Abre o painel lateral com animação suave e redefine os estados
 */
function openPanel(name) {
  sections.forEach(s => s.classList.toggle('active', s.dataset.section === name));
  
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  backdrop.classList.add('open');
  
  if (name === 'buffet') selectBuffetService(1);
  if (name === 'kitchen') {
    setKitchenTab('quality');
    selectKitchenEquip('forno');
  }
  if (name === 'education') selectCampaign(1);
}

/**
 * Fecha o painel lateral
 */
function closePanel() {
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  backdrop.classList.remove('open');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePanel();
});

// ================= LÓGICAS INTERATIVAS DE DASHBOARD =================

/**
 * Seleciona e atualiza o detalhe de Serviço do Buffet
 */
function selectBuffetService(id) {
  currentBuffetService = id;
  const service = alimentaSesiData.buffet.services.find(s => s.id === id);
  if (!service) return;
  
  alimentaSesiData.buffet.services.forEach(s => {
    const btn = document.getElementById(`buffet-btn-${s.id}`);
    if (btn) {
      if (s.id === id) {
        btn.className = "canva-card w-full py-2 px-3 border-2 border-emerald-500 bg-emerald-50/50 rounded-xl text-left flex items-center gap-2.5 transition-all scale-[0.98] shadow-inner";
      } else {
        btn.className = "canva-card w-full py-2 px-3 border border-slate-200 bg-white rounded-xl text-left flex items-center gap-2.5 transition-all";
      }
    }
  });
  
  const iconBox = document.getElementById("buffet-detail-icon");
  const titleBox = document.getElementById("buffet-detail-title");
  const descBox = document.getElementById("buffet-detail-desc");
  
  if (iconBox) iconBox.innerHTML = service.icon;
  if (titleBox) titleBox.innerHTML = service.title;
  if (descBox) descBox.innerHTML = service.desc;
}

/**
 * Altera a Aba de Pilares Técnicos da Cozinha Inteligente
 */
function setKitchenTab(pilar) {
  currentKitchenTab = pilar;
  
  const tabQual = document.getElementById("tab-quality");
  const tabSafe = document.getElementById("tab-safety");
  const tabInno = document.getElementById("tab-innovative");
  
  const tabs = [
    { key: 'quality', el: tabQual, title: alimentaSesiData.kitchen.qualityTitle, desc: alimentaSesiData.kitchen.qualityDesc },
    { key: 'safety', el: tabSafe, title: alimentaSesiData.kitchen.safetyTitle, desc: alimentaSesiData.kitchen.safetyDesc },
    { key: 'innovative', el: tabInno, title: alimentaSesiData.kitchen.innovativeTitle, desc: alimentaSesiData.kitchen.innovativeDesc }
  ];
  
  tabs.forEach(tab => {
    if (tab.el) {
      if (tab.key === pilar) {
        tab.el.className = "py-2.5 text-xs font-bold rounded-lg border-2 text-center transition-all bg-orange-50 text-orange-700 border-orange-400 scale-[0.98] shadow-inner";
      } else {
        tab.el.className = "py-2.5 text-xs font-bold rounded-lg border text-center transition-all bg-white text-slate-600 border-slate-200";
      }
    }
  });
  
  const activeTab = tabs.find(t => t.key === pilar);
  const detailTitle = document.getElementById("kitchen-tab-title");
  const detailDesc = document.getElementById("kitchen-tab-desc");
  
  if (detailTitle) detailTitle.innerHTML = activeTab.title;
  if (detailDesc) detailDesc.innerHTML = activeTab.desc;
}

/**
 * Altera o Equipamento Selecionado da Cozinha Inteligente
 */
function selectKitchenEquip(id) {
  currentKitchenEquip = id;
  const equip = alimentaSesiData.kitchen.equipments.find(e => e.id === id);
  if (!equip) return;
  
  alimentaSesiData.kitchen.equipments.forEach(e => {
    const btn = document.getElementById(`kitchen-eq-btn-${e.id}`);
    if (btn) {
      if (e.id === id) {
        btn.className = "canva-card w-full p-2 border-2 border-orange-500 bg-orange-50/50 rounded-xl text-center transition-all scale-[0.98] shadow-inner flex flex-col items-center gap-1";
      } else {
        btn.className = "canva-card w-full p-2 border border-slate-200 bg-white rounded-xl text-center transition-all flex flex-col items-center gap-1";
      }
    }
  });
  
  const titleEl = document.getElementById("kitchen-equip-detail-title");
  const descEl = document.getElementById("kitchen-equip-detail-desc");
  const imgEl = document.getElementById("kitchen-equip-detail-img");
  
  if (titleEl) titleEl.innerHTML = equip.title;
  if (descEl) descEl.innerHTML = equip.desc;
  if (imgEl) imgEl.setAttribute("src", equip.img);
}

/**
 * Seleciona a Campanha de Educação Saudável Ativa
 */
function selectCampaign(id) {
  currentEduCamp = id;
  const camp = alimentaSesiData.education.campaigns[id - 1];
  if (!camp) return;
  
  for (let i = 1; i <= 4; i++) {
    const cardBtn = document.getElementById(`edu-camp-card-${i}`);
    if (cardBtn) {
      if (i === id) {
        cardBtn.className = "canva-card text-left p-4 rounded-xl border-2 border-emerald-600 bg-emerald-50/40 shadow-inner scale-[0.98]";
      } else {
        cardBtn.className = "canva-card text-left p-4 rounded-xl border border-slate-200 bg-white shadow-sm";
      }
    }
  }
  
  const boxTitle = document.getElementById("campaign-detail-title");
  const boxDesc = document.getElementById("campaign-detail-desc");
  
  if (boxTitle) boxTitle.innerHTML = camp.title;
  if (boxDesc) boxDesc.innerHTML = camp.desc;
}

// Modais Rápidos de Toque (O Jeito de Atender / Treinamento)
function openTeamModal(roleId) {
  const role = alimentaSesiData.team.roles.find(r => r.id === roleId);
  if (!role) return;
  
  const modal = document.getElementById("training-modal");
  const modalTitle = document.getElementById("training-modal-title");
  const modalDesc = document.getElementById("training-modal-desc");
  const iconContainer = document.getElementById("training-modal-icon-container");
  
  if (modalTitle) modalTitle.innerHTML = role.name;
  if (modalDesc) modalDesc.innerHTML = role.desc;
  if (iconContainer) iconContainer.innerHTML = `<i data-lucide="award"></i>`;
  
  if (modal) modal.classList.remove("hidden");
  lucide.createIcons();
}

function openTeamTraining(type) {
  const modal = document.getElementById("training-modal");
  const modalTitle = document.getElementById("training-modal-title");
  const modalDesc = document.getElementById("training-modal-desc");
  const iconContainer = document.getElementById("training-modal-icon-container");
  
  if (type === 'presencial') {
    if (modalTitle) modalTitle.innerHTML = alimentaSesiData.team.trainingPresencialTitle;
    if (modalDesc) modalDesc.innerHTML = alimentaSesiData.team.trainingPresencialDesc;
    if (iconContainer) iconContainer.innerHTML = `<i data-lucide="users"></i>`;
  } else {
    if (modalTitle) modalTitle.innerHTML = alimentaSesiData.team.trainingOnlineTitle;
    if (modalDesc) modalDesc.innerHTML = alimentaSesiData.team.trainingOnlineDesc;
    if (iconContainer) iconContainer.innerHTML = `<i data-lucide="monitor"></i>`;
  }
  
  if (modal) modal.classList.remove("hidden");
  lucide.createIcons();
}

function closeTrainingModal() {
  const modal = document.getElementById("training-modal");
  if (modal) modal.classList.add("hidden");
}

function toggleBlock(id) {
  if (id === 'chefs-info-block') {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden');
  }
}