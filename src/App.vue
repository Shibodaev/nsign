<template>
  <div id="app">

  </div>
</template>

<script>

export default {
  name: "App",
  components: {
    
    
  }
};
</script>

<style lang="scss" >
// @import '~bootstrap';
// @import '~bootstrap-vue';
@import '~pixel-glass/styles.css';
@import './assets/scss/fonts.css';

HTML {
background-repeat: no-repeat;
background-position:  50% 0;
/* Mobile layout by default */
background-image: url( "./assets/320.png" );
}
/* Tablet */
@media ( min-width: 760px ) {
HTML {
    /* Tablet layout */
    background-image: url( "./assets/760.png" );
}
}
/* Desktop */
@media ( min-width: 960px ) {
HTML {
    /* Desktop layout */
    background-image: url( "./assets/960.png" );
}
}

#app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
//   margin-top: 60px;
//   background-color: $this_red_color;
  font-family: "DINPro-Medium";
}
</style>
