
let profil = document.getElementById('profil');
let upload = document.getElementById('upload');
let position = document.getElementById('position');

let gkPart = document.getElementById('gkPart');
let plPart = document.getElementById('plPart');

let errorMsg = document.getElementById('errorMsg');

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

   let nameError = document.getElementById('name').value;
   let nationalityError = document.getElementById('nationality').value;
   let clubError = document.getElementById('club').value;

   if (nameError === "") {

      errorName.innerText = 'name is required';
   }
   else {
      errorName.innerText = 'valid';

   }
   if (nationalityError === "") {
      errorNationality.innerText = 'name is required';
   }
   else {
      errorNationality.innerText = 'valid';

   }
   if (clubError === "") {
      errorClub.innerText = 'name is required';
   }
   else {
      errorClub.innerText = 'valid';

   }

};


