<template>
    <div class="card">
        <div class="card-header">
            <h4 class="card-title text-center">Property Type</h4>
        </div>
        <div class="card-body">
            <input v-model="search" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search">
            <transition-group name="slide" type="animation" appear mode="out-in" tag="div" class="row">
                <div class="col-md-6 my-4" v-for="(pt, index) in filteredPT" :key="index">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">{{ pt.type }}</h4>
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
            pageQty: 4,
            search: ''
        }
    },
    computed: {
        ...mapGetters([
            'propertyType'
        ]),
        PTTotal() {
             return this.propertyType.length;
        },
        maxRange() {
            return this.page * this.pageQty;
        },
        minRange() {
            return this.maxRange - (this.pageQty -1);
        },
        pagination() {
            var val = this.PTTotal/this.pageQty;
            return  val % 1 == 0 ? val : Math.floor(val) + 1;
        },
        filteredPT() {
            return this.propertyType.filter((item, index) => {
                var i = index + 1;
                var query;
                if(this.search == '') {
                    query = i >= this.minRange && i <= this.maxRange;
                } else {
                    query = item.type.toLowerCase().match(this.search.toLowerCase());
                }
                return query;
            });
        }
    },
    methods: {
        ...mapActions([
            'loadPropertyTypes'
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
        this.loadPropertyTypes();
    },
}
</script>


