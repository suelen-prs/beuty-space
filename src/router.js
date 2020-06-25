import Vue from 'vue'
import VueRouter from 'vue-router'

import AreaRestritaLogin from './components/AreaRestritaLogin'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/arearestrita', component: AreaRestritaLogin }
    ]
})