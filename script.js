// --- DATI UTENTI ---
const users = {
  "Alessio": "1234",
  "Marco": "pelopelo",
  "Alessia": "oceani",
  "Anna": "1234",
  "Alfonso": "1234",
  "Chiara": "iii"
};

// --- DATABASE SERIE TV ---
const seriesData = {
  "Ginny e Georgia": {
    img: "https://i.imgur.com/CScKmEZ.jpeg",
    desc: "Ginny Miller, un'adolescente impacciata, e sua madre Georgia, affascinante e dinamica, si trasferiscono nel New England.",
    seasons: {
      1: [
        { episode: 1, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        // ... (Aggiungi qui gli altri episodi che avevi prima)
      ]
    }
  },
  "The Vampire Diaries": {
    img: "https://i.imgur.com/oyXekYo.jpeg",
    desc: "Due fratelli vampiri ossessionati dalla stessa ragazza in una piccola città dove esseri soprannaturali vivono in segreto.",
    seasons: {
      1: [
         { episode: 1, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" }
      ]
    }
  }
};

// --- DATABASE ANIME (NUOVO) ---
const animeData = {
  "One Piece": {
     img: "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
     desc: "Monkey D. Luffy salpa per diventare il Re dei Pirati.",
     seasons: {
       1: [ { episode: 1, title: "Sono Luffy!", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" } ]
     }
  },
  "Attack on Titan": {
     img: "https://flxt.tmsimg.com/assets/p10701949_b_v8_ah.jpg",
     desc: "L'umanità combatte contro giganti mangia-uomini dietro enormi mura.",
     seasons: {
       1: [ { episode: 1, title: "A te, tra 2000 anni", src: "" } ]
     }
  }
};

// --- DATABASE FILM ---
const moviesData = {
   "Inception": {
     img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
     src: "LINK_FILM_QUI",
     desc: "Un ladro che ruba segreti aziendali attraverso l'uso della tecnologia di condivisione dei sogni."
   }
};

let currentUser = null;
let currentSerieTitle = ""; 

// --- LOGIN ---
function login() {
  const userInput = document.getElementById("username").value.trim();
  const passInput = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("login-error");

  if (users[userInput] && users[userInput] === passInput) {
    currentUser = userInput;
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-app").style.display = "block";
    loadHome();
  } else {
    errorMsg.textContent = "Password errata o utente inesistente.";
    errorMsg.style.color = "#e50914";
  }
}

function logout() {
  window.location.reload(); // Il modo più semplice per fare logout pulito
}

// --- CORE: CARICAMENTO SCHEDE ---
function createCard(title, data, type) {
  const card = document.createElement("div");
  card.className = "card";
  
  const img = document.createElement("img");
  img.src = data.img ? data.img : "https://via.placeholder.com/200x300?text=" + title;
  img.alt = title;
  
  card.onclick = () => {
    if (type === 'movie') {
      showMovie(title, data.src);
    } else {
      showSeasons(title, type);
    }
  };

  card.appendChild(img);
  return card;
}

// --- NAVIGAZIONE CATEGORIE ---
function filterCategory(category) {
  // Gestione visibilità sezioni
  const hero = document.getElementById("hero-section");
  const sSec = document.getElementById("series-section");
  const mSec = document.getElementById("movies-section");
  const aSec = document.getElementById("anime-section");

  // Reset: mostra la vista Home
  hideAllViews();
  document.getElementById("home-view").style.display = "block";

  // Logica filtro
  if (category === 'home') {
    hero.style.display = "flex";
    sSec.style.display = "block";
    mSec.style.display = "block";
    aSec.style.display = "block";
  } 
  else if (category === 'series') {
    hero.style.display = "none";
    sSec.style.display = "block";
    mSec.style.display = "none";
    aSec.style.display = "none";
  } 
  else if (category === 'movies') {
    hero.style.display = "none";
    sSec.style.display = "none";
    mSec.style.display = "block";
    aSec.style.display = "none";
  } 
  else if (category === 'anime') {
    hero.style.display = "none";
    sSec.style.display = "none";
    mSec.style.display = "none";
    aSec.style.display = "block";
  }
}

function loadHome() {
  // Popola tutte le liste all'avvio
  const sList = document.getElementById("series-list-div");
  const mList = document.getElementById("movies-list-div");
  const aList = document.getElementById("anime-list-div");

  sList.innerHTML = "";
  mList.innerHTML = "";
  aList.innerHTML = "";

  for (const k in seriesData) sList.appendChild(createCard(k, seriesData[k], 'serie'));
  for (const k in moviesData) mList.appendChild(createCard(k, moviesData[k], 'movie'));
  for (const k in animeData)  aList.appendChild(createCard(k, animeData[k], 'anime'));
  
  // Default: mostra tutto
  filterCategory('home');
}

// --- DETTAGLI SERIE/ANIME ---
function showSeasons(title, type) {
  currentSerieTitle = title;
  hideAllViews();
  document.getElementById("season-list").style.display = "block";
  document.getElementById("season-title").textContent = title;

  // Cerchiamo i dati nel posto giusto
  let dataObj = (type === 'anime') ? animeData[title] : seriesData[title];

  // Aggiorna sfondo Hero dettagli (opzionale)
  if(dataObj.img) {
      document.querySelector('.details-hero').style.backgroundImage = `linear-gradient(to top, #141414, transparent), url('${dataObj.img}')`;
  }

  const ul = document.getElementById("seasons-ul");
  ul.innerHTML = "";

  // Mostra stagioni o episodi diretti se struttura semplice
  // Qui assumo la struttura standard che usavamo: seasons -> 1 -> episodi
  if (dataObj.seasons) {
    for (const s in dataObj.seasons) {
      // Invece di cartelle, mostriamo direttamente tutti gli episodi della stagione 1 per semplicità
      // o creiamo header per le stagioni
      const sHeader = document.createElement("h4");
      sHeader.textContent = "Stagione " + s;
      sHeader.style.color = "gray";
      sHeader.style.marginLeft = "15px";
      ul.appendChild(sHeader);

      dataObj.seasons[s].forEach(ep => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${ep.episode}. ${ep.title}</span> <span style="margin-left:auto">▶</span>`;
        li.onclick = () => playVideo(ep.src, ep.title);
        ul.appendChild(li);
      });
    }
  }
}

// --- PLAYER ---
function playVideo(src, title) {
  hideAllViews();
  document.getElementById("episode-list").style.display = "block";
  document.getElementById("episode-title").textContent = title;
  
  const container = document.getElementById("episodes-container");
  container.innerHTML = "";
  
  const iframe = document.createElement("iframe");
  iframe.src = src;
  iframe.allowFullscreen = true;
  container.appendChild(iframe);
}

// Scorciatoia per il bottone "Riproduci" della Hero Section
function playHero() {
  // Esempio: fa partire il primo episodio di Ginny e Georgia
  playVideo(seriesData["Ginny e Georgia"].seasons[1][0].src, "Ginny e Georgia - Pilot");
}

function showMovie(title, src) {
  playVideo(src, title);
}

// --- UTILS ---
function hideAllViews() {
  document.getElementById("hero-section").style.display = "none"; // Nascondi hero
  document.querySelectorAll(".view").forEach(v => v.style.display = "none");
}

function backToHome() {
  filterCategory('home');
}

function backToSeason() {
  // Torniamo alla lista episodi della serie corrente
  // Trucco: controlliamo dove sta il titolo
  if (seriesData[currentSerieTitle]) showSeasons(currentSerieTitle, 'serie');
  else if (animeData[currentSerieTitle]) showSeasons(currentSerieTitle, 'anime');
  else backToHome();
}

function filterContent() {
  const q = document.getElementById("search-bar").value.toLowerCase();
  document.querySelectorAll(".card").forEach(c => {
    const title = c.querySelector("img").alt.toLowerCase();
    c.style.display = title.includes(q) ? "block" : "none";
  });
}
