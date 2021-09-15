import axios from 'axios';
import router from '../../router';
const url = 'http://localhost:8088';

const state = {
    obj: {},
}

const mutations = {
    GET_ONE(state, data) {
        state.obj = data
    },
}

const actions = {
    async getMyUser({ commit }) {
        const tokenType = localStorage.getItem('tokenType');
        const accessToken = localStorage.getItem('accessToken');
        await axios.get(url + '/api/user/myuser', {
            headers: {
                'Authorization': `${tokenType} ${accessToken}`
            }
        })
            .then(response => {
                commit('GET_ONE', response.data);
            }).catch((err) => {
                localStorage.removeItem('tokenType');
                localStorage.removeItem('accessToken');
                router.push('/login');
            })
    },
}

const storePersonal = {
    state,
    mutations,
    actions,
}

export default storePersonal