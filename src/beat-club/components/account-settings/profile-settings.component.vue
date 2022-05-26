<template>
  <div class="card">
    <div class="flex flex-column card-container">
      <div class="flex align-items-center justify-content-center">
        <div style="display: flex; align-items: center" class="flex gap-3 mt-4">
          <section>
            <div class="roundedImage" />
          </section>
          <section>
            <div>
              <pv-file-upload mode="basic" name="demo[]" url="./upload"/>
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
                  v-model="userProfile.firstName"
                  id="firstName"
                  required="true"
                  autocomplete="off"
                />
              </div>
              <div class="field">
                <h5>Last Name</h5>
                <pv-input-text
                  type="text"
                  v-model="userProfile.lastName"
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
                    v-model="userProfile.nickName"
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
                    v-model="userProfile.location"
                    required="true"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="field">
                <h5>Biography</h5>
                <pv-input-text-area v-model="userProfile.description" />
              </div>
              <!--ButtonSignIn-->
              <div class="flex justify-content-center">
                <pv-button type="submit" label="Save changes" class="mt-2" style="width:15vw" />
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

export default {
  name: "profile-settings",
  props: {
    user: Object,
  },
  data() {
    return {
      userProfile: {},
      usersService: undefined,
    };
  },
  created() {
    this.usersService = new BeatClubApiServices();
  },
  updated() {
    this.userProfile = this.user;
    // console.log(this.userProfile);
  },
  methods: {
    getDisplayableUserProfile(user) {
      return user;
    },
    getStorableUserProfile(displayableUser) {
      return {
        id: (displayableUser.id = this.userProfile.id),
        firstName: (displayableUser.firstName = this.userProfile.firstName),
        lastName: (displayableUser.lastName = this.userProfile.lastName),
        nickName: (displayableUser.nickName = this.userProfile.nickName),
        email: (displayableUser.email = this.userProfile.email),
        location: (displayableUser.location = this.userProfile.location),
        description: (displayableUser.description =
          this.userProfile.description),
      };
    },
    saveUser() {
      this.userProfile = this.getStorableUserProfile(this.user);
      this.usersService
        .updateUser(this.userProfile.id, this.userProfile)
        .then((response) => {
          this.getDisplayableUserProfile(response.data);
          console.log("User Info ", response.data);
        });
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
  background: #333533 !important;
  font-family: Poppins, sans-serif;
  font-size: 0.9rem;
  color: #ffffff;
}

@media screen and (max-width: 960px) {
  .card {
    width: 80%;
  }
}
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
