import axios from 'axios';

//添加统一的默认接口前缀
axios.defaults.baseURL = "http://react.zbztb.cn/site/";
//添加路由拦截器统一对返回数据做出处理
axios.interceptors.response.use(function (response) { 
  return response.data;
}, function (error) { 
  return Promise.reject(error)
})

//获取首页轮播图
export const getGoods = () => axios.get('goods/gettopdata/goods')
// 2 首页 商品列表数据
export const getGoodsGroup = () => axios.get("goods/getgoodsgroup");