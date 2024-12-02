
export const innerplayer =  (player,pl) =>{

    let card = document.createElement('div');

    card.className = "item pl-info "     
    card.innerHTML = `
            <div class="photo">
                <img src="${player.photo}" >
            </div>
        
            <div class="name">${player.name}</div>
        
            <div class="rating">${player.rating}</div>
        
            <div class="position">${player.position}</div>
        
            <div>
                <img class="flag" src="${player.flag}" >
            </div>
            <div >
                <img class="logo" src="${player.logo}" >
            </div>
        
            <div class="stats">
                <div>
                    <p>PAC ${player.pace} </p>
                    <p>SHO ${player.shooting}</p>
                    <p>PAS ${player.parse} </p>
                </div>
                <div>
                    <p>DRI ${player.dribbling} </p>
                    <p>DEF ${player.defending} </p>
                    <p>PHY ${player.physical} </p>
                </div>
            </div>
            <div class="actions">
                <button class=" btn-delete"><img src="/src/assets/images/delete.png" ></button>
                <button class=" btn-modify"><img src="/src/assets/images/modify.png"></button>
            </div>
`

pl.appendChild(card);


const modifyButton = card.querySelector('.btn-modify');
const deleteButton = card.querySelector('.btn-delete');


modifyButton.addEventListener('click', () => {

    editplayer(player);
});

deleteButton.addEventListener('click', () => {

    deletePlayer(player);
});


}

export const innergoalkeeper = (player,pl) =>{

    let card = document.createElement('div');

    card.className = "gk-info item"     
    card.innerHTML = `
            
            <div class="photo">
                <img src="${player.photo}" >
            </div>
        
            <div class="name">${player.name}</div>
        
            <div class="rating">${player.rating}</div>
        
            <div class="position">${player.position}</div>
        
            <div>
                <img class="flag" src="${player.flag}" >
            </div>
            <div >
                <img class="logo" src="${player.logo}" >
            </div>
        
            <div class="stats">
                <div>
                    <p>DIV ${player.diving} </p>
                    <p>HAN ${player.handling}</p>
                    <p>KIC ${player.kicking} </p>
                </div>
                <div>
                    <p>REF ${player.reflexes} </p>
                    <p>SPE ${player.speed} </p>
                    <p>POS ${player.positioning} </p>
                </div>
            </div>
            <div class="actions">
                <button class=" btn-delete"><img src="/src/assets/images/delete.png"></button>
                <button class=" btn-modify"><img src="/src/assets/images/modify.png"></button>
            </div>
`

pl.appendChild(card);

const modifyButton = card.querySelector('.btn-modify');
const deleteButton = card.querySelector('.btn-delete');


modifyButton.addEventListener('click', () => {

    editplayer(player);
});

deleteButton.addEventListener('click', () => {

    deletePlayer(player);
});

}


export const innerreserve = (player) =>{

    let reserve = document.getElementById('reserve');

    
    let card = document.createElement('div');

    if (player.position == "GK") {

        card.className = "gk-info item"     
        card.innerHTML = `
                <div class="photo">
                    <img src="${player.photo}" >
                </div>
            
                <div class="name">${player.name}</div>
            
                <div class="rating">${player.rating}</div>
            
                <div class="position">${player.position}</div>
            
                <div>
                    <img class="flag" src="${player.flag}" >
                </div>
                <div >
                    <img class="logo" src="${player.logo}" >
                </div>
            
                <div class="stats">
                    <div>
                        <p>DIV ${player.diving} </p>
                        <p>HAN ${player.handling}</p>
                        <p>KIC ${player.kicking} </p>
                    </div>
                    <div>
                        <p>REF ${player.reflexes} </p>
                        <p>SPE ${player.speed} </p>
                        <p>POS ${player.positioning} </p>
                    </div>
                </div>
            <div class="actions">
                <button class=" btn-delete"><img src="/src/assets/images/delete.png"></button>
                <button class=" btn-modify"><img src="/src/assets/images/modify.png"></button>
            </div>
    `
    
    reserve.appendChild(card);

    const modifyButton = card.querySelector('.btn-modify');

    const deleteButton = card.querySelector('.btn-delete');


    modifyButton.addEventListener('click', () => {
    
        editplayer(player);
    });
    
    deleteButton.addEventListener('click', () => {
    
        deletePlayer(player);
    });
        
    }else{

        card.className = "pl-info item"     
    card.innerHTML = `
            <div class="photo">
                <img src="${player.photo}" >
            </div>
        
            <div class="name">${player.name}</div>
        
            <div class="rating">${player.rating}</div>
        
            <div class="position">${player.position}</div>
        
            <div>
                <img class="flag" src="${player.flag}" >
            </div>
            <div >
                <img class="logo" src="${player.logo}" >
            </div>
        
            <div class="stats">
                <div>
                    <p>PAC ${player.pace} </p>
                    <p>SHO ${player.shooting}</p>
                    <p>PAS ${player.parse} </p>
                </div>
                <div>
                    <p>DRI ${player.dribbling} </p>
                    <p>DEF ${player.defending} </p>
                    <p>PHY ${player.physical} </p>
                </div>
            </div>
            <div class="actions">
                <button class=" btn-delete"><img src="/src/assets/images/delete.png"></button>
                <button class=" btn-modify"><img src="/src/assets/images/modify.png"></button>
            </div>
`

reserve.appendChild(card);

const modifyButton = card.querySelector('.btn-modify');
const deleteButton = card.querySelector('.btn-delete');


modifyButton.addEventListener('click', () => {

    editplayer(player);
});

deleteButton.addEventListener('click', () => {

    deletePlayer(player);
});


}



} 



