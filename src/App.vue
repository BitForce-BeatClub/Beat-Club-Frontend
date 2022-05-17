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
* {
  margin: 0;
}
</style>
