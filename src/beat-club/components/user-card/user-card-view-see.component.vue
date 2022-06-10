<template>
  <!--  <div class="grid justify-content-evenly">
    <div class="flex flex-wrap justify-content-start" style="">
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
    &lt;!&ndash;
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
&ndash;&gt;
  </div>-->
  <div class="flex flex-wrap justify-content-start" style="margin-top: 3rem">
    <pv-card class="userCard shadow-8">
      <template #header>
        <div class="grid">
          <img
            class="user-img"
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
            icon="pi pi-heart-fill"
            label="Follow"
            class="p-button-secondary"
            @click="editProfile"
          />
        </div>
        <h3 style="color: #f5cb5c">Stats</h3>
        <div class="flex justify-content-between mt-1">
          <h4>Followers</h4>
          <h4>{{ userData.follow }}</h4>
        </div>
        <div class="flex justify-content-between">
          <h4>Plays</h4>
          <h4>{{ userData.plays }}</h4>
        </div>
        <div class="flex justify-content-between">
          <h4>Tracks</h4>
          <h4>{{ userData.tracks }}</h4>
        </div>
        <div class="flex justify-content-start my-1" style="color: #f5cb5c">
          <h3>About me</h3>
        </div>
        <div class="flex justify-content-center">
          <h4>{{ userData.aboutme }}</h4>
        </div>
        <div class="flex justify-content-start my-1" style="color: #f5cb5c">
          <h3>Find me on</h3>
        </div>
        <pv-chip
          label="Youtube"
          icon="pi pi-youtube"
          class="mr-2 mb-2 custom-chip"
        ></pv-chip>
        <pv-chip
          label="Instagram"
          icon="pi pi-instagram"
          class="mr-2 mb-2 custom-chip"
        ></pv-chip>
        <pv-chip
          label="Facebook"
          icon="pi pi-facebook"
          class="mr-2 mb-2 custom-chip"
        ></pv-chip>
      </template>
    </pv-card>
  </div>
</template>

<script>
import { UsersApiServices } from "../../services/users/users-api.services";

export default {
  name: "user-view",
  data() {
    return {
      userData: [],
      userServices: undefined,
    };
  },
  created() {
    this.usersService = new UsersApiServices();
    // const auth = getAuth();
    // console.log("Info current", auth.currentUser);
    this.getUser(this.$route.params.userId);
  },
  methods: {
    getUser(id) {
      this.usersService.getUsersById(id).then((response) => {
        this.userData = response.data;
        // console.log("UserPo", this.userData);
      });
    },
    editProfile() {
      console.log(this.$route.params.userId);
      this.$router.push("/user/" + this.$route.params.userId);
    },
  },
};
</script>

<style scoped>
.user-img {
  object-fit: cover;
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
.p-chip.custom-chip {
  background: white;
  color: black;
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
