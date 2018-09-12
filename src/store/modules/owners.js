import axios from 'axios';

const state = {
    owners: [],
    error: '',
    success: ''
}

const mutations = {
    'SET_OWNERS' (state, data) {
        state.owners = data;
    },
    'SET_ALERT' (state, { message, alertType }) {
        if (alertType == 'error') {
            state.error = message;
            setTimeout(() => {
                state.error = '';
            }, 4000);
        } else {
            state.success = message;
            setTimeout(() => {
                state.success = '';
            }, 4000);
        }

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
                const data = {
                    message: `You have successfully added a new owner`,
                    alertType: 'success'
                }
                commit('SET_ALERT', data);
                commit('SET_OWNERS', res.data);
            }).catch(err => {
                const data = {
                    message: `Somthing went wrong please try again later.`,
                    alertType: 'error'
                }
                commit('SET_ALERT', data);
            })
    }
}

const getters = {
    owners: state => {
        return state.owners;
    },
    error: state => {
        return state.error;
    },
    success: state => {
        return state.success;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}