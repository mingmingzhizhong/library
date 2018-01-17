// pages/lecture/lecture.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lecture:{},
    can_sign: 0,
    openid:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  //  var can_sign=options.id
    var that = this
    var openid = options.openid
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
          can_sign:res.data[0].is_expired,
          openid:openid
        })
        console.log(res.data[0])
      }
    })
  /*  that.setData({
      can_sign: can_sign
    })*/
  },

  sign: function(e){
    console.log(e)
    
    wx.request({
      url: "http://199.231.208.242/ljctest1/order_lecture/" + e.target.id + "/" + e.target.dataset.openid,
      data: {},
      method: 'GET', 
      success: function (res) {
        console.log(res)
        console.log("已点击报名")
        wx.showToast({
          title: '已成功报名',
          icon: 'success',
          duration: 2000
        })
      },
      fail:function(){
        console.log("报名失败")
      }
    })
    
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})