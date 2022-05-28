<script>
export default {
  name: "producer-card",
  props: {
    users: Object,
  },
};
</script>

<template>
  <div>
    <pv-card class="card">
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
    </pv-card>
  </div>
</template>

<style scoped>
.card {
  background-color: #161d21;
  color: white;
}
</style>
