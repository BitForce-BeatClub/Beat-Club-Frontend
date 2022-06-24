<template>
  <div v-if="!isConnected">
    <tool-bar-component></tool-bar-component>
  </div>
  <div class="flex justify-content-evenly">
    <div class="flex flex-wrap justify-content-start">
      <user-card-view-see></user-card-view-see>
    </div>
    <div class="top" style="width: 70%">
      <h1 class="mt-4">Tracks</h1>
      <div class="flex flex-wrap card-container gap-3">
        <song-card-list-user></song-card-list-user>
      </div>
    </div>
  </div>
</template>

<script>
import UserCardViewSee from "../components/user-card/user-card-view-see.component.vue";
import ToolBarComponent from "../components/tool-bar.component.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SongCardListUser from "../components/song-card/song-card-list-user.vue";

export default {
  name: "user-view",
  components: { UserCardViewSee, SongCardListUser, ToolBarComponent },
  data() {
    return { isConnected: false };
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
.listSongs {
  margin-top: 6rem;
  max-width: 70%;
}
</style>
