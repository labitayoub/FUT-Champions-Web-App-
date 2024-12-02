import {innerreserve} from './playerRender.js';

function loadplayers() {

    let players = JSON.parse(localStorage.getItem('players')) ||  []; 

    // localStorage.clear()

    players.forEach(player => {
    
        innerreserve(player)
        
    });
    
}

document.addEventListener("DOMContentLoaded",loadplayers())




