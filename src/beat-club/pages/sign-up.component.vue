<template>
  <div>
    <div v-if="error" class="error">{{ error.message }}}</div>
    <form @submit.prevent="registerWithEmail">
      Register
      <div class="email">
        <span class="p-input-icon-left">
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
      <pv-button
        type="submit"
        label="Register"
        class="p-button-raised p-button-secondary p-button-text"
      />
    </form>
    <form @submit.prevent="logOut">
      <pv-button
        type="submit"
        label="LogOut"
        class="p-button-raised p-button-secondary p-button-text"
      />
    </form>
  </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export default {
  name: "sign-up",
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
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Invalid Email Address";
      }
    },
    validatePassword(value) {
      // let difference = 8 - value.length;
      if (value.length > 0 && value.length < 8) {
        this.msg["password"] = "Must be 8 characters! ";
        // + difference + " characters left";
      } else {
        this.msg["password"] = "";
      }
    },
    registerWithEmail() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          this.$router.replace({ name: "SongList" });
          // ...
        })
        .catch((error) => {
          this.error = error;
          const errorCode = this.error.code;
          const errorMessage = this.error.message;
          console.log(errorCode);
          console.log(errorMessage);
          // ..
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
          this.error = error;
          console.log(this.error);
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
