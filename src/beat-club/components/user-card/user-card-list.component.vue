<template>
  <div>
    <h1>Recommended Artists</h1>
    <div class="flex flex-wrap justify-content-center card-container gap-3">
      <userCard
        v-for="artistData in artistsData"
        :key="artistData.id"
        :users="artistData"
        style="max-width: 300px"
      ></userCard>
    </div>
    <h1>Top Producers</h1>
    <div class="flex flex-wrap justify-content-center card-container gap-3">
      <userCard
        v-for="producerData in producersData"
        :key="producerData.id"
        :users="producerData"
        style="max-width: 300px"
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
  name: "user-card-list",
  data() {
    return {
      artistsData: [],
      producersData: [],
      user: {},
      usersService: undefined,
    };
  },
  created() {
    this.usersService = new UsersApiServices();
    this.filterUserByType();
  },
  methods: {
    filterUserByType() {
      this.usersService
        .getUsers()
        .then(
          (response) =>
            (this.artistsData = response.data.filter(
              (item) => item.userType === "Artist"
            ))
        );
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
.grid {
  display: flex;
  justify-content: center;
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
