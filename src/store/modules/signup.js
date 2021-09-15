import axios from 'axios';
import router from '../../router';
const url = 'http://localhost:8088'

const state = {
    token: {},
}

const mutations = {
}

const actions = {
    async postSignUp({ }, user) {
        await axios.post(url + '/api/auth/signup', user)
            .then(response => {
                router.push('/login');
            }).catch(err => {
                alert('Error !!!');
            });
    },
}

const storeDestination = {
    state,
    actions,
    mutations
}
export default storeDestination