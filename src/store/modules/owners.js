import axios from 'axios';

const state = {
    owners: []
}

const mutations = {
    'SET_OWNERS' (state, data) {
        state.owners = data;
    }
}

const actions = {
    loadData: ({ commit }) => {
        axios.get('http://localhost:3000/owner')
            .then(res => {
                commit('SET_OWNERS', res.data);
            });
    },
    insertData: ({ commit }, data) => {
        axios.post('http://localhost:3000/owner', data)
            .then((res) => {
                commit('SET_OWNERS', res.data);
            })
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