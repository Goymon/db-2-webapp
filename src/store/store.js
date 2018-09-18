import Vue from 'vue';
import Vuex from 'vuex';
import owners from './modules/owners';
import property from './modules/property';
import tenants from './modules/tenants';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        owners,
        property,
        tenants
    }
});