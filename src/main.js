import  Vue  from  "vue";

import AppComponent from  "./component/App.vue";

new Vue({
  el:"#app",
  render(creatElement){
    return creatElement(AppComponent);
  }
})