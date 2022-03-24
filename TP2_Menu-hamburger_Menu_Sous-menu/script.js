"use strict"
/* 
variables essentielles
*/
const closeOptions = 'fa-angle-left';
const openOptions = 'fa-angle-down';

// const overflowed = document.getElementsByClassName('overflowed');
/* récupération des élémetns du DOM   */
const mainNav = document.getElementById('mainNav');
const burgerButton = document.getElementById('burger-button');
const mainContainer = document.getElementById('mainContainer');
const adminLTE = document.getElementById('admin-LTE');
const navbar = document.getElementById('navbar');


/* a menu */
const menuItems = document.querySelectorAll(".menu-items a ");

// ! events
window.addEventListener("load", () => {
    mainNav.classList.add('enlarge-nav');
    mainContainer.classList.add('increase-content');
});
//  début du survol 
mainNav.addEventListener('mouseover', () => {
    mainNav.classList.add('enlarge-nav');
    mainContainer.classList.remove('increase-content');
    removeProperties();
});
//  fin du survol 
mainNav.addEventListener("mouseout", () => {
    mainNav.classList.remove('enlarge-nav');
    mainContainer.classList.add('increase-content');
    addProperties();

});
burgerButton.addEventListener("click", () => {
    console.log(getStyle('width', mainNav));

    if (getStyle('width', mainNav) === "400px") {
        mainNav.classList.remove('enlarge-nav');
        mainContainer.classList.add('increase-content');

    }
    if (getStyle('width', mainNav) === "100px") {
        mainNav.classList.add('enlarge-nav');
        mainContainer.classList.remove('increase-content');
    }
});

function createItemsMenu(firstIcone, theText, theBadge = "", classBadge = "", angle = "") {
    const li =
        `
        <li class="menu-items">
            <a class="" href="#">
                <small>
                    <span><i class="${firstIcone}"></i></span>
                </small>
                <small>
                    <span class="">${theText}</span>
                </small>
                <small>
                    <span class="${classBadge}">${theBadge}</span>
                    <span><i class="${angle}"></i></span>
                </small>
            </a>
        </li>
        `;

    return li;
}

function addProperties() {
    // the user
    document.querySelectorAll('.presentation').forEach(card => {
        card.lastElementChild.classList.add('undisplay');
    });
    // the input
    document.querySelector("#search-input").classList.add('flush_input');
    // the nav
    document.querySelectorAll('.menu-items').forEach(item => {
        const theSmall = item.firstElementChild.children;
        [theSmall[1], theSmall[2]].forEach(smalll => smalll.classList.add('undisplay'));
    });

}

function removeProperties() {
    // the user
    document.querySelectorAll('.presentation').forEach(card => {
        card.lastElementChild.classList.remove('undisplay');
    });
    // the input
    document.querySelector("#search-input").classList.remove('flush_input');
    // the nav
    document.querySelectorAll('.menu-items').forEach(item => {
        const theSmall = item.firstElementChild.children;
        [theSmall[1], theSmall[2]].forEach(smalll => smalll.classList.remove('undisplay'));
    });

}

function getStyle(a, b) { return window.getComputedStyle(b, null)[a]; }