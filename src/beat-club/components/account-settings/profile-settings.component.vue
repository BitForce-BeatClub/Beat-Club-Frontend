<template>
  <pv-toast></pv-toast>
  <div id="profileSettings">
    <h1>Profile settings</h1>
    <div class="flex">
      <div class="flex flex-column">
        <img
          class="user-img mx-3"
          :src="userData.urlToImage"
          alt="Profile Picture"
        />
        <div class="mt-3">
          <h5>Profile Picture Link</h5>
          <pv-input-text
            type="text"
            v-model="userData.urlToImage"
            id="urlToImage"
          />
        </div>
      </div>
      <div class="form lg:ml-6">
        <div class="flex">
          <div class="card" style="min-width: 35vw">
            <form @submit.prevent="saveUser" class="p-fluid">
              <div class="flex justify-content-between">
                <!--Firstname-->
                <div class="field">
                  <h5>First Name</h5>
                  <pv-input-text
                    type="text"
                    v-model="userData.firstName"
                    id="firstName"
                    required="true"
                    autocomplete="off"
                  />
                </div>
                <!--Lastname-->
                <div class="field">
                  <h5>Last Name</h5>
                  <pv-input-text
                    type="text"
                    v-model="userData.lastName"
                    id="lastName"
                    required="true"
                    autocomplete="off"
                  />
                </div>
              </div>

              <!--Nickname-->
              <div class="field">
                <h5>Display name</h5>
                <div class="p-float-label p-input-icon-right">
                  <pv-input-text
                    type="text"
                    v-model="userData.nickName"
                    id="nickName"
                    required="true"
                    autocomplete="off"
                  />
                </div>
              </div>
              <!--Location-->
              <div class="field">
                <h5>Location</h5>
                <div class="p-float-label p-input-icon-right">
                  <pv-input-text type="text" v-model="userData.location" />
                </div>
              </div>
              <div class="field">
                <h5>Biography</h5>
                <pv-input-text-area v-model="userData.description" />
              </div>
              <!--ButtonSignIn-->
              <div class="flex">
                <pv-button
                  type="submit"
                  label="Save changes"
                  class="mt-2 p-button-secondary"
                  style="width: 8vw"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, updateProfile } from "firebase/auth";
import { useToast } from "primevue/usetoast";
import { UsersApiServices } from "../../services/users/users-api.services";

export default {
  name: "profile-settings",
  data() {
    return {
      userData: [],
      userProfile: {},
      usersService: undefined,
      toast: null,
      auth: getAuth(),
    };
  },
  created() {
    this.toast = useToast();
    this.usersService = new UsersApiServices();
    console.log("Info current", this.auth.currentUser);
    this.getUser(this.auth.currentUser.uid);
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
        urlToImage: (displayableUser.urlToImage = this.userData.urlToImage),
      };
    },
    saveUser() {
      const auth = getAuth();
      this.userProfile = this.getStorableUserProfile(this.userData);
      updateProfile(auth.currentUser, {
        displayName: this.userProfile.nickName,
        photoURL: this.userProfile.urlToImage,
      })
        .then(() => {
          console.log("// Profile updated!", auth.currentUser);
          // ..."
        })
        .catch((error) => {
          console.log("// Profile updated!", error);
          // An error occurred
          // ...
        });
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
.user-img {
  object-fit: cover;
  height: 200px;
}
.form .card {
  min-width: 450px;
}

form {
  margin-top: 2rem;
}

.field {
  margin-bottom: 1.5rem;
}

.p-inputtext {
  background: #343843 !important;
  font-family: Poppins, sans-serif;
  font-size: 0.9rem;
  border: none;
  color: #ffffff;
}
</style>
