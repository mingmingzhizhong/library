var app = getApp()
var Base64 = require("../../utils/js-base64/base64.modified.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "lectures":[],
    "length": '',
    "nickname":''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://199.231.208.242/ljctest1/personal/order_list',
      data: {
        openID: options.openid
      },
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        "Authorization": "Basic " + Base64.encode(options.openid + ":" + options.openid)
      },
      success: function (res) {
        that.setData({
          lectures: res.data,
          length: res.data.length,
          nickname: options.nickname
        })
      }
    })
  },
  qrcode: function (res){
    wx.navigateTo({
      url: 'qrcode?title=' + res.currentTarget.dataset.title + '&nickname=' + res.currentTarget.dataset.nickname,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})