// Import Bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap and Bootstrap icons plugin
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueFire from 'vuefire'

Vue.use(VueFire)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')