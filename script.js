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
    seasons: {
      1: [
        { episode: 1, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        // ... inserisci gli altri episodi
      ]
    }
  },
  "The Vampire Diaries": {
    img: "https://i.imgur.com/oyXekYo.jpeg",
    seasons: {
      1: [
         { episode: 1, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" }
      ]
    }
  }
};

// --- DATABASE ANIME ---
const animeData = {
  "One Piece": {
     img: "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
     seasons: {
       1: [ { episode: 1, title: "Sono Luffy!", src: "" } ]
     }
  },
  "Attack on Titan": {
     img: "https://flxt.tmsimg.com/assets/p10701949_b_v8_ah.jpg",
     seasons: {
       1: [ { episode: 1, title: "A te, tra 2000 anni", src: "" } ]
     }
  }
};

// --- DATABASE FILM ---
const moviesData = {
   "Inception": {
     img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
     src: "",
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
    errorMsg.textContent = "Credenziali errate.";
    errorMsg.style.color = "#e50914";
  }
}

function logout() {
  window.location.reload();
}

// --- LOGICA MENU "SFOGLIA" ---
function toggleMenu(event) {
  event.stopPropagation(); // Evita che il click si propaghi
  const dropdown = document.getElementById("dropdown-menu");
  dropdown.classList.toggle("show");
}

// Chiudi il menu se si clicca fuori
window.onclick = function(event) {
  if (!event.target.matches('.netflix-nav') && !event.target.matches('.nav-trigger') && !event.target.matches('.arrow')) {
    const dropdown = document.getElementById("dropdown-menu");
    if (dropdown && dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
}

// --- CREAZIONE CARD CON TITOLO SOTTO ---
function createCard(title, data, type) {
  const card = document.createElement("div");
  card.className = "card";
  
  // Immagine
  const img = document.createElement("img");
  img.src = data.img ? data.img : "https://via.placeholder.com/200x300?text=" + title;
  img.alt = title;
  
  // Titolo sotto
  const p = document.createElement("p");
  p.className = "card-title";
  p.textContent = title;

  // Click
  card.onclick = () => {
    if (type === 'movie') {
      showMovie(title, data.src);
    } else {
      showSeasons(title, type);
    }
  };

  card.appendChild(img);
  card.appendChild(p); // Aggiungiamo il testo
  return card;
}

// --- NAVIGAZIONE ---
function filterCategory(category) {
  const hero = document.getElementById("hero-section");
  const sSec = document.getElementById("series-section");
  const mSec = document.getElementById("movies-section");
  const aSec = document.getElementById("anime-section");

  hideAllViews();
  document.getElementById("home-view").style.display = "block";

  if (category === 'home') {
    hero.style.display = "flex";
    sSec.style.display = "block"; mSec.style.display = "block"; aSec.style.display = "block";
  } 
  else if (category === 'series') {
    hero.style.display = "none";
    sSec.style.display = "block"; mSec.style.display = "none"; aSec.style.display = "none";
  } 
  else if (category === 'movies') {
    hero.style.display = "none";
    sSec.style.display = "none"; mSec.style.display = "block"; aSec.style.display = "none";
  } 
  else if (category === 'anime') {
    hero.style.display = "none";
    sSec.style.display = "none"; mSec.style.display = "none"; aSec.style.display = "block";
  }
}

function loadHome() {
  const sList = document.getElementById("series-list-div");
  const mList = document.getElementById("movies-list-div");
  const aList = document.getElementById("anime-list-div");

  sList.innerHTML = ""; mList.innerHTML = ""; aList.innerHTML = "";

  for (const k in seriesData) sList.appendChild(createCard(k, seriesData[k], 'serie'));
  for (const k in moviesData) mList.appendChild(createCard(k, moviesData[k], 'movie'));
  for (const k in animeData)  aList.appendChild(createCard(k, animeData[k], 'anime'));
  
  filterCategory('home');
}

// --- DETTAGLI E PLAYER ---
function showSeasons(title, type) {
  currentSerieTitle = title;
  hideAllViews();
  document.getElementById("season-list").style.display = "block";
  document.getElementById("season-title").textContent = title;

  let dataObj = (type === 'anime') ? animeData[title] : seriesData[title];

  if(dataObj.img) {
      document.querySelector('.details-hero').style.backgroundImage = `url('${dataObj.img}')`;
  }

  const ul = document.getElementById("seasons-ul");
  ul.innerHTML = "";

  if (dataObj.seasons) {
    for (const s in dataObj.seasons) {
      dataObj.seasons[s].forEach(ep => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${ep.episode}. ${ep.title}</span> <span>▶</span>`;
        li.onclick = () => playVideo(ep.src, ep.title);
        ul.appendChild(li);
      });
    }
  }
}

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

function playHero() {
  // Avvia la serie principale
  playVideo(seriesData["Ginny e Georgia"].seasons[1][0].src, "Ginny e Georgia");
}

function showMovie(title, src) {
  playVideo(src, title);
}

function hideAllViews() {
  document.getElementById("hero-section").style.display = "none";
  document.querySelectorAll(".view").forEach(v => v.style.display = "none");
}

function backToHome() { filterCategory('home'); }
function backToSeason() {
  if (seriesData[currentSerieTitle]) showSeasons(currentSerieTitle, 'serie');
  else if (animeData[currentSerieTitle]) showSeasons(currentSerieTitle, 'anime');
  else backToHome();
}

function filterContent() {
  const q = document.getElementById("search-bar").value.toLowerCase();
  document.querySelectorAll(".card").forEach(c => {
    const title = c.querySelector(".card-title").textContent.toLowerCase();
    c.style.display = title.includes(q) ? "block" : "none";
  });
}
