//DOM SELECTIONS
let currentDateDisplay = document.querySelector('.date');
let daysDisplay = document.querySelector('.days');
let hoursDisplay = document.querySelector('.hours');
let minutesDisplay = document.querySelector('.min');
let secondsDisplay = document.querySelector('.sec');
let options = document.querySelectorAll(".options");
let body = document.querySelector('body');


// SELECTION OPTIONS - END DATES
 today = new Date();
const YEAR = today.getFullYear();
console.log('this year is =>',YEAR);

let newYear = new Date(`January 1, ${YEAR + 1} 00:00:01`);
let christmas = new Date(`December 25, ${YEAR} 00:00:01`);
let halloween = new Date(`October 31, ${YEAR}  00:00:01`);
let friendsDay = new Date(`July 20, ${YEAR}  00:00:01`);
let iGetToSeeThem = new Date(`November 21, 2022 00:00:01`);


const _second = 1000;
const _minute = _second * 60 ;
const _hour = _minute * 60;
const _day = _hour * 24;

let howLongLeft

//event listener
let selectEvent = (event) => {

    let selected = event.target.id // 'christmas' - comes in as a string

    //change display depending on option selected. through event id
    switch(selected) {
        case "newYear":
            everythingToDo(newYear, 'New Years', selected)
            break;

        case "christmas":
            everythingToDo(christmas, 'Christmas', selected)
            break;

        case "halloween":
            everythingToDo(halloween, 'Halloween', selected)
            break;

        case "friendsDay":
            everythingToDo(friendsDay, 'Dia del Amigo', selected)
            break;

        case "iGetToSeeThem":
            everythingToDo(iGetToSeeThem, 'I get to see them!', selected)
            break;
            }    
}
//pay attention to when i click on the button options and excecute function when i do
options.forEach((date) => { date.addEventListener("click", selectEvent); });

function calculateRemaining(end){
    let today = new Date();
    howLongLeft =  end - today ;

    if (howLongLeft <= 0){
        currentDateDisplay.innerHTML = today;
        document.querySelector('.text-above').innerHTML = 'ITS TODAY/expired!';
        return;
}
    
    //divide difference
    let days = Math.floor(howLongLeft / _day);
    let hours = Math.floor((howLongLeft % _day) / _hour);
    let minutes = Math.floor((howLongLeft % _hour)  / _minute);
    let seconds = Math.floor((howLongLeft % _minute)  / _second);
    
    //show in dom
    currentDateDisplay.innerHTML = today;
    daysDisplay.innerHTML = days + ' days';
    hoursDisplay.innerHTML = hours + ' hours';
    minutesDisplay.innerHTML = minutes + ' minutes';
    secondsDisplay.innerHTML = seconds + ' seconds';  

}

let interval
function everythingToDo(variable, textShown, selected){
    clearInterval(interval);
    interval = setInterval(()=>calculateRemaining(variable), 1000);
    theCountdownName(textShown);
    aestheticControl(selected);
}

function theCountdownName(forWhat){
    document.querySelector('.text-above').innerHTML = 'So many...';
    document.querySelector('.selected-date').innerHTML = forWhat;
}

function aestheticControl(addedClass){
    body.className = addedClass
}

//default style
document.querySelector('.text-above').innerHTML = 'Click to Start!';
document.querySelector('.selected-date').innerHTML = '.....';