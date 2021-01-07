
import * as actionTypes from './actionTypes'
import axios from 'axios'

// fetch product
const fetchProductStart = () => {
    return {
        type:actionTypes.FETCH_PRODUCT_START
    }
}
const fetchProductSuccess = (data) => {return {
    type: actionTypes.FETCH_PRODUCT_SUCCESS,
    payload:data
    } };
const fetchProductFAIL = (err) => { return {
    type: actionTypes.FETCH_PRODUCT_FAIL,
    payload:err
}
};
    
export const fetchProduct = (token) =>async dispatch => {
    dispatch(fetchProductStart())
    try {
        const {data} = await axios.get('/products', { headers: {authorization:token} })
        dispatch(fetchProductSuccess(data.data))
    } catch (err) {
        console.log(err);
        dispatch(fetchProductFAIL(err))
    }
 }



// add product 
const addProductStart = () => {return {
        type:actionTypes.ADD_PRODUCT_START
    }}
const addProductSuccess = (data) => {return {
    type: actionTypes.ADD_PRODUCT_SUCCESS,
    payload:data
    }};
const addProductFAil = (err) => {return {
    type: actionTypes.ADD_PRODUCT_FAIL,
    payload:err
}
};
    
export const addProduct = (token,{name,category,description,price}) =>async dispatch => {
    dispatch(addProductStart())
    try {
        const {data} = await axios.post('/products', {
            name,categoryId:category,price,description
        }, {
                headers: {
                authorization:token
            }
        })
        dispatch(addProductSuccess(data))
    } catch (err) {
        console.log(err)
        dispatch(addProductFAil(err))
    }
 };

// delete product 

const deleteProductStart = () =>{return {
        type:actionTypes
    }}
const deleteProductSuccess = () => {return {
        type:actionTypes
    }};
const deleteProductFail = () => {return {
        type:actionTypes
    }};
export const deleteProduct = () =>dispatch=> {};
