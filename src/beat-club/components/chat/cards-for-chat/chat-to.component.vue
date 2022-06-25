<template>
  <div>
    <p className="date">{{ messages.messageDate }}</p>
    <div>
      <div style="display: flex; align-items: center">
        <img className="user-img-0" alt="user header" :src="user.urlToImage" />
        <p>{{ messages.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "chat-to.component",
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
p {
  margin-left: 1rem;
}
.user-img-0 {
  object-fit: cover;
  height: 50px;
  width: 50px;
  margin: 1rem 0 1rem 1rem;
  border-radius: 50%;
}
</style>
