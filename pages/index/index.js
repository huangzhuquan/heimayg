import {request} from "../../request/index.js";

Page({
  data: {
    swiperList:[],
    navCateList:[],
    floorList:[]
  },
  onLoad(){
    this.getSwiperList();
    this.getNavCateList();
    this.getFloorList();
  },
  getSwiperList(){
    request({
      url:"/home/swiperdata"
    }).then(result=>{
      const {message}=result.data;
      this.setData({
        swiperList:message
      })
    })
  },
  getNavCateList(){
    request({
      url:"/home/catitems",
    }).then(result=>{
      const {message}= result.data;
      this.setData({
        navCateList:message
      })
    })
  },
  getFloorList(){
    request({
      url:"/home/floordata"
    }).then(result=>{
      const {message} =result.data;
      // console.log(result);
      this.setData({
        floorList:message
      })
    })
  }
});
  