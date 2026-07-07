/**
 * Totem alimentaSesi - Módulo de Controle Interativo (script.js)
 * Desenvolvido por um especialista Front-end Senior em totens touch.
 */

// Objeto de dados temporários para estruturação de conteúdo prévio com as cores oficiais
const TEMAS_PLACEHOLDER = {
  "impacto": {
    titulo: "Impacto em Números",
    cor: "var(--color-green-hover)",
    texto: `
      <p style="font-size: 18px; line-height: 1.6; color: var(--text-secondary); margin-bottom: 24px;">
        A alimentaSesi desenvolveu sua expertise ao longo de mais de 40 anos de atuação, atendendo diversas indústrias do Brasil e ajudando a alimentar milhares de trabalhadores.
      </p>
      <div class="impacto-grid">
        <div class="impacto-card">
          <span class="impacto-numero" style="color: var(--color-green-hover);">+ 100 mil</span>
          <span class="impacto-rotulo">refeições por dia</span>
        </div>
        <div class="impacto-card">
          <span class="impacto-numero" style="color: var(--color-green-hover);">+ 2.100</span>
          <span class="impacto-rotulo">colaboradores</span>
        </div>
        <div class="impacto-card">
          <span class="impacto-numero" style="color: var(--color-green-hover);">+ 100</span>
          <span class="impacto-rotulo">restaurantes in company</span>
        </div>
        <div class="impacto-card">
          <span class="impacto-numero" style="color: var(--color-green-hover);">+ 50</span>
          <span class="impacto-rotulo">cidades atendidas</span>
        </div>
        <div class="impacto-card">
          <span class="impacto-numero" style="color: var(--color-green-hover);">10</span>
          <span class="impacto-rotulo">estados com presença</span>
        </div>
        <div class="impacto-card">
          <span class="impacto-numero" style="color: var(--color-green-hover);">+ 20</span>
          <span class="impacto-rotulo">unidades transportadas</span>
        </div>
      </div>
    `
  },
  "educacao": {
    titulo: "Educação Nutricional",
    cor: "var(--color-green)",
    texto: "<p>Esta seção está preparada para receber o conteúdo sobre as ações permanentes e campanhas de alimentação saudável, incentivando hábitos de vida equilibrados nas empresas.</p>"
  },
  "equipe": {
    titulo: "Nossa Equipe",
    cor: "var(--color-blue)",
    texto: "<p>Esta seção está preparada para apresentar os profissionais de nutrição, cozinheiros, chefs de cozinha e auxiliares que dão vida ao serviço alimentaSesi com excelência operacional.</p>"
  },
  "cozinha": {
    titulo: "Cozinha Industrial",
    cor: "var(--color-orange)",
    texto: "<p>Esta seção está preparada para detalhar as tecnologias, boas práticas de fabricação, gestão de qualidade rígida e os bastidores de alta performance de nossas cozinhas.</p>"
  },
  "buffet": {
    titulo: "Restaurante & Buffet",
    cor: "var(--color-green)",
    texto: "<p>Esta seção está preparada para exibir a diversidade dos serviços prestados em refeitórios corporativos, incluindo os formatos Buffet, Buffet Gourmet, Sabor & Arte e outros modelos.</p>"
  }
};

/**
 * Inicialização principal do sistema do Totem
 */
function init() {
  console.log("Totem alimentaSesi inicializado com sucesso.");
  
  // Realiza o primeiro cálculo de escala da tela de 1080x1920
  adjustTotemScale();
  
  // Associa os eventos de toque e clique aos elementos
  bindEvents();
  
  // Configura animações adicionais ou estados iniciais, se necessário
  animateHotspots();
}

/**
 * Ajusta a escala da tela de 1080x1920 baseada na janela de exibição
 * Garante que a visualização de desenvolvimento e o iframe do AI Studio
 * fiquem perfeitos sem barra de rolagem e sem quebrar a resolução nativa.
 */
function adjustTotemScale() {
  const wrapper = document.getElementById("totem-wrapper");
  const screen = document.getElementById("totem-screen");
  
  if (!wrapper || !screen) return;
  
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  // Calcula o fator de escala ideal (mantendo o aspecto de 1080x1920)
  const scaleX = windowWidth / 1080;
  const scaleY = windowHeight / 1920;
  
  // Utiliza a menor escala para garantir que o totem caiba inteiramente na tela do preview
  const scale = Math.min(scaleX, scaleY);
  
  // Aplica a escala e mantém o totem centralizado
  screen.style.transform = `translate(-50%, -50%) scale(${scale})`;
}

