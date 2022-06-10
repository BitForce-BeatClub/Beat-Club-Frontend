<template>
  <div class="track-flex">
    <pv-card class="songCard">
      <template #header>
        <div class="flex justify-content-center mt-3">
          <div class="play-animation" style="max-width: 90%">
            <div class="icon">
              <img alt="user header" :src="songData.cover" />
            </div>
          </div>
        </div>
      </template>
      <template #title>
        <div class="title">
          {{ songData.title }}
        </div>
      </template>
      <template #content>
        <p>{{ songData.artist }}</p>
      </template>
    </pv-card>
  </div>
</template>

<script>
export default {
  name: "song-card",
  props: {
    songData: Object,
  },
};
</script>

<style scoped>
.title {
  font-size: 16px !important;
  font-family: Poppins, sans-serif;
}
.songCard {
  background-color: white;
  color: #202125;
}

.track-flex {
  display: flex;
  text-align: center;
}

.track-flex img {
  border-radius: 50%;
}

.icon {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  transition: transform ease-in-out 150ms;
}

.play-animation:hover .icon {
  transform: translateY(0%);
}

.play-animation:hover .icon::before {
  opacity: 1;
}

.play-animation .icon:hover {
  transform: translateY(0%) scale(0.7);
}

.icon::before,
.icon::after {
  opacity: 0;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 50%;
}

.icon::before {
  content: "\f04b";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 2em;
  color: white;
  background: rgba(255, 0, 0, 1);
  display: grid;
  place-items: center;
  z-index: 10;
  transition: opacity 75ms linear, background-color 100ms linear;
}

.icon:hover::before {
  background: rgba(204, 2, 2, 0.8);
}

.icon:hover::after {
  background: rgba(255, 0, 0, 0.8);
  z-index: 1;
  animation: pulse 1250ms infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.80;
  }
  100% {
    transform: scale(1.35);
    opacity: 0;
  }
}
</style>
