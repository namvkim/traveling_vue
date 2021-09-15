import axios from 'axios';
import router from '../../router';
const url = 'http://localhost:8088';


const state = {
    destinations: [],
    destination: {},
}

const mutations = {
    GET(state, data) {
        state.destinations = data
    },
    GET_ONE(state, data) {
        state.destination = data
    },
}

const actions = {
    async getDestinations({ commit }) {
        const tokenType = localStorage.getItem('tokenType');
        const accessToken = localStorage.getItem('accessToken');
        await axios.get(url + '/api/destination', {
            headers: {
                'Authorization': `${tokenType} ${accessToken}`
            }
        })
            .then(response => {
                commit('GET', response.data);
            }).catch((err) => {
                localStorage.removeItem('tokenType');
                localStorage.removeItem('accessToken');
                router.push('/login');
            })
    },
    getDestination({ commit }, id) {
        axios.get(url + '/api/destination/' + id)
            .then(response => {
                commit('GET_ONE', response.data)
            })
    },
    editDestination({ }, item) {
        axios.put(url + '/api/destination/' + id, item)
            .then();
    },
}

const storeDestination = {
    state,
    actions,
    mutations
}
export default storeDestination