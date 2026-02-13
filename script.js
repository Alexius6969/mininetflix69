// script.js
// Logica applicazione (UI + player).
// NOTA: i dati (users/seriesData/moviesData/animeData) sono in data.js

let currentUser = null;
let currentSerieTitle = ""; 
let currentSelectedSeason = null;

// --- LOGIN ---
function login() {
  const userInput = document.getElementById("username").value.trim();
  const passInput = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("login-error");

  // Controlla se l'utente esiste e la password coincide
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

// --- MENU MOBILE & DESKTOP ---
function toggleMenu(event) {
  event.stopPropagation(); 
  const dropdown = document.getElementById("dropdown-menu");
  dropdown.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.netflix-nav') && !event.target.matches('.nav-trigger') && !event.target.matches('.arrow')) {
    const dropdown = document.getElementById("dropdown-menu");
    if (dropdown && dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
}

// --- CREAZIONE CARD ---
function createCard(title, data, type) {
  const card = document.createElement("div");
  card.className = "card";
  
  const img = document.createElement("img");
  img.src = data.img ? data.img : "https://via.placeholder.com/200x300?text=" + title;
  img.alt = title;
  
  const p = document.createElement("p");
  p.className = "card-title";
  p.textContent = title;

  card.onclick = () => {
    if (type === 'movie') {
      showMovie(title, data.src);
    } else {
      showSeasons(title, type);
    }
  };

  card.appendChild(img);
  card.appendChild(p);
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

  // Assicuriamoci che i dati esistano prima di fare il loop
  if (typeof seriesData !== 'undefined') {
    for (const k in seriesData) sList.appendChild(createCard(k, seriesData[k], 'serie'));
  }
  if (typeof moviesData !== 'undefined') {
    for (const k in moviesData) mList.appendChild(createCard(k, moviesData[k], 'movie'));
  }
  if (typeof animeData !== 'undefined') {
    for (const k in animeData)  aList.appendChild(createCard(k, animeData[k], 'anime'));
  }
  
  filterCategory('home');
}

// --- SEASON SELECTOR (STILE NETFLIX) ---
function showSeasons(title, type) {
  currentSerieTitle = title;
  hideAllViews();
  document.getElementById("season-list").style.display = "block";
  document.getElementById("season-title").textContent = title;

  let dataObj = (type === 'anime') ? animeData[title] : seriesData[title];

  if(dataObj && dataObj.img) {
      document.querySelector('.details-hero').style.backgroundImage = `linear-gradient(to top, #141414, transparent), url('${dataObj.img}')`;
  }

  // Popoliamo il selettore di stagioni
  const seasonSelector = document.getElementById("season-selector");
  seasonSelector.innerHTML = "";
  
  if (dataObj && dataObj.seasons) {
    const seasonKeys = Object.keys(dataObj.seasons);
    seasonKeys.forEach(s => {
      const option = document.createElement("option");
      option.value = s;
      option.textContent = `Stagione ${s}`;
      seasonSelector.appendChild(option);
    });
    
    // Mostriamo la prima stagione di default
    currentSelectedSeason = seasonKeys[0];
    displayEpisodesForSeason(title, currentSelectedSeason, type);
  }
}

function changeSeason() {
  const seasonSelector = document.getElementById("season-selector");
  const selectedSeason = seasonSelector.value;
  currentSelectedSeason = selectedSeason;
  
  // Determina il tipo (serie o anime)
  let type = 'serie';
  if (typeof animeData !== 'undefined' && animeData[currentSerieTitle]) {
    type = 'anime';
  }
  
  displayEpisodesForSeason(currentSerieTitle, selectedSeason, type);
}

function displayEpisodesForSeason(title, seasonNum, type) {
  let dataObj = (type === 'anime') ? animeData[title] : seriesData[title];
  
  const ul = document.getElementById("seasons-ul");
  ul.innerHTML = "";

  if (dataObj && dataObj.seasons && dataObj.seasons[seasonNum]) {
    dataObj.seasons[seasonNum].forEach(ep => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${ep.episode}. ${ep.title}</span> <span>▶</span>`;
      li.onclick = () => playVideo(ep.src, ep.title);
      ul.appendChild(li);
    });
  }
}

// --- PLAYER E NAVIGAZIONE INTERNA ---
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
  // Esempio: riproduce il primo episodio di Ginny e Georgia se esiste
  if (seriesData["Ginny e Georgia"]) {
    playVideo(seriesData["Ginny e Georgia"].seasons[1][0].src, "Ginny e Georgia");
  }
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
