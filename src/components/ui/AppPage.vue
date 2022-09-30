<template>
  <div class="breadcrumbs" v-if="back">
    <router-link to="/" class="text-white">Aloqa sahifasiga qaytish</router-link>
  </div>
  <div class="card">
    <h1 class="card-title">{{ title }} <slot name="header"></slot></h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      required:true
    },
    back:{
      type:Boolean,
      default:false
    }
  },
  name: "AppPage",
  setup(props){
    document.title = `${props.title} | vContact`
  }
}
</script>

<style scoped>

</style>