<template>
  <div class="container">
    <button class="previous_cv"  onclick="history.back()"> &lt; </button>
    <img src="../assets/experiences/brume.png" class="background_cv"/>
    <div style="width:65vh; margin-top:2vh;">
      <zoom-on-hover :img-normal="require('../assets/CV/CV_Chadli_Adel.png')"></zoom-on-hover>
    </div>

    <a class="button" :href="pdfLink" download="CV_Chadli_Adel">
      <button>TÉLÉCHARGER MON CV</button>
    </a>
  </div>
</template>

<script>

export default {
  data() {
    return {
      pdfLink: require("@/assets/CV/CV_Chadli_Adel.pdf"),
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

.background_cv{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-image: url("../assets/experiences/brume.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    z-index: -1;
}

.container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.CV{
    width: 35%;
    &:hover{
        transform: scale(2);
    }
}

.previous_cv {
  position:relative;
  top:-40vh;
  left:-30vw;
  font-family: 'Marcellus SC', serif;
}

.button{
    position:absolute;
    top:10vh;
    right:4vw;
}
</style>