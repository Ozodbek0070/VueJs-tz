<template>
  <h2 v-if="requests.length === 0" class="text-center">Kontaktlar yo'q</h2>
  <table v-else>
    <thead>
      <tr>
        <th>#</th>
        <th>F.I.SH</th>
        <th>Telefon raqami</th>
        <th>Pochta manzili</th>
        <th>Status</th>
        <th>Batafsil</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(r, idx) of requests" :key="r.id">
        <td>{{ idx +1 }}</td>
        <td>{{ r.fish }}</td>
        <td>{{ r.phone }}</td>
        <td>{{ r.pochta }}</td>
        <td>
          <app-status :type="r.status"></app-status>
        </td>
        <td>
          <router-link
              v-slot="navigate"
              :to="{name:'Request', params:{id:r.id}}">
            <button class="btn" @click="navigate"> ko'rish </button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>

</template>

<script>
import {currency} from "@/utils/currency";
import AppStatus from "@/components/ui/AppStatus";
export default {
  props:["requests"],
  name: "RequestTable",
  components:{AppStatus},
  setup(){
    return{
      currency
    }
  }
}
</script>

<style scoped>

</style>