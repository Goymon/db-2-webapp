<template>
    <div class="row">
        <div class="col-md-3 mt-5">
            <app-add-property></app-add-property>            
        </div>
        
        <div class="col-md-9 mt-5">
            <app-properties col="12" pageQty="2"></app-properties>            
        </div>
    </div>
</template>

<script>
import appProperties from './Properties.vue';
import appAddProperty from './AddProperty.vue';

export default {
    components: {
        appProperties,
        appAddProperty
    }
}
</script>
