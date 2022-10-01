<template>
    <h1>Dynamic RSVP form</h1>
    <div>
      <FormKit
        type="form"
        v-model="data"
        @submit="register"
      >
      <FormKitSchema :schema="store.viewSchema"/>
      </FormKit>
      <button @click="onRemoveRsvp">Удалить текущую заявку</button>
      <button @click="onPatchRsvp">Изменить текущую заявку</button>
      <h4>Id текущей заявки: {{store.rsvp._id}}</h4>
    </div>
</template>

<script lang="ts">
  import { FormKitSchema, FormKit } from '@formkit/vue'
  import {store} from "../store/store.js"
  import {$axios} from "../api/index";
  export default{
    data() {
      return{
        store,
        data: {}
      }
    },
    components: {
      FormKitSchema, FormKit
    },
    methods: {
      async register() {
        if(store.settingsId === '') return alert("Сначала необходимо сохранить форму");

        try{
        store.rsvp = (await $axios.post("/rsvps", {
          schema: store.settingsId,
          data: this.data,
        })).data.rsvp;
        store.viewSchema = JSON.parse(store.rsvp.schema.viewSchema);
        }
        catch(err){
          alert("Ошибка добавления RSVP");
        }
      },
      async onRemoveRsvp(){
        try{
          await $axios.delete(`/rsvps/${store.rsvp._id}`);
          alert("Успешно");
          store.rsvp = {};
        }
        catch(err){
          alert("Ошибка удаления");
        }
      },
      async onPatchRsvp() {
        try{
          store.rsvp.schema = store.settingsId;
          store.rsvp.data = this.data;
          await $axios.patch(`/rsvps`, {rsvp: store.rsvp});
        }
        catch(err){
          alert("Ошибка обновления");
        }
      },
      async onCompleteRsvp() {

      }
    },
  }
</script>


<style scoped>
  .form{
    display: flex;
    flex-direction: column;
  }
</style>