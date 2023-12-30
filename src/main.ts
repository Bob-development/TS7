import { Component, append} from './core'

import './style.css'

const app = document.querySelector("#app") as HTMLElement;

const title = new Component({
    className: 'title',
    textContent: 'Time to the new year!!!'
}).getComponent()
append(app, title);


const time = new Component({
    className: 'time-wrapper',
    children:[
        new Component({
            className: 'time',
            textContent: countTime()
        }).getComponent()
    ]
}).getComponent()
append(app, time);

setInterval(()=>{
    time.children[0].textContent = countTime()
}, 1000)

function countTime (){
    const secondsToNewYear = `${60 - new Date().getSeconds()}`.padStart(2, '0');
    const minutesToNewYear = `${60 - new Date().getMinutes()}`.padStart(2, '0');
    const hoursToNewYear = `${24 - new Date().getHours() - 1}`.padStart(2, '0');
    const dayToNewYear = `${howManyDaysInMonth() - new Date().getDate()}`.padStart(2, '0');
    const monthToNewYear = `${12 - new Date().getMonth() - 1}`.padStart(2, '0');

    return `${monthToNewYear} : ${dayToNewYear} : ${hoursToNewYear} : ${minutesToNewYear} : ${secondsToNewYear}`;
    
}

function howManyDaysInMonth(){
    const month = new Date().getMonth();

    switch (month) {
        case 0:
            return 31;

        case 1:
            return 28;
        
        case 2:
            return 31;

        case 3:
            return 30;

        case 4:
            return 31;

        case 5:
            return 30;

        case 6:
            return 31;

        case 7:
            return 31;

        case 8:
            return 30;

        case 9:
            return 31;

        case 10:
            return 30;

        case 11:
            return 31;

        default:
            break;
    }
}