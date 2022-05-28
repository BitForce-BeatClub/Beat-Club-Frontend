<template>
  <div>
    <pv-card class="card">
      <template #header>
        <img class="circle-1" alt="user header" :src="users.urlToImage" />
      </template>

      <br />
      <br />
      <template #title>
        Bizarrap
        <br />
        <p>
          <pv-button
            class="btn-width"
            type="submit"
            icon="pi pi-plus"
            label="Follow"
          />
          <pv-button class="btn-width" type="submit" label="Message" />
          <pv-button class="btn-width" type="submit" label="..." />
        </p>
      </template>
      <template #content>
        <p>Stats</p>
        <p>Followers:{{ users.follow }}</p>
        <p>Plays:{{ users.plays }}</p>
        <p>Tracks:{{ users.tracks }}</p>
        <br />
        <div class="divider"></div>
        <p>ABOUT ME:</p>
        <p>{{ users.aboutme }}</p>
        <br />
        <div class="divider"></div>
        <p>FIND ME ON:</p>
        <p><i class="pi pi-youtube" style="font-size: 1rem">Youtube</i></p>
        <p><i class="pi pi-instagram" style="font-size: 1rem">Instagram</i></p>
        <p><i class="pi pi-facebook" style="font-size: 1rem">Facebook</i></p>
        <p><i class="pi pi-spotify" style="font-size: 1rem">Spotify</i></p>
        <p><i class="pi pi-tiktok" style="font-size: 1rem">Tiktok</i></p>
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
.container {
  height: 100%;
  width: 100%;
  grid-gap: 10px;
  display: grid;
  grid-template-columns: 2% 30% 2% 60% 6%;
}
.content {
  align-items: center;
}
brother {
  width: 400px;
}
.divider {
  background-color: #ffffff;
  height: 1px;
  width: 400px;
}
body {
  height: 100%;
  background-color: #000000;
}
.box {
  background-color: #161a1d;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
}
.box2 {
  background-color: #000000;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
}
p {
  color: white;
  text-align: left;
}
small {
  color: white;
  text-align: right;
}
h2 {
  color: white;
}
.card-horizontal {
  display: flex;
  flex: 1 1 auto;
}
img {
  width: 10px;
  height: 200px;
}
.card {
  background-color: #161d21;
  color: white;
  width: 257px;
}
.btn-width {
  width: 100px;
  align-items: center;
}
.circle-1 {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  float: center;
}
</style>
