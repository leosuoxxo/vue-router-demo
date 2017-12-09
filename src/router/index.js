// 載入 plugin
// 預設路徑為node_module 底下
import Vue from "vue";
import Router from "vue-router";

// 載入組件
import Cardlist from "../components/Cardlist/Cardlist";
import Hello from "../components/Hello";
import Member from "../components/Member";
import Login from "../components/Member/Login";
import Register from "../components/Member/Register";

//啟用 Router
Vue.use(Router);

// 輸出router 到 main.js
export default new Router({
  routes: [
    {
      // 會渲染到 App.vue 的 <router-view></router-view>
      path: "/",
      component: Hello
    },
    {
      path: "/hello",
      component: Hello
    },
    {
      path: "/member",
      component: Member,
      children: [
        //子路由
        {
          //等同於 /member/login
          //符合路徑會渲染 Login組件 到 Member組件下的 <router-view></router-view>
          path: "login",
          component: Login
        },
        {
          path: "register",
          component: Register
        }
      ]
    },
    {
      path: "/cardlist",
      component: Cardlist
    }
  ],
  linkActiveClass: "active" //觸發 router 的 a標籤會加上 active class
});
