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
    ]
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
        console.log(res.userInfo)
      }
    })
  },
  itemClick: function (res) {
    var id = res.currentTarget.id
    var url = this.data.person[id].url
    wx.navigateTo({
      url: url
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})