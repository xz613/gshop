/*
ajax函数请求模块
返回值；promise对象(异步返回的数据response.data)
*/
import axios from 'axios'
export default function ajax(url,data={},type="GET"){
    return new  Promise( function(resolve,reject){
        let Promise
        if(type === 'GET'){
            // 准备url query参数
            let dataStr = ''//数据拼接字符串
            Object.keys(data).forEach(key=>{                           //object.keys()---返回一个数组，数组的元素为可枚举对象的属性名
                dataStr += key + '=' +data[key] + '&'                  
            })
            if(dataStr !== ''){
                dataSrt = dataStr.substring(0,dataStr.lastIndexOf('&'))//object.lastIndexof() 返回指定字符出现位置的数字   object.substring（start,stop）提取object中的字符包含start，不包含stop.
                url = url + '?' + dataStr
            }
            // 发送get请求
            Promise = axios.get(url)
        }else{
            // 发送post请求
            Promise = axios.post(url,data)
        }

        Promise.then(response =>{
            resolve(response.data)
        })
        .catch(error =>{
            reject(error)
        })
    })
}