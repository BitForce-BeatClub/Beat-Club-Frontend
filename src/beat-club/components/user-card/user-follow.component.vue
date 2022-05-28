<template>
  <div>
    <h2>Who to follow?</h2>
    <div>
      <UserFollows
        v-for="producerData in producersData"
        :key="producerData.id"
        :users="producerData"
        style="max-width: 60px"
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

    getStorableChallenge(displayableChallenge) {
      return {
        id: displayableChallenge.id,
        firstName: displayableChallenge.firstName,
        lastName: displayableChallenge.lastName,
        nickName: displayableChallenge.nickName,
        urlToImage: displayableChallenge.urlToImage,
        userType: displayableChallenge.userType,
        trends: displayableChallenge.trends,
        result: displayableChallenge.result,
        follow: displayableChallenge.follow,
      };
    },
    getDisplayableChallenge(challenge) {
      return challenge;
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
.containerdiv {
  float: left;
  position: relative;
}
.cornerimage {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
