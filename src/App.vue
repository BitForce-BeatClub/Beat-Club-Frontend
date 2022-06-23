<template>
  <div v-if="isConnected">
    <ToolBar></ToolBar>
  </div>
  <div style="margin-bottom: 4rem">
    <RouterView></RouterView>
  </div>
  <div class="audio">
    <audio-player></audio-player>
  </div>
</template>

<script>
import ToolBar from "./beat-club/components/tool-bar.component.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AudioPlayer from "./beat-club/components/audio-player/audio-player.component.vue";

export default {
  components: {
    AudioPlayer,
    ToolBar,
  },
  data() {
    return {
      isConnected: false,
    };
  },
  computed: {
    label() {
      return this.isConnected ? this.isConnected : !this.isConnected;
    },
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      try {
        const uid = user.uid;
        console.log("usuario conectado", uid);
        this.isConnected = true;
      } catch (err) {
        this.isConnected = false;

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
.audio {
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  z-index: 5000;
  width: 100%;
}
#footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  /* Height of the footer*/
}
/*.background {*/
/*  background: #0d1b29;*/
/*}*/
</style>
