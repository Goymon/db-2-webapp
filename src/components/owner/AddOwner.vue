<template>
    <div class="card">
        <div class="card-header">
            <h4 class="card-title text-center">Add Owner</h4>
        </div>
        <div class="card-body"> 
            <h6 class="text-danger text-center my-4"> {{ warning }}</h6>
            <div class="form-group">
                <label for="fname">First Name</label>
                <input type="text" class="form-control" id="fname" v-model="fname">
            </div>
            <div class="form-group">
                <label for="fname">Last Name</label>
                <input type="text" class="form-control" id="fname" v-model="lname">
            </div>
            <div class="form-group">
                <label for="fname">Age</label>
                <input type="number" class="form-control" id="fname" v-model="age">
            </div>
            <button class="btn btn-primary btn-block mt-5 mb-3" @click="addOwner()">Add Owner</button>
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
                warning: ''
            }
        },
        computed: {
            ...mapGetters([
                
            ])
        },
        methods: {
            ...mapActions([
                'insertData'
            ]),
            addOwner() {
                if(this.fname == '' || this.lname == '' || this.age == '') {
                    this.setWarning('Please Complete the fields!');
                } else {
                    const data = {
                        fname: this.fname,
                        lname: this.lname,
                        age: this.age
                    }
                    this.insertData(data);
                    this.fname = ''
                    this.lname = ''
                     this.age = ''
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

