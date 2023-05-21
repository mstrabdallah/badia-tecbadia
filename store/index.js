import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/authModules";
import msgModules from "./modules/msgModules";
import services from "./modules/servicesModules";
import contact from "./modules/contactModules";
import counters from "./modules/counterModules";
import parteners from "./modules/partenerModules";
import pricing from "./modules/pricingModules";
import blog from "./modules/blogModules";
import listOrder from "./modules/listOrderModules";
import user from "./modules/userModules";
import index from "./modules/indexModules";
import portfolio from "./modules/portfolioModules";
import products from "./modules/productModules";
import sidebar from "./modules/sidebarModules";
import meta from "./modules/metaModules";
// Load Vuex
Vue.use(Vuex);

// Create store
const store = () => {
  return new Vuex.Store({
    modules: {
      auth,
      msgModules,
      services,
      contact,
      counters,
      parteners,
      pricing,
      blog,
      listOrder,
      user,
      index,
      portfolio,
      products,
      sidebar,
      meta
    },
  });
};

export default store;
