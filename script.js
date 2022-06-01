//me interesa hacer distintos countdowns y cambiar los colores por tema
//DOM SELECTIONS
let currentDateDisplay = document.querySelector('.date');
let daysDisplay = document.querySelector('.days');
let hoursDisplay = document.querySelector('.hours');
let minutesDisplay = document.querySelector('.min');
let secondsDisplay = document.querySelector('.sec');
let options = document.querySelectorAll(".options")


let today = new Date();

// SELECTION OPTIONS - END DATES
const YEAR = today.getFullYear();
console.log('this year is =>',YEAR)

let newyear = new Date(`January 1, ${YEAR} 00:00:01`)
let christmas = new Date(`December 25, ${YEAR} 00:00:01`)
let halloween = new Date(`October 31, ${YEAR} 00:00:01`)
let diaDelAmigo = new Date(`July 20, ${YEAR} 00:00:01`)
let terminaCurso = new Date(`November 2, 2022 00:00:01`)

const _second = 1000;
const _minute = _second * 60 ;
const _hour = _minute * 60;
const _day = _hour * 24;



function showRemaining(end){
    let howLongLeft =  today - end  ;
    console.log( 'esto es end = ' + end)
    //dividir differencia en seccions
    let days = Math.floor(howLongLeft / _day);
    let hours = Math.floor((howLongLeft % _day) / _hour);
    let minutes = Math.floor((howLongLeft % _hour)  / _minute);
    let seconds = Math.floor((howLongLeft % _minute)  / _second);
    
    //show in dom
    currentDateDisplay.innerHTML = today;
    daysDisplay.innerHTML = days + ' dias';
    hoursDisplay.innerHTML = hours + ' horas';
    minutesDisplay.innerHTML = minutes + ' minutos';
    secondsDisplay.innerHTML = seconds + ' segundos';  
}

let timer = setInterval(showRemaining(newyear), 1000);


let selectEvent = (event) => {
    let selected = event.target.id // 'christmas'

    switch(selected) {
        case "newyear":
            setInterval(showRemaining(newyear), 1000)
            break;

        case "christmas":
            setInterval(showRemaining(christmas), 1000)
            break;

        case "halloween":
            setInterval(showRemaining(halloween), 1000)
            break;

        case "friends-day":
            setInterval(showRemaining(halloween), 1000)
            break;

        case "long-distance":
            setInterval(showRemaining(halloween), 1000)
            break;
            }
    document.querySelector('.selected-date').innerHTML = selected;
}

options.forEach((date) => { date.addEventListener("click", selectEvent); })

// seleccionamos y devolvemos que evento - vuelve undefined
// console.log("lo que me sale undefined", selectEvent , iChoose)
console.log("selected = ", selected)
