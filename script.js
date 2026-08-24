/* =====================================================
   EXPOSIÇÃO MINAS DAS MINAS
   JavaScript principal
===================================================== */


/* =====================================================
   NAVEGAÇÃO
===================================================== */

function scrollToSection(id) {

  const section = document.getElementById(id);

  if (!section) {
    console.error("Seção não encontrada:", id);
    return;
  }

  const navbar = document.getElementById("navbar");

  const navbarHeight = navbar
    ? navbar.offsetHeight
    : 0;

  const position =
    section.getBoundingClientRect().top +
    window.scrollY -
    navbarHeight;

  window.scrollTo({
    top: position,
    behavior: "smooth"
  });

  closeMenu();
}


/* =====================================================
   MENU MOBILE
===================================================== */

function toggleMenu() {

  const menu = document.getElementById("mobileMenu");
  const hamburger = document.getElementById("hamburger");

  if (!menu) return;

  const aberto = menu.classList.toggle("open");

  if (hamburger) {
    hamburger.setAttribute(
      "aria-expanded",
      aberto ? "true" : "false"
    );
  }
}


function closeMenu() {

  const menu = document.getElementById("mobileMenu");
  const hamburger = document.getElementById("hamburger");

  if (menu) {
    menu.classList.remove("open");
  }

  if (hamburger) {
    hamburger.setAttribute(
      "aria-expanded",
      "false"
    );
  }
}


/* =====================================================
   AGENDA
===================================================== */

const AGENDA = [

  {
    cidade: "Belo Horizonte",
    data: "15 a 20 de setembro",
    local: "Praça da Estação"
  },

  {
    cidade: "Contagem",
    data: "23 a 27 de setembro",
    local: "Praça do Sol"
  },

  {
    cidade: "Ouro Preto",
    data: "30 de setembro a 04 de outubro",
    local: "Centro Histórico"
  },

  {
    cidade: "Juiz de Fora",
    data: "07 a 11 de outubro",
    local: "Praça Antônio Carlos"
  },

  {
    cidade: "Uberlândia",
    data: "14 a 18 de outubro",
    local: "Praça Tubal Vilela"
  },

  {
    cidade: "Montes Claros",
    data: "21 a 25 de outubro",
    local: "Praça Dr. Carlos"
  }

];


let cidadesVisiveis = 3;


function carregarAgenda() {

  const agendaGrid =
    document.getElementById("agendaGrid");

  if (!agendaGrid) return;

  agendaGrid.innerHTML = "";


  const quantidade =
    Math.min(
      cidadesVisiveis,
      AGENDA.length
    );


  for (let i = 0; i < quantidade; i++) {

    const cidade = AGENDA[i];


    const card =
      document.createElement("article");


    card.className = "agenda-card";


    card.innerHTML = `

      <div class="agenda-card__body">

        <div class="agenda-card__header">

          <span class="agenda-card__city">
            ${cidade.cidade}
          </span>

        </div>

        <div class="agenda-card__date">
          📅 ${cidade.data}
        </div>

        <div class="agenda-card__local">
          📍 ${cidade.local}
        </div>

      </div>

    `;


    agendaGrid.appendChild(card);

  }

}


function mostrarMaisCidades() {

  const botao =
    document.getElementById("btnCidades");


  if (cidadesVisiveis < AGENDA.length) {

    cidadesVisiveis = AGENDA.length;

    carregarAgenda();


    if (botao) {

      botao.textContent =
        "Todas as cidades exibidas";

      botao.disabled = true;

      botao.style.opacity = "0.7";

      botao.style.cursor = "default";

    }

  }

}


/* =====================================================
   GALERIA
===================================================== */

const MINERIOS = [

  {
    nome: "Hematita",
    imagem:
      "https://didatico.igc.usp.br/wp-content/uploads/2017/04/hematita-2.jpg",
    descricao:
      "Principal minério de ferro, muito importante para a produção de aço."
  },

  {
    nome: "Quartzo",
    imagem:
      "https://geologyscience.com/wp-content/uploads/2024/10/Clear-Quartz-1024x1024.webp",
    descricao:
      "Mineral muito encontrado em rochas e utilizado em diversas áreas."
  },

  {
    nome: "Pirita",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQofNqTQK_Ou5fLBMQsUYnyxnD2-D-Jd51jVIdKxUddUMzE5J0PSQHmzy0&s=10",
    descricao:
      "Conhecida como ouro de tolo, possui brilho metálico característico."
  },

  {
    nome: "Minerais de Ferro",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4NuGJBml11utQHsPC2WlLq4B1TRSDvr66NSI9Cwl6ZQWdxfLIqBfOD_c&s=10",
    descricao:
      "Fundamentais para a produção de ferro e aço."
  },

  {
    nome: "Calcita",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKAkFk4FlbJvycqTHL_kwz3N9rgKq9izIJ_zjBtXix9Rp7zYnOyiufviY&s=10",
    descricao:
      "Mineral utilizado em diferentes processos industriais."
  },

  {
    nome: "Turmalina",
    imagem:
      "https://didatico.igc.usp.br/wp-content/uploads/2017/04/turmalina-12.jpg",
    descricao:
      "Mineral conhecido pelas suas diferentes cores e beleza."
  }

];


let galeriaCompleta = false;


function carregarGaleria() {

  const galleryGrid =
    document.getElementById("galleryGrid");

  if (!galleryGrid) return;


  galleryGrid.innerHTML = "";


  const quantidade =
    galeriaCompleta
      ? MINERIOS.length
      : 3;


  for (let i = 0; i < quantidade; i++) {

    const minerio = MINERIOS[i];


    const card =
      document.createElement("article");


    card.className =
      "gallery-card";


    card.innerHTML = `

      <img
        class="gallery-card__img"
        src="${minerio.imagem}"
        alt="${minerio.nome}"
        loading="lazy"
      >

      <div class="gallery-card__body">

        <h4>
          ${minerio.nome}
        </h4>

        <p>
          ${minerio.descricao}
        </p>

      </div>

    `;


    galleryGrid.appendChild(card);

  }

}


