<template>
  <pv-button @click="synth"> synth </pv-button>
  <h5>Basic: {{ value1 }}</h5>
  <pv-slider v-model="value1" />
</template>

<script>
import * as Tone from "tone";

export default {
  name: "test-component",
  data() {
    return {
      value1: null,
    };
  },

  methods: {
    synth() {
      const synth = new Tone.Synth().toDestination();
      synth.triggerAttackRelease("E#4", "8n");
    },
  },
};
</script>

<style scoped>
.p-slider-horizontal,
.p-inputtext {
  width: 14rem;
}
.p-slider-vertical {
  height: 14rem;
}
</style>
