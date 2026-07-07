/**
 * Lógica do Aplicativo de Totem AlimentaSesi
 * Refatorado Completamente para Alinhamento Estrito da UI Canva
 */

const alimentaSesiData = {
  totemTitle: "Explore a experiência<br><span class='text-6xl font-black tracking-tight drop-shadow-md mt-1'>alimentaSesi</span>",
  
  buffet: {
    services: [
      { id: 1, title: "Buffet Sesi", icon: "🍱", desc: "Refeições completas formuladas para atender às regulamentações nutricionais diárias do Programa de Alimentação do Trabalhador (PAT)." },
      { id: 2, title: "Buffet Gourmet", icon: "🥩", desc: "Cardápios especiais contendo cortes assados de altíssima qualidade, massas finas artesanais e guarnições gourmet." },
      { id: 3, title: "Sabor & Cor", icon: "🥗", desc: "Buffet de saladas e vegetais crus e cozidos, molhos aromatizados de ervas e acompanhamentos ricos em micronutrientes." },
      { id: 4, title: "Sabor & Arte", icon: "🍲", desc: "Ações gastronômicas temáticas com apresentações especiais inspiradas nas cozinhas regionais e internacionais." },
      { id: 5, title: "Refeição Transportada", icon: "🚛", desc: "Pratos preparados em centrais produtivas seguras e transportados até as indústrias em caixas térmicas herméticas." },
      { id: 6, title: "Cafeteria", icon: "☕", desc: "Serviço contínuo com opções de lanches rápidos, sucos naturais e cafés especiais para as pausas de turno das fábricas." },
      { id: 7, title: "Buffet Escola", icon: "🏫", desc: "Garante a saúde dos alunos da rede SESI de Ensino com foco em um desenvolvimento integral de novos sabores." },
      { id: 8, title: "Cantinas", icon: "🥪", desc: "Instalações de acolhimento estudantil em conformidade integral com a regulamentação de cantinas escolares saudáveis." }
    ]
  },
  
  kitchen: {
    qualityTitle: "Gestão da Qualidade",
    qualityDesc: "Rastreabilidade completa de todas as etapas de recebimento, fracionamento e distribuição, com análises laboratoriais sistemáticas de amostras térmicas.",
    safetyTitle: "Saúde e Segurança",
    safetyDesc: "Treinamentos rígidos sobre riscos biológicos e ergonômicos na produção diária industrial.",
    innovativeTitle: "Cozinha Inovadora",
    innovativeDesc: "Utilização pioneira de cocção inteligente sob pressão e controle combinado de umidade nas frentes de trabalho.",
    equipments: [
      { id: "forno", title: "Forno Combinado", img: "assets/equip_forno_combinado.jpg", desc: "Tecnologia alemã de cozimento combinado que elimina óleos em processos de assados, preservando as texturas." },
      { id: "ivario", title: "Tecnologia iVario", img: "assets/equip_ivario.jpg", desc: "Sistema que ferve e frita em tempo recorde com redução de até 40% no consumo energético." },
      { id: "cafeteira", title: "Sistemas Bunn", img: "assets/equip_cafeteiras_bunn.jpg", desc: "Prepara café em larga escala na temperatura exata, conservando o aroma fresco sem queimar os grãos." },
      { id: "processador", title: "Processador Rápido", img: "assets/equip_processador_folhas.jpg", desc: "Padroniza cortes de folhas e legumes, acelerando o fluxo de higienização das saladas cruas diárias." }
    ]
  },
  
  team: {
    roles: [
      { id: 1, name: "Nutricionistas Operacionais", desc: "Nutricionistas que planejam a harmonização de macros e micronutrientes diariamente, garantindo cardápios balanceados." },
      { id: 2, name: "Chefs Gastronômicos", desc: "Lideram o desenvolvimento prático do tempero saudável, inovando no uso de molhos e temperos de base natural." },
      { id: 3, name: "Técnicos de Produção", desc: "Garantem a execução das regras de vigilância sanitária em conformidade total de temperatura das panelas." },
      { id: 4, name: "Atendentes de Buffet", desc: "Foco integral no acolhimento, servindo com carinho e agilidade para evitar filas desnecessárias nos refeitórios." }
    ]
  },
  
  education: {
    campaigns: [
      { id: 1, title: "📉 Desperdício Zero", desc: "Combate o refugo de buffet por meio da conscientização no tamanho de porções, engajando no consumo consciente integral." },
      { id: 2, title: "🧂 Controle de Sódio", desc: "Substituição progressiva do sal de cozinha por sais vegetais de ervas frescas produzidas regionalmente." },
      { id: 3, title: "🥗 Escolha Saudável", desc: "Campanhas dinâmicas auxiliando na divisão ideal de um prato harmonioso (50% saladas, 25% proteínas, 25% grãos)." },
      { id: 4, title: "🩺 Nutrição Preventiva", desc: "Ações de monitoramento focadas na prevenção primária de doenças crônicas como hipertensão e diabetes." }
    ]
  },
  
  numbers: {
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

// Variáveis Globais de Estado
let currentKitchenTab = 'quality';
let currentBuffetService = 1;
let currentKitchenEquip = 'forno';
let currentEduCamp = 1;

// Inicializador de Ciclo de Vida
document.addEventListener('DOMContentLoaded', () => {
  hydrateData();
  lucide.createIcons();
  adjustScale();
  
  // Define os estados iniciais dos painéis fixos para evitar lacunas vazias
  selectBuffetService(1);
  setKitchenTab('quality');
  selectKitchenEquip('forno');
  selectCampaign(1);
  
  // Bloqueio de comportamento de arrasto de imagens no Totem Android
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', (e) => e.preventDefault());
  });
});

