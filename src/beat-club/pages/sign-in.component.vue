<template>
  <div class="card">
    <div class="flex flex-column">
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
          <div class="flex justify-content-center">
            <div class="card">
              <form @submit.prevent="loginWithEmail()" class="p-fluid">
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
                      :feedback="false"
                      required="true"
                    >
                    </pv-password>
                    <label for="password">Password*</label>
                  </div>
                  <div v-if="error" style="padding-top: 1rem; color: #d3d3d3">
                    <span> {{ error.slice(9) }} </span>
                  </div>
                </div>
                <!--ButtonSignIn-->
                <pv-button
                  type="submit"
                  label="Sign in"
                  class="p-button p-button-secondary"
                />
              </form>
              <form @submit.prevent="loginWithGoogle()" class="p-fluid">
                <!--ButtonSignIn-->
                <pv-button
                  style="background: white !important; color: black !important"
                  icon="pi pi-google"
                  type="submit"
                  label="Sing in with Google"
                  class="mt-2 btn-color"
                />
              </form>
              <div
                style="padding-top: 2rem"
                class="flex justify-content-center"
              >
                <span>Don’t have an account?</span>
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/sign-up"
                >
                  <span style="color: #f5cb5c; padding-left: 5px">Sign Up</span>
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export default {
  name: "sign-in",
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
        .then(() => {
          // Signed in
          this.$router.replace({ name: "HomeView" });
          // ...
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
    loginWithGoogle() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then(() => {
          this.$router.replace({ name: "HomeView" });
        })
        .catch((error) => {
          const email = error.email;
          console.log(email);
        });
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
      font-family: Poppins, sans-serif;
    }
  }
  @media screen and (max-width: 960px) {
    .card {
      width: 80%;
    }
  }
}
.btn-width {
  min-width: 100% !important;
}
.center {
  display: flex;
  justify-content: center;
  padding-left: 0;
}
</style>
