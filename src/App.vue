<script>
import toolBarComponent from "./beat-club/components/tool-bar.component.vue";

export default {
  components: {
    toolBarComponent,
  },
};
</script>

<template>
  <tool-bar-component></tool-bar-component>
  <RouterView></RouterView>
</template>

<style>
@import "../src/assets/base.css";
* {
  margin: 0;
}
/*.background {*/
/*  background: #0d1b29;*/
/*}*/
</style>
