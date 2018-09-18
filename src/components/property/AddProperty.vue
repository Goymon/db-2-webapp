<template>
    <div class="card">
        <div class="card-header">
            <h4 class="card-title text-center">Add Property</h4>
        </div>
        <div class="card-body"> 
            <h6 class="text-danger text-center my-4"> {{ warning }}</h6>
            <div class="form-group">
                <label for="PT">Property Type</label>
                <select class="form-control" id="PT" v-model="type">
                    <option v-for="(pt, index) in propertyType" :key="index" :value="pt.propertytype_id">{{pt.type}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="PT">Owner</label>
                <select class="form-control" id="owner" v-model="owner">
                    <option v-for="(o, index) in owners" :key="index" :value="o.owner_id">{{ o.lname }} {{ o.fname }}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="size">Sq. Meters</label>
                <input type="number" class="form-control" id="size" v-model="size">
            </div>
            <div class="form-group">
                <label for="noofbedrooms">No# of bedrooms</label>
                <input type="number" class="form-control" id="noofbedrooms" v-model="noofbedrooms">
            </div>
            <div class="form-group">
                <label for="noofbathrooms">No# of bathrooms</label>
                <input type="number" class="form-control" id="noofbathrooms" v-model="noofbathrooms">
            </div>
            <div class="form-group">
                <label for="rate">Rate per month</label>
                <input type="number" class="form-control" id="rate" v-model="rate">
            </div>
            <button class="btn btn-primary btn-block mt-5 mb-3" @click="addProperty()">Add Property</button>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        data() {
            return {
                type: '',
                owner: '',
                size: '',
                noofbedrooms: '',
                noofbathrooms: '',
                rate: '',
                warning: ''
            }
        },
        computed: {
            ...mapGetters([
                'propertyType',
                'owners',
            ])
        },
        methods: {
            ...mapActions([
                'loadPropertyTypes',
                'loadData',
                'insertProperty'
            ]),
            addProperty() {
                if(this.type == '' ||
                   this.owner == '' ||
                   this.size == '' ||
                   this.noofbedrooms == '' ||
                   this.noofbathrooms == '' ||
                   this.rate == '') {
                    this.setWarning('Please Complete the fields!');
                } else {
                    const data = {
                        type: this.type,
                        owner: this.owner,
                        size: this.size,
                        noofbedrooms: this.noofbedrooms,
                        noofbathrooms: this.noofbathrooms,
                        rate: this.rate
                    }
                    this.insertProperty(data);
                    this.type == '';
                    this.owner == '';
                    this.size == '';
                    this.noofbedrooms == '';
                    this.noofbathrooms == '';
                    this.rate == '';
                }
            },
            setWarning(message) {
                this.warning = message;
                setTimeout(() => {
                    this.warning = '';
                }, 2000);
            }
        },
        created() {
            this.loadPropertyTypes();
            this.loadData();
        },
    }
</script>

