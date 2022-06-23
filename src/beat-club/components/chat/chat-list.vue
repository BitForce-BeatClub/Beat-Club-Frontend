<template>
  <div>
    <div
      style="display: flex; align-items: center; flex-direction: column"
      class="flex flex-wrap justify-content-center card-container gap-3"
    >
      <user-card-chat
        v-for="artistData in artistsData"
        :key="artistData.id"
        :users="artistData"
        @click="goUserProfile(artistData.id)"
        style="cursor: pointer"
      >
      </user-card-chat>
    </div>
  </div>
  <!--TODO-->
  <!-- En un arreglo meter a los amigos del artista followers y en ese arreglo recien porder enviar mensaje-->
</template>

<script>
import { UsersApiServices } from "../../services/users/users-api.services";
import UserCardChat from "./cards-for-chat/user-card-chat.vue";
export default {
  components: {
    UserCardChat,
  },
  name: "chat-list",
  data() {
    return {
      artistsData: [],
      producersData: [],
      user: {},
      usersService: undefined,
    };
  },
  created() {
    this.usersService = new UsersApiServices();
    this.filterUserByType();
  },
  methods: {
    goUserProfile(userId) {
      this.$router.push("/user/" + userId);
    },
    filterUserByType() {
      this.usersService
        .getUsers()
        .then(
          (response) =>
            (this.artistsData = response.data.filter(
              (item) => item.userType === "Artist"
            ))
        );
      this.usersService
        .getUsers()
        .then(
          (response) =>
            (this.producersData = response.data.filter(
              (item) => item.userType === "Producer"
            ))
        );
    },
  },
};
</script>
<style scoped>
.card-container {
  gap: 3rem;
}
.grid {
  display: flex;
  justify-content: center;
}
h1 {
  padding-top: 10px;
  padding-left: 165px;
  margin-bottom: 20px;
}
h1,
p {
  color: white;
  font-family: "Poppins", sans-serif;
}

p {
  text-align: center;
}
</style>
