<template>
  <div class="grid justify-content-evenly">
    <div class="flex flex-wrap justify-content-start" style="margin-top: 3rem">
      <pv-card class="userCard shadow-8">
        <template #header>
          <div class="grid">
            <img class="user-img" alt="UserImage" :src="userData.urlToImage" />
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
        <template #footer>
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
    <div class="" style="width: 70%">
      <h1 class="mt-4">Tracks</h1>

      <div v-if="songsData === 0">
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

      <div v-else class="flex flex-wrap card-container gap-3">
        <songCard
          v-for="songData in songsData"
          :key="songData.id"
          :songData="songData"
          style="max-width: 250px"
        ></songCard>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
import { UsersApiServices } from "../services/users/users-api.services";
import SongCard from "../components/song-card/song-card.component.vue";
import { SongsApiServices } from "../services/songs/songs-api.services";

export default {
  name: "user-profile",
  components: { SongCard },
  data() {
    return {
      userData: [],
      userServices: undefined,
      songsData: [],
      songService: undefined,
      auth: getAuth(),
    };
  },
  created() {
    this.usersService = new UsersApiServices();
    const auth = getAuth();
    this.getUser(auth.currentUser.uid);
    this.songService = new SongsApiServices();
    this.getAllCards();
    console.log(this.songsData === 0);
  },
  methods: {
    getAllCards() {
      this.songService.getTracks().then((response) => {
        this.songsData = response.data.filter(
          (item) => item.userId === this.auth.currentUser.uid
        );
      });
    },
    getUser(id) {
      this.usersService.getUsersById(id).then((response) => {
        this.userData = response.data;
      });
    },
    editProfile() {
      this.$router.push("/userInfo");
    },
  },
};
</script>

<style scoped>
.top {
  margin-top: 10%;
}
.user-img {
  object-fit: cover;
  width: 50%;
  height: 200px;
  /*margin-top: 3rem;*/
  /*background: no-repeat;*/
  /*background-size: cover;*/
  /*overflow: hidden;*/
  /*-webkit-border-radius: 50px;*/
  /*-moz-border-radius: 50px;*/
  /*border-radius: 50%;*/
  /*width: 200px;*/
  /*height: 200px;*/
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
.p-chip.custom-chip {
  background: white;
  color: black;
}
</style>
