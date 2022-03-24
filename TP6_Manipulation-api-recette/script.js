/* 
SUMMARY
API Générer aléatoirement une recette:      https://www.themealdb.com/api/json/v1/1/random.php
API Filtre By ID:                           https://www.themealdb.com/api/json/v1/1/lookup.php?i=52913
API Filtre By le nom de la recette :        https://www.themealdb.com/api/json/v1/1/search.php?s=Brie
*/


const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php"
const SEARCH_BY_ID = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
const SEARCH_BY_NAME = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const body = document.querySelector("body");
const main = document.getElementById("main");
const form = document.querySelector(".header form")
const search = document.getElementById("search");
const fav = document.getElementById("fav");
// const generate = document.querySelector(".generate");
const modalContainer = document.querySelector(".modal-container");



fav.addEventListener("click", () => {
    alert("la partie favorite n'est pas encore implémenté");
});


getRecipes(API_URL);
search.addEventListener("input", e => {
    viderMain();
    searchRecipe(e.target.value)
});
// asynchrous function who gets the recipes
async function getRecipes(url) {
    // try {
    const response = await fetch(url);
    const data = await response.json();
    createCardRecipe(data["meals"]);
    // const card = await createCardRecipe(data["meals"]);
    main.insertAdjacentHTML("beforeend", card);

    // } catch (error) {
    // console.log(error.message);
    // }
}

function createCardRecipe(tableData) {
    tableData.forEach(data => {
        const newRecipe = (main.children.length == 0) ? `<p class="generate"><marquee>Generer une recette</marquee></p>` : "";
        const card = `
            <div class="recipe">
                <div class="recipe_content">
                    <img src="${data["strMealThumb"]}" >
                </div>
                <div class="recipe_details">
                    <span>${data["strMeal"]}</span>
                    <span class="details_recipe"><i class="fa-solid fa-heart fa-2x"></i></span>
                </div>
                ${newRecipe}
            </div>
        `;
        // return card;
        main.insertAdjacentHTML("beforeend", card);
        const generate = document.querySelector(".generate");
        generate.addEventListener("click", () => {
            viderMain();
            getRecipes(API_URL);
        });

        modalContainer.insertAdjacentHTML("beforeend", detailsList);
        detailsRecipe.addEventListener("click", () => {
            createDetailsRecipe(data);
            viderModal();

            const close_modal = document.querySelector(".close_modal");
            modalContainer.classList.add("show_flex");
            body.classList.add("innacessible_body");
            close_modal.addEventListener("click", () => {
                modalContainer.classList.remove("show_flex");
                body.classList.remove("innacessible_body");
            });


        });
        // const detailsList = createDetailsRecipe(data);
        // modalContainer.insertAdjacentHTML("beforeend", detailsList);
        // const close_modal = document.querySelector(".close_modal")
        // close_modal.addEventListener("click", () => {
        //     modalContainer.classList.remove("show_flex");
        //     body.classList.remove("innacessible_body");
        // });

    });
}

function createDetailsRecipe(data) {
    let list = ``;
    for (let i = 1; i <= 20; i++) {
        if (data["strIngredient" + i]) {
            list += `<li>${data["strIngredient" + i]}</li>`;
        }
    }
    /* 
    for (let i = 1; i <= 20; i++) {
        if (data["strMeasure" + i] !== "") {
            list += `<li>${data["strMeasure" + i]}</li>`;
        }
    } 
    */
    const detailsList = `
        <section class="modal-details animate__jackInTheBox">
            <div class="head">
                <h1 class="recipe_title">${data["strMeal"]}</h1>
                <span class="close_modal"><i class="fa-solid fa-xmark fa-4x"></i></span>
            </div>
            <p>
                <img src="${data["strMealThumb"]}">
            </p>
            <div class="infos">
                
                <div class="instuctions">
                    <h1>Instructions</h1>
                    ${data["strInstructions"]}
                </div>
                <div class="ingredients">
                    <h1>Ingredients</h1>
                    <ul>
                        ${list}
                    </ul>
                </div>
            </div>
        </section>
    `;
    modalContainer.insertAdjacentHTML("beforeend", detailsList);
}

// search Recipe
function searchRecipe(request) {
    getRecipes(SEARCH_BY_NAME + request);

    // if (request) {
    //     if (Number.isInteger(request)) {
    //         getRecipes(SEARCH_BY_ID + request);
    //     } else {
    //         getRecipes(SEARCH_BY_NAME + request);
    //     }
    // } else {
    //     getRecipes(API_URL);
    // }
}


// vider main
function viderMain() {
    main.innerHTML = "";
}

function viderModal() {
    modalContainer.innerHTML = "";
}