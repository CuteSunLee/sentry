// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import * as Sentry from "@sentry/browser";
import * as Integrations from "@sentry/integrations";

Vue.config.productionTip = false;

process.env.NODE_ENV === "production" &&
  Sentry.init({
    dsn: "https://dcbe2b666c72448195bd155b155d630e@sentry.io/1445249",
    integrations: [
      new Integrations.Vue({
        Vue,
        attachProps: true
      }),
      new Sentry.Integrations.RewriteFrames()
    ],
    release: process.env.RELEASE
  });

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
