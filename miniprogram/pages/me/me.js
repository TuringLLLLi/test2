Page({
  data:{
    loginOK:false
  },

//去登录页面
denglu(){
  wx.navigateTo({
    url: '/pages/login/login',
  })
},

onShow: function () {
 let user=wx.getStorageSync('user')
 if(user&&user.number)
 {
   this.setData({
     loginOK:true,
     number: user.number, //名字number
     name:user.name,
     class:user.class,
     birthday:user.birthday,
     sex:user.sex

   })
 }else {
   loginOK:false
 }
},
 tuichu(){
  wx.setStorageSync('user', null)
   let user = wx.getStorageSync('user')
   if (user && user.number) {
     this.setData({
       loginOK: true,
       number: user.number 
     })
   } else {
     this.setData({
       loginOK: false
   })
   }
}


})