const clockContainer = document.querySelector(".js-clock"),
        clockTitle = clockContainer.querySelector(".clock");

const RED = "#e74c3c";
const BLUE = "#3498db";
const BLACK = "#000"

function loatTime(){
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const dayGroup = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
    const week = date.getDay();
    const labelDay = dayGroup[week];
    clockTitle.innerText = `${month} / ${day} ${labelDay}`;
    
}





function init(){
    loatTime();
   
}

init();