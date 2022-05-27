<template>
  <div class="card">
    <div class="flex flex-column card-container">
      <div class="flex align-items-center justify-content-center">
        <img
          style="padding-top: 10rem"
          src="../../assets/logo.png"
          alt="beat-club-logo"
        />
      </div>
      <div class="flex align-items-center justify-content-center">
        <h1
          style="
            padding-top: 2rem;
            color: #f5cb5c;
            font-size: 48px;
            font-family: 'Bebas Neue', sans-serif;
          "
          class="center"
        >
          Sign in to continue
        </h1>
      </div>
      <div class="flex align-items-center justify-content-center">
        <div class="form">
          <pv-dialog
            v-model:visible="showMessage"
            :closable="false"
            :modal="true"
            :draggable="false"
            :breakpoints="{ '960px': '80vw' }"
            :style="{ width: '30vw' }"
            position="top"
          >
            <div class="flex align-items-center flex-column pt-6 px-3">
              <i
                class="pi pi-check-circle"
                :style="{ fontSize: '5rem', color: 'var(--green-500)' }"
              ></i>
              <p
                :style="{
                  color: 'black',
                  lineHeight: 1.5,
                  textIndent: '1rem',
                }"
              >
                Registration Successful!
              </p>
              <p
                :style="{
                  color: 'black',
                  lineHeight: 1.5,
                  textIndent: '1rem',
                }"
              >
                Your account is registered under name
                <b>{{ user.nickName }}</b> ; it'll be valid next 30 days without
                activation. Please check <b>{{ this.email }}</b> for activation
                instructions.
              </p>
            </div>
            <template #footer>
              <div class="flex justify-content-center">
                <pv-button
                  style="color: black !important"
                  label="OK"
                  @click="toggleDialog"
                  class="p-button-text"
                />
              </div>
            </template>
          </pv-dialog>
          <div class="flex justify-content-center">
            <div class="card">
              <form @submit.prevent="registerWithEmail()" class="p-fluid">
                <div class="flex gap-3 mb-4">
                  <section>
                    <div class="p-float-label p-input-icon-right">
                      <pv-input-text
                        type="text"
                        v-model="firstName"
                        placeholder=""
                        id="firstName"
                        required="true"
                        autofocus
                        autocomplete="off"
                      ></pv-input-text>
                      <label for="title">First Name*</label>
                    </div>
                  </section>
                  <section>
                    <div class="p-float-label p-input-icon-right">
                      <pv-input-text
                        type="text"
                        v-model="lastName"
                        placeholder=""
                        id="lastName"
                        required="true"
                        autofocus
                        autocomplete="off"
                      ></pv-input-text>
                      <label for="title">Last Name*</label>
                    </div>
                  </section>
                </div>

                <!--Nickname-->
                <div class="field">
                  <div class="p-float-label p-input-icon-right">
                    <i class="pi pi-user" />
                    <pv-input-text
                      type="text"
                      v-model="nickname"
                      placeholder=""
                      id="nickName"
                      required="true"
                      autofocus
                      autocomplete="off"
                    ></pv-input-text>
                    <label for="title">Nickname*</label>
                  </div>
                  <span v-if="msg.nickname">{{ msg.nickname }}</span>
                </div>
                <!--Email-->
                <div class="field">
                  <div class="p-float-label p-input-icon-right">
                    <i class="pi pi-envelope" />
                    <pv-input-text
                      type="text"
                      v-model="email"
                      placeholder=""
                      required="true"
                      autocomplete="off"
                    ></pv-input-text>
                    <label for="title">Email*</label>
                  </div>

                  <span v-if="msg.email">{{ msg.email }}</span>
                </div>
                <!--Password-->
                <div class="field">
                  <div class="p-float-label">
                    <pv-password
                      id="password"
                      v-model="password"
                      toggleMask
                      required="true"
                    >
                      <template #header>
                        <h6>Pick a password</h6>
                      </template>
                      <template #footer="sp">
                        {{ sp.level }}
                        <pv-divider />
                        <p class="mt-2">Suggestions</p>
                        <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                          <li v-if="msg.password" style="color: #fd334a">
                            {{ msg.password }}
                          </li>
                          <li>At least one lowercase</li>
                          <li>At least one uppercase</li>
                          <li>At least one numeric</li>
                          <li>Minimum 8 characters</li>
                        </ul>
                      </template>
                    </pv-password>
                    <label for="title">Password*</label>
                  </div>
                  <div v-if="isError" style="color: #fd334a">
                    <span> {{ msg.password }} </span>
                  </div>
                  <div v-if="error" style="color: #fd334a">
                    <span> {{ errorMessage.slice(9) }} </span>
                  </div>
                </div>
                <!--ButtonSignIn-->
                <pv-button
                  type="submit"
                  label="Sign in"
                  class="mt-2 btn-color"
                />
              </form>
              <div
                style="padding-top: 2rem"
                class="flex justify-content-center"
              >
                <span>Already have an account?</span>
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/sign-in"
                >
                  <span style="color: #f5cb5c; padding-left: 5px">Sign In</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { BeatClubApiServices } from "../services/beat-club-api.services";
