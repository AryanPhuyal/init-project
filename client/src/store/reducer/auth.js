import * as actionTypes from '../action/actionTypes'
import updateUpdate from '../utils'

const token = localStorage.getItem('token')? localStorage.getItem('token'):null

const init = {
    token: token,
    loading: false,
    error:null
}

const loginStart = (state,action) => {
    return updateUpdate(state,{loading:true})
}

const loginSuccess = (state, action) => {
    return updateUpdate(state,{loading:false,token:action.payload})
}


const loginFail = (state, action) => {
    return updateUpdate(state,{loading:false,error:action.payload})
}

const reducer = (state = init, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return loginStart(state,action)
        case actionTypes.LOGIN_SUCCESS:
            return loginSuccess(state,action)
        case actionTypes.LOGIN_FAIL:
            return loginFail(state,action)
        case actionTypes.REGISTER_USER_START:
            return state;
        default:
            return state;
    }
}


export default reducer;