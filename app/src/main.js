import Vue from 'vue'
import App from './App.vue'

//引入swiper样式
import "swiper/css/swiper.css"

//引入全局组件
import TypeNav from './components/TypeNav/index.vue'
import Pagination from '@/components/Pagination/index.vue'
//测试
// import {reqCategoryList} from '@/api'
// reqCategoryList()
//引入仓库
import  store  from '@/store'
//引入MockServemks---mock数据
import '@/mock/mockServe'


Vue.component("TypeNav",TypeNav)
Vue.component("Pagination",Pagination)

Vue.config.productionTip = false
//引入路由
import router from '@/router'




new Vue({
  render: h => h(App),
  //注册路由: 底下的写法KV一至省略
  //注册路由信息：当这里书写router的时候，组件身上都拥有$route，$router属性
  router,
  //注册仓库:组件实例的身上多了一个属性$store属性
  store
}).$mount('#app')
