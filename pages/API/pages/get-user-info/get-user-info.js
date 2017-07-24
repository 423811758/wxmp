// pages/API/pages/get-user-info/get-user-info.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: false
  },
  getUserInfo: function(e){
    var that = this
    if(app.globalData.hasLogin == false){
      wx.login({
        success: _getUserInfo
      })
    } else {
      _getUserInfo()
    }

    function _getUserInfo(){
      wx.getUserInfo({
        success: function(res){
          that.setData({
            hasUserInfo: true,
            userInfo: res.userInfo
          })
          that.update()
        }
      })
    }
  },

  clear: function(e){
    this.setData({
      hasUserInfo: false,
      userInfo: {}
    })
  }

})