// pages/login/login.js
const db = wx.cloud.database();
// 获取数据库引用

Page({

  data: {
    number:'',
    password:'',
    Passwordinput: false
  },

  //输入用户名
  inputName(event) {
    console.log('账号',event.detail.value)
    this.setData({
    number : event.detail.value
    })
  },
  //输入密码
  inputPassword(event) {
    console.log('密码',event.detail.value)
    this.setData({
    password : event.detail.value
    })
  },

  //登陆
  login() {
  let number=this.data.number
  let password = this.data.password
  console.log('账号',number,'密码',password)
  
  if(number.length<4){
    wx.showToast({
      icon:'none',
      title:'账号至少4位',

    })
    return
  }
    if (password.length < 4) {
      wx.showToast({
        icon: 'none',
        title: '密码至少4位',

      })
      return
  }
    
  //登陆操作
    console.log('账号', number, '密码', password)
    db.collection("student").where({
    number:number
    
  }).get({
    success(res){
      console.log("获取数据成功", res)
     
      let use=res.data[0]
      console.log("use",use)
     
      if(password==use.password){ //判断输入密码与数据库中存储密码是否一致
        console.log('登陆成功') 
        wx.showToast({
          title:'登陆成功',
        })
//登陆成功后跳转页面到首页 跳转至个人中心页面

      wx:wx.navigateTo({
        url: '/pages/first/first',
       })
       //保存用户登录状态
       wx.setStorageSync('user', use)
        

      }else{
        console.log('登陆失败')
        wx.showToast({
          icon:'none',
          title: '学号或密码不正确',
        })

      }
      
          },
    fail(res){
      console.log("获取数据失败", res)
    
    }

    
  })
   
  },
  pwdFocus() {
    this.setData({
      Passwordinput: true
    })
  },
  pwdBlur() {
    this.setData({
      Passwordinput: false
    })
  },
})