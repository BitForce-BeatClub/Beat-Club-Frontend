<template>
  <div>
    <div v-for="msgTo in messagesTo" :key="msgTo">
      <!--      <div v-for="msg in messagesFrom" :key="msg">-->
      <div>
        <div>
          <p class="date">{{ msgTo?.messageDate }}</p>
          <div
            style="display: flex; justify-content: start; align-items: center"
          >
            <img
              class="user-img-0"
              alt="user header"
              :src="userIdTo.urlToImage"
            />
            <p>{{ msgTo?.content }}</p>
          </div>
        </div>
      </div>
      <!--
        <div v-if="msg[index] < msg.id ? false : msg[index++]">
          <div>
            <p class="date">{{ msg?.messageDate }}</p>
            <div
              style="display: flex; justify-content: end; align-items: center"
            >
              <img
                class="user-img-0"
                alt="user header"
                :src="userIdFrom.urlToImage"
              />
              <p>{{ msg?.content }}</p>
            </div>
          </div>
        </div>&lt;!&ndash;&ndash;&gt;
-->
    </div>
    <!--    </div>-->
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
import { UsersApiServices } from "../../services/users/users-api.services";
import { MessagesApiServices } from "../../services/chat/chat-api.services";
// import MessagesFromComponent from "./cards-for-chat/messages-from.component.vue";
export default {
  name: "messages-display",

  /* components: {
    MessagesFromComponent,
  },*/
  data() {
    return {
      auth: getAuth(),
      userService: null,
      userId: null,
      messagesTo: [],
      messagesService: null,
      userIdFrom: [],
      userIdTo: [],
      messagesFrom: [],
      messages: [],
    };
  },
  created() {
    this.userService = new UsersApiServices();
    this.messagesService = new MessagesApiServices();
    this.getUserFrom();
    this.getUserTo();
    this.getMessages();
  },

  methods: {
    getUserTo() {
      this.userService
        .getUsersById(this.$route.params.userId)
        .then((response) => {
          this.userIdTo = response.data;
          console.log(this.userIdTo);
        });
    },
    getUserFrom() {
      this.userService
        .getUsersById(this.auth.currentUser.uid)
        .then((response) => {
          this.userIdFrom = response.data;
        });
    },
    getMessages() {
      this.messagesService
        .getMessages()
        .then((msg) => (this.messages = msg.data));
      this.messagesService
        .getMessages()
        .then(
          (msg) =>
            (this.messagesFrom = msg.data.filter(
              (item) => item.userIdFrom === this.auth.currentUser.uid
            ))
        );
      this.messagesService
        .getMessages()
        .then(
          (msg) =>
            (this.messagesTo = msg.data.filter(
              (item) => item.userIdFrom === this.userIdTo.id
            ))
        );
    },
  },
};
</script>

<style scoped></style>
