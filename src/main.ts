import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe, faBlog, faBirthdayCake, faImage } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faHtml5, faCss3Alt, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueCompositionApi from '@vue/composition-api';
import App from './App.vue';

library.add(faGlobe, faBlog, faBirthdayCake, faImage, faTwitter, faGithub, faHtml5, faCss3Alt, faJsSquare);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
