<script>
import toolBarComponent from "./beat-club/components/tool-bar.component.vue";

export default {
  components: {
    toolBarComponent,
  },
};
</script>

<template  class="background">
  <tool-bar-component></tool-bar-component>
  <RouterView></RouterView>
</template>

<style>
* {
  margin: 0;
}
.background{
  background: #0d1b29 ;

}
</style>
