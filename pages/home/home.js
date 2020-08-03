// pages/home/home.js
import {reqSwiperData,reqCatitems,reqFloorList} from "../../network/api"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[], //轮播图列表
    catitemList:[], //导航列表
    floorList:[] //楼层列表
  },
  //请求楼层数据
  async getFloorList () {
    const res = await reqFloorList()
    const {meta,message} = res
    if(meta.status === 200) {
      this.setData({
        floorList:message
      })
    }
    console.log(res)
  },
  //获取导航列表
  async getCatitemList(){
    const res = await reqCatitems()
    const {meta,message} = res
    if(meta.status === 200) {
      this.setData({
        catitemList:message
      })
    }
  },
  // 获取轮播图数据
  async getSwiperList (){
    const res = await reqSwiperData()
    const {meta,message} = res
    if(meta.status === 200) {
      this.setData({
        swiperList:message
      })
    }
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList()
    this.getCatitemList()
    this.getFloorList()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})