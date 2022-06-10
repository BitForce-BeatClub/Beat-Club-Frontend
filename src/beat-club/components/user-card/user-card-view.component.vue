<template>
  <div class="flex flex-wrap justify-content-start" style="margin-top: 3rem">
    <pv-card class="userCard shadow-8">
      <template #header>
        <div class="grid">
          <img class="user-img" alt="UserImage" :src="users.urlToImage" />
        </div>
      </template>
      <template #title>
        <div class="grid mt-1">
          {{ users.nickName }}
        </div>
      </template>
      <template #subtitle>
        <div
          class="grid mt-2"
          style="color: white !important; font-family: Poppins, sans-serif"
        >
          {{ users.description }}
        </div>
      </template>
      <template #content>
        <div class="grid">
          <pv-button
            icon="pi pi-heart-fill"
            label="Follow"
            class="p-button-secondary"
          />
        </div>
        <h3 style="color: #f5cb5c">Stats</h3>
        <div class="flex justify-content-between mt-1">
          <h4>Followers</h4>
          <h4>{{ users.follow }}</h4>
        </div>
        <div class="flex justify-content-between">
          <h4>Plays</h4>
          <h4>{{ users.plays }}</h4>
        </div>
        <div class="flex justify-content-between">
          <h4>Tracks</h4>
          <h4>{{ users.tracks }}</h4>
        </div>
        <div class="flex justify-content-start my-1" style="color: #f5cb5c">
          <h3>About me</h3>
        </div>
        <div class="flex justify-content-center">
          <h4>{{ users.aboutme }}</h4>
        </div>
        <div class="flex justify-content-start my-1" style="color: #f5cb5c">
          <h3>Find me on</h3>
        </div>
        <pv-chip
          label="Youtube"
          icon="pi pi-youtube"
          class="mr-2 mb-2 custom-chip"
        ></pv-chip>
        <pv-chip
          label="Instagram"
          icon="pi pi-instagram"
          class="mr-2 mb-2 custom-chip"
        ></pv-chip>
        <pv-chip
          label="Facebook"
          icon="pi pi-facebook"
          class="mr-2 mb-2 custom-chip"
        ></pv-chip>
      </template>
    </pv-card>
  </div>
</template>

<script>
export default {
  name: "user-card-view",
  props: {
    users: Object,
  },
};
</script>

<style scoped>
.user-img {
  background: no-repeat;
  background-size: cover;
  overflow: hidden;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50%;
  width: 200px;
  height: 200px;
}
.userCard {
  background-color: #212429;
  color: white;
  width: 20vw;
  /*height: 100%;*/
}
.p-chip.custom-chip {
  background: #4e99e1;
  color: #ffffff;
}
.p-chip.custom-chip-blue {
  background: #161d21;
  color: white;
}
</style>
