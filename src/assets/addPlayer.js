import { innerplayer, innergoalkeeper ,innerreserve } from './playerRender.js';

export default function addplayer(player) {

    let pl = document.getElementById(player.position);

    if (pl.firstElementChild) {

           innerreserve(player)

    }else{

        if (player.position == "GK") {

            innergoalkeeper(player,pl)
    
        }else {
    
            innerplayer(player,pl)
    
    
        }

    }


}