/**
 * Escalonador de Matriz Física de Tela (1080x1920 rígido)
 */
function adjustScale() {
  const stage = document.querySelector('.totem-stage');
  if (!stage) return;
  
  const targetWidth = 1080;
  const targetHeight = 1920;
  
  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;
  
  const scale = Math.min(winWidth / targetWidth, winHeight / targetHeight);
  
  // Executa posicionamento absoluto no centro físico da tela útil
  stage.style.transform = `translate(-50%, -50%) scale(${scale})`;
}

window.addEventListener('resize', adjustScale);
window.addEventListener('orientationchange', () => setTimeout(adjustScale, 150));

/**
 * Injeção Segura de Dados nos nós do HTML
 */
function hydrateData() {
  // Tela Principal
  const totemTitleEl = document.querySelector('[data-template-id="totem-title"]');
  if (totemTitleEl) totemTitleEl.innerHTML = alimentaSesiData.totemTitle;
  
  // ============ INJEÇÃO SEÇÃO BUFFET ============
  const buffetGrid = document.getElementById("buffet-services-grid");
  if (buffetGrid) {
    buffetGrid.innerHTML = alimentaSesiData.buffet.services.map(srv => `
      <button type="button" id="buffet-btn-${srv.id}" onclick="selectBuffetService(${srv.id})" class="canva-card w-full py-2 px-3 border border-slate-200 bg-white rounded-xl text-left flex items-center gap-2.5 active:scale-95 transition-all">
        <span class="text-xl shrink-0">${srv.icon}</span>
        <span class="text-[12px] font-bold text-slate-700 truncate leading-tight">${srv.title}</span>
      </button>
    `).join("");
  }
  
  // ============ INJEÇÃO SEÇÃO COZINHA ============
  const kitchenGrid = document.getElementById("kitchen-equip-grid");
  if (kitchenGrid) {
    kitchenGrid.innerHTML = alimentaSesiData.kitchen.equipments.map(eq => `
      <button type="button" id="kitchen-eq-btn-${eq.id}" onclick="selectKitchenEquip('${eq.id}')" class="canva-card w-full p-2 border border-slate-200 bg-white rounded-xl text-center active:scale-95 transition-all flex flex-col items-center gap-1">
        <img src="${eq.img}" class="w-11 h-11 object-cover rounded-md pointer-events-none" draggable="false">
        <span class="text-[9px] font-extrabold text-slate-600 truncate w-full leading-tight">${eq.title}</span>
      </button>
    `).join("");
  }
  
  // ============ INJEÇÃO SEÇÃO EQUIPE ============
  const teamRolesGrid = document.getElementById("team-roles-grid");
  if (teamRolesGrid) {
    teamRolesGrid.innerHTML = alimentaSesiData.team.roles.map(role => `
      <button type="button" id="team-role-btn-${role.id}" onclick="openTeamModal(${role.id})" class="canva-card w-full py-2.5 px-2 bg-white border border-slate-200 rounded-lg text-center text-[10px] font-bold text-slate-700 leading-tight flex flex-col justify-center min-h-[52px]">
        ${role.name.split(" ")[0]}
      </button>
    `).join("");
  }
  
  // ============ INJEÇÃO SEÇÃO EDUCAÇÃO ============
  const campEl1Title = document.getElementById("edu-camp-title-1");
  const campEl1Desc = document.getElementById("edu-camp-desc-1");
  if (campEl1Title) campEl1Title.innerHTML = alimentaSesiData.education.campaigns[0].title;
  if (campEl1Desc) campEl1Desc.innerHTML = alimentaSesiData.education.campaigns[0].desc;
  
  const campEl2Title = document.getElementById("edu-camp-title-2");
  const campEl2Desc = document.getElementById("edu-camp-desc-2");
  if (campEl2Title) campEl2Title.innerHTML = alimentaSesiData.education.campaigns[1].title;
  if (campEl2Desc) campEl2Desc.innerHTML = alimentaSesiData.education.campaigns[1].desc;
  
  const campEl3Title = document.getElementById("edu-camp-title-3");
  const campEl3Desc = document.getElementById("edu-camp-desc-3");
  if (campEl3Title) campEl3Title.innerHTML = alimentaSesiData.education.campaigns[2].title;
  if (campEl3Desc) campEl3Desc.innerHTML = alimentaSesiData.education.campaigns[2].desc;
  
  const campEl4Title = document.getElementById("edu-camp-title-4");
  const campEl4Desc = document.getElementById("edu-camp-desc-4");
  if (campEl4Title) campEl4Title.innerHTML = alimentaSesiData.education.campaigns[3].title;
  if (campEl4Desc) campEl4Desc.innerHTML = alimentaSesiData.education.campaigns[3].desc;
  
  // ============ INJEÇÃO SEÇÃO NÚMEROS ============
  for (let i = 1; i <= 6; i++) {
    const cardData = alimentaSesiData.numbers.cards[i - 1];
    const valEl = document.getElementById(`num-${i}-value`);
    const lblEl = document.getElementById(`num-${i}-label`);
    if (valEl) valEl.innerHTML = cardData.value;
    if (lblEl) lblEl.innerHTML = cardData.label;
  }
}

