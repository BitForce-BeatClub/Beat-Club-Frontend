<template>
  <div class="">
    <div class="" style="width: 58vw">
      <div class="user-to">
        <user-card-chat :users="userIdTo" />
      </div>
      <div class="chat-box">
        <div id="flex">
          <div v-for="(msg, index) in messagesFrom" :key="index.id">
            <div v-for="(msgTo, index2) in messagesTo" :key="index2.id">
              <div v-if="msg.id < msgTo.id">
                <chat-from-component
                  v-if="msg.userIdFrom === userIdFrom.id && index === index2"
                  :user="this.userIdFrom"
                  :messages="msg"
                />
                <chat-to-component
                  v-if="msgTo.userIdTo === userIdFrom.id && index === index2"
                  :user="this.userIdTo"
                  :messages="msgTo"
                />
              </div>
              <div v-if="msg.id > msgTo.id">
                <chat-to-component
                  v-if="msgTo.userIdTo === userIdFrom.id && index === index2"
                  :user="this.userIdTo"
                  :messages="msgTo"
                />
                <chat-from-component
                  v-if="
                    msg.userIdFrom === userIdFrom.id &&
                    index === index2 &&
                    msg.messageDate !== msgTo.messageDate
                  "
                  :user="this.userIdFrom"
                  :messages="msg"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <form @submit.prevent="saveMessage() || getMessage()" class="p-fluid">
      <div class="flex">
        <pv-input-text
          style="width: 50vw"
          id="message-input"
          type="text"
          v-model.trim="this.message.content"
          :class="{ 'p-invalid': submitted && !this.message.content }"
        />
        <pv-button
          style="width: 8vw"
          id="btn-save"
          icon="pi pi-send"
          label="Send"
          @click="saveMessage() || getMessage()"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { UsersApiServices } from "../../services/users/users-api.services";
import { MessagesApiServices } from "../../services/chat/chat-api.services";
import { getAuth } from "firebase/auth";
import ChatToComponent from "./cards-for-chat/chat-to.component.vue";
import ChatFromComponent from "./cards-for-chat/chat-from.component.vue";
import UserCardChat from "./cards-for-chat/user-card-chat.vue";

export default {
  name: "messages-component",
  components: { UserCardChat, ChatToComponent, ChatFromComponent },
  data() {
    return {
      usersData: [],
      userService: null,
      userId: null,
      auth: getAuth(),
      messages: [],
      message: {},
      submitted: false,
      messagesService: null,
      user: [],
      messagesTo: [],
      messagesFrom: [],
      userIdTo: [],
      userIdFrom: [],
    };
  },
  created() {
    this.userService = new UsersApiServices();
    this.messagesService = new MessagesApiServices();
    this.userId = this.auth.currentUser.uid;
    this.getUserFrom();
    this.getUserTo();
    this.getMessage();
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.userService
        .getUsers()
        .then(
          (response) =>
            (this.usersData = response.data.filter(
              (item) => item.id !== this.userId
            ))
        );
    },
    goUserProfile(userId) {
      this.$router.replace("/messages/" + userId);
    },
    getUserTo() {
      this.userService
        .getUsersById(this.$route.params.userId)
        .then((response) => {
          this.userIdTo = response.data;
        });
    },
    getUserFrom() {
      this.userService.getUsersById(this.userId).then((response) => {
        this.userIdFrom = response.data;
      });
    },
    async getMessage() {
      await this.messagesService
        .getMessages()
        .then((msg) => (this.messages = msg.data));
      this.messagesService
        .getMessages()
        .then(
          (msg) =>
            (this.messagesFrom = msg.data.filter(
              (item) => item.userIdTo === this.userIdTo.id
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
    getDisplayableMessage(message) {
      return message;
    },
    getStorableMessage(displayableMessage) {
      return {
        id: displayableMessage.id,
        userIdFrom: (displayableMessage.userIdFrom = this.userId),
        userIdTo: (displayableMessage.userId = this.$route.params.userId),
        content: displayableMessage.content,
        messageDate: (displayableMessage.date = this.dateTime()),
      };
    },
    async saveMessage() {
      await this.getMessage();
      if (this.message.content && this.message.userIdTo !== "") {
        this.message = this.getStorableMessage(this.message);
        this.messagesService.createMessages(this.message).then((response) => {
          this.message = this.getDisplayableMessage(response.data);
          this.messages.push(this.message);
          console.log(this.message);
          this.message = {};
          this.getMessage();
        });
      }
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
  },
};
</script>

<style lang="scss" scoped>
.user-to {
  z-index: 2;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  background: rgba(26, 25, 25, 0.5);
  margin: 1rem 0 1rem;
  border-radius: 15px;
}
.chat-box {
  //@include center;
  z-index: 2;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  background: rgba(26, 25, 25, 0.5);
  margin: 1rem 0 1rem;
  /*border: 1px solid #aaa;*/
  height: 57vh;
  overflow: auto;
  box-sizing: border-box;
  padding: 0 4px 0 4px;
  border-radius: 8px;
}

.chat-box::-webkit-scrollbar {
  -webkit-appearance: none;
}
.chat-box::-webkit-scrollbar:vertical {
  width: 7px;
}
.chat-box::-webkit-scrollbar-button:increment,
.chat-box::-webkit-scrollbar-button {
  display: none;
}
.chat-box::-webkit-scrollbar:horizontal {
  height: 7px;
}
.chat-box::-webkit-scrollbar-thumb {
  background-color: #008bfd;
  border-radius: 20px;
}
.chat-box::-webkit-scrollbar-track {
  border-radius: 10px;
}

//@for $msg from 0 to 1000 {
//  div:nth-child(#{$msg})::after {
//    order: $msg;
//    content: "$i == #{$msg}";
//    background: hsl($msg * 10, 50%, 50%);
//  }
//}

h4 {
  padding-top: 1rem;
}

#btn-save {
  color: white;
  background: #008cff;
}
</style>
