<template>
  <div class="grid justify-content-evenly">
    <chat-list></chat-list>
  </div>
</template>

<script>
import ChatList from "../components/chat/chat-list.vue";

export default {
  name: "messages-view",
  components: { ChatList }
};
</script>

<style lang="scss" scoped>

</style>
