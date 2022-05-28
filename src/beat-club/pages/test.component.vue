<template>
  <pv-button @click="synth"> synth </pv-button>
</template>

<script>
import * as Tone from "tone";

export default {
  name: "test-component",
  methods: {
    synth() {
      const synth = new Tone.Synth().toDestination();
      synth.triggerAttackRelease("E#4", "8n");
    },
  },
};
</script>

<style scoped></style>
