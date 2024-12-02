
let profil = document.getElementById('profil');
let flagClub = document.getElementById('falgClub')
// let club = document.getElementById('club');
let logo = document.getElementById('logo');
let upload = document.getElementById('upload');
let position = document.getElementById('position');
let gkPart = document.getElementById('gkPart');
let plPart = document.getElementById('plPart');
let errorMsg = document.getElementById('errorMsg');


let nameA = document.getElementById('name');
let nationality = document.getElementById('nationality');
let club = document.getElementById('club');

let parent = document.getElementById('parent');
let newCard = document.createElement('div');

let part1 = document.getElementById('part1');

club.onchange = function(){
logo.src = URL.createObjectURL(club.files[0]);
}
upload.onchange = function () {
   profil.src = URL.createObjectURL(upload.files[0]);
}
function afficher() {

   let posiChoix = position.value;

   if (posiChoix === "Select the player") {
      plPart.classList.add('hidden');
      gkPart.classList.add('hidden');
      positionValide.innerText = 'Select the player, please.';
   }
   else if (posiChoix === 'GK') {
      plPart.classList.add('hidden');
      gkPart.classList.remove('hidden');
      positionValide.innerText = '';
   }else {
      plPart.classList.remove('hidden');
      gkPart.classList.add('hidden');
      positionValide.innerText = '';
   }

}
function validation() {

   let nameError = nameA.value;
   let nationalityError = nationality.value;
   let clubError = club.value;

   if (nameError === "" ) {

      errorName.innerText = 'name is required';
   }
   else {
      errorName.innerText = '';

   }
   if (nationalityError === "") {
      errorNationality.innerText = 'name is required';
   }
   else {
      errorNationality.innerText = '';

   }
   if (clubError === "") {
      errorClub.innerText = 'name is required';
   }
   else {
      errorClub.innerText = '';

   }

};

 let players =[];

function cardAfficher(player){



   newCard.classList.add('card');

   newCard.innerHTML = `
   <img src="${player.profil}" class="cardPhoto">
   <hr size="4" color="blue" width="66%" class="ligne">
   <p class="cardPosition">${player.position}</p>
   <p class="cardName">${player.name}</p>
   <p class="cardNationaly">${player.nationality}</p>
   <img src="${player.club}" class="clubLogo">
   <p class="cardRat">RAT ${player.rating}</p>
   ${player.position === 'GK' ? `
       <p class="cardPass">DIV ${player.diving}</p>
       <p class="cardDrib">HAN ${player.handling}</p>
       <p class="cardPos">POS ${player.positioning}</p>
       <p class="cardKick">KIC ${player.kicking}</p>
       <p class="cardRef">PEF ${player.reflexes}</p>
       <p class="cardSpe">SPE ${player.speed}</p>
       ` : `
       <p class="cardShoot">SHO ${player.shooting}</p>
       <p class="cardPass">PAS ${player.passing}</p>
       <p class="cardDrib">DRI ${player.dribbling}</p>
       <p class="cardDef">DEF ${player.defending}</p>
       <p class="cardPhy">PHY ${player.physical}</p>
       <p class="cardSpe">SPE ${player.speed}</p>
   `}
`;
parent.appendChild(newCard);
}




function clearInputs() {
   nameA.value = '';
   upload.value = '';
   profil.src = './src/assets/img/img.png';
   position.value = 'Select the player';
   nationality.value = '';
   club.value = '';
   logo.src = '';

   const numberInputs = document.querySelectorAll('input[type="number"]');
   for (let i = 0; i < numberInputs.length; i++) {
       numberInputs[i].value = '';
   }
}

document.getElementById('fromAjoute').addEventListener('submit', function (e) {
   e.preventDefault();

   
   const player = {
       name: nameA.value,
       profil: profil.src,
       position: position.value,
       nationality: nationality.value,
       club: logo.src,
       rating: document.getElementById('rating').value,
   };


   if (player.position === 'GK') {
       const gkFields = ['diving', 'handling', 'positioning', 'kicking', 'reflexes', 'speed'];
       for (let i = 0; i < gkFields.length; i++) {
           const field = gkFields[i];
           player[field] = document.getElementById(field).value || 0;
       }
   } else {
       const fieldPlayerFields = ['shooting', 'passing', 'dribbling', 'defending', 'physical', 'speed'];
       for (let i = 0; i < fieldPlayerFields.length; i++) {
           const field = fieldPlayerFields[i];
           player[field] = document.getElementById(field).value || 0;
       }
   }

  
   players.push(player);
   cardAfficher(player);

  
   clearInputs();
});


