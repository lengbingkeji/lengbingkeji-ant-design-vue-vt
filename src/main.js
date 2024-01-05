/** init domain config */
import './config'

import Vue from 'vue'
import App from './App.vue'
// Vue-ls 是 Vue 的一个插件，用于操作Local Storage(本地存储)、Session Storage(会话存储)、Memory(内存存储)。在defaultSettings.js配置
// Vue-ls第一步：导入
import Storage from 'vue-ls'
import router from './router'
import store from './store/'
import { VueAxios } from "@/utils/request"

require('@jeecg/antd-online-mini')
require('@jeecg/antd-online-mini/dist/OnlineForm.css')

import Antd, { version } from 'ant-design-vue'
console.log('ant-design-vue 版本:', version)

import Viser from 'viser-vue'
import 'ant-design-vue/dist/antd.less';  // or 'ant-design-vue/dist/antd.less'

import '@/permission' // permission control
import '@/utils/filter' // base filter
import Print from 'vue-print-nb-jeecg'
/*import '@babel/polyfill'*/
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import SSO from '@/cas/sso.js'
import {
  ACCESS_TOKEN,
  DEFAULT_COLOR,
  DEFAULT_THEME,
  DEFAULT_LAYOUT_MODE,
  DEFAULT_COLOR_WEAK,
  SIDEBAR_TYPE,
  DEFAULT_FIXED_HEADER,
  DEFAULT_FIXED_HEADER_HIDDEN,
  DEFAULT_FIXED_SIDEMENU,
  DEFAULT_CONTENT_WIDTH_TYPE,
  DEFAULT_MULTI_PAGE
} from "@/store/mutation-types"
import config from '@/defaultSettings'

import JDictSelectTag from './components/dict/index.js'
import hasPermission from '@/utils/hasPermission'
import vueBus from '@/utils/vueBus';
import JeecgComponents from '@/components/jeecg/index'
import '@/assets/less/JAreaLinkage.less'
import VueAreaLinkage from 'vue-area-linkage'
import '@/components/jeecg/JVxeTable/install'
import '@/components/JVxeCells/install'
//表单验证
import { rules } from '@/utils/rules'
Vue.prototype.rules = rules
Vue.config.productionTip = false
// Vue-ls第二步：注册
Vue.use(Storage, config.storageOptions)
Vue.use(Antd)
Vue.use(VueAxios, router)
Vue.use(Viser)
Vue.use(hasPermission)
Vue.use(JDictSelectTag)
Vue.use(Print)
Vue.use(preview)
Vue.use(vueBus);
Vue.use(JeecgComponents);
Vue.use(VueAreaLinkage);

SSO.init(() => {
  main()
})
function main() {
  new Vue({
    router,
    store,
    mounted () {
      // Vue-ls第四步：使用 参考网址：https://blog.csdn.net/CEZLZ/article/details/108147697
      // 1、Global全局使用方式：Vue.ls  2、Context上下文使用方式：this.$ls
      // 3、API:
      //      一、Vue.ls.get (name, def)  作用：获取存储中的 key
      //        name：要获取的 key；
      //        def：默认为 null。如果 key 不存在，则返回 def。
      //
      //      二、Vue.ls.set (name, value, expire)  作用：设置一个 key，并且可以设置有效时间。
      //        expire：默认为 null。name 的有效时间，单位为毫秒。
      //        如：
      //          this.$ls.set('age', 22)   // age 的有效时间为永久，除非自动清除
      //          this.$ls.set('name', 'lengbingkeji', 3000)// name 的有效时间为 3s，3s 后为 null
      //
      //      三、Vue.ls.remove (name) 作用：从存储中删除某一个 key，成功返回 true，否则返回 false。
      //        如：const age = this.$ls.remove('age')    // undefined：不管删除成功还是删除失败都会返回 undefined，和官方解析不一样，不知道为什么？？
      //
      //      四、Vue.ls.clear ( )  作用：清空所有 key。
      //
      //      五、Vue.ls.on (name, callback)  作用：设置侦听器，监听 key，若发生变化时，就会触发回调函数 callback。
      //        callback 接受三个参数：
      //          newValue：存储中的新值
      //          oldValue：存储中的旧值
      //          url：修改来自选项卡的 url
      //
      //      六、Vue.ls.off (name, callback) 作用：删除设置的侦听器
      store.commit('SET_SIDEBAR_TYPE', Vue.ls.get(SIDEBAR_TYPE, true))
      store.commit('TOGGLE_THEME', Vue.ls.get(DEFAULT_THEME, config.navTheme))
      store.commit('TOGGLE_LAYOUT_MODE', Vue.ls.get(DEFAULT_LAYOUT_MODE, config.layout))
      store.commit('TOGGLE_FIXED_HEADER', Vue.ls.get(DEFAULT_FIXED_HEADER, config.fixedHeader))
      store.commit('TOGGLE_FIXED_SIDERBAR', Vue.ls.get(DEFAULT_FIXED_SIDEMENU, config.fixSiderbar))
      store.commit('TOGGLE_CONTENT_WIDTH', Vue.ls.get(DEFAULT_CONTENT_WIDTH_TYPE, config.contentWidth))
      store.commit('TOGGLE_FIXED_HEADER_HIDDEN', Vue.ls.get(DEFAULT_FIXED_HEADER_HIDDEN, config.autoHideHeader))
      store.commit('TOGGLE_WEAK', Vue.ls.get(DEFAULT_COLOR_WEAK, config.colorWeak))
      store.commit('TOGGLE_COLOR', Vue.ls.get(DEFAULT_COLOR, config.primaryColor))
      store.commit('SET_TOKEN', Vue.ls.get(ACCESS_TOKEN))
      store.commit('SET_MULTI_PAGE',Vue.ls.get(DEFAULT_MULTI_PAGE,config.multipage))
    },
    render: h => h(App)
  }).$mount('#app')
}