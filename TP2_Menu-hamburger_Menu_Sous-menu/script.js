"use strict"

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
    addProperties();
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

    if (getStyle('width', mainNav) === "400px") {
        mainNav.classList.remove('enlarge-nav');
        mainContainer.classList.add('increase-content');
    }
    if (getStyle('width', mainNav) === "100px") {
        mainNav.classList.add('enlarge-nav');
        mainContainer.classList.remove('increase-content');
    }
});





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


/*variables essentielles*/
var closeOptions = 'fa-angle-left';
var openOptions = 'fa-angle-down';

function createItemsMenu(firstIcon, theText, theBadge = "", classBadge = "", closeOptions = "") {

    /* création des li _ a _ small */
    const li = document.createElement('li');
    const a = document.createElement('a');
    const small1 = document.createElement("small");
    const small2 = document.createElement("small");
    const small3 = document.createElement("small");
    const iSpanSmall1 = document.createElement('i');
    const iSpanSmall3 = document.createElement('i');
    // ! lien li et a 
    li.appendChild(a);
    // !lien a et smalls 
    [small1, small2, small3].forEach(small => {
        a.appendChild(small);
    });
    /* création des span */
    const spanSmall1 = document.createElement('span');
    const spanSmall2 = document.createElement('span');
    const span1Small3 = document.createElement('span');
    const span2Small3 = document.createElement('span');
    // ! lien smalls et leurs fils respectifs
    small1.appendChild(spanSmall1);
    small2.appendChild(spanSmall2);
    [span1Small3, span2Small3].forEach(spanSmall3 => {
        small3.appendChild(spanSmall3);
    });
    // ! lien span et i
    spanSmall1.appendChild(iSpanSmall1);
    span2Small3.appendChild(iSpanSmall3);
    li.classList.add('menu-items');
    // ! text et attributs
    a.setAttribute('href', "#");
    iSpanSmall1.className = firstIcon + " fa-2x";
    spanSmall2.innerHTML = theText;
    span1Small3.innerHTML = theBadge;
    span1Small3.className = classBadge;
    iSpanSmall3.className = "fa-solid " + closeOptions;


    return li;
}


const greatUl = document.querySelector(".liste_a_puces");


function createASubMenu(tabMenus) {
    for (let i = 0; i < tabMenus.length; i++) {
        const menu = tabMenus[i];

        const li = createItemsMenu(menu.firstIcon, menu.text, menu.badge, menu.classBadge, menu.closeOptions);
        greatUl.appendChild(li);

        const tabSousMenu = tabMenus[i].subMenu;
        const btnClosingAndOpening = li.firstElementChild.children[2].lastElementChild.firstElementChild;

        for (let j = 0; j < tabSousMenu.length; j++) {
            const sousMenu = tabSousMenu[j];
            const sousLi = createItemsMenu(sousMenu.firstIcon, sousMenu.text, sousMenu.badge, sousMenu.classBadge, sousMenu.closeOptions);
            sousLi.classList.add(`sous_li${i}`);
            greatUl.appendChild(sousLi);
        }


        const lesSousLi = document.querySelectorAll(`.sous_li${i}`);
        btnClosingAndOpening.addEventListener("click", (e) => {
            e.target.classList.toggle("fa-angle-left");
            e.target.classList.toggle("fa-angle-down");
            console.log(lesSousLi);
            lesSousLi.forEach(item => {
                item.classList.toggle("undisplay");
            });
        });

    }
}



createASubMenu(tabMenus);