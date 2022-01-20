import http from '../../static/js/util/http'

/**
 *  @parms resquest 请求地址
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
  const resquest = "http://localhost:8083"
// const resquest = "http://121.5.222.148:8083"
// get请求
export default {
  getBlogInfo(params) {
    return http.post(`${resquest}/Blog/getBlogInfo`, params)
  },
  likeBlog(params) {
    return http.post(`${resquest}/Blog/likeBlog`, params)
  },
  getBlogDetail(params) {
    return http.get(`${resquest}/Blog/getBlogDetail`, params)
  },
  getUserInfo(params) {
    return http.post(`${resquest}/User/getUserInfo`, params)
  },
  login(params) {
    return http.get(`${resquest}/User/login`, params)
  },
  verifyCode(params) {
    return http.getExcel(`${resquest}/User/verifyCode`, params)
  }
}

