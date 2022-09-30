<template>
  <div class="filter">
    <div class="form-control" >
      <input type="text" placeholder="Familiya yoki ismni kiriting" v-model="name">
    </div>
    <div class="form-control">
      <select v-model="status">
        <option selected disabled >Tanlang...</option>
        <option value="done">Ish</option>
        <option value="cancelled">Oila</option>
        <option value="active">Do'stlar</option>
        <option value="sending">Qarindoshlar</option>
      </select>
    </div>
    <div class="form-control">
      <button v-if="isActive" class="btn warning" @click="reset">Tozalash</button>
    </div>
  </div>
</template>

<script>
import {ref, watch, computed} from "vue";

export default {
  emits:['update:modelValue'],
  props:['modelValue'],
  setup(props, {emit}){
    const name = ref()
    const status = ref()
    const isActive = computed(()=>name.value || status.value)

    watch([name, status], (values)=>{
      emit('update:modelValue', {
        name:values[0],
        status:values[1]
      })
    })

    return{
      name,
      status,
      isActive,
      reset : ()=>{
        name.value = ''
        status.value = null
      }
    }
  }
}
</script>

<style scoped>

</style>