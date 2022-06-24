<template>
  <div class="content">
    <div class="user">
      <p>
        {{ users.nickName }}
      </p>
      <img class="user-img-0" alt="user header" :src="users.urlToImage" />
    </div>
    <div style="margin: 1rem">
      <pv-button
        @click="goUserProfile(users.id)"
        icon="pi pi-comment"
        class="p-button-secondary"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "follow-component",
  props: {
    users: Object,
  },
  data() {
    return {};
  },

  methods: {
    goUserProfile(userId) {
      this.$router.push("/messages/" + userId);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
}
.user-img-0 {
  object-fit: cover;
  height: 110px;
  width: 110px;
  border-radius: 50%;
}
</style>
