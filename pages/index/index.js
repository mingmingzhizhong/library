//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')
Page({
  data: {
    "openID": '',
  /* 分别获取当前讲座及历史讲座*/
    "clectures": [],
    "hlectures": [],
    "tabArr": { curHdIndex: 0, curBdIndex: 0 }, 
    "page": 0,
    "pageSize": 10,
    "chasMoreData": true,
    "hhasMoreData": true
  },
  //事件处理函数
  tabchange: function (e) {
    var that = this
    var id = e.target.dataset.id
    var obj = {}
    obj.curHdIndex = id
    obj.curBdIndex = id
    that.setData({
      tabArr: obj
    })
  },
  //获取当前讲座列表
  getcItems: function () {
    var that = this;
    wx.request({
      url: 'http://199.231.208.242/ljctest1/current_lectures?page=' + that.data.page, //仅为示例，并非真实的接口地址
      success: function (res) {
        var nodelist = res.data
        var itemsTem = that.data.clectures
       if (nodelist.length < that.data.pageSize) {
          that.setData({
            chasMoreData: false,
            clectures: itemsTem.concat(nodelist)
          })
        } else {
          that.setData({
            chasMoreData: true,
            page: that.data.page + 1,
            clectures: itemsTem.concat(nodelist)
          })
        }
     
      }
    })
  },
  //获取历史讲座列表
  gethItems: function () {
    var that = this;
    wx.request({
      url: 'http://199.231.208.242/ljctest1/history_lectures?page=' + that.data.page, //仅为示例，并非真实的接口地址
      success: function (res) {
        var nodelist = res.data
        var itemsTem = that.data.hlectures
        if (nodelist.length < that.data.pageSize) {
          that.setData({
            hhasMoreData: false,
            hlectures: itemsTem.concat(nodelist)
          })
        } else {
          that.setData({
            hhasMoreData: true,
            page: that.data.page + 1,
            hlectures: itemsTem.concat(nodelist)
          })
        }
      }
    })
  },
  onLoad: function () {
    var that=this
    that.getcItems()
    that.gethItems()
      
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
  showdetails: function (event) {
    var that = this
    var id = event.target.id
    var openid = event.target.dataset.openid

    wx.navigateTo({
      url: '/pages/lecture/lecture?id='+id+'&openid='+openid,
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // Do something when page reach bottom.
    //this.getArticles();
    if (this.data.chasMoreData) {
      this.getcItems()
    } else if(this.data.hhasMoreData){
      this.gethItems()
    }else {
      wx.showToast({
        title: '没有更多数据',
      })
    }
  },
})
