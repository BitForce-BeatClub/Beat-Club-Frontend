<template>
  <div>
    <div class="users">
      <img class="user-img-0" alt="user header" :src="users.urlToImage" />
      <p>
        {{ users.nickName }}
      </p>
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

.users {
  display: flex;
  align-items: center;
}
.user-img-0 {
  margin-right: 1rem;
  object-fit: cover;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>
