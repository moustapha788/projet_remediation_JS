/* 
!variables 
*/
"use strict"
const container = document.getElementById('container');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const enlarge = document.getElementById("enlarge");
const ombre = document.getElementById('ombre');

/* 
!FUNCTIONS
*/
// ! function scrollCarousel
var pos = 0;

function scrollCarousel(nbr, container, btnLeft, btnRight) {
    container.style.width = (900 * nbr) + "px";
    for (let i = 1; i <= nbr; i++) {
        const div = document.createElement("div");
        div.classList.add("picture");
        div.style.backgroundImage = `url(img/Nataalbi_${i}.jpg)`;
        container.appendChild(div);
    }
    showAndhidden(nbr);
    btnLeft.addEventListener("click", () => {
        if (pos > -nbr + 1) { pos--; }
        const wide = pos * 900
        container.style.transform = `translate(${wide}px)`;
        showAndhidden(nbr)
    });
    document.querySelectorAll(".btn-scroll").forEach(btn => { btn.addEventListener("mouseover", () => document.querySelector(".carousel").classList.add("scale")); });
    document.querySelectorAll(".btn-scroll").forEach(btn => { btn.addEventListener("mouseleave", () => document.querySelector(".carousel").classList.add("scale")); });
    setInterval(() => {
        if ((pos > -nbr + 1)) { pos--; }
        const wide = pos * 900;
        container.style.transform = `translate(${wide}px)`;
        showAndhidden(nbr);
        if (pos == -nbr + 1) {
            const latence = setInterval(() => { container.style.opacity = 0 }, 6000);
            pos = 0;
            setTimeout(() => { clearInterval(latence) }, 6000);
        } else {
            container.style.opacity = 1;
        }
    }, 5000);
    btnRight.addEventListener("click", () => {
        if (pos < 0) { pos++; }
        const wide = pos * 900;
        container.style.transform = `translate(${wide}px)`;
        showAndhidden(nbr);
    });
}

// ! function showAndhidden
function showAndhidden(nbr) {
    if (pos == (-nbr + 1)) {
        btnLeft.classList.add("invisble");
    } else {
        btnLeft.classList.remove("invisble");
    }

    if (pos == 0) {
        btnRight.classList.add("invisble");
    } else {
        btnRight.classList.remove("invisble");
    }
}

// setTimeout(() => {
//     defiler();
// }, 5000);
/* 
!events
*/
window.addEventListener("load", () => { scrollCarousel(22, container, btnLeft, btnRight) });


container.addEventListener("mouseenter", () => {
    document.querySelector(".carousel").classList.add("scale");
}, true)
container.addEventListener("mouseleave", () => {
    document.querySelector(".carousel").classList.remove("scale");
}, false)
container.addEventListener("click", (e) => {
    const src = e.target.style.backgroundImage;
    enlarge.style.backgroundImage = src;
    enlarge.classList.add("visible");
    ombre.classList.add("visible");
}, true);
document.querySelector("body").addEventListener("click", () => {
    enlarge.classList.remove("visible");
    ombre.classList.remove("visible");
}, true);