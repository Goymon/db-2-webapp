import Home from './components/Home.vue';
import Owner from './components/owner/Owner.vue';
import Property from './components/property/Property.vue';
import PropertyType from './components/property/PropertyType.vue';
import Tenant from './components/tenant/Tenant.vue';

export const routes = [{
    path: '/',
    component: Home
}, {
    path: '/owner',
    component: Owner,

    }, {
        path: '/property',
        component: Property,

    }, {
        path: '/property-type',
        component: PropertyType,

    }, {
        path: '/tenant',
        component: Tenant,

    }]