// pages/personal/personal.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    person: [
      { img: '../images/join.png', name: '已参加', url: '../personal/join' },
      { img: '../images/sign.png', name: '已报名', url: '../personal/sign' }
    ],
    openID:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userInfo: res.userInfo
        })
      }
    })
    //调用微信登录接口
    wx.login({
      success: function (res) {
        var OPEN_ID = ''//储存获取到openid  
        var SESSION_KEY = ''//储存获取到session_key 
        wx.request({
          //获取openid接口  
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data: {
            appid: "wxf4c32217ddcf74ea",
            secret: "32be3cf7270d1d93a3f1d4aba9c2ea27",
            js_code: res.code,
            grant_type: 'authorization_code'
          },
          method: 'GET',
          success: function (res) {
            OPEN_ID = res.data.openid;//获取到的openid  
            SESSION_KEY = res.data.session_key;//获取到session_key            
            that.setData({
              openID: res.data.openid
            })
            wx.request({
              url: 'http://199.231.208.242/ljctest1/lecture/login/' + OPEN_ID,
              method: 'POST',
            })
          }
        })
      }
    })
  },
  itemClick: function (res) {
    var id = res.currentTarget.id
    var openid = res.currentTarget.dataset.openid
    var url = this.data.person[id].url
    var nickname = res.currentTarget.dataset.nickname
    wx.navigateTo({
      url: url+'?openid='+openid+'&nickname='+nickname
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})