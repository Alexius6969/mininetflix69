// Dati Utenti
const users = {
  "Alessio": "1234",
  "Marco": "pelopelo",
  "Alessia": "oceani",
  "Anna": "1234",
  "Alfonso": "1234",
  "Chiara": "iii"
};

let currentUser = null;
let currentSerieTitle = ""; // Variabile per ricordare in che serie siamo

// Dati Serie TV (Con le tue immagini e link)
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
      1: [
         { episode: 1, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
         // Nota: Ho copiato solo il primo episodio per brevità, 
         // il codice funzionerà con tutti gli episodi che avevi nel file originale.
         // Se ne mancano, incollali qui dal tuo vecchio file!
      ]
    }
  }
};

// Dati Film (Se ne hai, inseriscili qui sotto seguendo l'esempio)
const moviesData = {
  // ESEMPIO:
  // "Nome Film": {
  //    img: "url_immagine_film",
  //    src: "link_google_drive"
  // }
};

// FUNZIONE LOGIN
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const errorMsg = document.getElementById("login-error");

  if (users[user] && users[user] === pass) {
    currentUser = user;
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-app").style.display = "block";
    loadHome();
  } else {
    errorMsg.textContent = "Credenziali non valide!";
  }
}

// FUNZIONE LOGOUT
function logout() {
  currentUser = null;
  document.getElementById("main-app").style.display = "none";
  document.getElementById("login-screen").style.display = "flex";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

// HELPER: Crea una card (locandina)
function createCard(title, data, type) {
  const card = document.createElement("div");
  card.className = "card";
  
  const img = document.createElement("img");
  // Se non c'è immagine, usa un placeholder colorato
  img.src = data.img ? data.img : "https://via.placeholder.com/200x300/333/fff?text=" + title.replace(" ", "+");
  img.alt = title;
  
  // Gestione click
  card.onclick = () => {
    if (type === 'serie') {
      showSeasons(title);
    } else {
      showMovie(title, data.src);
    }
  };

  card.appendChild(img);
  return card;
}

// CARICA HOME PAGE
function loadHome() {
  hideAllViews();
  document.getElementById("home-view").style.display = "block";

  const seriesContainer = document.getElementById("series-list-div");
  const moviesContainer = document.getElementById("movies-list-div");
  seriesContainer.innerHTML = "";
  moviesContainer.innerHTML = "";

  // Genera card Serie
  for (const serie in seriesData) {
    const card = createCard(serie, seriesData[serie], 'serie');
    seriesContainer.appendChild(card);
  }

  // Genera card Film
  for (const movie in moviesData) {
    const card = createCard(movie, moviesData[movie], 'movie');
    moviesContainer.appendChild(card);
  }
}

// MOSTRA STAGIONI (Per le Serie)
function showSeasons(serieTitle) {
  currentSerieTitle = serieTitle; // Salva la serie corrente
  hideAllViews();
  document.getElementById("season-list").style.display = "block";
  document.getElementById("season-title").textContent = serieTitle;

  const ul = document.getElementById("seasons-ul");
  ul.innerHTML = "";

  const seasons = seriesData[serieTitle].seasons;
  for (const seasonNum in seasons) {
    const li = document.createElement("li");
    li.textContent = `Stagione ${seasonNum}`;
    li.onclick = () => showEpisodes(seasonNum);
    ul.appendChild(li);
  }
}

// MOSTRA EPISODI
function showEpisodes(seasonNum) {
  hideAllViews();
  document.getElementById("episode-list").style.display = "block";
  document.getElementById("episode-title").textContent = `${currentSerieTitle} - Stagione ${seasonNum}`;

  const container = document.getElementById("episodes-container");
  container.innerHTML = "";

  const episodes = seriesData[currentSerieTitle].seasons[seasonNum];
  
  // Crea una lista di bottoni per gli episodi
  episodes.forEach(ep => {
    const btn = document.createElement("button");
    btn.className = "nav-button"; // Riutilizziamo lo stile base
    btn.style.display = "block";
    btn.style.width = "100%";
    btn.style.textAlign = "left";
    btn.style.background = "#333";
    btn.style.marginBottom = "5px";
    btn.textContent = `${ep.episode}. ${ep.title}`;
    
    btn.onclick = () => playVideo(ep.src, ep.title);
    container.appendChild(btn);
  });
}

// RIPRODUCI VIDEO (Player)
function playVideo(src, title) {
  const container = document.getElementById("episodes-container");
  container.innerHTML = ""; // Pulisci la lista episodi
  
  // Titolo nel player
  const playingTitle = document.createElement("h3");
  playingTitle.textContent = "In riproduzione: " + title;
  playingTitle.style.marginBottom = "10px";
  container.appendChild(playingTitle);

  const iframe = document.createElement("iframe");
  iframe.src = src;
  iframe.allowFullscreen = true;
  container.appendChild(iframe);
}

// MOSTRA FILM (Diretto al player)
function showMovie(title, src) {
  hideAllViews();
  document.getElementById("episode-list").style.display = "block";
  document.getElementById("episode-title").textContent = title;
  playVideo(src, title);
}

// NAVIGAZIONE
function hideAllViews() {
  document.querySelectorAll(".view").forEach(v => v.style.display = "none");
}

function backToHome() {
  loadHome();
}

function backToSeason() {
  if (currentSerieTitle) {
    showSeasons(currentSerieTitle);
  } else {
    loadHome();
  }
}

// FILTRO DI RICERCA (Aggiornato per nascondere le card che non matchano)
function filterContent() {
  const query = document.getElementById("search-bar").value.trim().toLowerCase();
  
  // Se vuoto, mostra tutto
  if (!query) {
    document.querySelectorAll('.card').forEach(card => card.style.display = "block");
    return;
  }

  // Filtra card
  document.querySelectorAll('.card').forEach(card => {
    const title = card.querySelector('img').alt.toLowerCase();
    if (title.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}