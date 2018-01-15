//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    "lectures": [],
  /*  "lectures": [
    { id:1,img_url: "../images/wangtianyi.jpg", title: "主题1", presenter: "主讲人1", number:15, date: "2018-01-20", is_expired: 0, join: 1 },
    { id: 2, img_url: "../images/wangtianyi.jpg", title: "主题2", presenter: "主讲人2", number: 22, date: "2018-01-20", is_expired: 0, join: 0 },
    { id: 3, img_url: "../images/wangtianyi.jpg", title: "主题3", presenter: "主讲人3", number: 35, date: "2018-01-20", is_expired: 0, join: 0 },
    { id: 4, img_url: "../images/wangtianyi.jpg", title: "主题4", presenter: "主讲人4", number: 15, date: "2018-01-20", is_expired: 0, join: 1 },
    { id: 5, img_url: "../images/wangtianyi.jpg", title: "主题5", presenter: "主讲人5", number: 26, date: "2018-01-20", is_expired: 0, join: 1 },
    { id: 6, img_url: "../images/wangtianyi.jpg", title: "主题6", presenter: "主讲人6", number: 34, date: "2018-01-20", is_expired: 0, join: 0 },
    { id: 7, img_url: "../images/wangtianyi.jpg", title: "主题7", presenter: "主讲人7", number: 25, date: "2018-01-20", is_expired: 0, join: 1 },
    { id: 8, img_url: "../images/wangtianyi.jpg", title: "主题8", presenter: "主讲人8", number: 23, date: "2018-01-20", is_expired: 0, join: 0 },
    { id: 9, img_url: "../images/wangtianyi.jpg", title: "主题9", presenter: "主讲人9", number: 42, date: "2018-01-20", is_expired: 0, join: 1 },
    { id: 10, img_url: "../images/wangtianyi.jpg", title: "过主题1", presenter: "主讲人1", number: 31, date: "2018-01-20", is_expired: 1, join: 0 },
    { id: 11, img_url: "../images/wangtianyi.jpg", title: "过主题2", presenter: "主讲人2", number: 54, date: "2018-01-20", is_expired: 1, join: 1 },
    { id: 12, img_url: "../images/wangtianyi.jpg", title: "过主题3", presenter: "主讲人3", number: 44, date: "2018-01-20", is_expired: 1, join: 0 },
    { id: 13, img_url: "../images/wangtianyi.jpg", title: "过主题4", presenter: "主讲人4", number: 42, date: "2018-01-20", is_expired: 1, join: 1 },
    { id: 14, img_url: "../images/wangtianyi.jpg", title: "过主题5", presenter: "主讲人5", number: 24, date: "2018-01-20", is_expired: 1, join: 0 },
    { id: 15, img_url: "../images/wangtianyi.jpg", title: "过主题6", presenter: "主讲人6", number: 28, date: "2018-01-20", is_expired: 1, join: 1 },
    { id: 16, img_url: "../images/wangtianyi.jpg", title: "过主题7", presenter: "主讲人7", number: 15, date: "2018-01-20", is_expired: 1, join: 1 },
  ],*/
  /* 分别获取当前讲座及历史讲座
    "clectures": [],
    "hlectures": [],*/
    "tabArr": { curHdIndex: 0, curBdIndex: 0 }
  },
  //事件处理函数
  tabchange: function (e) {
    console.log(e)
    var that = this
    //     console.log(e)
    var id = e.target.dataset.id
    var obj = {}
    obj.curHdIndex = id
    obj.curBdIndex = id
    that.setData({
      tabArr: obj
    })
  },
  onLoad: function () {
    var that = this
    
    //获取全部讲座
    wx.request({
      url: 'http://199.231.208.242/ljctest1/lectures',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var lectures = res.data
        that.setData({
          lectures: res.data
        })
        console.log(lectures)
      }
    })

    /*分别获取当前讲座及历史讲座
     //当前讲座
    wx.request({
      url: 'http://199.231.208.242/ljctest1/current_lectures',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var clectures = res.data
        that.setData({
          clectures: res.data
        })
        console.log(clectures)
      }
    })

    //历史讲座
    wx.request({
      url: 'http://199.231.208.242/ljctest1/current_lectures',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var hlectures = res.data
        that.setData({
          hlectures: res.data
        })
        console.log(hlectures)
      }
    })
    */

  },
  showdetails: function (event) {
    var that = this
    //     console.log(e)
    var id = event.target.id

    wx.navigateTo({
      url: '/pages/lecture/lecture?id='+id,
    })
  }
})
