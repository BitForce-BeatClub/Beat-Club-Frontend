<template>
  <div v-if="isConnected">
    <ToolBar></ToolBar>
  </div>
  <RouterView></RouterView>
</template>

<script>
import ToolBar from "./beat-club/components/tool-bar.component.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  components: {
    ToolBar,
  },
  data() {
    return {
      isConnected: false,
    };
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.isConnected = false;
      try {
        const uid = user.uid;
        console.log("usuario conectado", uid);
        this.isConnected = true;
      } catch (err) {
        console.log("usuario no esta conectado", err);
      }
    });
  },
};
</script>
<style lang="scss">
@import "../src/scss/main.scss";
* {
  margin: 0;
}
/*.background {*/
/*  background: #0d1b29;*/
/*}*/
</style>
