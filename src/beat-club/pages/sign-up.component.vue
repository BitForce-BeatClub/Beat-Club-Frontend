<template>
  <div class="card">
    <div class="flex flex-column card-container">
      <div class="flex align-items-center justify-content-center">
        <img style="padding-top: 10rem"
          src="https://github.com/BitForce-BeatClub/LandingPage/blob/main/img/logo.png?raw=true"
          alt="beat-club-logo"
        />
      </div>
      <div class="flex align-items-center justify-content-center">
        <h1 style="padding-top: 2rem" class="center">Sign in to continue</h1>
      </div>
      <div class="flex align-items-center justify-content-center">
        <div class="form">
          <pv-dialog
            v-model:visible="showMessage"
            :closable="false"
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
                Your account is registered under <b>{{ this.email }}</b>
              </p>
            </div>
            <template #footer>
              <div class="flex justify-content-center">
                <pv-button
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
                <div class="field">
                  <div class="p-float-label p-input-icon-right">
                    <i class="pi pi-envelope" />
                    <pv-input-text
                      type="text"
                      v-model="email"
                      placeholder="Email*"
                      autocomplete="off"
                    ></pv-input-text>
                  </div>
                  <span v-if="msg.email">{{ msg.email }}</span>
                </div>
                <div class="field">
                  <div class="p-float-label">
                    <pv-password
                      id="password"
                      v-model="password"
                      toggleMask
                      placeholder="Password*"
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
                  </div>
                  <div v-if="isError" style="color: #fd334a">
                    <span> {{ msg.password }} </span>
                  </div>
                  <div v-if="error" style="color: #fd334a">
                    <span> {{ errorMessage.slice(9) }} </span>
                  </div>
                </div>

                <pv-button type="submit" label="Sign in" class="mt-2 btn-color" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
export default {
  name: "sing-up",

  data() {
    return {
      email: "",
      password: "",
      error: false,
      errorMessage: "",
      isError: false,
      msg: [],
    };
  },
  setup() {
    const showMessage = ref(false);
    return {
      showMessage,
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
        this.isError = true;
        this.msg["password"] = "Must be 8 characters! ";
      } else {
        this.isError = false;
        this.msg["password"] = "";
      }
    },
    registerWithEmail() {
      const auth = getAuth();
      this.error = false;
      if (this.isError === false) {
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            this.showMessage = true;
            // this.$router.replace({ name: "SignIn" });
            // ...
          })
          .catch((error) => {
            this.error = true;
            this.errorMessage = error.message;
            // ..
          });
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
      background: white !important;
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