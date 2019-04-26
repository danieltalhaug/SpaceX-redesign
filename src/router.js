import Vue from 'vue'
import Router from 'vue-router'
import LatestLaunch from './views/LatestLaunch.vue'
import NextLaunch from './views/NextLaunch.vue'
import ImagePage from './views/ImagePage.vue'
import ContactPage from './views/ContactPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LatestLaunch',
      component: LatestLaunch
    },
    {
      path: '/NextLaunch',
      name: 'NextLaunch',
      component: NextLaunch
    },
    {
      path: '/Images',
      name: 'ImagePage',
      component: ImagePage
    },
    {
      path: '/Contact',
      name: 'ContactPage',
      component: ContactPage
    }
  ]
})
