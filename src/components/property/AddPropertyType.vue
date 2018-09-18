<template>
    <div class="card">
        <div class="card-header">
            <h4 class="card-title text-center">Add Property Type</h4>
        </div>
        <div class="card-body"> 
            <h6 class="text-danger text-center my-4"> {{ warning }}</h6>
            <div class="form-group">
                <label for="type">Type</label>
                <input type="text" class="form-control" id="type" v-model="type">
            </div>
            <button class="btn btn-primary btn-block mt-5 mb-3" @click="addProperty()">Add Property Type</button>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        data() {
            return {
                type: '',
                warning: ''
            }
        },
        computed: {
            ...mapGetters([
                'propertyType',
            ])
        },
        methods: {
            ...mapActions([
                'insertPropertyType'
            ]),
            addProperty() {
                if(this.type == '') {
                    this.setWarning('Please Complete the fields!');
                } else {
                    const data = {
                        type: this.type
                    }
                    this.insertPropertyType(data);
                    this.type = '';
                }
            },
            setWarning(message) {
                this.warning = message;
                setTimeout(() => {
                    this.warning = '';
                }, 2000);
            }
        }
    }
</script>

