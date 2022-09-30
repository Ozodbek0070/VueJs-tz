<template>
  <form @submit.prevent="onSubmit">
    <div :class="['form-control', {'invalid':fError}]">
      <label for="fish">F.I.Sh</label>
      <input type="text" id="fish" v-model="fish" placeholder="Sheraliyev Bo'rivoy Arslonbekovich" @blur="fBlur">
      <small v-if="fError">{{fError}}</small>
    </div>

    <div :class="['form-control', {'invalid':pError}]">
      <label for="phone">Telefon raqam</label>
      <input type="number" id="phone" v-model="phone" placeholder="+998 97 007 07 07" @blur="pBlur">
      <small v-if="pError">{{pError}}</small>
    </div>

    <div :class="['form-control', {'invalid':sError}]">
      <label for="pochta">Email pochta</label>
      <input type="email" id="pochta" v-model="pochta" placeholder="sheraliyev11@gmail.com" @blur="sBlur">
      <small v-if="sError">{{sError}}</small>
    </div>

    <div class="form-control">
      <label for="status">Status</label>
      <select id="status" v-model="status">
        <option value="done">Ish</option>
        <option value="cancelled">Oila</option>
        <option value="active">Do'stlar</option>
        <option value="sending">Qarindoshlar</option>
      </select>
    </div>
      <button class="btn primary">Qo'shish</button>
  </form>
</template>

<script>
import {useRequestForm} from "@/use/request-Form";
import {useStore} from "vuex";

export default {
  emits:["created"],
  name: "RequestModal",
  setup(_, {emit}){
    const store = useStore()
    const submit = async values =>{
      await store.dispatch("request/create", values)
      emit("created")
    }
    return{
      ...useRequestForm(submit)
    }
  }
}
</script>

<style scoped>

</style>