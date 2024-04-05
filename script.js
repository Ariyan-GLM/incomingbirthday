alert("Waiting for Aritra's Birthday.")

const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secEl =  document.getElementById("sec")

const birthday = '06 april 2024';

function countdown(){
    const birthDayDate = new Date(birthday);
    const currentDate = new Date();
    const totalSeconds = (birthDayDate - currentDate) /1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 ) % 24;
    const mins = Math.floor(totalSeconds / 60 ) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // console.log (days, hours, mints, seconds);
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secEl.innerHTML = seconds;
}

countdown();
setInterval(countdown, 1000);
