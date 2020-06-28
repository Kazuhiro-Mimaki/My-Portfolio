import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTyperPlugin from 'vue-typer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe,faBlog,faBirthdayCake,faImage } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faGithub,faHtml5,faCss3Alt,faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import smoothScroll from 'vue-smoothscroll'

Vue.use(smoothScroll)
library.add(faGlobe,faBlog,faBirthdayCake,faImage,faTwitter,faGithub,faHtml5,faCss3Alt,faJsSquare)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueTyperPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
