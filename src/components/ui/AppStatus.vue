<template>
  <span :class="['badge',className]">{{text}}</span>
</template>

<script>
import {ref, watch} from "vue";

export default {
  props:{
    'type':{
      type: String,
      required: true,
      validator(value){
        return ['done', 'cancelled', 'active', 'sending'].includes(value)
      }
    }
  },
  name: "AppStatus",
  setup(props){
    const classesMap = {
      done:'ish',
      cancelled:'oila',
      active:"do'stlar",
      sending:'qarindoshlar',
    }
    const textMap = {
      done:'ish',
      cancelled:'oila',
      active:"do'stlar",
      sending:'qarindoshlar',
    }

    watch(props, (val)=> {
      className.value = classesMap[val.type]
      text.value = textMap[val.type]
    })

    const className = ref(classesMap[props.type])
    const text =  ref(textMap[props.type])

    return {
      className,
      text
    }
  }
}
</script>

<style scoped>

</style>