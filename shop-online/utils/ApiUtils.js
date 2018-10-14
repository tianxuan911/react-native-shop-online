import MD5 from 'react-native-md5'
import moment from 'moment'

export class Apis {
    static HOST=''
    static GET_TOKEN = Apis.HOST+'gettoken.htm'
    static GOOD_LIST = Apis.HOST+'goods/list.htm'
}

export class ApiUtils {
    static userName=''
    static key=''

    static getToken() {
        storage.load({
            key:'token'
        }).then((ret)=>{
            console.log(`从缓存获取token:${ret}`)
            return ret
        }).catch((error)=>{
            const currentTimeStamp=moment().format("YYYYMMDDHHmm")
            const api = Apis.GET_TOKEN
            console.log(api)
            return fetch(api,{
                method:'POST',
                headers:{
                    //告知服务器希望接收的返回数据类型为application/json,返回数据的编码格式为utf-8,如果编码格式不对，解析结果会产生乱码
                    "Accept": "application/json;charset=utf-8",
                    //告知服务器，提交的body数据类型，否则服务器无法可能无法解析提交内容
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                // body:JSON.stringify({userName:ApiUtils.userName,sign:MD5.hex_md5(ApiUtils.userName+currentTimeStamp+ApiUtils.key),timestamp:currentTimeStamp})
                body:'userName='+ApiUtils.userName+'&sign='+MD5.hex_md5(ApiUtils.userName+currentTimeStamp+ApiUtils.key)+'&timestamp='+currentTimeStamp
            })
                .then(response => {return response.json()})
                .then((responseJson)=>{
                    storage.save({key: 'token',data:responseJson.data,expires:23.9*60*60*1000})
                    console.log(`从服务器获取token:${responseJson.data}`)
                })
                .catch(error => {
                    console.error(error);
                })
        })
    }

    static commonRequestInit(){
        const currentTimeStamp=moment().format("YYYYMMDDHHmm")
        return{
            method:'POST',
            headers:{
                //告知服务器希望接收的返回数据类型为application/json,返回数据的编码格式为utf-8,如果编码格式不对，解析结果会产生乱码
                "Accept": "application/json;charset=utf-8",
                //告知服务器，提交的body数据类型，否则服务器无法可能无法解析提交内容
                "Content-Type": "application/x-www-form-urlencoded",
            },
            // body:JSON.stringify({userName:ApiUtils.userName,sign:MD5.hex_md5(ApiUtils.userName+currentTimeStamp+ApiUtils.key),timestamp:currentTimeStamp})
            body:'userName='+ApiUtils.userName+'&sign='+MD5.hex_md5(ApiUtils.userName+currentTimeStamp+ApiUtils.getToken()+ApiUtils.key)+'&timestamp='+currentTimeStamp+'&token='+ApiUtils.getToken()
        }
    }
    static getCommonRequestInit(appendBody){
        const comonReq = this.commonRequestInit()
        comonReq.body = `${comonReq.body}&${appendBody}`
        return comonReq
    }
}

