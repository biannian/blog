import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import myIndex from '../components/my/myIndex'
import someBlogs from '../components/index/someBlogs'
import blogIndex from '../components/index/blogIndex.vue'
import blogFollow from '../components/index/blogFollow'
import blogDetail from '../components/index/blogDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/myIndex',
      name: 'myIndex',
      component: myIndex
    }, {
      path: '/someBlogs',
      name: 'someBlogs',
      component: someBlogs
    }, {
      path: '/blogIndex',
      name: 'blogIndex',
      component: blogIndex
    }, {
      path: '/blogFollow',
      name: 'blogFollow',
      component: blogFollow
    },
    {
      path: '/blogDetail',
      name: 'blogDetail',
      component: blogDetail
    },
  ]
})
