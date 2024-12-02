function editplayer(player){

    let pl = document.getElementById(player.position)

    if (pl.firstElementChild) {
        pl.removeChild(pl.firstElementChild);
    }


    playerform = document.forms['playerform'];

    
    if (player.position == "GK") {

        playerform.elements["name"].value = player.name;

        // playerform.elements["photo"].value = player.photo;
        playerform.elements["position"].value = player.position;
        playerform.elements["nationality"].value = player.nationality;
        // playerform.elements["flag"].value = player.flag;
        
        playerform.elements["club"].value = player.club;
        // playerform.elements["logo"].value = player.logo;
        
        document.getElementById('goalkeeper-fields').classList.remove('hidden');
        document.getElementById('outfield-fields').classList.add('hidden');

        playerform.elements["rating"].value = player.rating;
        playerform.elements["diving"].value = player.diving;
        playerform.elements["handling"].value = player.handling;
        playerform.elements["kicking"].value = player.kicking;
        playerform.elements["reflexes"].value = player.reflexes;
        playerform.elements["speed"].value = player.speed;
        playerform.elements["positioning"].value = player.positioning;
        

    } else {

        playerform.elements["name"].value = player.name;

        // playerform.elements["photo"].value = player.photo;
        playerform.elements["position"].value = player.position;
        playerform.elements["nationality"].value = player.nationality;
        // playerform.elements["flag"].value = player.flag;
        
        playerform.elements["club"].value = player.club;
        // playerform.elements["logo"].value = player.logo;

        playerform.elements["rating"].value = player.rating;
        playerform.elements["pace"].value = player.pace;
        playerform.elements["shooting"].value = player.shooting;
        playerform.elements["passing"].value = player.passing;
        playerform.elements["dribbling"].value = player.dribbling;
        playerform.elements["defending"].value = player.defending;
        playerform.elements["physical"].value = player.physical;

        document.getElementById('goalkeeper-fields').classList.add('hidden');
        document.getElementById('outfield-fields').classList.remove('hidden');

        // playerform.elements["goalkeeper_rating"].value = player.goalkeeper_rating;

    }


    // if (player.photo) {
    //     const imgProfile = document.getElementById('profile');
    //     imgProfile.src = player.photo;
    // }
    // if (player.flag) {
    //     const imgFlag = document.getElementById('flagimg');
    //     imgFlag.src = player.flag; 
    // }
    
    // if (player.logo) {
    //     const imgLogo = document.getElementById('logoimg');
    //     imgLogo.src = player.logo; 
    // }


}