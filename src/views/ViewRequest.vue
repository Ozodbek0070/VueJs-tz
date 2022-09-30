<template>
  <app-loader v-if="loading"></app-loader>
  <app-page title="Kontaktni ko'rish" v-else-if="request"  back>
    <p><strong>F.I.SH</strong> : {{request.fish}}</p>
    <p><strong>TELEFON</strong> : {{request.phone}}</p>
    <p><strong>STATUS</strong> : <app-status :type="request.status"></app-status></p>
    <div class="form-control">
      <label for="status">Statusni o'zgartirish</label>
      <select id="status" v-model="status">
        <option value="done">Ish</option>
        <option value="cancelled">Oila</option>
        <option value="active">Do'stlar</option>
        <option value="sending">Qarindoshlar</option>
      </select>
    </div>
    <button class="btn danger" @click="remove">O'chirish</button>
    <button class="btn" @click="update" v-if="hasChange">O'zgartirish</button>
  </app-page>
  <h3 v-else class="text-center text-white">Bunday ID {{$route.params.id}} lik kontakt bazadan topilmadi!</h3>
</template>

<script>
import {ref, onMounted, computed} from 'vue'
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import {useRouter} from "vue-router";
import AppPage from "@/components/ui/AppPage";
import AppStatus from "@/components/ui/AppStatus";
import AppLoader from "@/components/ui/AppLoader";
import {currency} from "@/utils/currency";

export default {
  setup(){
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const loading = ref(true)
    const request = ref({})
    const status = ref()

    onMounted(async ()=>{
      loading.value = true
      request.value = await store.dispatch('request/loadById', route.params.id)
      status.value = request.value.status
      loading.value = false
    })
    const hasChange = computed(()=> request.value.status !== status.value)

    const remove = async ()=>{
      await store.dispatch("request/remove", route.params.id)
      router.push('/')
    }

    const update = async ()=>{
      const data = {...request.value, status:status.value, id:route.params.id}
      await store.dispatch("request/update", data)
      request.value.status = status.value
    }

    return {
      request,
      currency,
      loading,
      remove,
      update,
      status,
      hasChange,
    }
  },
  components:{
    AppStatus,
    AppPage,
    AppLoader,
  }
}
</script>


<!--######## #### ########  ######## ########     ###     ######  ########-->
<!--##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##-->
<!--######    ##  ########  ######   ########  #########  ######  ######-->
<!--##        ##  ##    ##  ##       ##     ## ##     ##       ## ##-->
<!--##       #### ##     ## ######## ########  ##     ##  ######  ########-->