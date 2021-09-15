import { createStore } from 'vuex'
import destination from './modules/destination'
import login from './modules/login'
import personal from './modules/personal'
import menu from './modules/menu'
import signup from './modules/signup'

export const store = createStore({
    modules: {
        destination,
        login,
        personal,
        menu,
        signup,
    },
})