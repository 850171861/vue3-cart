import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import {Button, Badge,Card,Table} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
createApp(App)
    .use(store)
    .use(router)
    .use(Button)
    .use(Badge)
    .use(Card)
    .use(Table)
    .mount("#app");
