<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
  import {getAction} from '@/api/manage'
  export default {
    name: 'wzlh',
    data(){
      return{
        msg: ""
      }
    },
    methods: {
      hlh(){
        let url = "/hlh/wzlh/wztolh"
        getAction(url).then((res) => {
          if(res.success){
            this.msg = res.result;
          }
        })
      }
    },
    created() {
      this.hlh();
    }
  }
</script>

<style scoped>

</style>