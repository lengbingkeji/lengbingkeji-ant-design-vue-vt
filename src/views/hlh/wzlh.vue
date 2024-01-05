<template>
  <div>
    {{ msg }}
    {{ msg }}
  </div>
</template>

<script>
  import {getAction} from '@/api/manage'
  export default {
    name: 'wzlh',
    data(){
      return{
        msg: "",
        url: "/hlh/wzlh/wztolh"
      }
    },
    methods: {
      hlh(){
        //let url = "/hlh/wzlh/wztolh"
        getAction(this.url).then((res) => {
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