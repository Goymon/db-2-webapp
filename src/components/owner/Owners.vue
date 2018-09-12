<template>
    <div class="card">
        <div class="card-header">
            <h4 class="card-title text-center">OWNERS</h4>
        </div>
        <div class="card-body">
            <input v-model="search" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search">
            <transition-group name="slide" type="animation" appear mode="out-in" tag="div" class="row">
                <div class="col-md-6 my-4" v-for="(owner, index) in filteredOwner" :key="index">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{ owner.fname }} {{ owner.lname }}</h5>
                            <p class="card-text">Age: {{ owner.age }}</p>
                        </div>
                    </div>
                </div>
            </transition-group>
            <div class="text-center">
                <nav class="d-inline-block mt-5" aria-label="Page navigation">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#" @click.prevent="previous()">Previous</a></li>
                        <li class="page-item" v-for="index in pagination" :key="index" :class="{'active': index == page}"><a class="page-link" href="#" @click.prevent="step(index)">{{index}}</a></li>
                        <li class="page-item"><a class="page-link" href="#" @click.prevent="next()">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        
    </div>
    
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            page: 1,
            pageQty: 10,
            search: ''
        }
    },
    computed: {
        ...mapGetters([
            'owners'
        ]),
        ownerTotal() {
             return this.owners.length;
        },
        maxRange() {
            return this.page * this.pageQty;
        },
        minRange() {
            return this.maxRange - (this.pageQty -1);
        },
        pagination() {
            return Math.floor(this.ownerTotal/this.pageQty) + 1;
        },
        filteredOwner() {
            return this.owners.filter((item, index) => {
                var i = index + 1;
                var query;
                if(this.search == '') {
                    query = i >= this.minRange && i <= this.maxRange;
                } else {
                    query = item.fname.toLowerCase().match(this.search.toLowerCase()) ||
                            item.lname.toLowerCase().match(this.search.toLowerCase());
                }
                return query;
            });
        }
    },
    methods: {
        ...mapActions([
            'loadData'
        ]),
        previous() {
            this.page = this.page == 1 ? this.page : this.page - 1;
            this.search = '';
        },
        step(index) {
            this.page = index;
            this.search = '';
        },
        next() {
            this.page = this.page == this.pagination ? this.page : this.page + 1;
            this.search = '';
        }
        
    },
    created() {
        this.loadData();
    },
}
</script>


