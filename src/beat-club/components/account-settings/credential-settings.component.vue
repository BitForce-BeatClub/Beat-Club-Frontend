<template>
  <h1>Credentials</h1>
  <div class="p-fluid">
    <h5>Email</h5>
    <div class="my-2">
      <pv-input-text
        style="width: 25vw"
        type="text"
        id="email"
        v-model="userData.email"
        disabled
      />
    </div>

    <h5>Display name</h5>
    <div class="my-2">
      <pv-input-text
        style="width: 25vw"
        type="text"
        id="nickName"
        v-model="userData.nickName"
        disabled
      />
    </div>
    <h5>Password</h5>
    <div class="my-2" style="display: flex">
      <pv-input-text
        type="password"
        id="password"
        v-model="userData.nickName"
        disabled
      />
      <pv-button class="p-button-text p-button-green"
        >change password</pv-button
      >
    </div>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
import { useToast } from "primevue/usetoast";
import { UsersApiServices } from "../../services/users/users-api.services";

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
    this.usersService = new UsersApiServices();
    const auth = getAuth();
    this.getUser(auth.currentUser.uid);
  },
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
