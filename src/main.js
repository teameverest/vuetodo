import Vue from 'vue';
import App from './App.vue';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import './assets/main.css';
import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBFUEBYMCRl23SK6YdZXJpLDjG8pn-rINM",
    authDomain: "saravtodolist.firebaseapp.com",
    databaseURL: "https://saravtodolist.firebaseio.com",
    projectId: "saravtodolist",
    storageBucket: "saravtodolist.appspot.com",
    messagingSenderId: "1009854098212",
    appId: "1:1009854098212:web:654c836e3584e9d3"
}

let app = Firebase.initializeApp(config)
let db = app.database()

import IonicVue from '@ionic/vue';

Vue.use(IonicVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
