<template>
  <div class="card">
    <div class="flex flex-wrap justify-content-center card-container gap-3">
      <songCard
        v-for="songData in songsData"
        :key="songData.id"
        :songData="songData"
        style="max-width: 220px"
      ></songCard>
    </div>
  </div>
</template>

<script>
import songCard from "/src/beat-club/components/song-card/song-card.component.vue";
import { SongsApiServices } from "../../services/songs/songs-api.services";
import { getAuth } from "firebase/auth";
import { UsersApiServices } from "../../services/users/users-api.services";
export default {
  components: {
    songCard,
  },
  name: "song-card-list-user",
  data() {
    return {
      songsData: [],
      songService: undefined,
      auth: getAuth(),
    };
  },
  created() {
    this.usersService = new UsersApiServices();
    console.log("Info current", this.auth.currentUser);
    this.songService = new SongsApiServices();
    this.getAllCards();
  },
  methods: {
    getAllCards() {
      this.songService.getTracks().then((response) => {
        this.songsData = response.data.filter(
          (item) => item.userId === this.$route.params.userId
        );
      });
    },
  },
};
</script>

<style>
.grid {
  display: flex;
  justify-content: center;
  font-family: "Poppins", sans-serif;
}
h1,
p {
  font-family: "Poppins", sans-serif;
}

p {
  text-align: center;
}
</style>
