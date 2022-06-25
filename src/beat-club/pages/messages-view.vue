<template>
  <div class="bg"></div>
  <div class="flex">
    <div style="margin-left: 3rem">
      <chat-list></chat-list>
    </div>
    <div style="margin:1rem 0 0 12vw">
      <router-view :key="$route.fullPath"></router-view>
      <!--      <messages-to></messages-to>-->
    </div>
  </div>
</template>

<script>
import ChatList from "../components/chat/chat-list.vue";
export default {
  name: "messages-view",
  components: { ChatList },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.bg {
  background: url("https://eskipaper.com/images/cloud-background-2.jpg");
  width: 90vw;
  height: 80vh;
  top: 0;
  left: 0;
  filter: blur(80px);
  transform: scale(1.2);
  position: absolute;
  z-index: -1;
}
</style>
