<template>
  <pv-toast></pv-toast>
  <div class="">
    <div class="mx-8 pb-4 pl-2 text-black-alpha-90">
      <div class="bg-white p-3 text-red-500">
        <h2>Creator Hub</h2>
      </div>

      <pv-tab-view class="tabview-custom">
        <pv-tab-panel>
          <template #header>
            <span @click="openNew">Basic info</span>
          </template>
          <div class="pl-2 pt-1" id="principal-div">
            <div class="pb-0">
              <h3 class="title-hub">Creator Hub</h3>
            </div>

            <div>
              <div>
                <h3 class="sub-titles">Title <em class="asterisk">*</em></h3>
                <span class="p-float-label">
                  <pv-input-text
                    id="title-input"
                    type="text"
                    v-model.trim="track.title"
                    :class="{ 'p-invalid': submitted && !track.title }"
                  />
                  <label class="width: 32%" for="title-input">Title</label>
                  <small class="p-error" v-if="submitted && !track.title"
                    >Title is required.</small
                  >
                </span>
              </div>

              <div>
                <div>
                  <h3 class="sub-titles">
                    Permalink <em class="asterisk">*</em>
                  </h3>
                </div>
                <div class="pt-0">
                  <pv-dropdown
                    v-model="track.gender"
                    :options="genders"
                    optionLabel="name"
                    :editable="true"
                    placeholder="Select a gender"
                  />
                </div>
              </div>

              <div>
                <div>
                  <h3 class="sub-titles">Additional tags</h3>
                </div>

                <div>
                  <pv-input-text
                    type="text"
                    class="input-text-tags"
                    v-model="track.tags"
                    placeholder="Add tags tot describe the genre and mood of you track"
                  />
                </div>
              </div>
              <div>
                <div>
                  <h3 class="sub-titles">Description</h3>
                </div>

                <div>
                  <pv-text-area
                    type="text"
                    class="text-area-description"
                    v-model="track.description"
                    placeholder="Describe you tag."
                  />
                </div>
              </div>
              <div>
                <div>
                  <h3 class="sub-titles">Caption</h3>
                </div>

                <div>
                  <pv-text-area
                    type="text"
                    class="text-area-description"
                    v-model="track.caption"
                    placeholder="Add a caption to your post (optional)"
                  />
                </div>
              </div>

              <div>
                <div>
                  <h3 class="sub-titles">Privacy:</h3>
                </div>
                <div>
                  <div
                    v-for="category of categories"
                    :key="category.key"
                    class="field-radiobutton"
                  >
                    <pv-radio-button
                      name="category"
                      :value="category.name"
                      v-model="track.privacy"
                    />
                    <label class="text-black-alpha-90" :for="category.key">{{
                      category.name
                    }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </pv-tab-panel>
        <pv-tab-panel>
          <template #header>
            <span>Metadata</span>
          </template>
          <div>
            <div class="p-fluid grid">
              <div class="field col-12 md:col-4">
                <h5>Contains Music</h5>
                <pv-dropdown
                  class="dropdown-metadata"
                  id="dropdown"
                  v-model="track.containsMusic"
                  :options="containsMusicOptions"
                  optionLabel="name"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>Artist</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.artist"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>Publisher</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.publisher"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>ISRC</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.ISRC"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>Composer</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.commposer"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>Release title</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.releaseTitle"
                />
              </div>
              <div class="field col-12">
                <h5>Buy-link</h5>
                <pv-input-text
                  id="inputtext"
                  type="url"
                  v-model="track.buyLink"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>Album title</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.albumTitle"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>Record label</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.recordLabel"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>Record label date</h5>
                <pv-calendar
                  id="calendar"
                  v-model="track.recordLabelDate"
                  placeholder="Calendar"
                  :showIcon="true"
                  dateFormat="dd.mm.yy"
                />
              </div>
              <div class="field col-12 md:col-8">
                <h5>Barcode</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.barcode"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>ISWS</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.ISWS"
                />
              </div>
              <div class="field col-12 md:col-8">
                <h5>P Line</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.pLine"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>Contains explicit content</h5>
                <pv-dropdown
                  class="dropdown-metadata"
                  id="dropdown"
                  v-model="track.containsExplicitContent"
                  :options="containsMusicOptions"
                  optionLabel="name"
                />
              </div>
            </div>
            <div class="field-checkbox">
              <pv-checkbox id="binary" v-model="track.license" :binary="true" />
              <label class="pl-1">License</label>
            </div>

            <div class="flex">
              <div
                v-for="typelicense of typeslicence"
                :key="typelicense.key"
                class="field-radiobutton pr-3"
              >
                <pv-radio-button
                  name="typelicense"
                  :value="typelicense.name"
                  v-model="track.containsExplicitContent"
                />
                <label class="text-black-alpha-90" :for="typelicense.key">{{
                  typelicense.name
                }}</label>
              </div>
            </div>
            <div class="grid">
              <div class="col-6">
                <div class="justify-content-start">
                  <h4>* Required fields</h4>
                </div>
              </div>
              <div class="col-6">
                <div class="flex flex-row-reverse">
                  <pv-button
                    id="btn-cancel"
                    icon="pi pi-times"
                    label="cancel"
                  />

                  <pv-button
                    id="btn-save"
                    icon="pi pi-save"
                    label="save"
                    @click="saveTrack"
                  />
                </div>
              </div>
            </div>
          </div>
        </pv-tab-panel>
        <pv-tab-panel>
          <template #header>
            <span>Permissions</span>
          </template>
          <div
            class="flex align-items-start flex-column lg:justify-content-between lg:flex-row"
          >
            <div class="mr-5 flex align-items-center mt-3">
              <i class="pi pi-ban mr-1 pb-0 mb-0" style="font-weight: bold"></i>
              <h3 class="mt-0 pt-0">Active Users</h3>
            </div>
          </div>
          <div class="grid mt-3">
            <div class="col-12 md:col-4 mb-4 px-5">
              <div class="text-900 mb-3 font-medium">
                <div class="field-checkbox">
                  <pv-checkbox
                    class="bg-primary"
                    v-model="track.enableDirectDownload"
                    :binary="true"
                  />
                  <label>Enable direct download</label>
                </div>
              </div>
              <div v-if="track.enableDirectDownload === true">
                <span class="text-700 text-sm line-height-3"
                  >This track will be available for direct download in the
                  original format it was updated</span
                >
              </div>
              <div v-else>
                <span class="text-700 text-sm line-height-3"
                  >This track will not be available for direct download in the
                  original format it was updated</span
                >
              </div>
            </div>
            <div class="col-12 md:col-4 mb-4 px-5">
              <div class="field-checkbox">
                <pv-checkbox
                  class="checkboxes"
                  v-model="track.enableAppPlayback"
                  :binary="true"
                />
                <label>Enable app playback</label>
              </div>
              <div v-if="track.enableAppPlayback === true">
                <span class="text-700 text-sm line-height-3"
                  >This track will be playable outside of BeatClub and its
                  apps.</span
                >
              </div>
              <div v-else>
                <span class="text-700 text-sm line-height-3"
                  >This track will not be playable outside of BeatClub and its
                  apps</span
                >
              </div>
            </div>
            <div class="col-12 md:col-4 mb-4 px-5">
              <div class="field-checkbox">
                <pv-checkbox
                  class="checkboxes"
                  v-model="track.includeRSSFeed"
                  :binary="true"
                />
                <label> Include in RSS feed</label>
              </div>
              <div v-if="track.includeRSSFeed === true">
                <span class="text-700 text-sm line-height-3"
                  >This track will be include your RSS feed.</span
                >
              </div>
              <div v-else>
                <span class="text-700 text-sm line-height-3"
                  >This track will not be include your RSS feed.</span
                >
              </div>
            </div>
            <div class="col-4 px-5">
              <div class="field-checkbox">
                <pv-checkbox
                  class="checkboxes bg-white"
                  v-model="track.displayEmbedCode"
                  :binary="true"
                />
                <label> Display embed code</label>
              </div>
              <div v-if="track.displayEmbedCode === true">
                <span class="text-700 text-sm line-height-3"
                  >This track's embedded-player code will be displayed
                  public.</span
                >
              </div>
              <div v-else>
                <span class="text-700 text-sm line-height-3"
                  >This track's embedded-player code will not be displayed
                  public</span
                >
              </div>
            </div>
            <div class="col-8 px-5">
              <div class="field-checkbox">
                <pv-checkbox
                  class="checkboxes"
                  style=""
                  v-model="track.offlineListening"
                  :binary="true"
                />
                <label> Offline listening</label>
              </div>
              <div v-if="track.offlineListening === true">
                <span class="text-700 text-sm line-height-3"
                  >This track can be played on devices without an internet
                  connection.</span
                >
              </div>
              <div v-else>
                <span class="text-700 text-sm line-height-3"
                  >This track can't be played on devices without an internet
                  connection.</span
                >
              </div>
            </div>
          </div>
          <div class="flex flex-row-reverse">
            <div class="flex align-items-center justify-content-center">
              <pv-button id="btn-cancel" icon="pi pi-times" label="cancel" />
              <div class="flex align-items-center justify-content-center">
                <pv-button
                  id="btn-save"
                  icon="pi pi-save"
                  label="save"
                  @click="saveTrack"
                />
              </div>
            </div>
          </div>
        </pv-tab-panel>
      </pv-tab-view>
    </div>
  </div>
</template>

<script>
import { useToast } from "primevue/usetoast";
import { BeatClubApiServices } from "../services/beat-club-api.services";

export default {
  name: "creator-hub",
  data() {
    return {
      tracks: [],
      track: {},
      submitted: false,
      toast: null,
      tracksService: null,
      selectedGender: null,
      checked: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      loading: false,
      value1: null,
      value2: null,
      value3: null,
      containsMusicOptions: [{ name: "Yes" }, { name: "No" }],
      containsExplicitContent: [{ name: "Yes" }, { name: "No" }],
      typeslicence: [
        { name: "All rights reserved", key: "1" },
        { name: "Creative commons", key: "0" },
      ],
      categories: [
        { name: "Public" },
        { name: "Private" },
        { name: "Schedule" },
      ],
      selectedCategory: null,
      genders: [
        { name: "Rock" },
        { name: "Pop" },
        { name: "Metal" },
        { name: "Reggae" },
        { name: "Salsa" },
      ],
      active1: false,
      active2: false,
      items: Array.from({ length: 100000 }, (_, i) => ({
        label: `Item #${i}`,
        value: i,
      })),
    };
  },
  created() {
    this.toast = useToast();
    this.tracksService = new BeatClubApiServices();
  },
  methods: {
    showSuccess() {
      this.toast.add({
        severity: "success",
        summary: "Success message",
        detail: "Message content",
        life: 3000,
      });
    },
    getDisplayableTrack(track) {
      return track;
    },
    getStorableTrack(displayableTrack) {
      return {
        id: displayableTrack.id,
        userId: displayableTrack.userId,
        title: displayableTrack.title,
        gender: displayableTrack.gender,
        tags: displayableTrack.tags,
        description: displayableTrack.description,
        caption: displayableTrack.caption,
        privacy: displayableTrack.privacy,
        containsMusic: displayableTrack.containsMusic,
        artist: displayableTrack.artist,
        publisher: displayableTrack.publisher,
        ISRC: displayableTrack.ISRC,
        commposer: displayableTrack.commposer,
        releaseTitle: displayableTrack.releaseTitle,
        buyLink: displayableTrack.buyLink,
        albumTitle: displayableTrack.albumTitle,
        recordLabel: displayableTrack.recordLabel,
        recordLabelDate: displayableTrack.recordLabelDate,
        barcode: displayableTrack.barcode,
        ISWS: displayableTrack.ISWS,
        pLine: displayableTrack.pLine,
        containsExplicitContent: displayableTrack.containsExplicitContent,
        license: displayableTrack.license,
        typeLicense: displayableTrack.typeLicense,
        enableDirectDownload: displayableTrack.enableDirectDownload,
        enableAppPlayback: displayableTrack.enableAppPlayback,
        includeRSSFeed: displayableTrack.includeRSSFeed,
        displayEmbedCode: displayableTrack.displayEmbedCode,
        offlineListening: displayableTrack.offlineListening,
      };
    },
    findIndexById(id) {
      return this.tracks.findIndex((offer) => offer.id === id);
    },
    openNew() {
      this.track = {};
      this.submitted = false;
    },
    async saveTrack() {
      this.submitted = true;
      if (this.track.title.trim()) {
        if (this.track.id) {
          this.track = this.getStorableTrack(this.track);
          await this.tracksService
            .updateTrack(this.track.id, this.track)
            .then((response) => {
              this.tracks[this.findIndexById(response.data.id)] =
                this.getDisplayableTrack(response.data);
              this.showSuccess();
            });
        } else {
          this.track.id = 0;
          this.track = this.getStorableTrack(this.track);
          await this.tracksService.createTrack(this.track).then((response) => {
            this.track = this.getDisplayableTrack(response.data);
            this.tracks.push(this.track);
            this.showSuccess();
            console.log(this.track);

          });
        }
      }
      this.track = {};
    },
  },
};
</script>
<style>
#principal-div {
  background-color: #ffffff;
  color: #000000;
}
.tabs-content {
  color: #000000;
}
.title-hub {
  color: #000000;
}
.sub-titles {
  font-weight: bold;
  color: #000000;
  padding-bottom: 0.5rem;
}
.asterisk {
  color: red;
}
h3 {
  padding-top: 1rem;
}
.input-text-tags {
  width: 35%;
  height: 50px;
}
.text-area-description {
  width: 35%;
}
.categories-list {
  color: #000000;
}
#btn-save {
  color: white;
  background: orangered;
}
#btn-cancel {
  color: black;
  background: #f2f2f2;
}
</style>
