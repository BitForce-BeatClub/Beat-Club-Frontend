<template>

  <pv-card class="userCard">
    <template #header>
      <img
        alt="membership"
        :src="membershipData.urlToImage"
        style="height: 18rem"
      />
    </template>
    <template #title>
      <div class="flex justify-content-between">
        <section>
          {{ membershipData.title }}
        </section>
        {{ membershipData.price }}
      </div>
    </template>
    <template #subtitle>
      <div style="color: white !important">
        {{ membershipData.feature }}
      </div>
    </template>
    <template #content>
      <p>
        {{ membershipData.description }}
      </p>
    </template>
    <template #footer="slotProps" >
      <div class="btnPos">
        <pv-button label="Subscribe" class="p-button-secondary" @click="editChallenge(slotProps.data)"></pv-button>
      </div>
      <pv-dialog
          v-model:visible="Dialog"
          :style="{ width: '450px' }"
          header="Payment Method"
          :modal="true"
          class="p-fluid"
      >
        <div class="field">
        <span class="p-float-label">
          <pv-dropdown
              style="width: 100%"
              v-model="userProfile.card"
              :options="cards"
              optionLabel="name"
              :placeholder="userData.card"
              required="false"
          />
          <label for="card">Type Card</label>
        </span>
        </div>
        <div class="field">
        <span class="p-float-label">
          <pv-input-text
              id="firstname"
              v-model="fn"
              required="false"
          />
          <label for="firstname">FirstName</label>
        </span>
        </div>
        <div class="field">
        <span class="p-float-label">
          <pv-input-text
              id="lastname"
              v-model="ln"
              required="false"
          />
          <label for="lastname">Lastname</label>
        </span>
        </div>
        <div class="field">
        <span class="p-float-label">
          <pv-input-text
              id="caa"
              v-model="caa"
              required="false"
          />
          <label for="caa">Card Number</label>
        </span>
        </div>
        <div class="field">
        <span class="p-float-label">
          <pv-input-text
              id="cvv"
              v-model="cvv"
              required="false"
          />
          <label for="cvv">CVV</label>
        </span>
        </div>
        <div class="field">
        <span class="p-float-label">
          <pv-calendar

              id="date"
              v-model="userData.date"
              view="month" dateFormat="mm/yy"
              required="false"
              :showIcon="true"
          />
          <label for="date">Date</label>
        </span>
        </div>
        <div class="field">
        <span class="p-float-label">
          <div class="flex justify-content-evenly">
            <div
                v-for="category of categories"
                :key="category.key"
                class="field-radiobutton"
            >
              <pv-radio-button
                  name="category"
                  :value="category.name"
                  v-model="userData.plan"
              />
              <label class="mt-1 mx-auto" :for="category.key">{{
                  category.name
                }}</label>
            </div>
          </div>
          <label for="description">Plan</label>
        </span>
        </div>
        <template #footer>
          <pv-button
              label="Cancel"
              icon="pi pi-times"
              class="p-button-text"
              @click="hideDialog"
          />
          <pv-button
              label="Confirm"
              icon="pi pi-check"
              class="p-button-text"
              @click="saveUser"
          />
        </template>
      </pv-dialog>

    </template>
  </pv-card>

</template>

<script>

import {getAuth} from "firebase/auth";
import { useToast } from "primevue/usetoast";
import {PaymentsApiServices} from "../../services/payment/payments-api.services";
export default {
  name: "membership-card.component",
  props: {
    membershipData: Object,
  },
  data() {
    return {
      cards: [
        { name: "Visa" },
        { name: "MasterCard" },
        { name: "Express" },
      ],
      fn:null,
      ln:null,
      cvv: null,
      caa: null,
      categories: [{ name: "Free" }, { name: "Musician" }, { name: "Producer Pro" }],
      Dialog: false,
      userData:[],
      userProfile:{},
      submitted:false,
      toast: null,
      paymentsService: undefined,

      auth: getAuth(),
    };
  },
  created() {
    this.toast = useToast();
    this.paymentsService = new PaymentsApiServices();

  },
methods : {
  dateTime() {
    const current = new Date();
    const date =
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getDate();
    const time =
        current.getHours() +
        ":" +
        current.getMinutes() +
        ":" +
        current.getSeconds();
    return date + " " + time;
  },
  editChallenge(challenge) {
    this.userData = { ...challenge };
    this.Dialog = true;
  },
  hideDialog() {
    this.Dialog = false;
    this.submitted = false;
  },
  showSuccess() {
    this.toast.add({
      severity: "success",
      summary: "Success",
      detail: "Your profile has been saved successfully",
      life: 3000,
    });
  },
  getDisplayableUserProfile(user) {
    return user;
  },
  getStorableUserProfile(displayableUser) {
    return {
      userId: (displayableUser.userId = this.auth.currentUser.uid),
      id: (displayableUser.id =this.userData.id),
      date: (displayableUser.date = this.dateTime()),
      plan: (displayableUser.plan = this.userData.plan),
      price: (displayableUser.price = this.userData.price),
    };
  },
  saveUser(uid) {
    this.userProfile.id = uid;
    this.userProfile = this.getStorableUserProfile(this.userProfile);
    this.paymentsService.createPayments(this.userProfile).then((response) => {
      this.userProfile = this.getDisplayableUserProfile(response.data);
      this.userData.push(this.userProfile);
      // console.log(response.data.nickName);
      // console.log("aca", this.user.nickName);
    });

    this.Dialog = false;
    this.userProfile = {};
    this.showSuccess();
  },
},
};
</script>

<style scoped>
.userCard {
  background-color: #212429;
  color: white;
}
.btnPos {
  display: flex;
  justify-content: center;
}
p {
  white-space: pre-line;
  display: flex;
  justify-content: center;
}
</style>
