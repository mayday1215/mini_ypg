import {request} from "./request"
//请求轮播图数据
export const reqSwiperData = () => request({url:'/home/swiperdata',method:'get'})

//请求导航数据
export const reqCatitems = () => request({url:'/home/catitems',method:'get'})

//请求楼层数据/home/floordata
export const reqFloorList = () => request({url:'/home/floordata',method:'get'})

//分类数据/categories
export const reqCategories = () => request({url:'/categories',method:'get'})

//商品列表/goods/search
export const reqGoodsList = (data) => request({url:'/goods/search',method:'get',data})

//商品详情goods/detail
export const reqGoodsDeatil = (goods_id) => request({url:'/goods/detail',method:'get',data:{goods_id}})
