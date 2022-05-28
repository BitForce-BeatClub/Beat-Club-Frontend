<template>
  <div v-if="!isConnected">
    <tool-bar-component></tool-bar-component>
  </div>
  <div class="background">
    <body>
      <br />
      <br />
      <div>
        <div class="wrap">
          <div class="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="Search beat, producer, artist or #tag"
            />
            <button type="submit" class="searchButton">
              <i class="pi pi-search" style="font-size: 2rem"></i>
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div class="container">
        <div class="box2"></div>
        <div class="box">
          <song-card-list></song-card-list>
        </div>
        <div class="box2"></div>
        <div class="box">
          <user-card-producer></user-card-producer>
        </div>
        <div class="box2"></div>
      </div>
    </body>
  </div>
</template>

<script>
import UserCardProducer from "../components/user-card/user-card-producer.component.vue";
import SongCardList from "../components/song-card/song-card-list.component.vue";
import ToolBarComponent from "../components/tool-bar.component.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "Trending-Component",

  components: { UserCardProducer, SongCardList, ToolBarComponent },
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
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

.slogan span {
  font-family: "Bebas Neue", cursive;
  font-size: 50px;
}

.slogan span:nth-child(1),
.slogan span:nth-child(3) {
  color: white;
}
.slogan span:nth-child(2) {
  color: #e5383b;
}

img {
  width: 100%;
}
body {
  height: 100%;
  background-color: #000000;
}

.container {
  height: 100%;
  width: 100%;
  grid-gap: 10px;
  display: grid;
  grid-template-columns: 2% 70% 2% 24% 2%;
}
.conteiner2 {
}
.box2 {
}
.box {
  background-color: #161a1d;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
}
.search {
  width: 120%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #0d1b29;
  border-right: red;
  padding: 5px;
  height: 36px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #0d1b29;
}

.searchTerm:focus {
  color: #0d1b29;
}

.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid #0d1b29;
  background: #0d1b29;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

/*Resize the wrap to see the search bar change!*/
.wrap {
  width: 50%;
  height: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
