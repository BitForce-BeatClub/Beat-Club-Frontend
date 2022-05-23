<template>
  <div>
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
import { BeatClubApiServices } from "../../services/beat-club-api.services.js";
export default {
  components: {
    userCard,
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
    getStorableChallenge(displayableChallenge) {
      return {
        id: displayableChallenge.id,
        firstName: displayableChallenge.firstName,
        lastName: displayableChallenge.lastName,
        nickName: displayableChallenge.nickName,
        urlToImage: displayableChallenge.urlToImage,
        userType: displayableChallenge.userType,
      };
    },
    getDisplayableChallenge(challenge) {
      return challenge;
    },
  },
};
</script>

<style>
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