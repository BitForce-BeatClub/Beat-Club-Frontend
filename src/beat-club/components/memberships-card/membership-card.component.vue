<template>
  <pv-toast></pv-toast>

  <pv-dialog
    v-model:visible="paymentDialog"
    :header="'Plan ' + membershipData.title + ' at $' + membershipData.price"
    :modal="true"
    style="width: 450px"
    class="p-fluid"
  >
    <div class="field">
      <span class="p-float-label">
        <pv-dropdown
          style="margin-top: 0.4em"
          v-model="payment.card"
          :options="cards"
          optionLabel="name"
          required="true"
        />
        <label for="card">Type Card</label>
        <small class="p-error" v-if="submitted && !payment.card"
          >Type card is required.</small
        >
      </span>
    </div>
    <div class="field">
      <span class="p-float-label">
        <pv-input-text
          type="text"
          id="firstname"
          v-model="payment.firstName"
          required="true"
          :class="{ 'p-invalid': submitted && !payment.firstName }"
        />
        <label for="firstname">FirstName</label>
        <small class="p-error" v-if="submitted && !payment.firstName"
          >FirstName is required.</small
        >
      </span>
    </div>
    <div class="field">
      <span class="p-float-label">
        <pv-input-text
          type="text"
          id="lastname"
          v-model.trim="payment.lastName"
          required="true"
          :class="{ 'p-invalid': submitted && !payment.lastName }"
        />
        <label for="lastname">LastName</label>
        <small class="p-error" v-if="submitted && !payment.lastName"
          >LastName is required.</small
        >
      </span>
    </div>
    <div class="field">
      <label for="cardNumber">Card Number</label>
      <span class="p-float-label">
        <pv-input-mask
          mask="9999 9999 9999 9999"
          placeholder="1234 5678 9123 4567"
          v-model="payment.num"
          :class="{ 'p-invalid': submitted && !payment.num }"
        />
        <small class="p-error" v-if="submitted && !payment.num"
          >Card Number is required.</small
        >
      </span>
    </div>
    <div class="field">
      <label for="cardNumber">CVV</label>
      <span class="p-float-label">
        <pv-input-mask
          mask="999"
          placeholder="123"
          v-model="payment.cvv"
          :class="{ 'p-invalid': submitted && !payment.cvv }"
        />
        <small class="p-error" v-if="submitted && !payment.cvv"
          >CVV is required.</small
        >
      </span>
    </div>
    <div class="field">
      <span class="p-float-label">
        <pv-calendar
          id="date"
          v-model="payment.date"
          view="month"
          dateFormat="mm/yy"
          required="false"
          :showIcon="true"
          autocomplete="off"
          :class="{ 'p-invalid': submitted && !payment.date }"
        />
        <label for="date">Date Expiration</label>

        <small class="p-error" v-if="submitted && !payment.date"
          >Date Expiration is required.</small
        >
      </span>
    </div>
    <template #footer>
      <pv-button
        label="Cancel"
        icon="pi pi-times"
        class="p-button-text"
        @click="hideDialog()"
      />
      <pv-button
        label="Confirm"
        icon="pi pi-check"
        class="p-button-text"
        @click="saveUser()"
      />
    </template>
  </pv-dialog>

  <pv-card class="userCard">
    <template #header>
      <img class="img" alt="membership" :src="membershipData.urlToImage" />
    </template>
    <template #title>
      <div class="flex justify-content-between">
        <section>
          {{ membershipData.title }}
        </section>
        ${{ membershipData.price }}
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
    <template #footer>
      <div v-if="membershipData.id !== 1" class="btnPos">
        <pv-button
          label="Subscribe"
          class="p-button-secondary"
          @click="openNew()"
        ></pv-button>
      </div>
    </template>
  </pv-card>
</template>

<script>
import { getAuth } from "firebase/auth";
import { useToast } from "primevue/usetoast";
import { PaymentsApiServices } from "../../services/payment/payments-api.services";
export default {
  name: "membership-card.component",
  props: {
    membershipData: Object,
  },
  data() {
    return {
      cards: [{ name: "Visa" }, { name: "MasterCard" }, { name: "Express" }],
      paymentDialog: false,
      subscriptionData: [],
      payment: {},
      submitted: false,
      toast: null,
      paymentsService: undefined,
      auth: getAuth(),
    };
  },
  created() {
    this.toast = useToast();
    this.paymentsService = new PaymentsApiServices();
  },
  methods: {
    openNew() {
      this.payment = {};
      this.submitted = false;
      this.paymentDialog = true;
    },
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
    hideDialog() {
      this.paymentDialog = false;
      this.submitted = false;
    },
    showSuccess() {
      this.toast.add({
        severity: "success",
        summary: "Success",
        detail: "Congrats now you're " + this.membershipData.title + "!!",
        life: 3000,
      });
    },
    getDisplayablePayment(payment) {
      return payment;
    },
    getStorablePayment(displayablePayment) {
      return {
        id: displayablePayment.id,
        userId: (displayablePayment.userId = this.auth.currentUser.uid),
        date: (displayablePayment.date = this.dateTime()),
        plan: (displayablePayment.plan = this.membershipData.title),
        price: (displayablePayment.price = this.membershipData.price),
      };
    },
    saveUser() {
      this.submitted = true;
      if (this.payment.firstName.trim()) {
        this.payment = this.getStorablePayment(this.payment);
        this.paymentsService.createPayments(this.payment).then((response) => {
          this.payment = this.getDisplayablePayment(response.data);
          this.subscriptionData.push(this.payment);
          this.showSuccess();
        });
      } else {
        this.toast.add({
          severity: "error",
          summary: "Error",
          detail: "Required fields must complete filled in",
          life: 3000,
        });
      }
      this.paymentDialog = false;
      this.payment = {};
    },
  },
};
</script>

<style scoped>
.w {
  width: 450px !important;
}
.img {
  object-fit: cover;
  height: 17em;
}
.userCard {
  background-color: #212429;
  color: white;
  width: 25em;
}
.btnPos {
  display: flex;
  justify-content: center;
}
p {
  white-space: pre-line;
  text-align: start;
}
</style>
