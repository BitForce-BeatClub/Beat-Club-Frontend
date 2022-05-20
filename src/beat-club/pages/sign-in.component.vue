<template>
  <div>
    <div v-if="error" class="error">{{ error.message }}}</div>
    <form @submit.prevent="loginWithEmail">
      Login
      <div class="email">
        <span class="p-input-icon-left">
          <i class="pi pi-envelope"></i>
          <p-inputtext
            type="text"
            v-model="email"
            placeholder="Email"
          ></p-inputtext
          ><br />
          <span v-if="msg.email">{{ msg.email }}</span>
        </span>
      </div>

      <div class="password">
        <p-password
          v-model="password"
          toggle-mask
          placeholder="password"
          :feedback="false"
        ></p-password
        ><br />
        <span v-if="msg.password">{{ msg.password }}</span>
      </div>
      <pv-button
        type="submit"
        label="Login"
        class="p-button-raised p-button-secondary p-button-text"
      />
    </form>
    <form @submit.prevent="loginWithGoogle">
      <pv-button
        type="submit"
        label="Login With Google"
        class="p-button-raised p-button-secondary p-button-text"
      />
    </form>
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
</style>
