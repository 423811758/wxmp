// pages/component/pages/radio/radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      { value: 'USA', name: '美国' },
      { value: 'CHN', name: '中国', checked: 'true' },
      { value: 'BRA', name: '巴西' },
      { value: 'JPN', name: '日本' },
      { value: 'ENG', name: '英国' },
      { value: 'FRA', name: '法国' },
    ]
  },

  radioChange: function(e){
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var items = this.data.items;
    for (var i = 0; i < items.length; ++i) {
      items[i].checked = items[i].value == e.detail.value
    }
    this.setData({
      items: items
    })
  }
  
})