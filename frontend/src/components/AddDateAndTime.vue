<template>
  <div class="wrapper">
    <div class="horizontal-layout">
      <input placeholder="Название" :value="name" @input="(event: any) => name = event.target.value"/>
    </div>
    <div class="horizontal-layout">
      <input placeholder="Описание" :value="descr" @input="(event: any) => descr = event.target.value"/>
    </div>
    <div class="horizontal-layout">
      <input placeholder="Стандартное значение" :value="def" @input="(event: any) => def = event.target.value"/>
    </div>
    <div class="horizontal-layout">
      <input type="checkbox" id="isreq" :value="isRequired" @change="(event: any) => isRequired = event.target.checked"/>
      <label for="isreq">Обязательное</label>
    </div>
    <button @click="addDateAndTime">Добавить  дату и время</button>
  </div>
</template>

<script lang="ts">
  import {store} from "../store/store.js"

  export default {
    data() {
      return {
        store,
        descr: "",
        name: "",
        isRequired: false,
        def: "",
      }
    },
    methods: {
      addDateAndTime() {
        const input: any = {
          $formkit: "date",
          label: this.descr,
          name: this.name,
          value: this.def,
          validation: this.isRequired ? "required" : "",
        }
        store.viewSchema.push(input);
      }
    }
  }
</script>

<style scoped>
  .wrapper{
    display: flex;
    border: 1px solid black;
    margin: 10px;
  }
  .horizontal-layout{
    display: flex;
  }
</style>