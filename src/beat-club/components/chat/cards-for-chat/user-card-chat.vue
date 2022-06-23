<template>
  <div>
    <div class="users">
      <div class="user-animation">
        <div class="icon">
          <img class="user-img-0" alt="user header" :src="users.urlToImage" />
          <p>
            {{ users.nickName }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-card-chat",
  props: {
    users: Object,
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #161d21;
  color: white;
}

.users {
  display: flex;
  text-align: center;
}
.user-img-0 {
  object-fit: cover;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>
