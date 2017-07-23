// pages/component/pages/picker/picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['中国', '美国', '英国', '巴基斯坦'],
    index: 0,
    date: '2017-07-23',
    time: '12:01',
  },
  bindPickerChange: function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function(e){
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  }

})