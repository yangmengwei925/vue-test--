import axios from 'axios';
import cookie from "js-cookie";
import router from "../router/router.js";
import {Message} from "element-ui";
import resCode from "./resCode.js";


axios.defaults.timeout = 2000;
// axios.default.baseURL = '/api'
axios.interceptors.request.use((config)=>{//请求返回的condig对象 
    // console.log(config)
    if(config.url !=='/user/login'){
        let token=cookie.get('token');//获取判断token是否存在 存在的话加入请求头
        // console.log(token)
        if(token){
            config.headers['authorization'] = token
        }else{
          router.push('/login')
        }
    }
    return config
},error=>Promise.reject(error))


axios.interceptors.response.use((response)=>{//判断code 响应状态码来决定弹框的内容
    // console.log(response.status)
         if(response.data.code===1){
            // Message.success({
            //     // message:resCode[response.status]
            // })
         }else{
            // Message.error({
            //     message:"登陆失败"
            // })
         }
         return response
})
export default axios