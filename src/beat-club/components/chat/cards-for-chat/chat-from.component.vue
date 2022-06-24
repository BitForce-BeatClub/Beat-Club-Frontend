<template>
  <div>
    <p class="date">{{ messages.messageDate }}</p>
    <div>
      <div style="display: flex; justify-content: end; align-items: center">
        <p>{{ messages.content }}</p>

        <img class="user-img-0" alt="user header" :src="user.urlToImage" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "chat-from.component",
  props: {
    user: Object,
    messages: Object,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap");

.date {
  font-family: "Bebas Neue", cursive;
  color: rgb(245, 203, 92) !important;
}

.user-img-0 {
  object-fit: cover;
  height: 50px;
  width: 50px;
  margin: 1rem 0 1rem 1rem;
  border-radius: 50%;
}
</style>
