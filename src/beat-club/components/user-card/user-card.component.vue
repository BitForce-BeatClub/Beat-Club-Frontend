<template>
  <div>
    <div class="users">
      <div class="user-animation">
        <div class="icon">
          <pv-card class="card">
            <template #header>
              <img
                class="user-img-0"
                alt="user header"
                style="border-radius: 3%"
                :src="users.urlToImage"
              />
            </template>
            <template #content>
              <p>
                {{ users.nickName }}
              </p>
            </template>
          </pv-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-card",
  props: {
    users: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css";
.p-card {
  color: white;
  background-color: transparent;
  box-shadow: none;
}

.users {
  display: flex;
  text-align: center;
  justify-content: center;
}
.p-card-header img {
  object-fit: cover;
  height: 220px;
  width: 220px;
}

.icon {
  margin-inline: 1rem;
  transition: transform ease-in-out 150ms;
}

.user-animation:hover .icon::before {
  opacity: 1;
}

.user-animation .icon:hover {
  transform: translateY(-10%) scale(1.1);
}

.icon::before,
.icon::after {
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 50%;
}

.icon::before {
  //content: "\f04b";
  //font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 2em;
  //background: #f00;
  display: grid;
  place-items: center;
  z-index: 2;
  transition: opacity 75ms linear, background-color 100ms linear;
}

.icon:hover::after {
  //background: #f00;
  animation: pulse 1250ms infinite;
}

@keyframes pulse {
  100% {
    transform: scale(1.35);
    opacity: 0;
  }
}
</style>
