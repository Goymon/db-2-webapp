import axios from 'axios';

const state = {
    property: [],
    propertyType: [],
}

const mutations = {
    'SET_PROPERTY'(state, data) {
        state.property = data;
    },
    'SET_PROPERTY_TYPE'(state, data) {
        state.propertyType = data;
    },
}

const actions = {
    loadProperties: ({ commit }) => {
        axios.get('http://localhost:3000/property')
            .then(res => {
                commit('SET_PROPERTY', res.data);
            });
    },
    insertProperty: ({ commit }, data) => {
        axios.post('http://localhost:3000/property', data)
            .then((res) => {
                const data = {
                    message: `You have successfully added a new property`,
                    alertType: 'success'
                }
                commit('SET_ALERT', data);
                commit('SET_PROPERTY', res.data);
            }).catch(err => {
                const data = {
                    message: `Somthing went wrong please try again later.`,
                    alertType: 'error'
                }
                commit('SET_ALERT', data);
            })
    },
    loadPropertyTypes: ({ commit }) => {
        axios.get('http://localhost:3000/property-type')
            .then(res => {
                commit('SET_PROPERTY_TYPE', res.data);
            });
    },
    insertPropertyType: ({ commit }, data) => {
        axios.post('http://localhost:3000/property-type', data)
            .then((res) => {
                const data = {
                    message: `You have successfully added a new property type`,
                    alertType: 'success'
                }
                commit('SET_ALERT', data);
                commit('SET_PROPERTY_TYPE', res.data);
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
    property: state => {
        return state.property;
    },
    propertyType: state => {
        return state.propertyType;
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}