<template>
  <div class="card" style="padding-top: 5vh">
    <div class="flex flex-row card-container">
      <div class="flex align-items-statr" style="padding-left: 5%">
        <menu-card></menu-card>
      </div>
      <div class="flex align-items-start" style="padding-left: 10%">
        <profile-component style="display: none" :user="userData"></profile-component>
      </div>
    </div>
  </div>
</template>

<script>
import profileComponent from "../components/account-settings/profile-settings.component.vue";
import menuCard from "../components/account-settings/menu-settings-list.component.vue";
import { BeatClubApiServices } from "../services/beat-club-api.services";
import { getAuth } from "firebase/auth";
export default {
  name: "account-settings.component",
  components: {
    profileComponent,
    menuCard,
  },
  data() {
    return {
      userData: [],
      usersService: undefined,
    };
  },
  created() {
    this.usersService = new BeatClubApiServices();
    const auth = getAuth();
    console.log("Info", auth.currentUser);
    this.getUser(auth.currentUser.uid);
  },
  methods: {
    getUser(id) {
      this.usersService.getUsersById(id).then((response) => {
        this.userData = response.data;
        // console.log("esta es ");
      });
    },
  },
};
</script>

<style scoped></style>
