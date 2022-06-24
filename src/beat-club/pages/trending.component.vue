<template>
  <div v-if="!isConnected">
    <tool-bar-component></tool-bar-component>
  </div>
  <div class="flex justify-content-center mt-2">
    <div class="" style="width: 70%; margin-left: 2em">
      <h1>Spotlight</h1>
      <song-card-list></song-card-list>
    </div>
    <div class="flex" style="width: 17rem">
      <user-card-producer></user-card-producer>
    </div>
  </div>
</template>

<script>
import SongCardList from "../components/song-card/song-card-list.component.vue";
import ToolBarComponent from "../components/tool-bar.component.vue";
import UserCardProducer from "../components/user-card/user-card-producer.component.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "user-view",
  components: { UserCardProducer, SongCardList, ToolBarComponent },
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

<style lang="scss" scoped></style>
