import http from '../../static/js/util/http'

/**
 *  @parms resquest 请求地址
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
  const request = "http://localhost:8083"
 //const request = "http://121.5.222.148:8083"
// get请求
export default {
  getBlogInfo(params) {
    return http.post(`${request}/Blog/getBlogInfo`, params)
  },
  likeBlog(params) {
    return http.get(`${request}/Blog/likeBlog`, params)
  },
  notLikeBlog(params) {
    return http.get(`${request}/Blog/notLikeBlog`, params)
  },
  getBlogDetail(params) {
    return http.get(`${request}/Blog/getBlogDetail`, params)
  },
  getUserInfo(params) {
    return http.post(`${request}/User/getUserInfo`, params)
  },
  login(params) {
    return http.get(`${request}/User/login`, params)
  },
  verifyCode(params) {
    return http.getExcel(`${request}/User/verifyCode`, params)
  },
  uploadBlog(params) {
    return http.post(`${request}/Blog/uploadBlog`, params)
  },
  pictureAdd(params) {
    return http.post(`${request}/Img/pictureAdd.do`, params)
  },
  pictureDelete(params) {
    return http.post(`${request}/Img/pictureDelete.do`, params)
  },
  addComment(params){
    return http.post(`${request}/Comment/addComment`, params)
  },likeComment(params){
    return http.get(`${request}/Comment/likeComment`, params)
  }
}