export default {
  name: "sing-up",
  created() {
    this.usersService = new BeatClubApiServices();
    this.usersService.getUsers().then((response) => {
      this.users = response.data;
      this.users.forEach((user) => this.getDisplayableChallenge(user));
    });
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      nickname: "",
      email: "",
      urlToImage:
        "https://www.beatstars.com/assets/img/placeholders/default-avatar-circle.svg", //Default Image
      password: "",
      error: false,
      errorMessage: "",
      isError: false,
      msg: [],
      users: [],
      user: {},
      usersService: null,
    };
  },
  setup() {
    const showMessage = ref(false);
    return {
      showMessage,
    };
  },
  watch: {
    nickname(value) {
      this.nickname = value;
      this.validateNickname(value);
    },
    email(value) {
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    },
    password(value) {
      this.password = value;
      this.validatePassword(value);
    },
  },
  methods: {
    getDisplayableChallenge(challenge) {
      return challenge;
    },
    getStorableUser(displayableUser) {
      return {
        id: displayableUser.id,
        firstName: (displayableUser.nickName = this.firstName),
        lastName: (displayableUser.nickName = this.lastName),
        nickName: (displayableUser.nickName = this.nickname),
        email: (displayableUser.email = this.email),
        urlToImage: (displayableUser.urlToImage = this.urlToImage),
      };
    },
    saveUser(uid) {
      this.user.id = uid;
      this.user = this.getStorableUser(this.user);
      this.usersService.createUsers(this.user).then((response) => {
        this.user = this.getDisplayableChallenge(response.data);
        this.users.push(this.user);
        console.log(response.data.nickName);
        console.log("aca", this.user.nickName);
      });

      this.user = {};
    },
    validateEmail(value) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Invalid Email Address";
      }
    },
    validateNickname(value) {
      if (value.length > 0 && value.length < 5) {
        this.isError = true;
        this.msg["nickname"] = "Must be 5 characters! ";
      } else {
        this.isError = false;
        this.msg["nickname"] = "";
      }
    },
    validatePassword(value) {
      if (value.length > 0 && value.length < 8) {
        this.isError = true;
        this.msg["password"] = "Must be 8 characters! ";
      } else {
        this.isError = false;
        this.msg["password"] = "";
      }
    },
    async registerWithEmail() {
      const auth = getAuth();
      this.error = false;
      if (this.isError === false) {
        await createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            user.displayName = this.nickname;
            this.saveUser(user.uid);
            // console.log("este es el uid del usuario: ", this.user.uid);
            this.showMessage = true;
            // this.$router.replace({ name: "SignIn" });
            // ...
          })
          .catch((error) => {
            this.error = true;
            this.errorMessage = error.message;
            // ..
          });
        await sendEmailVerification(auth.currentUser).catch((err) =>
          console.log(err)
        );
        await updateProfile(auth.currentUser, {
          displayName: this.nickname,
          photoURL: this.urlToImage,
        }).catch((err) => console.log(err));
      }
    },
    toggleDialog() {
      this.showMessage = !this.showMessage;
      this.$router.replace({ name: "HomeView" });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  .card {
    min-width: 450px;

    form {
      margin-top: 2rem;
    }

    .field {
      margin-bottom: 1.5rem;
    }
    .p-inputtext {
      background: #ffffff !important;
    }
  }
  @media screen and (max-width: 960px) {
    .card {
      width: 80%;
    }
  }
}
pv-button {
  //background: #005FF9;
}
.center {
  display: flex;
  justify-content: center;
  padding-left: 0;
}
</style>
