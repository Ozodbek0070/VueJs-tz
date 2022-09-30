<template>
  <nav class="navbar">
    <h3>vContact Web-ilovasi</h3>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">Aloqa sahifasi</router-link>
      </li>
      <li>
        <router-link to=""></router-link>
      </li>
      <li>
        <a href="#" @click.prevent="logout">Chiqish</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default {
  name:"TheNavbar",
  setup(){
    const store = useStore()
    const router = useRouter()

    function open(){
      store.commit('openSidebar')
    }

    return{
      store,
      open,
      logout:()=>{
        store.commit('auth/logout')
        router.push('/auth')
      }
    }
  }
}
</script>

<style scoped>

</style>