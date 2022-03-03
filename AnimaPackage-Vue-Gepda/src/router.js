import Vue from "vue";
import Router from "vue-router";
import Page2Shop from "./components/Page2Shop";
import Page1Homepage from "./components/Page1Homepage";
import Page3AboutUs from "./components/Page3AboutUs";
import { page2ShopData, page1HomepageData, page3AboutUsData } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/page1-homepage",
      component: Page1Homepage,
      props: { ...page1HomepageData },
    },
    {
      path: "/page3-aboutus",
      component: Page3AboutUs,
      props: { ...page3AboutUsData },
    },
    {
      path: "*",
      component: Page2Shop,
      props: { ...page2ShopData },
    },
  ],
});
