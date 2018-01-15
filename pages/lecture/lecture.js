// pages/lecture/lecture.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  /*  lecture:{img_url: "../images/banner.jpg", 
    title: "讲座主题一", 
    presenter: "主讲人1", 
    date: "2018-01-20", 
    address: "讲座地点", 
    introduce: "简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容"}, */
    lecture:{},
    can_sign: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  //  var can_sign=options.id
    var that = this
    var WxParse = require('../../wxParse/wxParse.js');
    wx.request({
      url: 'http://199.231.208.242/ljctest1/lecture/' + options.id,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var lecture = res.data
        var article = res.data[0].introduce;
        WxParse.wxParse('article', 'html', article, that, 5);
        that.setData({
          lecture: res.data[0],
          can_sign:res.data[0].is_expired
        })
        
      }
    })
  /*  that.setData({
      can_sign: can_sign
    })*/
  },

  sign: function(e){
    console.log("已点击报名")
    wx.showToast({
      title: '已成功报名',
      icon: 'success',
      duration: 2000
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})