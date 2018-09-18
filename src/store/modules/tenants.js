import axios from 'axios';

const state = {
    tenants: [],
}

const mutations = {
    'SET_TENANTS'(state, data) {
        state.tenants = data;
    },
}

const actions = {
    loadTenants: ({ commit }) => {
        axios.get('http://localhost:3000/tenant')
            .then(res => {
                commit('SET_TENANTS', res.data);
            });
    },
    insertTenant: ({ commit }, data) => {
        axios.post('http://localhost:3000/tenant', data)
            .then((res) => {
                const data = {
                    message: `You have successfully added a new property`,
                    alertType: 'success'
                }
                commit('SET_ALERT', data);
                commit('SET_TENANTS', res.data);
            }).catch(err => {
                const data = {
                    message: `Something went wrong please try again later.`,
                    alertType: 'error'
                }
                commit('SET_ALERT', data);
            })
    }
}

const getters = {
    tenant: state => {
        return state.tenants;
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}