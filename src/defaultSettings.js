/**
 * 项目默认配置项
 * primaryColor - 默认主题色
 * navTheme - sidebar theme ['dark', 'light'] 两种主题
 * colorWeak - 色盲模式
 * layout - 整体布局方式 ['sidemenu', 'topmenu'] 两种布局
 * fixedHeader - 固定 Header : boolean
 * fixSiderbar - 固定左侧菜单栏 ： boolean
 * autoHideHeader - 向下滚动时，隐藏 Header : boolean
 * contentWidth - 内容区布局： 流式 |  固定
 *
 * storageOptions: {} - Vue-ls 插件配置项 (localStorage/sessionStorage)
 *
 */

export default {
  primaryColor: '#1890FF', // primary color of ant design 默认主题色
  navTheme: 'light', // theme for nav menu  主题
  layout: 'sidemenu', // nav menu position: sidemenu or topmenu 整体布局方式
  contentWidth: 'Fixed', // layout of content: Fluid or Fixed, only works when layout is topmenu  内容区布局： 流式 |  固定
  fixedHeader: false, // sticky header  固定 Header : boolean
  fixSiderbar: false, // sticky siderbar  固定左侧菜单栏 ： boolean
  autoHideHeader: false, //  auto hide header 向下滚动时，隐藏 Header : boolean
  colorWeak: false, //色盲模式
  multipage: true, //默认多页签模式
  // Vue-ls第三步：vue-ls 配置
  storageOptions: {
    namespace: 'pro__', // key prefix：键的前缀（随便起）
    name: 'ls', // name variable Vue.[ls] or this.[$ls]：变量名称（随便起） 使用方式：Vue.变量名称 或 this.$变量名称
    storage: 'local', // storage name session, local, memory：作用范围：local、session、memory
  }
}