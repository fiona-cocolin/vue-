// 导入axios与接口路径
import axios from "axios";
import {domain} from './api_config';

// 配置默认域名，这样请求的时候就不用在url里面添加域名了
axios.defaults.baseURL=domain;

// 导出axios
export default axios;