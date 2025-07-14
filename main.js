// main.js

function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  if (users[user] && users[user] === pass) {
    currentUser = user;
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-app").style.display = "block";
    loadHome();
  } else {
    document.getElementById("login-error").innerText = "Credenziali errate";
  }
}

function logout() {
  currentUser = null;
  location.reload();
}

function loadHome() {
  hideAllViews();
  document.getElementById("home-view").style.display = "block";
  document.getElementById("series-section").style.display = "block";
  document.getElementById("movies-section").style.display = "block";

  const seriesDiv = document.getElementById("series-list-div");
  seriesDiv.innerHTML = "";
  let seriesCount = 0;
  for (const serie in seriesData) {
    if (seriesCount >= 24) break;
    const card = createCard(serie, seriesData[serie].img, () => showSeasons(serie));
    seriesDiv.appendChild(card);
    seriesCount++;
  }

  const moviesDiv = document.getElementById("movies-list-div");
  moviesDiv.innerHTML = "";
  let moviesCount = 0;
  for (const movie in moviesData) {
    if (moviesCount >= 24) break;
    const card = createCard(movie, moviesData[movie].img, () => showMovie(movie));
    moviesDiv.appendChild(card);
    moviesCount++;
  }
}

function createCard(title, imgUrl, onClick) {
  const div = document.createElement("div");
  div.className = "card";
  div.onclick = onClick;

  const img = document.createElement("img");
  img.src = imgUrl;
  const titleDiv = document.createElement("div");
  titleDiv.className = "card-title";
  titleDiv.textContent = title;

  div.appendChild(img);
  div.appendChild(titleDiv);
  return div;
}

function showAll(type) {
  hideAllViews(); // Nasconde tutte le view
  document.getElementById("home-view").style.display = "block";

  const seriesSection = document.getElementById("series-section");
  const moviesSection = document.getElementById("movies-section");

  const seriesDiv = document.getElementById("series-list-div");
  const moviesDiv = document.getElementById("movies-list-div");

  if (type === "series") {
    seriesSection.style.display = "block";
    moviesSection.style.display = "none";

    seriesDiv.innerHTML = "";
    for (const serie in seriesData) {
      const card = createCard(serie, seriesData[serie].img, () => showSeasons(serie));
      seriesDiv.appendChild(card);
    }
  } else if (type === "movies") {
    moviesSection.style.display = "block";
    seriesSection.style.display = "none";

    moviesDiv.innerHTML = "";
    for (const movie in moviesData) {
      const card = createCard(movie, moviesData[movie].img, () => showMovie(movie));
      moviesDiv.appendChild(card);
    }
  }
}

function toggleView(type) {
  console.log('toggleView chiamata con:', type);

  const contentView = document.getElementById('content-view');
  contentView.innerHTML = '';
  hideAllViews();
  contentView.style.display = 'grid'; // già gestito dal CSS

  let title = '';

  if (type === 'movies') {
    title = 'Film';
    for (let [title, movie] of Object.entries(moviesData)) {
      const div = document.createElement("div");
      div.innerHTML = `
        <p>${title}</p>
        <iframe src="${movie.src}" width="100%" height="200" allowfullscreen></iframe>
      `;
      contentView.appendChild(div);
    }
  } else if (type === 'series') {
  title = 'Serie TV';
  for (let [serieTitle, serie] of Object.entries(seriesData)) {
    const div = document.createElement("div");
    div.className = "card";
    div.onclick = () => showSeasons(serieTitle);

    div.innerHTML = `
      <img src="${serie.img}" width="200" />
      <p>${serieTitle}</p>
    `;

    contentView.appendChild(div);
  }
  } else if (type === 'continue') {
    title = 'Continua a guardare';
    const lastWatched = JSON.parse(localStorage.getItem('lastWatched')) || null;
    const div = document.createElement("div");

    if (lastWatched) {
      div.innerHTML = `
        <p>${lastWatched.title}</p>
        <iframe src="${lastWatched.src}#t=${lastWatched.time}" width="100%" height="200" allowfullscreen></iframe>
      `;
    } else {
      div.innerHTML = '<p>Non hai contenuti recenti.</p>';
    }

    contentView.appendChild(div);
  }

  // Rimuove eventuali titoli precedenti
document.querySelectorAll('#main-app > h2').forEach(el => el.remove());

// Mostra il nuovo titolo sopra alla griglia
const titleElement = document.createElement("h2");
titleElement.textContent = title;
document.getElementById('main-app').insertBefore(titleElement, contentView);

}


function hideAllViews() {
  document.querySelectorAll(".view").forEach(v => v.style.display = "none");
}

function backToHome() {
  loadHome();
}

function filterContent() {
  const query = document.getElementById("search-bar").value.trim().toLowerCase();
  if (!query) return loadHome();

  hideAllViews();
  const ul = document.getElementById("search-results-ul");
  ul.innerHTML = "";

  for (const serie in seriesData) {
    if (serie.toLowerCase().includes(query)) {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.textContent = `Serie TV: ${serie}`;
      btn.onclick = () => showSeasons(serie);
      li.appendChild(btn);
      ul.appendChild(li);
    }
  }

  for (const movie in moviesData) {
    if (movie.toLowerCase().includes(query)) {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.textContent = `Film: ${movie}`;
      btn.onclick = () => showMovie(movie);
      li.appendChild(btn);
      ul.appendChild(li);
    }
  }

  if (ul.children.length === 0) {
    ul.innerHTML = "<li>Nessun risultato trovato.</li>";
  }

  document.getElementById("search-results").style.display = "block";
}
// Espone le funzioni al contesto globale
window.login = login;
window.logout = logout;
window.toggleView = toggleView;
window.filterContent = filterContent;
window.backToHome = backToHome;
window.showAll = showAll;
