// --- DATI E CONFIGURAZIONE ---
const users = {
  "Alessio": "1234",
  "Marco": "pelopelo",
  "Alessia": "oceani",
  "Anna": "1234",
  "Alfonso": "1234",
  "Chiara": "iii"
};

const seriesData = {
  "Ginny e Georgia": {
    img: "https://i.imgur.com/CScKmEZ.jpeg",
    seasons: {
      1: [
        { episode: 1, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 2, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" },
        { episode: 3, title: "Cose che si addicono solo a gente ricca", src: "https://drive.google.com/file/d/1SagpLPK4OmTmeO0dr23xfeA1rfkmFFv4/preview" },
        { episode: 4, title: "Lydia Bennet è senza dubbio femminista", src: "https://drive.google.com/file/d/1uM6S1cUnBRT_wRLsxvX0VO5oZ6MAIbVU/preview" },
        { episode: 5, title: "Boo, brutta stron*a", src: "https://drive.google.com/file/d/1MFYR1es-2PzE40642-nuaMJQ7GE0QHOZ/preview" },
        { episode: 6, title: "Non mi capite", src: "https://drive.google.com/file/d/1Rfr4vh6xVEoG5f-WMeeQyoChIGInwQAt/preview" },
        { episode: 7, title: "Buon compleanno sciocca", src: "https://drive.google.com/file/d/1Kq7Fs06knX-6VOXQTs0hqphJ3Q3srCun/preview" },
        { episode: 8, title: "Croce su una parte, croce sull'altra", src: "https://drive.google.com/file/d/1kLJ29kNZnz_RF5NDSXVJvSdWUHe6TC5J/preview" },
        { episode: 9, title: "Amare è difficile", src: "https://drive.google.com/file/d/1-1Au2tWQIj37QW_PFj3mG71i_k4YS3Rc/preview" },
        { episode: 10, title: "Il peggior tradimento dai tempi di Jordyn e Kylie", src: "https://drive.google.com/file/d/1jv_pet7AY2Yvrwa0-HmZc_GRGcEeu01o/preview" }
      ],
      2: [
        { episode: 1, title: "Bentornati str**zetti", src: "https://drive.google.com/file/d/13hz6WDbRZN0iN000HEjvPNVrhhO1f75p/preview" },
        { episode: 2, title: "Perchè tutto deve diventare cosi terribile, ogni volta, sempre?", src: "https://drive.google.com/file/d/1rstuICrKjXthkzgbm_dIYXPeM-updvTK/preview" },
        { episode: 3, title: "Che cosa hai in mente, ragazzina?", src: "https://drive.google.com/file/d/1OHwtpnbItdGgEzPnc-eT7xDjD5__2c_2/preview" },
        { episode: 4, title: "Buon mio compleanno a voi", src: "https://drive.google.com/file/d/1FJFa-iI6Q0uSc7IFPKI9R-a_xjaWdK5w/preview" },
        { episode: 5, title: "I latkes sono eccellenti", src: "https://drive.google.com/file/d/1CXzJxprhWFgAfYFsVRxmwjcEM76coGhY/preview" },
        { episode: 6, title: "Questo è lo speciale Natale di Ginny & Georgia", src: "https://drive.google.com/file/d/1iWx2hEi-H7BcVC4W-S84mxED2kk-D6NY/preview" },
        { episode: 7, title: "Lascia fare a noi tutto il resto", src: "https://drive.google.com/file/d/1YISd0u7tw9DY38-RQdji_6Mt_SNTBQqQ/preview" },
        { episode: 8, title: "Ascolta! L'oscurità scende...", src: "https://drive.google.com/file/d/19_nawVSd7rWaVffpUJSPd_97XAgGYtIp/preview" },
        { episode: 9, title: "Prima o poi lo uccido", src: "https://drive.google.com/file/d/1SYAA10m4LjxaAItsbypN_eK7K9i7IyGl/preview" },
        { episode: 10, title: "Non sono Cenerentola", src: "https://drive.google.com/file/d/1z6ea1hdBPUG3NqaEVv3TE5-YlrAU_lA-/preview" }
      ],
      3: [
        { episode: 1, title: "Non sarebbe un buon podcast", src: "https://drive.google.com/file/d/1UuRAg2JStiRt-X2Q63NH6vN3NADVcInX/preview" },
        { episode: 2, title: "Maledetto bip, bip", src: "https://drive.google.com/file/d/10ipOz6ugcE4hI9JtHyQZJu1azsLuFHgk/preview" },
        { episode: 3, title: "Gli amici ballano", src: "https://drive.google.com/file/d/1pjbdrEG9mpSxP1vvtSlKoqzbPLW7fb6n/preview" },
        { episode: 4, title: "E' tornata la str***a", src: "https://drive.google.com/file/d/18LgMYOeJoMJ9N101H1DOkKnxwQzurj3p/preview" },
        { episode: 5, title: "La dinamite fa bum", src: "https://drive.google.com/file/d/1lYcyzTPVuqTdC5yDG2E_gQyXOOFeHNvX/preview" },
        { episode: 6, title: "Almeno non può andare peggio", src: "https://drive.google.com/file/d/1F-_xjgRZy4SLFgGB9EOOuUfrImfcXmoS/preview" },
        { episode: 7, title: "E' pazzesco", src: "https://drive.google.com/file/d/19T_zEO-PXZZl8uK3Wsu3eDfqQMF8qn5v/preview" },
        { episode: 8, title: "E' un pranzo al sacco?", src: "https://drive.google.com/file/d/1CxoJWegDyFbvtu2XsRZTE5tnVr3geM1x/preview" },
        { episode: 9, title: "E' il momento del mio assolo", src: "https://drive.google.com/file/d/1ZUnk12DxDTH3E36rx7sLH1Qyctwu-Rfv/preview" },
        { episode: 10, title: "Mostri", src: "https://drive.google.com/file/d/1UvEuk_dt2Fv2uwlB_X5NoQ6su4VavjB0/preview" }
      ]
    }
  },
  "The Vampire Diaries": {
    img: "https://i.imgur.com/oyXekYo.jpeg",
    seasons: {
      1: [ { episode: 1, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" } ]
    }
  }
};

const animeData = {
  "One Piece": {
     img: "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
     seasons: { 1: [ { episode: 1, title: "Sono Luffy!", src: "" } ] }
  },
  "Attack on Titan": {
     img: "https://flxt.tmsimg.com/assets/p10701949_b_v8_ah.jpg",
     seasons: { 1: [ { episode: 1, title: "A te, tra 2000 anni", src: "" } ] }
  }
};

const moviesData = {
   "Inception": {
     img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
     src: "",
   }
};

let currentUser = null;
let currentSerieTitle = ""; 
let currentSelectedSeason = null;

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

  for (const k in seriesData) sList.appendChild(createCard(k, seriesData[k], 'serie'));
  for (const k in moviesData) mList.appendChild(createCard(k, moviesData[k], 'movie'));
  for (const k in animeData)  aList.appendChild(createCard(k, animeData[k], 'anime'));
  
  filterCategory('home');
}

// --- SEASON SELECTOR (STILE NETFLIX) ---
function showSeasons(title, type) {
  currentSerieTitle = title;
  hideAllViews();
  document.getElementById("season-list").style.display = "block";
  document.getElementById("season-title").textContent = title;

  let dataObj = (type === 'anime') ? animeData[title] : seriesData[title];

  if(dataObj.img) {
      document.querySelector('.details-hero').style.backgroundImage = `linear-gradient(to top, #141414, transparent), url('${dataObj.img}')`;
  }

  // Popoliamo il selettore di stagioni
  const seasonSelector = document.getElementById("season-selector");
  seasonSelector.innerHTML = "";
  
  if (dataObj.seasons) {
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
  if (animeData[currentSerieTitle]) {
    type = 'anime';
  }
  
  displayEpisodesForSeason(currentSerieTitle, selectedSeason, type);
}

function displayEpisodesForSeason(title, seasonNum, type) {
  let dataObj = (type === 'anime') ? animeData[title] : seriesData[title];
  
  const ul = document.getElementById("seasons-ul");
  ul.innerHTML = "";

  if (dataObj.seasons && dataObj.seasons[seasonNum]) {
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