function mostrarGaleriaCompleta() {

  galeriaCompleta = true;

  carregarGaleria();


  const botao =
    document.getElementById("btnGaleria");


  if (botao) {

    botao.textContent =
      "Galeria Completa Exibida";

    botao.disabled = true;

    botao.style.opacity = "0.7";

    botao.style.cursor = "default";

  }

}


/* =====================================================
   SUSTENTABILIDADE
===================================================== */

function mostrarSustentabilidade() {

  const mensagem = `
A mineração responsável envolve diversas práticas:

🌿 Recuperação de áreas mineradas

💧 Gestão e reaproveitamento da água

♻️ Economia circular e reaproveitamento de materiais

🌍 Preservação da biodiversidade

🔬 Uso de novas tecnologias

👥 Desenvolvimento das comunidades

Esses temas fazem parte da proposta educativa da Exposição Minas das Minas.
  `;

  alert(mensagem.trim());

}


/* =====================================================
   MENU ATIVO DURANTE O SCROLL
===================================================== */

const sections = [
  "inicio",
  "exposicao",
  "agenda",
  "galeria",
  "contato",
  "sustentabilidade"
];


function atualizarMenuAtivo() {

  const scrollPosition =
    window.scrollY + 200;


  let secaoAtual =
    "inicio";


  sections.forEach(function(id) {

    const section =
      document.getElementById(id);


    if (!section) return;


    if (
      section.offsetTop <=
      scrollPosition
    ) {

      secaoAtual = id;

    }

  });


  document
    .querySelectorAll(".nav-btn")
    .forEach(function(botao) {

      botao.classList.toggle(
        "active",
        botao.dataset.section === secaoAtual
      );

    });

}


/* =====================================================
   FORMULÁRIO
===================================================== */

function handleSubmit(event) {

  event.preventDefault();


  const formulario =
    document.getElementById("contactForm");


  const sucesso =
    document.getElementById("formSuccess");


  if (!formulario || !sucesso) {
    return;
  }


  const nome =
    document
      .getElementById("nome")
      .value
      .trim();


  const email =
    document
      .getElementById("email")
      .value
      .trim();


  const mensagem =
    document
      .getElementById("mensagem")
      .value
      .trim();


  if (!nome || !email || !mensagem) {

    alert(
      "Preencha todos os campos obrigatórios."
    );

    return;
  }


  const dados = {

    nome: nome,

    escola:
      document
        .getElementById("escola")
        .value
        .trim(),

    email: email,

    cidade:
      document
        .getElementById("cidade")
        .value
        .trim(),

    mensagem: mensagem

  };


  console.log(
    "Dados do formulário:",
    dados
  );


  formulario.hidden = true;

  sucesso.hidden = false;


  sucesso.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}


function resetForm() {

  const formulario =
    document.getElementById("contactForm");


  const sucesso =
    document.getElementById("formSuccess");


  if (!formulario || !sucesso) {
    return;
  }


  formulario.reset();

  formulario.hidden = false;

  sucesso.hidden = true;


  formulario.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}


/* =====================================================
   FECHAR MENU AO CLICAR FORA
===================================================== */

document.addEventListener(
  "click",
  function(event) {

    const menu =
      document.getElementById("mobileMenu");

    const hamburger =
      document.getElementById("hamburger");


    if (!menu || !hamburger) {
      return;
    }


    const clicouNoMenu =
      menu.contains(event.target);


    const clicouNoBotao =
      hamburger.contains(event.target);


    if (
      menu.classList.contains("open") &&
      !clicouNoMenu &&
      !clicouNoBotao
    ) {

      closeMenu();

    }

  }
);


/* =====================================================
   FECHAR MENU COM ESC
===================================================== */

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {

      closeMenu();

    }

  }
);


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  function() {


    /* Agenda */

    carregarAgenda();


    /* Galeria */

    carregarGaleria();


    /* Botão da agenda */

    const btnCidades =
      document.getElementById("btnCidades");


    if (btnCidades) {

      btnCidades.addEventListener(
        "click",
        mostrarMaisCidades
      );

    }


    /* Botão da galeria */

    const btnGaleria =
      document.getElementById("btnGaleria");


    if (btnGaleria) {

      btnGaleria.addEventListener(
        "click",
        mostrarGaleriaCompleta
      );

    }


    /* Botão sustentabilidade */

    const btnSustentabilidade =
      document.getElementById(
        "btnSustentabilidade"
      );


    if (btnSustentabilidade) {

      btnSustentabilidade.addEventListener(
        "click",
        mostrarSustentabilidade
      );

    }


    /* Formulário */

    const formulario =
      document.getElementById(
        "contactForm"
      );


    if (formulario) {

      formulario.addEventListener(
        "submit",
        handleSubmit
      );

    }


    /* Nova mensagem */

    const btnNovaMensagem =
      document.getElementById(
        "btnNovaMensagem"
      );


    if (btnNovaMensagem) {

      btnNovaMensagem.addEventListener(
        "click",
        resetForm
      );

    }


    /* Menu */

    atualizarMenuAtivo();

  }
);


/* =====================================================
   SCROLL
===================================================== */

window.addEventListener(
  "scroll",
  atualizarMenuAtivo
);


/* =====================================================
   REDIMENSIONAMENTO DA TELA
===================================================== */

window.addEventListener(
  "resize",
  function() {

    if (window.innerWidth > 1024) {

      closeMenu();

    }

  }
);