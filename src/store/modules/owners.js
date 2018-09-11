import axios from 'axios';

const state = {
    owners: []
}

const mutations = {
    'SET_STOCKS' (state, data) {
        state.owners = data;
    }
}

const actions = {
    loadData: ({ commit }) => {
        axios.get('http://localhost:3000/')
            .then(res => {
                commit('SET_STOCKS', res.data);
            });
    }
}

const getters = {
    owners: state => {
        return state.owners;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}