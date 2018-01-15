var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lectures: [
      { id: 1, img_url: "../images/wangtianyi.jpg", title: "主题1", presenter: "主讲人1", date: "2018-01-20", is_expired: 0, join: 1,qrcode:"../images/qrcode.png" },
      { id: 2, img_url: "../images/wangtianyi.jpg", title: "主题2", presenter: "主讲人2", date: "2018-01-20", is_expired: 0, join: 0, qrcode: "../images/qrcode.png" },
      { id: 3, img_url: "../images/wangtianyi.jpg", title: "主题3", presenter: "主讲人3", date: "2018-01-20", is_expired: 0, join: 0, qrcode: "../images/qrcode.png" },
      { id: 4, img_url: "../images/wangtianyi.jpg", title: "主题4", presenter: "主讲人4", date: "2018-01-20", is_expired: 0, join: 1, qrcode: "../images/qrcode.png" },
      { id: 5, img_url: "../images/wangtianyi.jpg", title: "主题5", presenter: "主讲人5", date: "2018-01-20", is_expired: 0, join: 1, qrcode: "../images/qrcode.png" },
      { id: 6, img_url: "../images/wangtianyi.jpg", title: "主题6", presenter: "主讲人6", date: "2018-01-20", is_expired: 0, join: 0, qrcode: "../images/qrcode.png" },
      { id: 7, img_url: "../images/wangtianyi.jpg", title: "主题7", presenter: "主讲人7", date: "2018-01-20", is_expired: 0, join: 1, qrcode: "../images/qrcode.png" },
      { id: 8, img_url: "../images/wangtianyi.jpg", title: "主题8", presenter: "主讲人8", date: "2018-01-20", is_expired: 0, join: 0, qrcode: "../images/qrcode.png" },
      { id: 9, img_url: "../images/wangtianyi.jpg", title: "主题9", presenter: "主讲人9", date: "2018-01-20", is_expired: 0, join: 1, qrcode: "../images/qrcode.png" },
      { id: 10, img_url: "../images/wangtianyi.jpg", title: "过主题1", presenter: "主讲人1", date: "2018-01-20", is_expired: 1, join: 0, qrcode: "../images/qrcode.png" },
      { id: 11, img_url: "../images/wangtianyi.jpg", title: "过主题2", presenter: "主讲人2", date: "2018-01-20", is_expired: 1, join: 1, qrcode: "../images/qrcode.png" },
      { id: 12, img_url: "../images/wangtianyi.jpg", title: "过主题3", presenter: "主讲人3", date: "2018-01-20", is_expired: 1, join: 0, qrcode: "../images/qrcode.png" },
      { id: 13, img_url: "../images/wangtianyi.jpg", title: "过主题4", presenter: "主讲人4", date: "2018-01-20", is_expired: 1, join: 1, qrcode: "../images/qrcode.png" },
      { id: 14, img_url: "../images/wangtianyi.jpg", title: "过主题5", presenter: "主讲人5", date: "2018-01-20", is_expired: 1, join: 0, qrcode: "../images/qrcode.png" },
      { id: 15, img_url: "../images/wangtianyi.jpg", title: "过主题6", presenter: "主讲人6", date: "2018-01-20", is_expired: 1, join: 1, qrcode: "../images/qrcode.png" },
      { id: 16, img_url: "../images/wangtianyi.jpg", title: "过主题7", presenter: "主讲人7", date: "2018-01-20", is_expired: 1, join: 1, qrcode: "../images/qrcode.png" },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
   
  },
  qrcode: function (res){
    wx.navigateTo({
      url: 'qrcode',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})