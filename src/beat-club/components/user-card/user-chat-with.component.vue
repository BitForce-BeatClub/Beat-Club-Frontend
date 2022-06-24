<template>
  <div class="">
    <h2 class="mb-3">Chat with</h2>
    <div>
      <UserFollows
        v-for="userData in usersData"
        :key="userData.id"
        :users="userData"
      >
      </UserFollows>
    </div>
  </div>
</template>

<script>
import UserFollows from "/src/beat-club/components/user-card/chat-with.component.vue";
import { UsersApiServices } from "../../services/users/users-api.services";
import { getAuth } from "firebase/auth";

export default {
  components: {
    UserFollows,
  },
  name: "user-follow",
  data() {
    return {
      usersData: [],
      user: {},
      auth: getAuth(),
      usersService: new UsersApiServices(),
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.usersService
        .getUsers()
        .then(
          (response) =>
            (this.usersData = response.data.filter(
              (item) => item.id !== this.auth.currentUser.uid
            ))
        );
    },
  },
};
</script>

<style scoped></style>
