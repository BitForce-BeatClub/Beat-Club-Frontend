<template>
  <h1>Credentials</h1>
  <div class="p-fluid">
    <h5>Email</h5>
    <div class="grid my-2">
      <section>
        <pv-input-text
          style="width: 25vw"
          type="text"
          id="email"
          v-model="userData.email"
          disabled
        />
      </section>
      <section>
        <pv-button class="p-button-text p-button-green"
          >change e-mail address</pv-button
        >
      </section>
    </div>

    <h5>Display name</h5>
    <div class="grid my-2">
      <section>
        <pv-input-text
          style="width: 25vw"
          type="text"
          id="nickName"
          v-model="userData.nickName"
          disabled
        />
      </section>
      <section>
        <pv-button class="p-button-text p-button-green"
          >change display name</pv-button
        >
      </section>
    </div>

    <h5>Password</h5>
    <div class="grid my-2">
      <section>
        <pv-input-text
          style="width: 24vw"
          type="password"
          id="password"
          v-model="userData.nickName"
          disabled
        />
      </section>
      <section>
        <pv-button class="p-button-text p-button-green"
          >change password</pv-button
        >
      </section>
    </div>

    <h5>Phone number</h5>
    <div class="grid my-2">
      <section>
        <pv-input-mask
          mask="99-999 999 999"
          placeholder="51-987 654 321"
          style="
            background-color: white !important;
            color: #343843;
            width: 25vw;
          "
        />
      </section>
      <section>
        <pv-button class="p-button-text p-button-green"
          >change phone number</pv-button
        >
      </section>
    </div>

    <h5>2-factor Authentication</h5>
    <div class="grid my-2">
      <section>
        <pv-input-text style="width: 25vw" type="text" id="2-Auth" disabled />
      </section>
      <section>
        <pv-button class="p-button-text p-button-green"
          >change security method</pv-button
        >
      </section>
    </div>
  </div>
</template>

<script>
import { BeatClubApiServices } from "../../services/beat-club-api.services";
import { getAuth } from "firebase/auth";
import { useToast } from "primevue/usetoast";

export default {
  name: "credential-settings",
  data() {
    return {
      userData: [],
      userProfile: {},
      usersService: undefined,
      toast: null,
    };
  },
  created() {
    this.toast = useToast();
    this.usersService = new BeatClubApiServices();
    const auth = getAuth();
    console.log("Info current", auth.currentUser);
    this.getUser(auth.currentUser.uid);
  },
  // updated() {
  //   this.userProfile = this.user;
  //   // console.log(this.userProfile);
  // },
  methods: {
    showSuccess() {
      this.toast.add({
        severity: "success",
        summary: "Success",
        detail: "Your profile has been saved successfully",
        life: 3000,
      });
    },
    getUser(id) {
      this.usersService.getUsersById(id).then((response) => {
        this.userData = response.data;
        console.log("esta es ", this.userData);
      });
    },
    getDisplayableUserProfile(user) {
      return user;
    },
    getStorableUserProfile(displayableUser) {
      return {
        id: (displayableUser.id = this.userData.id),
        firstName: (displayableUser.firstName = this.userData.firstName),
        lastName: (displayableUser.lastName = this.userData.lastName),
        nickName: (displayableUser.nickName = this.userData.nickName),
        email: (displayableUser.email = this.userData.email),
        location: (displayableUser.location = this.userData.location),
        description: (displayableUser.description = this.userData.description),
      };
    },
    saveUser() {
      this.userProfile = this.getStorableUserProfile(this.userData);
      this.usersService
        .updateUser(this.userProfile.id, this.userProfile)
        .then((response) => {
          this.getDisplayableUserProfile(response.data);
          console.log("UserProfile ", response.data);
        });
      this.showSuccess();
    },
  },
};
</script>

<style scoped>
.p-button-green {
  color: #08a649 !important;
}
.p-inputtext {
  background: #343843 !important;
  font-family: Poppins, sans-serif;
  font-size: 0.9rem;
  color: #ffffff;
}
</style>
