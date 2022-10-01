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
      <input placeholder="Варианты" :value="variants" @input="(event: any) => variants = event.target.value"/>
    </div>
    <div class="horizontal-layout">
      <input type="checkbox" id="isreq" :value="isRequired" @change="(event: any) => isRequired = event.target.checked"/>
      <label for="isreq">Обязательное</label>
    </div>
    <button @click="addDateAndTime">Добавить селект</button>
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
        variants: "",
      }
    },
    methods: {
      addDateAndTime() {
        let vars = this.variants.split(" ");
        let varsArr = [];
        for(let v of vars){
          if(v === this.def){
            varsArr.unshift(v);
          }
          else{
            varsArr.push(`${v}`);
          }
        }

        const input: any = {
          $formkit: "select",
          label: this.descr,
          name: this.name,
          value: this.def,
          options: varsArr,
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