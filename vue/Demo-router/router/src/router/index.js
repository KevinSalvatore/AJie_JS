import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Look from "@/components/Look";
import LookOne from "@/components/LookOne";
import LookTwo from "@/components/LookTwo";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/look",
      name: "Look",
      component: Look,
      children: [
        {
          path: "lookOne",
          name: "LookOne",
          component: LookOne
        },
        {
          path: "lookTwo",
          name: "LookTwo",
          component: LookTwo
        }
      ]
    },
    {
      path: "/detail",
      redirect: "/"
    }
  ]
});
