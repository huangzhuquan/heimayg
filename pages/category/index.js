import {request} from "../../request/index.js"

Page({
  data: {
    leftMenuList:[],
    rightGoodsList:[],
    scrollTop:0,
  },
  allGoodsList:[],
  onLoad(){
    this.getCategoryList();
  },
  getCategoryList(){
    request({url:'/categories'})
    .then(result=>{
      // console.log(result);
      const leftMenuList=result.data.message.map(v=>({
        cat_id:v.cat_id,cat_name:v.cat_name
      }));
      const rightGoodsList =result.data.message[0].children;
      this.allGoodsList=result.data.message;
      // console.log('1111',this.allGoodsList);
      this.setData({
        leftMenuList,
        rightGoodsList
      })
    })
  },
  handleChangeId(e){
    // console.log(e);
    let goodsList=this.allGoodsList[e.currentTarget.dataset.key].children;
    const scrollTop=0;
    this.setData({
      rightGoodsList:goodsList,
      scrollTop
    })
    
    
  }
  
});
  