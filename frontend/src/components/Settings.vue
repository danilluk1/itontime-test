<template>
  <div class="wrapper">
    <h1>Rsvp Form settings</h1>
    <AddTextInput />
    <AddCheckbox />
    <AddDateAndTime />
    <AddSelect />
    <button @click="onFormCreate">Сохранить форму</button>
    <p>Изменить форму можно только до сохранения, так как потом она используется в бэкенде и привязана к тем rsvp, 
       которые уже были отправлены
    </p>
  </div>
  <div class="vertical">
    <h1>Form Preview</h1>
    <FormKit type="form" v-model="data" @submit="register">
      <FormKitSchema :schema="store.viewSchema" />
    </FormKit>
    <h2>Form Settings</h2>
    <SettingsEditForm v-for="f in store.settingsSchema" :form=f />
  </div>
</template>

<script lang="ts">
  import { FormKitSchema, FormKit } from "@formkit/vue";
  import AddTextInput from "./AddTextInput.vue";
  import AddCheckbox from "./AddCheckbox.vue";
  import { store } from "../store/store.js";
  import AddDateAndTime from "./AddDateAndTime.vue";
  import AddSelect from "./AddSelect.vue";
  import { $axios } from "../api/index";
  import SettingsEditForm from "./SettingsEditForm.vue";


  export default {
    data() {
      return {
        store,
        data: {},
      };
    },
    watch: {
      'store.viewSchema.length': {
        handler() {
          this.countSettingsSchema();
        },
      }
    },
    methods: {
      async register() {
        alert("The button pressed in settings has no effect.");
      },
      countSettingsSchema(){
        store.settingsSchema = [];
        for(let inp of store.viewSchema){
          const type = inp["$formkit"];
          const value = inp["value"];
          const label = inp["label"];
          const name = inp["name"];
          const vars = inp["options"];
          const validation = inp["validation"];
          store.settingsSchema.push({
            type: type,
            value: value,
            label: label,
            name: name,
            validation: validation,
            variants: vars,
          })
        }
      },
      async onFormCreate() {
        const res = await $axios.post("/settings", {
          viewSchema: store.viewSchema,
          settingsSchema: "",
        });
        this.store.viewSchema = JSON.parse(res.data.viewSchema);
        this.store.settingsId = res.data._id;
      },
    },
    components: {
      FormKitSchema,
      FormKit,
      AddTextInput,
      AddCheckbox,
      AddDateAndTime,
      AddSelect,
      SettingsEditForm
    },
  };
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.vertical {
  margin-left: 100px;
  display: flex;
  flex-direction: column;
}
</style>
