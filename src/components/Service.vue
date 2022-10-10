<template>
    <div class="background_service">
        <div class="services">
            <button class="previous_service"  onclick="history.back()"> &lt; </button>
            <h1 class="titre_service">Mes services et compétences</h1>
            <div class="gauche">
                <p class="paragraph">Lors de ma scolaritée j'ai appris a développé des APIs et a les utilisées. Je me suis pérfectionné dans ce domaine en m'éxerssant dans mes précédents postes.</p>
                <img src="../assets/service/api.png" class="illustration">
            </div>
            <div class="droite">
                <p class="paragraph">Lors de ma scolaritée j'ai appris a développé des APIs et a les utilisées. Je me suis pérfectionné dans ce domaine en m'éxerssant dans mes précédents postes.</p>
                <img src="../assets/service/vue-logo.png" class="illustration">
            </div>
            <div class="gauche">
                <p class="paragraph">Lors de ma scolaritée j'ai appris a développé des APIs et a les utilisées. Je me suis pérfectionné dans ce domaine en m'éxerssant dans mes précédents postes.</p>
                <img src="../assets/service/node-logo.png" class="illustration">
            </div>
            <div class="droite">
                <p class="paragraph">Lors de ma scolaritée j'ai appris a développé des APIs et a les utilisées. Je me suis pérfectionné dans ce domaine en m'éxerssant dans mes précédents postes.</p>
                <img src="../assets/service/firebase-logo.png" class="illustration">
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>

.background_service{
    background-image: url("../assets/experiences/brume.png");
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.previous_service {
  position:relative;
  top:5vh;
  left:3vw;
  font-family: 'Marcellus SC', serif;
}

.titre_service{
    margin-bottom: 5vh;
    margin-top: 8vh; 
    font-weight: bold;
    font-size: 34px;
    color: white;
    text-align: center;
    font-family: policeLoL;
}

.gauche{
    margin-top: 10vh;
    margin-left: 10vw;
    margin-bottom: 5vw;
    align-items:center;
    display: flex;
    border: solid;
    width: fit-content;
    height: fit-content;
    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
    border-image-slice: 1;
    border-width: 2px;
}
.droite{
    margin-top: 10vh;
    margin-left: 40vw;
    margin-bottom: 5vw;
    align-items:center;
    display: flex;
    border: solid;
    width: fit-content;
    height: fit-content;
    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
    border-image-slice: 1;
    border-width: 2px;
}
.paragraph{
    margin-left: 2vw;
    font-size: 1.1em;
    width: 35vw;
    font-family: policeLoL;
    color: white;
}
.illustration{
    margin-top: 1vw;
    margin-bottom: 1vw;
    margin-right: 2vw;
    margin-left: 2vw;
    width: 10vw;
}
</style>