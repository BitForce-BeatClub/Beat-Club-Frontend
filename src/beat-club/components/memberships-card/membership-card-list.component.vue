<template>
  <div>
    <h1>Memberships</h1>
    <div class="flex justify-content-center card-container gap-3">
      <membership-card
        v-for="membership in membershipData"
        :key="membership.id"
        :membershipData="membership"
      ></membership-card>
    </div>
  </div>
</template>

<script>
import membershipCard from "/src/beat-club/components/memberships-card/membership-card.component.vue";
import { MembershipsApiServices } from "../../services/memberships/memberships-api.services";
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
    this.membershipServices = new MembershipsApiServices();
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

<style></style>
