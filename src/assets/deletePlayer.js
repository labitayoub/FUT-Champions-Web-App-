  
function deletePlayer(player) {

    let  players = JSON.parse(localStorage.getItem('players'));

    let noname = players.filter( el => el.name !== player.name ); 
    
    localStorage.setItem('players', JSON.stringify(noname));

    let pl = document.getElementById(player.position)

    pl.innerHTML = ""

    
}
