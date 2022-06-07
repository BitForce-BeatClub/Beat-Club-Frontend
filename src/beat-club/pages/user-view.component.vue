<template>
  <div v-if="!isConnected">
    <tool-bar-component></tool-bar-component>
  </div>
  <div class="card">
    <div class="grid">
      <div class="mx-auto my-auto">
        <user-card-view-see></user-card-view-see>
      </div>
      <div class="listSongs">
        <h1 class="ml-6">Tracks</h1>
        <song-card-list></song-card-list>
      </div>
    </div>
  </div>
</template>

<script>
import SongCardList from "../components/song-card/song-card-list.component.vue";
import UserCardViewSee from "../components/user-card/user-card-view-see.component.vue";
import ToolBarComponent from "../components/tool-bar.component.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "user-view",
  components: { UserCardViewSee, SongCardList, ToolBarComponent },
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
