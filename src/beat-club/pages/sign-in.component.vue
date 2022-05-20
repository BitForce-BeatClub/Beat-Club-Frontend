<template>
  <div>
    <div v-if="error" class="error">{{ error.message }}}</div>
    <form @submit.prevent="loginWithEmail">
      Register
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <button type="submit">Register</button>
    </form>
    <form @submit.prevent="loginWithGoogle">
      <button type="submit">Login with Google</button>
    </form>
    <form @submit.prevent="logOut">
      <button type="submit">logOut</button>
    </form>
  </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export default {
  name: "SignIn",
  methods: {
    loginWithEmail() {
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
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          // ..
        });
    },
    loginWithGoogle() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          this.$router.replace({ name: "SongList" });

          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          console.log(email);
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
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
