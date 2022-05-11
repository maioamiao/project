import { reqGetSearchInfo } from "@/api";

const state = {
    searchList :{}
};
const mutations = {
    GETSEACHLIST(state,searchList){
        state.searchList = searchList
    }
};
const actions = {
    async getSearchList({commit},params={}){
        //当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数（空对象）
        //params形参：是当前用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params);
        if( result.code == 200 ){
            commit("GETSEACHLIST",result.data)
        }
    }
};
const getters = {
    goodsList(state){
        return state.searchList.goodsList;
    },
    attrsList(state){
        return state.searchList.attrsList
    },
    trademarkList(state){
        return state.searchList.trademarkList
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}