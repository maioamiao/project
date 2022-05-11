//当前这个模块：API进行统一管理
import requests from "./request";
import mockRequests from "./mockAjax";
//三级联动接口
//     get 无参数  /api/product/getBaseCategoryList
// console.log("111111");
//发请求：axios  发请求返回结果Promise对象
export const reqCategoryList = () =>requests({url:'/product/getBaseCategoryList',method:'get'});

export const reqGetBannerList = ()=>mockRequests.get('/banner')

//获取floor数据
export const reqFloorList = ()=> mockRequests.get('/floor')

//search
export const reqGetSearchInfo = (params)=>requests({url:"/list",method:"post",data:params})


//获取产品详情信息的接口
export const reqGoodsInfo = (skuId)=>({url:`/item/${skuId}`,method:'get'})