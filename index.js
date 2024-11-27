
let profil = document.getElementById('profil');
let upload = document.getElementById('upload');
let position = document.getElementById('position');

let gkPart = document.getElementById('gkPart');
let plPart = document.getElementById('plPart');

upload.onchange = function() {
    profil.src = URL.createObjectURL(upload.files[0]);
}

function afficher() {

            let posiChoix = position.value;

            if (posiChoix === 'GK') {
               plPart.classList.add('hidden');
                gkPart.classList.remove('hidden');
            } else {
               plPart.classList.remove('hidden');
                gkPart.classList.add('hidden');
            }
}