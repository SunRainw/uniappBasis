import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import config from "./common/config.js"
Vue.prototype.config = config

// import lib from "./common/lib.js"
// Vue.prototype.lib = lib

App.mpType = 'app'

const app = new Vue({
	...App,
	config,
	lib
})
app.$mount()
