import {reqCategoryList,reqGetBannerList,reqFloorList} from '@/api'

const state = {
    //state中数据默认初始值别瞎写，服务器返回数组。【根据接口返回值初始化的】
    categoryList:[],
    bannerList:[],
    floorList:[]
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    }
};
const actions = {
    //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        // console.log(result);
        if(result.code == 200){
            commit("CATEGORYLIST",result.data)
        }
    },
    async getBannerList({commit}){
        let result = await reqGetBannerList()
        // console.log(result,"*******************8");
        if(result.code == 200){
            commit('GETBANNERLIST',result.data)
        }
    },
    //获取floor数据
    async getFloorList({commit}){
        let result = await reqFloorList();
        if(result.code == 200){
            commit("GETFLOORLIST",result.data)
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}