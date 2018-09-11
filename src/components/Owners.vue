<template>
    <div class="py-5">
        <nav aria-label="Page navigation">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#" @click.prevent="previous()">Previous</a></li>
                <li class="page-item" v-for="index in pagination" :key="index" :class="{'active': index == page}"><a class="page-link" href="#" @click.prevent="step(index)">{{index}}</a></li>
                <li class="page-item"><a class="page-link" href="#" @click.prevent="next()">Next</a></li>
            </ul>
        </nav>
        <input v-model="search" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search">
        <transition-group name="slide" type="animation" appear mode="out-in" tag="div" class="row">
            <div class="col-md-4 py-4" v-for="(owner, index) in filteredOwner" :key="index">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{ owner.name }}</h5>
                        <p class="card-text">{{ owner.email }}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Mobile:</strong> {{ owner.mobile }}</li>
                        <li class="list-group-item"><strong>Phone:</strong>  {{ owner.tell }}</li>
                        <li class="list-group-item"><strong>City:</strong>  {{ owner.city }}</li>
                        <li class="list-group-item"><strong>Province:</strong>  {{ owner.province }}</li>
                    </ul>
                </div>
            </div>
        </transition-group>
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
                    query = item.name.toLowerCase().match(this.search.toLowerCase())
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

