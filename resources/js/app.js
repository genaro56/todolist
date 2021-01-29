require('./bootstrap');

window.Vue = require('vue');
Vue.component('App', require('./vue/app.vue'));

const app = new Vue({
    el: '#app',
    // components: { App }
})
