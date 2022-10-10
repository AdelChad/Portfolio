<template>
    <div class="background_experience">
        <div class="experience">
            <div class="dot"></div>
            <div class="rond"></div>
            <div class="page">
                <button class="previous_experience"  onclick="history.back()"> &lt; </button>
                <p class="titre">Mes expériences</p>
                <div class="carousel">
                    <div class="content">
                        <v-carousel 
                        cycle
                        :show-arrows="false"
                        hide-delimiter-background
                        height="250">
                            <v-carousel-item v-for="(color, i) in experience" :key="i" reverse-transition="fade-transition">
                                <v-sheet :color="couleur" height="0%" tile>
                                    <v-row class="fill-height" align="center" justify="center">
                                        <div class="text-h2" style="font-size:3vh;">
                                        {{ color.contenu }} 
                                        <img v-if="i==0" style="width: 700px;" src="../assets/logo-entreprise/img-logo.jpg" >
                                        <img v-if="i==1" style="width: 350px;" src="../assets/logo-entreprise/Logo_CY_Cergy_Paris_Université.svg.png" > 
                                        <img v-if="i==2" style="width: 300px;" src="../assets/logo-entreprise/Edostar.png" >
                                        </div>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>
                    </div>
                </div>
            </div>
            <button class="linkCV"  v-on:click="goCV"> Voir mon CV </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
        couleur:"#01060D",
        experience: [{
            contenu: "Lors de mon BTS j'ai pu effectuer 2 stages. Lors de ces stages j'ai été très autonome et j'avais la liberté de choisir ma façon de codé, j'ai donc choisis des technologies qui m'intéressaient, PHP sous le framework Laravel, PHP lié à du SQL, HTML5/CSS3.",
        },
        {
            contenu: "J'ai ensuite effectué une licence professionnelle développement web à l'université de Cergy, lors de cette formation j'ai aprit de nombreuses technologies différentes tel que VueJs, NodeJs, Symfony.",
        },
        {
            contenu: "J'ai effectué en parallèle de ma licence professionnelle, un contrat d'alternance en apprentis développeur web dans la société Edostar. Lors de ce contrat je fût en totale autonomie, j'ai effectué de multiples projets tels qu'un système de fidélité, un système de prise de températures lié a un Google sheet, un écran d'affichage de statistiques récolté via une API.",
        },
        ],
    }),

    methods: {
        goCV: function() {
            this.$router.push({name: "CV"})
        },
    },

    mounted(){
        setTimeout(() =>{
            document.querySelector('.dot').classList.add('start-anim')
        },2)
    }

    
};
</script>

<style lang="scss">

.background_experience{
    background-image: url("../assets/experiences/brume.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    z-index: -1;
}

.start-anim{
    animation: rotation 40s infinite linear;
}

.dot{
    top: 50%;
    left: 50%;
    z-index: 0;
    width: 85vh;
    height: 85vh;
    border-radius: 50%;
    position: absolute;
    display: inline-block;
    border: dashed #c8aa6d;
    background-color: transparent;
}

.rond{
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: solid #c8aa6d;
    position: absolute;
    height: 95vh;
    width: 95vh;
    background-color: transparent;
    border-radius: 50%;
    display: inline-block;
}

.previous_experience {
  position:relative;
  top:5vh;
  left:3vw;
  font-family: 'Marcellus SC', serif;
}

.button{
    position:absolute;
    top:100vh;
    right:4vw;
}

.titre{
    font-size: 5vh;
    margin-bottom: 5vh;
    margin-top: 15vh; 
    font-weight: bold;
    font-size: 34px;
    color: white;
    text-align: center;
    font-family: policeLoL;
}

.carousel{
    margin-top:10vh;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85vw;
    height: 50vh;
    border: solid;
    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
    border-image-slice: 1;
    border-width: 2px;
}

.v-carousel__controls{
    // background-color: #01060D !important;
}

.content{
    width: 80vw
}

.text-h2{
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: policeLoL;
    margin-left: 15px;
    width: 75vw;
    color: white;
}

.linkCV{
    position: absolute;
    bottom: -5%;
    left: 50%;
    transform: translate(-50%, -500%);
    width: 35%;
    font-family: 'Marcellus SC', serif;
    font-size: 15px;
    font-weight: bold;
}
</style>