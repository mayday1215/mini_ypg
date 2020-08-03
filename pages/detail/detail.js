// pages/detail/detail.js
import { reqGoodsDeatil } from "../../network/api"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetail: {},  //商品详情
    preSwiperArr: [] //预览图片列表
  },
  //添加购物车
  addCart(){
    const goods = this.data.goodsDetail
    const cartList = wx.getStorageSync("cartList") || []
    
    if(cartList.length > 0){
      //有数据

      const index = cartList.findIndex(item => item.goods_id === goods.goods_id)
      if(index !== -1){
        //表示购物车里面有该商品了
        cartList[index].count++
      }else{
        //没有该商品
        goods.count = 1
        cartList.push(goods)
      }
    }else{
      //没数据
      goods.count = 1
      cartList.push(goods)
    }
    wx.setStorageSync('cartList', cartList)

    //const boo = cartList.some(item = item.goods_id === this.data.goodsDetail.goods_id)
  
    

    

    
  },

  //点击购物车跳转过去
  toCart(){
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  //点击轮播图预览
  swiperItemClick(e) {
    const {index} = e.currentTarget.dataset
    wx.previewImage({
      current: this.data.preSwiperArr[index], // 当前显示图片的http链接
      urls: this.data.preSwiperArr // 需要预览的图片http链接列表
    })
  },

  //获取商品详情
  async getGoodsDetail(goods_id) {
    const res = await reqGoodsDeatil(goods_id)
    const { message, meta } = res
    if (meta.status === 200) {
      const imgs = message.pics.map(item => item.pics_mid)
      message.goods_introduce = message.goods_introduce.replace(/\.webp/g,".jpg")
      this.setData({ goodsDetail: message, preSwiperArr: imgs })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { goods_id } = options
    this.getGoodsDetail(goods_id)

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