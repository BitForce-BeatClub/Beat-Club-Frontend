<template>
  <div class="grid">
    <div class="card mt-3" style="width: 70%">
      <div class="bg-white text-red-500">
        <h2 class="ml-3">Creator Hub</h2>
      </div>
      <pv-tab-view class="tabview-custom">
        <pv-tab-panel>
          <template #header>
            <span>Upload</span>
          </template>
          <upload></upload>
        </pv-tab-panel>
        <pv-tab-panel>
          <template #header>
            <span>Manage tracks</span>
          </template>
          <manage-tracks></manage-tracks>
        </pv-tab-panel>
      </pv-tab-view>
    </div>
  </div>
</template>

<script>
import ManageTracks from "../components/creator-hub/manage-tracks.component.vue";
import Upload from "../components/creator-hub/upload.component.vue";
export default {
  name: "creator-hub",
  components: {
    ManageTracks,
    Upload,
  },
};
</script>