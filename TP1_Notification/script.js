/* 
 * Récupérer les éléments
 */
theBtns = document.querySelectorAll('.container-btn button');
containerNotification = document.querySelector('.container-notification');
/* 
 * Events 
 */

theBtns.forEach(btn => { btn.addEventListener("click", e => showNotification(e)) });
/* 
 * Functions 
 */
// ! showNotification
function showNotification(e) {
    const small = createTheSmallTag();
    getAndSetFuturies(e, small);
    containerNotification.appendChild(small);
    setTimeout(() => containerNotification.removeChild(small), 3000);
}
// ! getAndSetFuturies
function getAndSetFuturies(e, small) {
    small.innerHTML = e.target.innerHTML.replace("Notification", "");
    small.classList.add(e.target.className, "show-notification", "down_to_up", "animate__rotateInUpRight");
}
// ! createTheSmallTag
function createTheSmallTag() { return document.createElement('small') }
/* "getStyle" est une fonction JavaScript qui utilise la méthode "getComputedStyle" pour récupérer la liste des styles d'un élément HML et permet de récupérer la valeur d'une propriété CSS calculée en fonction du rendu final.

Très simpliste, elle prend en arguments la propriété CSS que l'on souhaite lire et l'élément duquel la récupérer. Voici un exemple pour savoir si un élément de page est affiché :

getStyle('display', document.body);

renvoie par exemple : "block"
*/
// ! getStyle
function getStyle(a, b) { return window.getComputedStyle(b, null)[a]; }