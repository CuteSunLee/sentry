// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import * as Sentry from "@sentry/browser";
import * as Integrations from "@sentry/integrations";

Vue.config.productionTip = false;
console.log(process.env.NODE_ENV, "process.env.NODE_ENV");
process.env.NODE_ENV === "production" &&
    Sentry.init({
        dsn: "https://13ba44e99a49426fbce535888e3a74a0@sentry.io/1454859",
        // dsn:
        //     "http://4cf10206ef27409bbb64f68ba014f905:a67a0eb5513e43ab883af3f3d66ca7f0@localhost:9000/2",
        integrations: [
            new Integrations.Vue({
                Vue,
                attachProps: true
            }),
            new Integrations.RewriteFrames()
        ],
        release: process.env.RELEASE_VERSION
        // environment: process.env.NODE_ENV
    });

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
});
