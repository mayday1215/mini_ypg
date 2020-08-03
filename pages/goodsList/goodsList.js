// pages/goodsList/goodsList.js
import { reqGoodsList } from "../../network/api"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsParams: {
      query: '',//查询参数
      cid: '', //分类id
      pagenum: 1, //第几页
      pagesize: 10 //每页大小
    },
    goodsList: [], //商品列表
    total: 0,//商品总条数
    type: 'compre' //compre 综合  sales 销量  price 价格 
  },
  //点击每一项商品
  itemClick(e){
    const {goods_id} = e.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/detail/detail?goods_id='+goods_id,
    })
  },

  //每一项发生变化
  change(e) {
    switch (e.detail.index) {
      case 0:
        this.setData({ type: 'compre' })
        break
      case 1:
        this.setData({ type: 'sales' })
        break
      case 2:
        this.setData({ type: 'price' })
        break
    }
  },
  //获取商品列表 
  async getGoodsList() {
    const res = await reqGoodsList(this.data.goodsParams)
    const { meta, message } = res
    const {type} = this.data
    if (meta.status === 200) {
      this.setData({
        goodsList: [...this.data.goodsList, ...message.goods],
        total: message.total
      })
     }
      wx.stopPullDownRefresh()
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.goodsParams.cid = options.cid
    this.getGoodsList()
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("下拉刷新")
    const pageNum = 'goodsParams.pagenum'
    this.setData({
      goodsList:[],
      [pageNum]:1
    })
    this.getGoodsList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let { pagenum, pagesize } = this.data.goodsParams
    const { total } = this.data
    pagenum++
    if(pagenum> Math.ceil(total / pagesize) ){
      wx.showToast({
        title: '没有更多数据',
        icon:'none'
      })
      return
    }
    const pageNum = 'goodsParams.pagenum'
    this.setData({
      [pageNum]: pagenum
    })
    this.getGoodsList()
  },


})