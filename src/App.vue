<template>
  <!-- ConfigProvider 全局化配置：为组件提供统一的全局化配置，只需在应用外围包裹一次即可全局生效 -->
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view/>
    </div>
  </a-config-provider>
</template>
<script>
  import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
  import enquireScreen from '@/utils/device'
  import { version } from 'ant-design-vue'

  export default {
    data () {
      return {
        locale: zhCN, //设置为中文
      }
    },
    created () {
      let that = this
      //切换手机端或是桌面端时，触发
      enquireScreen(deviceType => {
        console.log('deviceType 的值（手机端为0或1，桌面端为-1）:', deviceType)
        // tablet
        if (deviceType === 0) {
          //手机端时，触发
          that.$store.commit('TOGGLE_DEVICE', 'mobile')
          that.$store.dispatch('setSidebar', false)
        }
        // mobile
        else if (deviceType === 1) {
          //手机端时，触发
          that.$store.commit('TOGGLE_DEVICE', 'mobile')
          that.$store.dispatch('setSidebar', false)
        }
        else {
          //桌面端时，触发
          that.$store.commit('TOGGLE_DEVICE', 'desktop')
          that.$store.dispatch('setSidebar', true)
        }

      })
    }
  }
</script>
<style>
  #app {
    height: 100%;
  }
</style>