// Controle de Visibilidade de Painéis Laterais
const panel = document.querySelector('.side-panel');
const backdrop = document.getElementById('backdrop');
const sections = document.querySelectorAll('.panel-section');

function openPanel(name) {
  sections.forEach(s => s.classList.toggle('active', s.dataset.section === name));
  
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  backdrop.classList.add('open');
  
  // Sincroniza abas e menus para evitar containers sem conteúdo inicial
  if (name === 'buffet') selectBuffetService(1);
  if (name === 'kitchen') {
    setKitchenTab('quality');
    selectKitchenEquip('forno');
  }
  if (name === 'education') selectCampaign(1);
}

function closePanel() {
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  backdrop.classList.remove('open');
}

// ================= LÓGICAS INTERATIVAS DE TABULAÇÃO =================

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
        tab.el.className = "py-2.5 text-xs font-bold rounded-lg border-2 border-orange-500 bg-orange-50 text-orange-800 text-center transition-all scale-[0.98] shadow-inner";
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

// Modais Auxiliares para Redução de Conteúdo Físico
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
    if (modalTitle) modalTitle.innerHTML = "Treinamento Prático Presencial";
    if (modalDesc) modalDesc.innerHTML = "Workshops práticos de Boas Práticas de Fabricação (BPF), ergonomia física industrial e técnicas de atendimento humanizado.";
    if (iconContainer) iconContainer.innerHTML = `<i data-lucide="users"></i>`;
  } else {
    if (modalTitle) modalTitle.innerHTML = "Plataforma Online";
    if (modalDesc) modalDesc.innerHTML = "Módulos de EAD acessíveis sobre novas tendências da nutrição industrial, receitas saudáveis e controle dinâmico do desperdício de insumos.";
    if (iconContainer) iconContainer.innerHTML = `<i data-lucide="monitor"></i>`;
  }
  
  if (modal) modal.classList.remove("hidden");
  lucide.createIcons();
}

function closeTrainingModal() {
  const modal = document.getElementById("training-modal");
  if (modal) modal.classList.add("hidden");
}