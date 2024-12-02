import validation from "./validation.js";
import  addplayer  from "./addPlayer.js";



let playerform = document.getElementById('playerform');

let players = JSON.parse(localStorage.getItem('players')) || []; 

playerform.addEventListener('submit',function (e) {


    e.preventDefault(); 

        let imgProfile = document.getElementById('profile');
        imgProfile.addEventListener("change",function (event) {
                imgProfile.src = URL.createObjectURL(event.target.files[0]);
        })
        let imgFlag = document.getElementById('flagimg');
        imgFlag.addEventListener("change",function (event) {
                imgProfile.src = URL.createObjectURL(event.target.files[0]);
        })
        let imglogo = document.getElementById('logoimg');
        imglogo.addEventListener("change",function (event) {
                imgProfile.src = URL.createObjectURL(event.target.files[0]);
        })
    
    
            let player = {
                name: document.getElementById('name').value.trim(),
                photo: imgProfile.src ,
                position: document.getElementById('position').value,
                nationality: document.getElementById('nationality').value,
                flag: imgFlag.src,
                club: document.getElementById('club').value.trim(),
                logo: imglogo.src,
                rating: document.getElementById('rating').value,
            };
        
            if (player.position === 'GK') {
                player.diving = document.getElementById('diving').value;
                player.handling = document.getElementById('handling').value;
                player.kicking = document.getElementById('kicking').value;
                player.reflexes = document.getElementById('reflexes').value;
                player.speed = document.getElementById('speed').value;
                player.positioning = document.getElementById('positioning').value;
        
            } else {
                player.pace = document.getElementById('pace').value;
                player.shooting = document.getElementById('shooting').value;
                player.passing = document.getElementById('passing').value;
                player.dribbling = document.getElementById('dribbling').value;
                player.defending = document.getElementById('defending').value;
                player.physical = document.getElementById('physical').value;
            }
            
            players.push(player);
    
            addplayer(player);
        
        
            localStorage.setItem('players', JSON.stringify(players));
            
            playerform.reset();


    // } ;


        
    
})


