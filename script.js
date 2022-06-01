//DOM SELECTIONS
let currentDateDisplay = document.querySelector('.date');
let daysDisplay = document.querySelector('.days');
let hoursDisplay = document.querySelector('.hours');
let minutesDisplay = document.querySelector('.min');
let secondsDisplay = document.querySelector('.sec');
let options = document.querySelectorAll(".options");
let body = document.querySelector('body');

let today = new Date();

// SELECTION OPTIONS - END DATES
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



function showRemaining(end){
    let howLongLeft =  end - today  ;

    //divide difference
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
    
    setInterval(function(){
    ++howLongLeft
    localStorage.setItem('howlongleft',howLongLeft);
    }, 1000);

    let selectEvent = (event) => {
        let selected = event.target.id // 'christmas' - comes in as a string
    
        //change display depending on option selected. through event id
        switch(selected) {
            case "newYear":
                setInterval(function(){
                    --howLongLeft
                    showRemaining(newYear)
                    localStorage.setItem('newYear',newYear);
                    }, 1000);
                theCountdown('New Years');
                aestheticControl(selected);
                break;
    
            case "christmas":
                setInterval(showRemaining(christmas), 1000);
                theCountdown('Christmas');
                aestheticControl(selected);
                break;
    
            case "halloween":
                setInterval(showRemaining(halloween), 1000);
                theCountdown('Halloween');
                aestheticControl(selected);
                break;
    
            case "friendsDay":
                setInterval(showRemaining(friendsDay), 1000);
                theCountdown('Dia del Amigo');
                aestheticControl('friendsDay');
                break;
    
            case "iGetToSeeThem":
                setInterval(showRemaining(iGetToSeeThem), 1000);
                theCountdown('I get to see them!');
                aestheticControl('iGetToSeeThem')
                break;
                }
               
        
    }
    //pay attention to when i click on the button options and excecute function when i do
    options.forEach((date) => { date.addEventListener("click", selectEvent); });
    
}
function theCountdown(forWhat){
    document.querySelector('.selected-date').innerHTML = forWhat;
}
function aestheticControl(addedClass){
    body.className = addedClass
}

//default style

document.querySelector('.selected-date').innerHTML = 'I get to see them!';


showRemaining(iGetToSeeThem)