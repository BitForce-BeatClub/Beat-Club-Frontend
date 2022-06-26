<template>
  <div class="cardBg shadow-8">
    <h1 class="mt-3">Messages</h1>
    <user-card-chat
      @click="goUserProfile(user.id)"
      style="cursor: pointer; margin: 1rem 0 1rem"
      v-for="user in usersData"
      :key="user.id"
      :users="user"
    >
    </user-card-chat>
  </div>
</template>

<script>
import { MessagesApiServices } from "../../services/chat/chat-api.services";
import { UsersApiServices } from "../../services/users/users-api.services";
import UserCardChat from "./cards-for-chat/user-card-chat.vue";
import { getAuth } from "firebase/auth";
export default {
  components: {
    UserCardChat,
  },
  name: "chat-list",
  data() {
    return {
      usersData: [],
      auth: getAuth(),
      messagesService: undefined,
      usersService: undefined,
    };
  },
  created() {
    this.messagesService = new MessagesApiServices();
    this.usersService = new UsersApiServices();
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
    goUserProfile(userId) {
      this.$router.push("/messages/" + userId);
    },
  },
};
</script>
<style scoped>
.cardBg {
  overflow: hidden;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  background: rgba(26, 25, 25, 0.5);
  font-family: "Comfortaa", cursive;
  font-size: 18px;
  width: 18rem;
  height: 75vh;
  margin: 1em;
  border-radius: 12px;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
}

h1 {
  color: white;
  font-family: "Comfortaa", sans-serif;
}

p {
  text-align: center;
}
</style>
