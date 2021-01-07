import axios from 'axios';
import * as actionTypes from './actionTypes';

const loginStart = () => {
    return {
        type:actionTypes.LOGIN_START
    }
}

const loginSucces = (token) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload:token
    }
}

const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        payload:error
    }
}

export const login = (email,password) =>async dispatch => {
    dispatch(loginStart());
    try {
        const { data } = await axios.post('/login', { email, password }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        localStorage.setItem('token',`Barrear ${data.token}`)
        dispatch(loginSucces(`Barrear ${data.token}`));
    } catch (err) {
        dispatch(loginFail(err.message));
    }
} 