/**
 * Associa todos os ouvintes de eventos da interface
 */
function bindEvents() {
  // Evento de redimensionamento da janela de preview para auto-escala
  window.addEventListener("resize", adjustTotemScale);
  
  // Ouvintes para o Hotspot Especial do Topo (Marca / Impacto em Números)
  const badgeImpacto = document.getElementById("badge-impacto");
  if (badgeImpacto) {
    badgeImpacto.addEventListener("click", () => openPanel("impacto"));
  }

  // Ouvintes para os Hotspots do Cenário
  const hotspotsConfig = [
    { buttonId: "btn-hotspot-educacao", triggerClass: "#hotspot-educacao .hotspot-trigger", themeKey: "educacao" },
    { buttonId: "btn-hotspot-equipe", triggerClass: "#hotspot-equipe .hotspot-trigger", themeKey: "equipe" },
    { buttonId: "btn-hotspot-buffet", triggerClass: "#hotspot-buffet .hotspot-trigger", themeKey: "buffet" },
    { buttonId: "btn-hotspot-cozinha", triggerClass: "#hotspot-cozinha .hotspot-trigger", themeKey: "cozinha" }
  ];

  hotspotsConfig.forEach(config => {
    // Escuta tanto o botão de texto quanto o círculo de disparo para uma excelente usabilidade em touch
    const labelBtn = document.getElementById(config.buttonId);
    const triggerCircle = document.querySelector(config.triggerClass);

    if (labelBtn) {
      labelBtn.addEventListener("click", () => openPanel(config.themeKey));
    }
    if (triggerCircle) {
      triggerCircle.addEventListener("click", () => openPanel(config.themeKey));
    }
  });

  // Ouvinte para fechar o painel lateral (Botão Fechar X)
  const closeBtn = document.getElementById("panel-close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closePanel);
  }

  // Ouvinte para fechar o painel ao clicar no backdrop escuro de fundo
  const backdrop = document.getElementById("backdrop-overlay");
  if (backdrop) {
    backdrop.addEventListener("click", closePanel);
  }
}

/**
 * Abre o painel lateral deslizante com base no ID do tema selecionado
 * @param {string} id - Identificador do tema
 */
function openPanel(id) {
  const panel = document.getElementById("side-panel");
  const backdrop = document.getElementById("backdrop-overlay");
  const panelTitle = document.getElementById("panel-title");
  const panelBody = document.getElementById("panel-body");
  
  if (!panel || !backdrop || !panelTitle || !panelBody) return;
  
  const dadosTema = TEMAS_PLACEHOLDER[id];
  if (!dadosTema) return;
  
  // Atualiza dinamicamente o título e a estrutura do conteúdo pré-preparada
  panelTitle.innerText = dadosTema.titulo;
  panelTitle.style.color = dadosTema.cor;
  panelBody.innerHTML = dadosTema.texto;
  
  // Ativa as classes CSS que disparam as transições suaves
  panel.classList.add("open");
  backdrop.classList.add("active");
  
  console.log(`Painel do tema "${dadosTema.titulo}" aberto.`);
}

/**
 * Fecha o painel lateral deslizante retornando ao cenário principal
 */
function closePanel() {
  const panel = document.getElementById("side-panel");
  const backdrop = document.getElementById("backdrop-overlay");
  
  if (!panel || !backdrop) return;
  
  // Remove as classes de exibição ativando a animação reversa
  panel.classList.remove("open");
  backdrop.classList.remove("active");
  
  console.log("Painel lateral fechado.");
}

/**
 * Controla e adiciona micro-interações discretas adicionais aos hotspots,
 * simulando efeitos tácteis nativos avançados para totens touchscreen.
 */
function animateHotspots() {
  const hotspots = document.querySelectorAll(".hotspot");
  hotspots.forEach(hotspot => {
    // Efeito pressed premium ao toque (active)
    hotspot.addEventListener("touchstart", () => {
      hotspot.style.transform = "translate(-20px, -20px) scale(0.95)";
    });
    
    hotspot.addEventListener("touchend", () => {
      hotspot.style.transform = "";
    });
  });
}

// Inicializa a aplicação assim que o DOM estiver carregado
document.addEventListener("DOMContentLoaded", init);
