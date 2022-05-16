<template>
    <div class="page">
        <button class="previous"  onclick="history.back()"> &lt; </button>
        <h1 class="titre">Mes expériences</h1>
        <div class="carousel">
            <div class="content">
                <v-carousel 
                cycle
                :show-arrows="false"
                hide-delimiter-background
                height="300">
                    <v-carousel-item v-for="(color, i) in experience" :key="i" transition="fade-transition">
                        <v-sheet :color="couleur" height="100%" tile>
                            <v-row class="fill-height" align="center" justify="center">
                                <div class="text-h2">
                                {{ color.contenu }} <img v-if="i==0" style="width: 200px;" src="../assets/logo-entreprise/img-logo.jpg" >
                                <img v-if="i==1" style="width: 200px;" src="../assets/logo-entreprise/Edostar.png" > <img v-if="i==2" style="width: 200px;" src="" >
                                </div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
        couleur:"#01060D",
        experience: [{
            contenu: "Lors de mon BTS j'ai pu effectuer 2 stages, en première et en deuxième année. C'est lors de mon stage de deuxième année que j'ai réellement apprécié codé et que j'ai envisagé le métier de développeur web comme un travail à long terme. Je ne faisais pas de site avec des technologies très poussées mais ça avait suffi pour éveillé mon intérêt. Lors de ces stages j'ai été très autonome et j'avais la liberté de choisir ma façon de codé, j'ai donc choisis || des technologies qui m'étaient famillières, PHP sous le framework Laravel, SQL couplet à du PHP, HTML5/CSS3. C'est lors de ma licensce profesionnel que j'ai apris le plus et que je suis réelement deveu autonome.",
        },
        {
            contenu: "Lors de mon BTS j'ai pu effectuer 2 stages, en première et en deuxième année. C'est lors de mon stage de deuxième année que j'ai réellement apprécié codé et que j'ai envisagé le métier de développeur web comme un travail à long terme. Je ne faisais pas de site avec des technologies très poussées mais ça avait suffi pour éveillé mon intérêt. Lors de ces stages j'ai été très autonome et j'avais la liberté de choisir ma façon de codé, j'ai donc choisis || des technologies qui m'étaient famillières, PHP sous le framework Laravel, SQL couplet à du PHP, HTML5/CSS3. C'est lors de ma licensce profesionnel que j'ai apris le plus et que je suis réelement deveu autonome.",
            img : "../assets/CV/CV_Chadli_Adel.png"
        },
        {
            contenu: "Lors de mon BTS j'ai pu effectuer 2 stages, en première et en deuxième année. C'est lors de mon stage de deuxième année que j'ai réellement apprécié codé et que j'ai envisagé le métier de développeur web comme un travail à long terme. Je ne faisais pas de site avec des technologies très poussées mais ça avait suffi pour éveillé mon intérêt. Lors de ces stages j'ai été très autonome et j'avais la liberté de choisir ma façon de codé, j'ai donc choisis || des technologies qui m'étaient famillières, PHP sous le framework Laravel, SQL couplet à du PHP, HTML5/CSS3. C'est lors de ma licensce profesionnel que j'ai apris le plus et que je suis réelement deveu autonome.",
            img : "../assets/CV/CV_Chadli_Adel.png"
        },
        ],
    }),
};
</script>

<style>
.button{
    position:absolute;
    top:10vh;
    right:4vw;
}

.titre{
    font-weight:bold;
    font-size: 34px;
    color: white;
    text-align: center;
    font-family: policeLoL;
}

.carousel{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 60vh;
}

.content{
    width: 80vw;
}

.text-h2{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: policeLoL;
    margin-left: 15px;
    width: 75vw;
    color: white;
}
</style>