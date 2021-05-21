import axios from "axios";

// 响应拦截器
axios.interceptors.response.use(function(resp){
    return resp.data.data;
});

const instance = axios.create();
instance.interceptors.response.use(function(resp){
    return resp.data.data;
});


export default instance;

