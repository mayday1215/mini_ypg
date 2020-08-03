// pages/category/category.js
import {reqCategories} from "../../network/api"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateAll:[],
    cateLeftData:[],
    cateRightData:[],
    activeIndex:0,
    scrollTop:0
  },
  //点击左侧每一项
  leftItemClick(e){
    console.log(e)
    const {index} = e.currentTarget.dataset
    this.setData({
      activeIndex:index,
      cateRightData:this.data.cateAll[index].children,
      scrollTop:0
    })

  },
  //获取分类数据
  async getCateData(){
    const res = await reqCategories()
    console.log(res)
    const {message,meta} = res
    if(meta.status === 200){
      this.setData({
        cateLeftData: message.map(item => ({cat_id:item.cat_id,cat_name:item.cat_name})),
        cateRightData:message[0].children,
        cateAll:message
      })
      
    }
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCateData()
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