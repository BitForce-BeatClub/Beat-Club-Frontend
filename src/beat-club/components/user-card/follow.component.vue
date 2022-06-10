<template>
  <pv-card class="songCard" style="width: 20rem">
    <template #header>
      <div class="grid flex justify-content-between">
        <img
          alt="user header"
          class="user-img mt-2 ml-4"
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
.user-img {
  object-fit: cover;
  width: 50%;
  height: 200px;
}
</style>
