// pages/component/pages/label/label.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkboxItems:[
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' }
    ],
    radioItems:[
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' }
    ],
    hidden: false
  },
  checkboxChange: function(e){
    var checked = e.detail.value
    var changed = {}
    for(var i = 0; i < this.data.checkboxItems.length; ++i){
      if(checked.indexOf(this.data.checkboxItems[i].name) !== -1){
        changed['checkboxItems['+ i +'].checked'] = true
      } else {
        changed['checkboxItems['+ i +'].checked'] = false
      }
    }
    this.setData(changed)
  },
  radioChange: function(e){
    var checked = e.detail.value
    var changed = {}
    for(var i = 0; i < this.data.radio.length; ++i){
      if(checked.indexOf(this.data.radioItems[i].name) !== -1){
        changed['radioItems['+ i + '].checked'] = true
      } else {
        changed['radioItems['+ i + '].checked'] = false
      }
    }
    this.setData(chaged)
  },
  tapEvent: function(e){
    console.log("按钮点击")
  }

})