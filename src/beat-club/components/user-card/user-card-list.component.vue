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
import { BeatClubApiServices } from "../../services/beat-club-api.services.js";
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
    this.usersService = new BeatClubApiServices();
    this.divideAndConquer();
  },
  methods: {
    divideAndConquer() {
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

    getAllUsers() {
      this.usersService.getUsers().then((response) => {
        this.artistsData = response.data;
        this.user = this.getStorableChallenge(this.user);
      });
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
