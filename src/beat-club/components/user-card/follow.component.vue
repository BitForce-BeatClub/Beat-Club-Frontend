<template>
  <pv-card class="songCard" style="width: 20rem">
    <template #header>
      <div class="grid flex justify-content-between">
        <img
          alt="user header"
          class="roundedImage mt-2 ml-4"
          :src="users.urlToImage"
        />
        <div class="title flex align-items-center mr-4">
          {{ users.nickName }}
        </div>
      </div>
    </template>
    <template #content>
      <div class="title flex justify-content-start" style="color: #f5cb5c">
        {{ users.follow }}
      </div>
    </template>
  </pv-card>
</template>

<script>
export default {
  name: "follow-component",
  props: {
    users: Object,
  },
};
</script>

<style scoped>
.title {
  font-size: 16px !important;
  font-family: Poppins, sans-serif;
}
.songCard {
  background-color: #161d21;
  color: white;
}
.roundedImage {
  background: no-repeat;
  background-size: cover;
  overflow: hidden;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  width: 100px;
  height: 100px;
}
</style>
