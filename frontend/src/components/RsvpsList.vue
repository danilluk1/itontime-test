<template>
  <h1>Rsvps List</h1>
  <button @click="getRsvps">Обновить</button>
  <p>Схемы форм:</p>
  <select v-model="displayedSettingsId">
    <option v-for="id in settings" :value=id>{{id}}</option>
  </select>
  <div>
    {{rsvps}}
    <table class="tb">
      <tr>
        <th class="td" v-for="field in fields">
          {{field}}
        </th>
      </tr>
      <tr v-for="rsvp in rsvps">
        <td class="td" v-for="key in fields">
          {{rsvp[key]}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
  import {$axios} from "../api/index";
  export default { 
    data() {
      return {
        rsvps: [],
        fields: [],
        settings: [],
        displayedSettingsId: "",
      }
    },
    methods: {
      async getRsvps() {
        this.rsvps = [];
        this.fields = [];
        const sids = (await $axios.get("/settings")).data;
        this.settings = sids;
        const res = (await $axios.get(`/rsvps/${this.displayedSettingsId}`)).data;
        for(let key in JSON.parse(res[0].data)){
            this.fields.push(key);
        }
        for(let el of res) {
          const json = JSON.parse(el.data);
          this.rsvps.push(json);
        }
      }
    },
    components: {
    },
    mounted() {
      this.getRsvps();
    }
  }
</script>

<style scoped>
  .tb{
    width: 100%;
    border: 2px solid black;

    border-collapse: collapse;
  }
  .td {
    border: 2px solid black;
  }
</style>