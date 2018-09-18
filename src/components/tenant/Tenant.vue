<template>
    <div class="row">
        <div class="col-md-3 mt-5">
            <app-add-tenant></app-add-tenant>            
        </div>
        
        <div class="col-md-9 mt-5">
            <app-tenants col="12" pageQty="2"></app-tenants>            
        </div>
    </div>
</template>

<script>
import appTenants from './Tenants.vue';
import appAddTenant from './AddTenant.vue';

export default {
    components: {
        appTenants,
        appAddTenant
    }
}
</script>
