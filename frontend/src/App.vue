<script setup lang="ts">
  import { onMounted } from "vue";
import { $axios } from "./api";
  import Rvp from "./components/Rsvp.vue"
  import RvpsList from "./components/RsvpsList.vue"
  import Settings from "./components/Settings.vue"
  import {store} from "./store/store";

  onMounted(async () => {
    store.viewSchema = (await $axios.get("/defaultSchema")).data;
  })
</script>

<template>
  <main>
    <div class="wrapper">
      <div class="left-part">
        <Rvp/>
        <RvpsList/>
      </div>
      <div class="right-part">
        <Settings/>
      </div>
    </div>
  </main>
</template>

<style scoped>

.wrapper {
  display: flex;

  background-color: blue;
}

.left-part{
  margin: 15px;
  color: white;
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: blue;
}

.right-part{
  display: flex;

  width: 50%;
  background-color: aqua;
}
</style>

