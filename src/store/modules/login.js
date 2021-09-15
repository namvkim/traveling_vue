import axios from 'axios';
import router from '../../router';
const url = 'http://localhost:8088'

const state = {
    token: {},
}

const mutations = {
    GET(state, data) {
        state.token = data
    },
}

const actions = {
    async postLogin({ commit }, user) {
        await axios.post(url + '/api/auth/signin', user)
            .then(response => {
                commit('GET', response.data);
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('tokenType', response.data.tokenType);
                router.push('/');
            }).catch(err => {
                alert('Incorrect account or password!!!');
            });
    },
}

const storeDestination = {
    state,
    actions,
    mutations
}
export default storeDestination