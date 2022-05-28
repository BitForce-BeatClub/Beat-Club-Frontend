<template>
  <div>
    <div class="flex flex-wrap justify-content-center card-container gap-3">
      <ProducerCard
        v-for="producerData in producersData"
        :key="producerData.id"
        :users="producerData"
        style="max-width: 300px"
      ></ProducerCard>
    </div>
  </div>
</template>

<script>
//import userCard from "/src/beat-club/components/user-card/user-card.component.vue";
import { BeatClubApiServices } from "../../services/beat-club-api.services.js";
import ProducerCard from "/src/beat-club/components/producer-card/producer-card.component.vue";
export default {
  components: {
    ProducerCard,
    //userCard,
  },
  name: "producer-card-list",
  data() {
    return {
      producersData: [],
      user: {},
      usersService: undefined,
    };
  },
  created() {
    this.usersService = new BeatClubApiServices();
    this.divideAndConquer();
  },
  methods: {
    divideAndConquer() {
      this.usersService
        .getUsers()
        .then(
          (response) =>
            (this.producersData = response.data.filter(
              (item) => item.userType === "Producer"
            ))
        );
    },
  },
};
</script>

<style></style>
