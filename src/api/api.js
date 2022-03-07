import http from '../../static/js/util/http'

/**
 *  @parms resquest 请求地址
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
const request = "http://localhost:8083"
//const request = "http://121.5.222.148:8083"
// get请求
export default {
  /**
   * 获取微博信息
   * @param params
   * @returns {AxiosPromise}
   */
  getBlogInfo(params) {
    return http.post(`${request}/Blog/getBlogInfo`, params)
  },
  /**
   *点赞微博
   * @param params
   * @returns {AxiosPromise}
   */
  likeBlog(params) {
    return http.get(`${request}/Blog/likeBlog`, params)
  },
  /**
   * 取消点赞微博
   * @param params
   * @returns {AxiosPromise}
   */
  notLikeBlog(params) {
    return http.get(`${request}/Blog/notLikeBlog`, params)
  },
  /**
   * 获取微博详细信息
   * @param params
   * @returns {AxiosPromise}
   */
  getBlogDetail(params) {
    return http.get(`${request}/Blog/getBlogDetail`, params)
  },
  /**
   * 获取用户信息
   * @param params
   * @returns {AxiosPromise}
   */
  getUserInfo(params) {
    return http.post(`${request}/User/getUserInfo`, params)
  },
  /**
   * 登录
   * @param params
   * @returns {AxiosPromise}
   */
  login(params) {
    return http.get(`${request}/User/login`, params)
  },
  /**
   * 获取验证码
   * @param params
   * @returns {AxiosPromise}
   */
  verifyCode(params) {
    return http.getExcel(`${request}/User/verifyCode`, params)
  },
  /**
   *发布微博
   * @param params
   * @returns {AxiosPromise}
   */
  uploadBlog(params) {
    return http.post(`${request}/Blog/uploadBlog`, params)
  },
  /**
   * 新增照片
   * @param params
   * @returns {AxiosPromise}
   */
  pictureAdd(params) {
    return http.post(`${request}/Img/pictureAdd.do`, params)
  },
  pictureDelete(params) {
    return http.post(`${request}/Img/pictureDelete.do`, params)
  },
  /**
   * 新增评论
   * @param params
   * @returns {AxiosPromise}
   */
  addComment(params) {
    return http.post(`${request}/Comment/addComment`, params)
  },
  /**
   * 给微博点赞
   * @param params
   * @returns {AxiosPromise}
   */
  likeComment(params) {
    return http.get(`${request}/Comment/likeComment`, params)
  },
  /**
   * 获取邮箱验证码
   * @param params
   * @returns {AxiosPromise}
   */
  getVerification(params) {
    return http.get(`${request}/User/getVerification`, params)
  },
  /**
   * 保存浏览记录
   * @param params
   * @returns {AxiosPromise}
   */
  saveGlance(params) {
    return http.get(`${request}/User/saveGlance`, params)
  },
}

