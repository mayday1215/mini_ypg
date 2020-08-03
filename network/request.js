export const request = (config) => {
  wx.showLoading({
    title: '加载中',
    mask:true
  })
    
  const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1"
  return new Promise((resolve,reject) => {
    wx.request({
      url: baseUrl+config.url,
      data:config.data || {},
      method:config.method,
      success:(res) => {
        resolve(res.data)
      },
      complete(){
        wx.hideLoading()
      }
    })
  })
  
}