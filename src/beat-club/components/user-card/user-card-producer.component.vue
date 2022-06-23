<template>
  <div style="margin: 0">
    <h1>Top Producers</h1>
    <div class="flex flex-wrap card-container mt-3 gap-3">
      <userCard
        v-for="producerData in producersData"
        :key="producerData.id"
        :users="producerData"
        style="max-width: 200px; cursor: pointer"
        @click="goUserProfile(producerData.id)"
      ></userCard>
    </div>
  </div>
</template>

<script>
import userCard from "/src/beat-club/components/user-card/user-card.component.vue";
import { UsersApiServices } from "../../services/users/users-api.services";

export default {
  components: {
    userCard,
  },
  name: "user-card-producer",
  data() {
    return {
      producersData: [],
      user: {},
      usersService: undefined,
    };
  },
  created() {
    this.usersService = new UsersApiServices();
    this.getProducer();
  },
  methods: {
    goUserProfile(userId) {
      this.$router.push("/user/" + userId);
    },
    getProducer() {
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

<style scoped>

h1,
p {
  color: white;
  font-family: "Poppins", sans-serif;
}

p {
  text-align: center;
}
</style>
