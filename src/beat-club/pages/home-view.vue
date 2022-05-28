<template>
  <div v-if="!isConnected">
    <tool-bar-component></tool-bar-component>
  </div>
  <div class="background">
    <div class="container">
      <img src="../../assets/background.png" alt="banner" />
      <div class="slogan">
        the
        <span> world’s #1 </span>
        platform for <br />
        music production
      </div>
    </div>
    <div class="grid">
    <song-card-list></song-card-list>
    </div>
    <user-card-list></user-card-list>
  </div>
</template>

<script>
import ToolBarComponent from "../components/tool-bar.component.vue";
import SongCardList from "../components/song-card/song-card-list.component.vue";
import UserCardList from "../components/user-card/user-card-list.component.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  name: "home-view",
  components: { UserCardList, SongCardList, ToolBarComponent },
  data() {
    return {
      isConnected: false,
    };
  },

  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      try {
        user.uid;
        this.isConnected = true;
      } catch (err) {
        this.isConnected = false;
      }
    });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
/*.background {*/
/*  background: #0e1315;*/
/*}*/

.slogan {
  position: absolute;
  top: 28%;
  left: 30%;
  transform: translate(-40%, -20%);
  font-family: "Bebas Neue", cursive;
  font-size: 5vw;
}

/*.slogan span:nth-child(1),*/
/*.slogan span:nth-child(1) {*/
/*  color: white;*/
/*}*/
.slogan span:nth-child(1) {
  color: #e5383b;
}

.container {
  /*margin-top: 1rem;*/
  position: relative;
  display: inline-block;
  text-align: center;
  height: auto;
  /*background: url("../../assets/background.png");*/
}
img {
  width: 100%;
}
</style>
