<template>
  <div v-if="!isConnected">
    <tool-bar-component></tool-bar-component>
  </div>
  <div class="background">
    <body>
      <br />
      <br />
      <div class="container">
        <div class="box2"></div>
        <div class="box">
          <user-card-view-see></user-card-view-see>
        </div>
        <div class="box2"></div>
        <div class="box">
          <song-card-list></song-card-list>
        </div>
        <div class="box2"></div>
      </div>
    </body>
  </div>
</template>

<script>
import SongCardList from "../components/song-card/song-card-list.component.vue";
import UserCardViewSee from "../components/user-card/user-card-view-see.component.vue";
import ToolBarComponent from "../components/tool-bar.component.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "user-view",
  components: { UserCardViewSee, SongCardList, ToolBarComponent },
  data() {
    return { isConnected: false };
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      try {
        user.uid;
        this.isConnected = true;
      } catch (err) {
        this.isConnected = false;
      }
    });
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
