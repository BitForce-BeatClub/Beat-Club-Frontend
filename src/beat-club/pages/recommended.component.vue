<template>
  <div v-if="!isConnected">
    <tool-bar-component></tool-bar-component>
  </div>
  <user-trend></user-trend>
<!--  <song-card-list></song-card-list>-->
<!--  <user-follow></user-follow>-->
</template>

<script>
import SongCardList from "../components/song-card/song-card-list.component.vue";
import userTrend from "../components/user-card/user-trend.component.vue";
import UserFollow from "../components/user-card/user-follow.component.vue";
import ToolBarComponent from "../components/tool-bar.component.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  name: "Recommended-component",
  components: { SongCardList, userTrend, UserFollow, ToolBarComponent },
  data() {
    return { isConnected: false };
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // this.isConnected = false;
      try {
        user.uid;
        this.isConnected = true;
      } catch {
        this.isConnected = false;
      }
    });
  },
};
</script>

<style scoped></style>
