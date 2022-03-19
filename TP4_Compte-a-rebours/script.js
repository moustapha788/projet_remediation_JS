const days = document.getElementById("days").firstElementChild;
const hours = document.getElementById("hours").firstElementChild;
const minutes = document.getElementById("minutes").firstElementChild;
const seconds = document.getElementById("seconds").firstElementChild;
const countdownDiv = document.getElementById("countdown");

function countdown(dateButoir, days, hours, minutes, seconds) {
    const aDay = 24 * 60 * 60 * 1000;
    const aHour = 60 * 60 * 1000;
    const aMinute = 60 * 1000;
    const butoir = new Date(dateButoir).getTime();
    const now = new Date().getTime();
    restant = butoir - now;
    const d = Math.floor(restant / aDay);
    const h = Math.floor((restant % aDay) / aHour);
    const m = Math.floor((restant % aHour) / aMinute);
    const s = Math.floor((restant % aMinute) / 1000);
    if (restant < 0) {
        countdownDiv.firstElementChild.innerHTML = "Bienvenue en 2023";
        clearInterval(execute);
    } else {
        days.innerHTML = d;
        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
    }
}
window.addEventListener("load", () => {
    var execute = setInterval(() => countdown("12/31/2022 23:59:59", days, hours, minutes, seconds), 1000);
});