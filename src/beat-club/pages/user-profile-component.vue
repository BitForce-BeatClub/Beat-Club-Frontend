<template>
  <div class="grid justify-content-evenly">
    <div class="flex flex-wrap justify-content-start" style="margin-top: 6rem">
      <pv-card class="userCard shadow-8">
        <template #header>
          <div class="grid">
            <img
              class="roundedImage"
              alt="UserImage"
              :src="userData.urlToImage"
            />
          </div>
        </template>
        <template #title>
          <div class="grid mt-1">
            {{ userData.nickName }}
          </div>
        </template>
        <template #subtitle>
          <div
            class="grid mt-2"
            style="color: white !important; font-family: Poppins, sans-serif"
          >
            {{ userData.description }}
          </div>
        </template>
        <template #content>
          <div class="grid">
            <pv-button
              @click="editProfile"
              icon="pi pi-user-edit"
              label="Edit profile"
              class="p-button-secondary"
            />
          </div>
          <h3>Stats</h3>
          <div class="flex justify-content-between mt-1">
            <h4>Followers</h4>
            <h4>0</h4>
          </div>
          <div class="flex justify-content-between">
            <h4>Plays</h4>
            <h4>0</h4>
          </div>
          <div class="flex justify-content-between">
            <h4>Tracks</h4>
            <h4>0</h4>
          </div>
        </template>
        <template #footer> </template>
      </pv-card>
    </div>
    <div class="middle" style="width: 70%">
      <div class="grid mt-6">
        <div class="circle">
          <div class="circleIn"></div>
        </div>
      </div>
      <div class="grid mt-6">
        <h4>No Content Available</h4>
      </div>
      <div class="grid mt-1">
        <h4>There is not yet enough content.</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { BeatClubApiServices } from "../services/beat-club-api.services";
import { getAuth } from "firebase/auth";

export default {
  name: "user-profile",
  data() {
    return {
      userData: [],
      userServices: undefined,
    };
  },
  created() {
    this.usersService = new BeatClubApiServices();
    const auth = getAuth();
    console.log("Info current", auth.currentUser);
    this.getUser(auth.currentUser.uid);
  },
  methods: {
    getUser(id) {
      this.usersService.getUsersById(id).then((response) => {
        this.userData = response.data;
        console.log("UserPo", this.userData);
      });
    },
    editProfile() {
      this.$router.push("/userInfo");
    },
  },
};
</script>

<style scoped>
.middle {
  margin-top: 10%;
}
.roundedImage {
  margin-top: 3rem;
  background: no-repeat;
  background-size: cover;
  overflow: hidden;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50%;
  width: 200px;
  height: 200px;
}
.userCard {
  background-color: #212429;
  color: white;
  width: 20vw;
  /*height: 100%;*/
}

.line {
  background-color: white;
  width: 18vw;
  height: 0.1rem;
}
.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 5px solid #ffffff;
  border-radius: 50px 50px 0 50px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}
.circleIn {
  width: 50px;
  height: 50px;
  border: 5px solid #ffffff;
  border-radius: 50px 50px 0 50px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

h4 {
  margin-top: 3px;
}
p {
  white-space: pre-line;
  display: flex;
  justify-content: center;
}
</style>
