import { reqGoodsInfo } from "@/api"

const state = {
    goodInfo:{}
}
const mutations = {
    GETGOODINFO(state,goodInfo){
        console.log("mutations===========");
        state.goodInfo = goodInfo
    }
}
const actions = {
    //获取产品信息的action
    
    async getGoodInfo({commit},skuId){
        console.log("actions==========",skuId);
        let result = await reqGoodsInfo(skuId)
        console.log(result,"==========");
        if(result.code ==200){
            
            commit("GETGOODINFO",result.data)
        }
    }
}
const getters = {}
export default{
    state,
    mutations,
    actions,
    getters
}