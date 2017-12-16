// 1.1 导入第三方包(库)
import  Vue  from  "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './less/index.less';//导入normalize.css

// 导入路由
import VueRouter  from"vue-router"

// 1.2启动vue插件
Vue.use(VueRouter);
Vue.use(ElementUI);

// 2.1 导入根组件vue
import AppComponent from  "./component/App.vue";
// 2.2 导入路由配置
import  RouterConfig from './router'//写一个目录，会自动找到index.js

// 3 导入配置后的axios与api，注入到vue的原型当中，这样后所有的组件都可以通过this调用了
import axios from './js/axios_config';
import api from './js/api_config';
// 注入原型中
Vue.prototype.$http=axios;
Vue.prototype.$api=api;


// 渲染根组件，启动应用程序
new Vue({
  el:"#app",
  render(creatElement){
    return creatElement(AppComponent);
  },
  router:new VueRouter(RouterConfig),

})