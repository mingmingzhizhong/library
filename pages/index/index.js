//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    "lectures": [],
    "siteIP": 'http://199.231.208.242',
    "openID": '',
  /* 分别获取当前讲座及历史讲座*/
    "clectures": [],
    "hlectures": [],
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
    const APP_ID = '';//输入小程序appid  
    const APP_SECRET = '';//输入小程序app_secret  
    var OPEN_ID = ''//储存获取到openid  
    var SESSION_KEY = ''//储存获取到session_key 
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

    /*分别获取当前讲座及历史讲座 */
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
      url: 'http://199.231.208.242/ljctest1/history_lectures',
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
            console.log(res.data)
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
  showdetails: function (event) {
    var that = this
    console.log(event)
    var id = event.target.id
    var openid = event.target.dataset.openid

    wx.navigateTo({
      url: '/pages/lecture/lecture?id='+id+'&openid='+openid,
    })
  }
})
