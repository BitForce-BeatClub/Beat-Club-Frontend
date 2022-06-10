<template>
  <div class="cardBg">
    <h2>Trending Searches</h2>
    <div>
      <UserTrends
        v-for="producerData in producersData"
        :key="producerData.id"
        :users="producerData"
      >
      </UserTrends>
      <div></div>
    </div>
  </div>
</template>

<script>
import UserTrends from "/src/beat-club/components/user-card/user-trend-p.component.vue";
import { UsersApiServices } from "../../services/users/users-api.services";

export default {
  components: {
    UserTrends,
  },
  name: "user-trend",
  data() {
    return {
      producersData: [],
      user: {},
      usersService: undefined,
    };
  },
  created() {
    this.usersService = new UsersApiServices();
    this.filterUserType();
  },
  methods: {
    filterUserType() {
      this.usersService
        .getUsers()
        .then(
          (response) =>
            (this.producersData = response.data.filter(
              (item) => item.userType === "Artist" || "Producer"
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
  padding-right: 300px;
  margin-bottom: 20px;
}

p {
  color: white;
  font-family: "Poppins", sans-serif;
}

p {
  text-align: center;
}
</style>
