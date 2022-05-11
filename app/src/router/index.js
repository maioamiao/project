//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter);

//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login';
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写push|replace  解决重复点击报错
//第一个参数：告诉原来的push方法，传递那些参数
//第二个参数：成功回调
//第三个参数：失败回调
//call  ||  apply 区别
//相同点：都可以调用一次函数，都可以篡改函数的上下文一次
//不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法用数组
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else {
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else {
        originReplace.call(this,location,()=>{},()=>{})
    }
}




//配置路由
export default new VueRouter({
    //配置路由
    routes : [
        {
            path: "/home",
            component : Home,
            meta:{show:true}
        },
        {
            path: "/search/:keyword?",
            name:"search",
            component : Search,
            meta:{show:true}
        },
        {
            path: "/login",
            component : Login,
            meta:{show:false}
        },
        {
            path: "/register",
            component : Register,
            meta:{show:false}
        },
        {
            path:'/',
            redirect: "/home"
        },
        {
            path: "/detail/:skuid",
            component : Detail
        },
    ],
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {y:0}
    }
})