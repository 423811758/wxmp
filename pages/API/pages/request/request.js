// pages/API/pages/request/request.js
var requestUrl = require("../../../../config").requestUrl
var duration = 2000
Page({
  makeRequest: function(e){
    var self = this
    self.setData({
      loading: true
    })
    wx.request({
      url: requestUrl,
      data: { noncestr: Date.now()},
      success: function(result){
        wx.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true,
          duration: duration,
        })
        console.log('request success', result)
        self.setData({
          loading: false
        })
      },
      fail: function(errMsg){
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    })
  }
})