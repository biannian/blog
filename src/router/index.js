import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import myIndex from '../components/my/myIndex'
import someBlogs from '../components/index/someBlogs'
import blogIndex from '../components/index/blogIndex.vue'
import blogFollow from '../components/index/blogFollow'
import blogDetail from '../components/index/blogDetail'
import messageIndex from '../components/message/messageIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        tx:2
      }
    },
    {
      path: '/myIndex',
      name: 'myIndex',
      component: myIndex,
      meta:{
        tx:2
      }
    }, {
      path: '/someBlogs',
      name: 'someBlogs',
      component: someBlogs,
      meta:{
        tx:1
      }
    }, {
      path: '/blogIndex',
      name: 'blogIndex',
      component: blogIndex,
      meta:{
        tx:2
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
        tx:1
      }
    },
    {
      path: '/messageIndex',
      name: 'messageIndex',
      component: messageIndex,
      meta:{
        tx:2
      }
    },
  ]
})
