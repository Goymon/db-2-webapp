<template>
<div class="row">
    <div class="col-md-3" key="1">
        <app-add-owner class="mt-5"></app-add-owner>
    </div>
    <div class="col-md-9" key="2">
        <app-owners class="mt-5"></app-owners>
    </div>
</div>
        
</template>

<script>
import appOwners from './Owners.vue';
import appAddOwner from './AddOwner.vue';

export default {
    components: {
        appOwners,
        appAddOwner,
    }
}
</script>


