export default function validation() {
    const name = document.getElementById('name').value.trim();
    const photo = document.getElementById('photo').value;
    const position = document.getElementById('position').value;
    const nationality = document.getElementById('nationality').value;
    const flag = document.getElementById('flag').value;
    const club = document.getElementById('club').value.trim();
    const logo = document.getElementById('logo').value;
    const errors = document.getElementsByClassName('error');

    const textRegex = /^[a-zA-Z-\s]+$/;
    const imageRegex = /\.(jpg|jpeg|png|gif)$/i;
    const nameMaxlenght = /^.{3,6}$/;

    let isValid = true;

    if (name === "") {
        errors[0].textContent = "Name is required.";
        isValid = false;
    }else if (!textRegex.test(name)) {
        errors[0].textContent = "Name can only contain letters, spaces, and hyphens.";
        isValid = false;
    }else if (!nameMaxlenght.test(name)) {
        errors[0].textContent = "Name length must be between 3 and 50 characters.";
        isValid = false;
    }else {
        errors[0].textContent = "";
    }

    if (photo === "") {
        errors[1].textContent = "Photo URL is required.";
        isValid = false;
    } else if (!imageRegex.test(photo)) {
        errors[1].textContent = "Photo must be a valid image URL.";
        isValid = false;
    }else {
        errors[1].textContent = "";
    }

    if (position === "") {
        errors[2].textContent = "Position is required.";
        isValid = false;
    }else {
        errors[2].textContent = "";
    }

    if (nationality === "") {
        errors[3].textContent = "Nationality is required.";
        isValid = false;
    }else {
        errors[3].textContent = "";
    }

    if (flag === "") {
        errors[4].textContent = "Flag URL is required.";
        isValid = false;
    }else if (!imageRegex.test(flag)) {
        errors[4].textContent = "Flag must be a valid image URL.";
        isValid = false;
    } else {
        errors[4].textContent = "";
    }

    if (club === "") {
        errors[5].textContent = "Club is required.";
        isValid = false;
    }else {
        errors[5].textContent = "";
    }

    if (logo === "") {
        errors[6].textContent = "Logo URL is required.";
        isValid = false;
    } else if (!imageRegex.test(logo)) {
        errors[6].textContent = "Logo must be a valid image URL.";
        isValid = false;
    }else {
        errors[6].textContent = "";
    }

    if (position == "GK") {

        const diving = document.getElementById('diving').value;
        const handling = document.getElementById('handling').value;
        const kicking = document.getElementById('kicking').value;
        const reflexes = document.getElementById('reflexes').value;
        const speed = document.getElementById('speed').value;
        const positioning = document.getElementById('positioning').value
        const rating = document.getElementById('rating').value;

        if (rating == "" || rating < 0 || rating > 100) {
            errors[14].textContent = "Rating must be a number between 0 and 100.";
            isValid = false;
        } else {
            errors[14].textContent = "";
        }

        if (diving == "" || diving < 0 || diving > 100) {
            errors[15].textContent = "Diving must be a number between 0 and 100.";
            isValid = false;
        } else {
            errors[15].textContent = "";
        }

        if (handling == "" || handling < 0 || handling > 100) {
            errors[16].textContent = "Handling must be a number between 0 and 100.";
            isValid = false;
        } else {
            errors[16].textContent = "";
        }

        if (kicking == "" ||  kicking < 0 || kicking > 100) {
            errors[17].textContent = "Kicking must be a number between 0 and 100.";
            isValid = false;
        } else {
            errors[17].textContent = "";
        }

        if (reflexes == "" ||  reflexes < 0 || reflexes > 100) {
            errors[18].textContent = "Reflexes must be a number between 0 and 100.";
            isValid = false;
        } else {
            errors[18].textContent = "";
        }

        if (speed == "" | speed < 0 || speed > 100) {
            errors[19].textContent = "Speed must be a number between 0 and 100.";
            isValid = false;
        } else {
            errors[19].textContent = "";
        }

        if (positioning == "" ||  positioning < 0 || positioning > 100) {
            errors[20].textContent = "Positioning must be a number between 0 and 100.";
            isValid = false;
        } else {
            errors[20].textContent = "";
        }
    } else {

        const pace = document.getElementById('pace').value;
        const shooting = document.getElementById('shooting').value;
        const passing = document.getElementById('passing').value;
        const dribbling = document.getElementById('dribbling').value;
        const defending = document.getElementById('defending').value;
        const physical = document.getElementById('physical').value;

        if (rating == "" || rating < 0 || rating > 100) {
            errors[7].textContent = "Rating must be a number between 0 and 100.";
            isValid = false;
        } else {
            errors[7].textContent = "";
        }

        if (pace == ""  || pace < 0 || pace > 100) {
            errors[8].textContent = "Pace must be a number between 0 and 100.";
            isValid = false;
        } else {
            errors[8].textContent = "";
        }

        if (shooting == "" ||  shooting < 0 || shooting > 100) {
            errors[9].textContent = "Shooting must be a number between 0 and 100.";
            isValid = false;
        } else {
            errors[9].textContent = "";
        }

        if (passing == "" ||  passing < 0 || passing > 100) {
            errors[10].textContent = "Passing must be a number between 0 and 100.";
            isValid = false;
        } else {
            errors[10].textContent = "";
        }

        if (dribbling == "" ||  dribbling < 0 || dribbling > 100) {
            errors[11].textContent = "Dribbling must be a number between 0 and 100.";
            isValid = false;
        } else {
            errors[11].textContent = "";
        }

        if (defending == "" || defending < 0 || defending > 100) {
            errors[12].textContent = "Defending must be a number between 0 and 100.";
            isValid = false;
        } else {
            errors[12].textContent = "";
        }

        if (physical == "" || physical < 0 || physical > 100) {
            errors[13].textContent = "Physical must be a number between 0 and 100.";
            isValid = false;
        } else {
            errors[13].textContent = "";
        }
    }



    return isValid;
}

