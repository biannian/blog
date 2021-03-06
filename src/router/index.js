import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import myIndex from '../components/my/myIndex'
import myBlog from '../components/my/myBlog'
import someBlogs from '../components/index/someBlogs'
import blogIndex from '../components/index/blogIndex.vue'
import blogFollow from '../components/index/blogFollow'
import blogDetail from '../components/index/blogDetail'
import messageIndex from '../components/message/messageIndex'
import login from '../components/my/login.vue'
import register from '../components/my/register.vue'
import addBlog from '../components/index/addBlog.vue'
import blogImgSwiper from '../components/index/blogImgSwiper.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        tx:3
      }
    },
    {
      path: '/myIndex',
      name: 'myIndex',
      component: myIndex,
      meta:{
        tx:3
      }
    }, {
      path: '/myBlog',
      name: 'myBlog',
      component: myBlog,
      meta:{
        tx:1
      }
    }, {
      path: '/someBlogs',
      name: 'someBlogs',
      component: someBlogs,
      meta:{
        tx:2
      }
    }, {
      path: '/blogIndex',
      name: 'blogIndex',
      component: blogIndex,
      meta:{
        tx:3
      }
    }, {
      path: '/blogFollow',
      name: 'blogFollow',
      component: blogFollow
    },
    {
      path: '/blogDetail',
      name: 'blogDetail',
      component: blogDetail,
      meta:{
        tx:2
      }
    },
    {
      path: '/messageIndex',
      name: 'messageIndex',
      component: messageIndex,
      meta:{
        tx:3
      }
    }, {
      path: '/login',
      name: 'login',
      component: login,
      meta:{
        tx:2
      }
    }, {
      path: '/register',
      name: 'register',
      component: register,
      meta:{
        tx:1
      }
    }, {
      path: '/addBlog',
      name: 'addBlog',
      component: addBlog,
      meta:{
        tx:1
      }
    }, {
      path: '/blogImgSwiper',
      name: 'blogImgSwiper',
      component: blogImgSwiper,
      meta:{
        tx:1
      }
    },
  ]
})
