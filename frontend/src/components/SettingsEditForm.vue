<template>
  <div class="wrapper">
    <h5>Поле: {{form.type}} Имя: {{form.name}} Описание: {{form.label}}</h5>
    <div>
      <input placeholder="Название" :value="name" @input="(event: any) => name = event.target.value"/>
    </div>
    <div>
      <input placeholder="Описание" :value="descr" @input="(event: any) => descr = event.target.value"/>
    </div>
    <div>
      <input placeholder="Стандартное значение" :value="def" @input="(event: any) => def = event.target.value"/>
    </div>
    <div>
      <input placeholder="Варианты(для select)" :value="vars" @input="(event: any) => vars = event.target.value"/>
    </div>
    <div>
      <input type="checkbox" id="isreq" :checked="isreq" @change="(event: any) => isreq = event.target.checked"/>
      <label for="isreq">Обязательное</label>
    </div>
    <div>
    <button @click="changeFormElement">Изменить</button>
    <button @click="removeFormElement">Удалить</button>
    </div>
  </div>
</template>

<script lang="ts">
  import {store} from "../store/store";

  export default{
    props: {
      form: {},
    },
    data(){
      return{
        store,
        name: this.form.name,
        descr: this.form.label,
        def: this.form.value,
        vars: this.form.variants,
        isreq: this.form.validation === "required",
      }
    },
    methods: {
      changeFormElement() {
        for(let f of this.store.viewSchema){
          if(f.$formkit === this.form.type && f.value === this.form.value && f.label === this.form.label){
            console.log(f);
            f.label = this.descr;
            f.value = this.def;
            f.name = this.name;
            f.validation = this.isreq ? "required" : ""

            if(this.form.type === "select"){
              let vars = this.vars.split(",");
              let varsArr = [];
              for(let v of vars){
                if(v === this.def){
                  varsArr.unshift(v);
                }
                else{
                  varsArr.push(`${v}`);
                }
              }
              f.options = varsArr;
            }
          }
        }
      },
      removeFormElement(){

      }
    }
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
  }
</style>