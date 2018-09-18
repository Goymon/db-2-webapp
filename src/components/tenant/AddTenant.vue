<template>
    <div class="card">
        <div class="card-header">
            <h4 class="card-title text-center">Add Tenants</h4>
        </div>
        <div class="card-body"> 
            <h6 class="text-danger text-center my-4"> {{ warning }}</h6>
            <div class="form-group">
                <label for="fname">First Name</label>
                <input type="text" class="form-control" id="fname" v-model="fname">
            </div>
            <div class="form-group">
                <label for="lname">Last Name</label>
                <input type="text" class="form-control" id="lname" v-model="lname">
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="number" class="form-control" id="age" v-model="age">
            </div>
            <div class="form-group">
                <label for="ms">Marital Status</label>
                <select class="form-control" id="ms" v-model="marital_status">
                    <option value="Married">Single</option>
                    <option value="Married">Married</option>
                </select>
            </div>
            <div class="form-group">
                <label for="occupation">Occupation</label>
                <input type="text" class="form-control" id="occupation" v-model="occupation">
            </div>
            <button class="btn btn-primary btn-block mt-5 mb-3" @click="addTenant()">Add Property</button>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        data() {
            return {
                fname: '',
                lname: '',
                age: '',
                marital_status: '',
                occupation: '',
                warning: ''
            }
        },
        computed: {
            ...mapGetters([
                
            ])
        },
        methods: {
            ...mapActions([
                'loadTenants',
                'insertTenant'
            ]),
            addTenant() {
                if(this.fname == '' ||
                   this.lname == '' ||
                   this.age == '' ||
                   this.marital_status == '' ||
                   this.occupation == '') {
                    this.setWarning('Please Complete the fields!');
                } else {
                    const data = {
                        fname: this.fname,
                        lname: this.lname,
                        age: this.age,
                        marital_status: this.marital_status,
                        occupation: this.occupation,
                    }
                    this.insertTenant(data);
                    this.fname == '';
                    this.lname == '';
                    this.age == '';
                    this.marital_status == '';
                    this.occupation == '';
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
            this.loadTenants();
        },
    }
</script>

