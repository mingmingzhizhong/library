// pages/lecture/lecture.js
var WxParse = require('../../wxParse/wxParse.js');
var Base64 = require("../../utils/js-base64/base64.modified.js")
var common = require("../../utils/common.js")  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lecture:{},
    can_sign: 0,
    openID: '', 
    message: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var openid = options.openid
    
    wx.request({
      url: 'http://199.231.208.242/ljctest1/lecture/',
      data: {
        nid: options.id,
        openID: options.openid
      },
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        "Authorization": "Basic " + Base64.encode(options.openid + ":" + options.openid)
      },
      success: function (res) {
        var lecture = res.data
        var article = res.data[0].introduce;
        WxParse.wxParse('article', 'html', article, that, 5);
        that.setData({
          lecture: res.data[0],
          can_sign:res.data[0].is_expired,
          openID:openid
        })
      }
    })
    

  /*  that.setData({
      can_sign: can_sign
    })*/
  },

  sign: function(e){
    wx.request({
      url: "http://199.231.208.242/ljctest1/order_lecture/" ,
      data: {
        nid: e.target.id,
        openID: e.target.dataset.openid,
      },
      method: 'GET', 
      success: function (res) {
        var state = res.data.error
        wx.showModal({
          title: '',
          content: res.data.message,
          showCancel:false
        })
      }
    })
    
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})