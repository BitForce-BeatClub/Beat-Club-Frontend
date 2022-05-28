<template>
  <div>
    <h2 class="mb-3">Who to follow?</h2>
    <div>
      <UserFollows
        v-for="producerData in producersData"
        :key="producerData.id"
        :users="producerData"
      >
      </UserFollows>
    </div>
  </div>
</template>

<script>
import UserFollows from "/src/beat-club/components/user-card/follow.component.vue";
import { BeatClubApiServices } from "../../services/beat-club-api.services";

export default {
  components: {
    UserFollows,
  },
  name: "user-follow",
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
              (item) => item.userType === "Follow"
            ))
        );
    },
  },
};
</script>

<style scoped></style>
