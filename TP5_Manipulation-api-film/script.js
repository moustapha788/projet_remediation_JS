const main = document.querySelector(".main");
const form = document.querySelector(".header form");
const input = document.querySelector(".header form input[type='search']");

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const APIURL_ALL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";


/* 
***********
EVENTS
***********
*/
getMovies(APIURL);
form.addEventListener("input", e => { searchMovie(e.target.value) });



/* 
***********
FUNCTIONS
***********
*/

// asynchrous function who gets the movies
async function getMovies(url) {
    try {
        const response = await fetch(url);
        var data = await response.json();
        createACardMovie(data["results"]);
    } catch (error) {
        console.log(error.message);
    }
}

// create a movie
function createACardMovie(tableData) {
    tableData.forEach(movie => {
        if (movie["vote_average"] < 5) {
            averageClass = "red";
        } else if (movie["vote_average"] < 7) {
            averageClass = "orange";
        } else {
            averageClass = "top";
        }
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

// control variables
let currentPage = 1;


window.addEventListener('scroll', () => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 500) {
        currentPage++;
        getMovies(APIURL_ALL + currentPage);
    }
});


// vider main
function viderMain() {
    main.innerHTML = "";
}

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
// searchMovie
function searchMovie(request) {
    if (request == "") {
        getMovies(APIURL);
    } else {
        viderMain();
        getMovies(SEARCHAPI + request);
    }
}