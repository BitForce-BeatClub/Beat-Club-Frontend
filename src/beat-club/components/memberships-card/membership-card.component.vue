<template>
  <div>
    <pv-card class="songCard">
      <template #header>
        <img alt="user header" :src="membershipData.urlToImage" />
      </template>
      <template #content>
        {{ membershipData.title }}
        <p>{{ membershipData.description }}</p>
        <p>{{ membershipData.userId }}</p>
      </template>
    </pv-card>
  </div>
</template>

<script>
export default {
  name: "membership-card.component",
  props: {
    membershipData: Object,
  },
};
</script>

<style scoped>
.songCard {
  background-color: #161d21;
  color: white;
}
</style>
