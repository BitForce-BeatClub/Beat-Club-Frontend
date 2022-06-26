<template>
  <div class="">
    <div class="mb-3">
      <h1>Our Members</h1>
    </div>
    <div class="flex">
      <div v-for="users in usersData" :key="users.id">
        <div v-for="payment in paymentData" :key="payment.id">
          <userCard
            v-if="
              users.id === payment.userId &&
              (payment.plan === 'Musician' || payment.plan === 'Producer Pro')
            "
            :users="users"
            :payment="payment"
            @click="goUserProfile(users.id)"
            style="max-width: 300px; cursor: pointer"
          ></userCard>
        </div>

        <!--
              <div class="flex gap-3">
                <userCard
                  v-if="
                    users.id === payment.userId &&
                  "
                  :users="users"
                  style="max-width: 300px; cursor: pointer"
                  @click="goUserProfile(users.id)"
                ></userCard>
              </div>
      --></div>
    </div>
  </div>
</template>

<script>
import userCard from "/src/beat-club/components/user-card/user-card.component.vue";
import { UsersApiServices } from "../../services/users/users-api.services";
import { getAuth } from "firebase/auth";
import { PaymentsApiServices } from "../../services/payment/payments-api.services";
export default {
  components: {
    userCard,
  },
  name: "user-card-list",
  data() {
    return {
      artistsData: [],
      producersData: [],
      usersData: [],
      paymentData: [],
      usersService: undefined,
      paymentsService: undefined,
      auth: getAuth(),
    };
  },
  created() {
    this.usersService = new UsersApiServices();
    this.paymentsService = new PaymentsApiServices();
    this.getMemberships();
  },
  methods: {
    getMemberships() {
      this.usersService.getUsers().then((response) => {
        this.usersData = response.data;
        console.log(this.usersData);
      });
      this.paymentsService.getPayments().then((response) => {
        this.paymentData = response.data;
        console.log(this.paymentData);
      });
    },
    goUserProfile(userId) {
      if (this.auth.currentUser.uid === userId) {
        this.$router.push("/profile");
      } else {
        this.$router.push("/user/" + userId);
      }
    },
  },
};
</script>

<style scoped>
/*h1 {*/
/*  padding-top: 10px;*/
/*  padding-left: 165px;*/
/*  margin-bottom: 20px;*/
/*}*/
h1,
p {
  color: white;
  font-family: "Poppins", sans-serif;
}

p {
  text-align: center;
}
</style>
