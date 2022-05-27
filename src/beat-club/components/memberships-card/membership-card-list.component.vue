<template>
  <div>
    <h1>Memberships</h1>
    <div class="flex flex-wrap justify-content-center card-container gap-3">
      <membership-card
        v-for="songData in membershipData"
        :key="songData.id"
        :membershipData="songData"
        style="max-width: 24rem"
      ></membership-card>
    </div>
  </div>
</template>

<script>
import membershipCard from "/src/beat-club/components/memberships-card/membership-card.component.vue";
import { BeatClubApiServices } from "../../services/beat-club-api.services.js";
export default {
  components: {
    membershipCard,
  },
  name: "membership-card-list",
  data() {
    return {
      membershipData: [],
      challengesService: undefined,
    };
  },
  created() {
    this.challengesService = new BeatClubApiServices();
    this.getAllCards();
  },
  methods: {
    getAllCards() {
      this.challengesService.getMemberships().then((response) => {
        this.membershipData = response.data.filter((item) => item.id);
      });
    },
  },
};
</script>

<style>

</style>
