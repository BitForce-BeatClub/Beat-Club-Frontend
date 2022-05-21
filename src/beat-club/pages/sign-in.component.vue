<template>
  <div class="grid">
    <div class="col-12 md:col-6 lg:col-3">
      <img
        src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/logo.png?raw=true"
        alt="beat-club-logo"
      />
    </div>
  </div>
  <div class="field-grid">
    <div class="col-fixed" style="width: 80%">
      <div v-if="error" class="error">{{ error.message }}}</div>
      <form @submit.prevent="loginWithEmail">
        <div class="email">
          <span class="p-input-icon-right">
            <i class="pi pi-envelope"></i>
            <pv-input-text
              type="text"
              v-model="email"
              placeholder="Email"
            ></pv-input-text
            ><br />
            <span v-if="msg.email">{{ msg.email }}</span>
          </span>
        </div>

        <div class="password">
          <pv-password
            v-model="password"
            toggle-mask
            placeholder="password"
            :feedback="false"
          ></pv-password
          ><br />
          <span v-if="msg.password">{{ msg.password }}</span>
        </div>
        <div class="col-fixed" style="width: 100%">
          <pv-button class="btn-width" type="submit" label="Login" />
        </div>
      </form>
      <form @submit.prevent="loginWithGoogle">
        <div class="col-fixed" style="width: 100%">
          <pv-button
            class="btn-width"
            type="submit"
            label="Login With Google"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export default {
  name: "sign-in",
  watch: {
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
    validateEmail(value) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Invalid Email Address";
      }
    },
    validatePassword(value) {
      if (value.length > 0 && value.length < 8) {
        this.msg["password"] = "Must be 8 characters! ";
      } else {
        this.msg["password"] = "";
      }
    },

    loginWithEmail() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },
    loginWithGoogle() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then(() => {
          this.$router.replace({ name: "SongList" });
        })
        .catch((error) => {
          const email = error.email;
          console.log(email);
        });
    },
    logOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log(auth);
          this.$router.replace({ name: "HomeView" });
          // Sign-out successful.
        })
        .catch((error) => {
          console.log(error);
          // An error happened.
        });
    },
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
      msg: [],
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
};
</script>

<style>
.error {
  color: red;
  font-size: 18px;
}
.btn-width {
  min-width: 100% !important;
}
</style>
