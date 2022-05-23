<template>
  <div>
    <card class="card">
      <template #header>
        <div>
          <img alt="user header" :src="users.urlToImage" />
        </div>
      </template>
      <template #content>
        <p>
          {{ users.nickName }}
        </p>

        <!--        <p>{{ userData }}</p>-->
        <!--        <p>{{ userData }}</p>-->
      </template>
    </card>
  </div>
</template>

<script>
export default {
  name: "producer-card"
};
</script>

<style scoped>
.card {
  background-color: #161d21;
  color: white;
}
</style>