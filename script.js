const newYears = "1 Jan 2024";
const daysEl  =document.getElementById("days");
const hoursEl =document.getElementById("hours");
const minEl =document.getElementById("min");;
const secEl =document.getElementById("sec")
function countdown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 ) % 24;
    const minutes = Math.floor(totalSeconds / 60 ) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
daysEl.innerHTML  = days;
hoursEl.innerHTML = hours;
minEl.innerHTML   = minutes;
secEl.innerHTML   = seconds;

}

countdown();

setInterval(countdown,1000)