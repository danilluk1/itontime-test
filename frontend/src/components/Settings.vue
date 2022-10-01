<template>
  <div class="wrapper">
    <h1>Rsvp Form settings</h1>
    <AddTextInput/>
    <AddCheckbox/>
    <AddDateAndTime/>
    <AddSelect/>
    <button @click="onFormCreate">Сохранить форму</button>
  </div>
  <div class="vertical">
    <h1>Form Preview</h1>
    <FormKit
      type="form"
      v-model="data"
      @submit="register"
    >
    <FormKitSchema :schema="store.viewSchema"/>
    </FormKit>
  </div>
</template>

<script lang="ts">
import { FormKitSchema, FormKit } from '@formkit/vue'
import AddTextInput from './AddTextInput.vue'
import AddCheckbox from './AddCheckbox.vue'
import {store} from "../store/store.js"
import AddDateAndTime from "./AddDateAndTime.vue"
import AddSelect from "./AddSelect.vue"
import {$axios} from "../api/index";

  export default{

    data() {
      return{
        store,
        data: {}
      }
    },
    methods: {
      async register() {
        alert("The button pressed in settings has no effect.")
      },
      async onFormCreate() {
        const res = await $axios.post("/settings", {
          viewSchema: store.viewSchema,
          settingsSchema: "",
        });
        console.log(res);
        this.store.viewSchema = JSON.parse(res.data.viewSchema);
        this.store.settingsId = res.data._id;
        //this.store.settingsSchema = JSON.parse(res.data.settingsSchema);
      }
    },
    components: {
    FormKitSchema,
    FormKit,
    AddTextInput,
    AddCheckbox,
    AddDateAndTime,
    AddSelect,
}
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
  }
  .vertical{
    margin-left: 100px;
    display: flex;
    flex-direction: column;
  }
</style>