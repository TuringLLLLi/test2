// miniprogram/pages/index/index.js
const { $Message } = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'tab1',
    current_scroll: 'tab1',
    tab1: {

      text: "2016-2017年第一学期",
      listData: [
        {
        id: 7,
        course: '大学英语1',
        type: '必修',
        cre: '2',
        score: '87',
        score1: '15',
        score2: '20',
        score3: '52',
      },
      {
        id: 8,
        course: '高数1',
        type: '必修',
        cre: '6',
        score: '97',
        score1: '15',
        score2: '20',
        score3: '62',
      },
      {
        id: 9,
        course: 'C语言',
        type: '必修',
        cre: '2',
        score: '90',
        score1: '10',
        score2: '25',
        score3: '55',
      },
      {
        id: 10,
        course: '体育',
        type: '必修',
        cre: '1',
        score: '99',
        score1: '39',
        score2: '20',
        score3: '49',
      },
      {
        id: 11,
        course: '大学物理1',
        type: '必修',
        cre: '1',
        score: '83',
        score1: '10',
        score2: '10',
        score3: '63',
      },
      {
        id: 12,
        course: '线性代数',
        type: '必修',
        cre: '2',
        score: '92',
        score1: '10',
        score2: '10',
        score3: '72',
      },
      {
        id: 12,
        course: '电子商务',
        type: '必修',
        cre: '2.5',
        score: '79',
        score1: '10',
        score2: '10',
        score3: '59',
      },
     
      ]

    },
    tab2: {
      text: "2017-2018年第一学期",
      listData: [
        {
        id: 1,
        course: '大学英语2',
        type: '必修',
        cre: '2',
        score: '99',
        score1: '39',
        score2: '20',
        score3: '49',
      },
      {
        id: 2,
        course: '高数2',
        type: '必修',
        cre: '2',
        score: '99',
        score1: '39',
        score2: '20',
        score3: '49',
      },
      {
        id: 3,
        course: 'C语言',
        type: '必修',
        cre: '2',
        score: '99',
        score1: '39',
        score2: '20',
        score3: '49',
      },
      ]

    },
    tab3: {
      text: "2018-2019年第一学期",
      listData: [{
        id: 4,
        course: '大学英语3',
        type: '必修',
        cre: '2',
        score: '99',
        score1: '39',
        score2: '20',
        score3: '49',
      },
      {
        id: 5,
        course: '高数3',
        type: '必修',
        cre: '2',
        score: '99',
        score1: '39',
        score2: '20',
        score3: '49',
      },
      {
        id: 6,
        course: 'C语言',
        type: '必修',
        cre: '2',
        score: '99',
        score1: '33',
        score2: '31',
        score3: '35',
      },
      ]

    },
    tab4: {
      text: "2019-2020年第一学期",
      listData: [{
        id: 10,
        course: '大学英语3',
        type: '必修',
        cre: '2',
        score: '99',
        score1: '39',
        score2: '20',
        score3: '49',
      },
      {
        id: 11,
        course: '高数3',
        type: '必修',
        cre: '2',
        score: '99',
        score1: '39',
        score2: '20',
        score3: '49',
      },
      {
        id: 12,
        course: 'C语言',
        type: '必修',
        cre: '2',
        score: '99',
        score1: '33',
        score2: '31',
        score3: '35',
      },
      ]
    },
    listData: [],
    text: '',
    visible1: false,
    visible: false,
    listData4: {
      id: '',
      course: '',
      type: '',
      cre: '',
      score: '',
      score1: '',
      score2: '',
      score3: '',
    }
  },

  handleChange({ detail }) {
    if (detail.key=="tab1"){
      this.setData({
        current: detail.key,
        listData: this.data.tab1.listData,
        text: this.data.tab1.text
      });
    }
    else if (detail.key == "tab2") {
      this.setData({
        current: detail.key,
        listData: this.data.tab2.listData,
        text: this.data.tab2.text
      });
    }
   else if (detail.key == "tab3") {
      this.setData({
        current: detail.key,
        listData: this.data.tab3.listData,
        text: this.data.tab3.text
      });
    }
    else if (detail.key == "tab4") {
      this.setData({
        current: detail.key,
        listData: this.data.tab4.listData,
        text: this.data.tab4.text
      });
    }
  },

  handleChangeScroll({ detail }) {
    this.setData({
      current_scroll: detail.key
    });
  },

  handleOpen1() {
    this.setData({
      visible1: true
    });
  },

  handleClose1() {
    this.setData({
      visible1: false
    });
  },

  onlineClick: function (e) {
    let listData = this.data.listData
    var bean = e.currentTarget.dataset.bean // e.currentTarget
    console.log(bean)
    this.handleOpen1;

    this.setData({
      listData4: bean,
      visible1: true
    })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      text:this.data.tab1.text,
      listData: this.data.tab1.listData
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})