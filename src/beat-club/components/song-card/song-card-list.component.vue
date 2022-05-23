<template>
  <card>
    <div>
      <div class="flex flex-wrap justify-content-center card-container gap-3">
        <songCard
          v-for="songData in songsData"
          :key="songData.id"
          :songData="songData"
          style="max-width: 300px"
        ></songCard>
      </div>
    </div>
  </card>

</template>

<script>
import songCard from "/src/beat-club/components/song-card/song-card.component.vue";
import { BeatClubApiServices } from "../../services/beat-club-api.services.js";
export default {
  components: {
    songCard,
  },
  name: "song-card-list",
  data() {
    return {
      songsData: [],
      challengesService: undefined,
    };
  },
  created() {
    this.challengesService = new BeatClubApiServices();
    this.getAllCards();
  },
  methods: {
    getAllCards() {
      this.challengesService.getAll().then((response) => {
        this.songsData = response.data.filter((item) => item.userId);
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
h1 {
  padding-top: 10px;
  padding-left: 165px;
  margin-bottom: 20px;
}
h1,
p {
  color: white;
  font-family: "Poppins", sans-serif;
}

p {
  text-align: center;
}
</style>
