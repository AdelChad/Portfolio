<template>
  <div class="container">
    <button class="previous"  onclick="history.back()"> &lt; </button>
    <div style="margin-top: 0.2vh; width:71vh;">
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

.previous {
    position:absolute;
    top:5vh;
    left:3vw;
    font-family: 'Marcellus SC', serif;
    font-size: 15px;
    font-weight: bold;
}

.button{
    position:absolute;
    top:10vh;
    right:4vw;
}
</style>