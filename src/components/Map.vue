<template>
    <div class="background">
        <h1 class="welcome">Bienvenue dans mon portfolio !</h1>
        <div class="roles">

            <div class="bot">
                <img class="role" 
                @mouseover="showText = 1"
                @mouseleave="showText = 0" 
                v-on:click="goLoisir"
                src="../assets/roles/Adc_bordered_white.png"/>
                <span class="text" v-if="showText === 1">Loisirs</span>
            </div>

            <div class="supp">
                <img class="role" 
                @mouseover="showText = 2"
                @mouseleave="showText = 0"  
                v-on:click="goContacte"
                src="../assets/roles/Supp_bordered_white.png" >
                <span class="text" v-if="showText === 2">Me contacter</span>
            </div>

            <div class="jgl">
                <img class="role" 
                @mouseover="showText = 3"
                @mouseleave="showText = 0"  
                v-on:click="goService"
                src="../assets/roles/Jgl_bordered_white.png" >
                <span class="text" v-if="showText === 3">Service disponible</span>
            </div>

            <div class="mid">
                <img class="role" 
                @mouseover="showText = 4"
                @mouseleave="showText = 0"  
                v-on:click="goExperience"
                src="../assets/roles/Mid_bordered_white.png" >
                <span class="text" v-if="showText === 4">Expériences</span>
            </div>

            <div class="top">
                <img class="role" 
                @mouseover="showText = 5"
                @mouseleave="showText = 0"  
                v-on:click="goCV"
                src="../assets/roles/Top_bordered_white.png" >
                <span class="text" v-if="showText === 5">CV/Parcours</span>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: 'Map',

    components: {
    },

    data() {
        return {
            showText: 0,
        }
    },

    methods: {
        goLoisir: function() {
            this.$router.push({name: "Loisir"})
        },
        goContacte: function() {
            this.$router.push({name: "Contacte"})
        },
        goService: function() {
            this.$router.push({name: "Service"})
        },
        goExperience: function() {
            this.$router.push({name: "Experience"})
        },
        goCV: function() {
            this.$router.push({name: "CV"})
        },
    },
}
</script>

<style lang="scss">
.background{
    background-image: url('../assets/map/Map.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 100vh;
    width: 100vw;
}

.welcome{
    color: white;
    font-family: policeLoL;
    text-align: center;
}

.align{
    display: flex;
}

.bot{
    position: absolute;
    left : 67vw;
    width: 18%;
    top:55vh;
}
.supp{
    position: absolute;
    left : 60vw;
    width: 18%;
    top:62vh;
}
.jgl{
    position: absolute;
    left : 41vw;
    width: 18%;
    top:40vh;
}
.mid{
    position: absolute;
    left : 50vw;
    width: 18%;
    top:35vh;
}
.top{
    position: absolute;
    left : 39vw;
    width: 18%;
    top:18vh;
}

.text{
    font-family: policeLoL;
    font-size: 18px;
    color: white;
    margin-left: 1vw;
}

.role{
    width:30%;
    &:hover{
        transition: all 500ms ease-in-out;
        transform: scale(1.5);
    }

    &:not(:hover) {
        transition: all 500ms ease-in-out;
    }
}

</style>
