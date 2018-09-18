<template>
    <div class="card">
        <div class="card-header">
            <h4 class="card-title text-center">Properties</h4>
        </div>
        <div class="card-body">
            <input v-model="search" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search">
            <transition-group name="slide" type="animation" appear mode="out-in" tag="div" class="row">
                <div :class="column" class="my-4" v-for="(p, index) in filteredP" :key="index">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{ p.type }}</h5>
                            <h6 class="card-subtitle mb-3 text-muted">{{ p.fname }} {{ p.lname }} - OWNER</h6>
                            <h6 class="card-subtitle mb-4 text-muted" v-if="p.t_fname != null">{{ p.t_fname }} {{ p.t_lname }} - TENANT</h6>
                            <h6 class="card-subtitle mb-4 text-danger" v-else>NO TENANT YET</h6>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="text-center">Sq. Meters</th>
                                        <th class="text-center">Bedrooms</th>
                                        <th class="text-center">Bathrooms</th>
                                        <th class="text-center">per Month</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center">{{ p.size }}</td>
                                        <td class="text-center">{{ p.no_ofbedrooms }}</td>
                                        <td class="text-center">{{ p.no_ofbathrooms }}</td>
                                        <td class="text-center">{{ p.rate | currency }}</td>
                                    </tr>
                                </tbody>
                            </table>
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
            search: ''
        }
    },
    props: [
        'col',
        'pageQty'
    ],
    computed: {
        ...mapGetters([
            'property',
            
        ]),
        column() {
            return `col-md-${this.col}`
        },
        PTotal() {
             return this.property.length;
        },
        maxRange() {
            return this.page * this.pageQty;
        },
        minRange() {
            return this.maxRange - (this.pageQty -1);
        },
        pagination() {
            var val = this.PTotal/this.pageQty;
            return  val % 1 == 0 ? val : Math.floor(val) + 1;
        },
        filteredP() {
            return this.property.filter((item, index) => {
                var i = index + 1;
                var query;
                if(this.search == '') {
                    query = i >= this.minRange && i <= this.maxRange;
                } else {
                    query = item.rate.toString().match(this.search) ||
                            item.fname.toLowerCase().match(this.search.toLowerCase()) ||
                            item.lname.toLowerCase().match(this.search.toLowerCase()) ||
                            item.type.toLowerCase().match(this.search.toLowerCase());
                }
                return query;
            });
        }
    },
    methods: {
        ...mapActions([
            'loadProperties'
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
        this.loadProperties();
    },
}
</script>


