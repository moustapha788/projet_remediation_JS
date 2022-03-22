const main = document.querySelector(".main");
const form = document.querySelector(".header form");
const input = document.querySelector(".header form input[type='search']");

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
/* 
***********
EVENTS
***********
*/
getMovies(APIURL);

form.addEventListener("submit", () => {
    searchMovie();
});

/* 
***********
FUNCTIONS
***********
*/
// asynchrous function who gets the movies
async function getMovies(url) {
    if (fetch(APIURL)) {
        const response = await fetch(APIURL);
        var data = await response.json();
        createACardMovie(data["results"]);
    }
}

// create a movie
function createACardMovie(tableData) {
    tableData.forEach(movie => {
        const averageClass = (movie["vote_average"] <= 7) ? "orange" : "top";
        const card = `
            <div class="card">
                <div class="movie-image">
                    <img src="${IMGPATH + movie["poster_path"]}" >
                </div>
                <div class="movie-info">
                    <h2>${movie["title"]}</h2>
                    <small class="${averageClass}">${movie["vote_average"]}</small>
                </div>
                <div class="overview">
                    <h1>Overview</h1>
                    <p>${movie["overview"]}</p>
                </div>
            </div>
        `;
        main.insertAdjacentHTML("beforeend", card);
    })
}
// vider main
function viderMain() {
    main.innerHTML = "";
}
// searchMovie
function searchMovie(data) {
    const request = input.value;
    // if (data["title"] === request) {
    getMovies(SEARCHAPI + request);
    // } else {
    // getMovies(APIURL);
    // }
}