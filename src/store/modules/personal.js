import axios from 'axios';
import router from '../../router';
const url = 'http://localhost:8088';

const state = {
    arr: [],
    obj: {},
}

const mutations = {
    GET(state, data) {
        state.arr = data
    },
}

const actions = {
    async getPersonals({ commit }) {
        const tokenType = localStorage.getItem('tokenType');
        const accessToken = localStorage.getItem('accessToken');
        await axios.get(url + '/api/destination/mydestination', {
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
    uploadImage({ }, img) {
        const body = new FormData();
        body.append('key', 'cef305bfcbc4630c1d8cdd947fde7325');
        body.append('image', img);
        return axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body,
            headers: {
                'content-type': 'multipart/form-data',
            }
        }).then((res) => {
            return res.data.data.display_url;
        }).catch(() => false);
    },
    addDestination({ dispatch, commit }, item) {
        dispatch('uploadImage', item.file).then((res) => {
            const tokenType = localStorage.getItem('tokenType');
            const accessToken = localStorage.getItem('accessToken');
            item.data.img = res;

            axios.post(url + '/api/destination', item.data, {
                headers: {
                    'Authorization': `${tokenType} ${accessToken}`
                }
            }).then((res) => {
                commit('GET', res.data);
            }).catch((err) => {
                localStorage.removeItem('tokenType');
                localStorage.removeItem('accessToken');
                router.push('/login');
            });
        });
    },
    deleteDestination({ commit }, ids) {
        const tokenType = localStorage.getItem('tokenType');
        const accessToken = localStorage.getItem('accessToken');
        console.log(`${tokenType} ${accessToken}`);
        console.log(ids);

        axios.delete(url + '/api/destination', ids, {
            headers: {
                'Authorization': `${tokenType} ${accessToken}`
            }
        }).then(response => {
            commit('GET', response.data);
        })
            .catch();
    },
}

const storePersonal = {
    state,
    mutations,
    actions,
}

export default storePersonal