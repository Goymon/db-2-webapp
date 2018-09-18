<template>
    <div class="row">
        <div class="col-md-3 mt-5">
            <app-add-property-type></app-add-property-type>
        </div>
        
        <div class="col-md-9 mt-5">
            <app-property-types></app-property-types>  
        </div>
        
        
        
    </div>
</template>

<script>
import appPropertyTypes from './PropertyTypes.vue';
import appAddPropertyType from './AddPropertyType.vue';

export default {
    components: {
        appPropertyTypes,
        appAddPropertyType
    }
}
</script>
