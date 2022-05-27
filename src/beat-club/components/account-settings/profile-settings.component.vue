<template>
  <pv-toast></pv-toast>
  <div class="card">
    <div class="flex flex-column card-container">
      <div class="flex align-items-center justify-content-center">
        <div style="display: flex; align-items: center" class="flex gap-3">
          <section>
            <div class="roundedImage" />
          </section>
          <section>
            <div>
              <pv-file-upload
                class=""
                mode="basic"
                name="demo[]"
                url="./upload"
              />
            </div>
          </section>
        </div>
      </div>
      <div class="form">
        <div class="flex align-items-center justify-content-center">
          <div class="card" style="width: 50vw">
            <form @submit.prevent="saveUser" class="p-fluid">
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
                  <pv-input-text
                    type="text"
                    v-model="userData.location"
                    required="true"
                    autocomplete="off"
                  />
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
import { BeatClubApiServices } from "../../services/beat-club-api.services";
import { getAuth } from "firebase/auth";
import { useToast } from "primevue/usetoast";

export default {
  name: "profile-settings",
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
.roundedImage {
  background: url(https://scontent.flim16-1.fna.fbcdn.net/v/t1.18169-9/20031759_1600276453345492_7222173495713220820_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH_TXdcrlZjWFze-WdX4SSPlOMPzaOan-SU4w_No5qf5DajStmVGYZkxk9jrcXXAJKPFFUKxg_i3iHJ_Pb9-Dxw&_nc_ohc=xHIRlF4FoKQAX_YZbpr&_nc_ht=scontent.flim16-1.fna&oh=00_AT85VfT8dkFV6gg5EminS6YIdn9EmNVOFhRUNJkEqTc4EA&oe=62B61A66)
    no-repeat;
  background-size: cover;
  overflow: hidden;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  width: 90px;
  height: 90px;
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

/*@media screen and (max-width: 900px) {*/
/*  .card {*/
/*    width: 80%;*/
/*  }*/
/*}*/
/*pv-button {*/
/*  background: #005FF9;*/
/*}*/
.card {
}
.center {
  display: flex;
  justify-content: center;
  padding-left: 0;
}
</style>
