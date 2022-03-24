"use strict"

const menus = {
    dashboard: {
        firstIcon: "",
        text: "Dashboard",
        badge: "",
        classBadge: "",
    },
    widgets: {
        firstIcon: "Widgets",
        text: "",
        badge: "",
        classBadge: "",
    },
    layout: {
        firstIcon: "Layout options",
        text: "",
        badge: "",
        classBadge: "",
    },
    charts: {
        firstIcon: "Charts",
        text: "",
        badge: "",
        classBadge: "",
    },
    uiElements: {
        firstIcon: "",
        text: "UI Elements",
        badge: "",
        classBadge: "",
    },
    forms: {
        firstIcon: "",
        text: "Forms",
        badge: "",
        classBadge: "",
    },
    tables: {
        firstIcon: "",
        text: "Tables",
        badge: "",
        classBadge: "",
    },
};



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
    // addProperties();
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





const li2 = createItemsMenu("fa-solid fa-gauge-high", "Charts", "6", "badge-info");
const li3 = createItemsMenu("fa-solid fa-chart-pie", "Charts", "new", "badge-new");
const li4 = createItemsMenu("fa-solid fa-chart-pie", "Charts", "new", "badge-new");
const li1 = createItemsMenu("fa-solid fa-chart-pie", "Charts", "New", "badge-new");
[li1, li2, li3, li4].forEach(li => {
    navbar.firstElementChild.appendChild(li);
});
// navbar.firstElementChild.firstElementChild.appendChild(ul);
// ul.appendChild(li);

// const li1 = createItemsMenu("fa-solid fa-gauge-high fa-2x", "Dashboard", "new", "badge-info", "fa-solid fa-angle-left");
const ul = createASubMenu();
// navbar.firstElementChild.firstElementChild.appendChild(li1);

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



function createItemsMenu(firstIcon, theText, theBadge = "", classBadge = "", angle = "") {

    /*variables essentielles*/
    const closeOptions = 'fa-angle-left';
    const openOptions = 'fa-angle-down';
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
    span1Small3.classList.add(classBadge);
    iSpanSmall3.className = "fa-solid " + closeOptions;


    iSpanSmall3.addEventListener('click', (e) => {
        if (e.target.classList[1] == closeOptions) {
            iSpanSmall3.classList.remove(closeOptions);
            iSpanSmall3.classList.add(openOptions);
        } else if (e.target.classList[1] == openOptions) {
            iSpanSmall3.classList.remove(openOptions);
            iSpanSmall3.classList.add(closeOptions);
        }
    });

    return li;
}

function createASubMenu(params) {
    const ul = document.createElement("ul");
    ul.classList.add("liste_a_puces");
    return ul;
}

function appendMenus() {

}