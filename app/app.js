import Vue from "nativescript-vue";
import MainCategories from "./components/MainCategories";
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
import { isAndroid, isIOS } from 'tns-core-modules/platform';

Vue.config.silent = false
TNSFontIcon.debug = false
TNSFontIcon.paths = { 'fa': './assets/fontawesome.css'}
TNSFontIcon.loadCss()
Vue.filter('fonticon', fonticon)
Vue.registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);
Vue.prototype.$isAndroid = isAndroid;
Vue.prototype.$isIOS = isIOS;

new Vue({

    template: `
        <Frame>
            <MainCategories />
        </Frame>`,

    components: {
        MainCategories
    }
}).$start();
