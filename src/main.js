import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';
import Toasted from 'vue-toasted';

// Components
import TokyoAlert from './components/Alert/TokyoAlert'
import TokyoBadge from './components/Badge/TokyoBadge'
import TokyoCard from './components/Card/TokyoCard'
import TokyoCardHeader from './components/Card/TokyoCardHeader'
import TokyoCardFooter from './components/Card/TokyoCardFooter'
import TokyoCardBody from './components/Card/TokyoCardBody'
import StatsCard from './components/Card/StatsCard'
import TokyoButton from './components/Button/TokyoButton'
import TokyoModal from './components/Modal/TokyoModal'
import TokyoInput from './components/Input/TokyoInput'
import TokyoSelect from './components/Input/TokyoSelect'
import TokyoRadio from './components/Input/TokyoRadio'
import TokyoCheckBox from './components/Input/TokyoCheckBox'
import TokyoTextarea from './components/Input/TokyoTextarea'
import TokyoTable from './components/Table/TokyoTable'
import TokyoPagination from './components/Pagination/TokyoPagination'

Vue.component('tokyo-alert', TokyoAlert)
Vue.component('tokyo-badge', TokyoBadge)
Vue.component('tokyo-card', TokyoCard)
Vue.component('tokyo-card-header', TokyoCardHeader)
Vue.component('tokyo-card-body', TokyoCardBody)
Vue.component('tokyo-card-footer', TokyoCardFooter)
Vue.component('stats-card', StatsCard)
Vue.component('tokyo-button', TokyoButton)
Vue.component('tokyo-modal', TokyoModal)
Vue.component('tokyo-input', TokyoInput)
Vue.component('tokyo-select', TokyoSelect)
Vue.component('tokyo-radio', TokyoRadio)
Vue.component('tokyo-checkbox', TokyoCheckBox)
Vue.component('tokyo-textarea', TokyoTextarea)
Vue.component('tokyo-table', TokyoTable)
Vue.component('tokyo-pagination', TokyoPagination)


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './custom.scss'
import 'sweetalert2/dist/sweetalert2.min.css';
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Toasted,{
  iconPack : 'fontawesome' // set your iconPack, defaults to material. material|fontawesome|custom-class
})
Vue.use(VueSweetalert2);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
