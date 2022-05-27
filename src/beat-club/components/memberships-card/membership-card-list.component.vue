<template>
  <div>
    <h1>Memberships</h1>
    <div class="flex flex-wrap justify-content-center card-container gap-3">
      <membership-card
        v-for="membership in membershipData"
        :key="membership.id"
        :membershipData="membership"
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
      membershipServices: undefined,
    };
  },
  created() {
    this.membershipServices = new BeatClubApiServices();
    this.getMemberships();
  },
  methods: {
    getMemberships() {
      this.membershipServices.getMemberships().then((response) => {
        this.membershipData = response.data.filter((item) => item.id);
      });
    },
  },
};
</script>

<style>

</style>
