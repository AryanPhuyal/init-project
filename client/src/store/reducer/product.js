import * as actionTypes from '../action/actionTypes' 
import updateObject from '../utils'
const init = {
    products: [],
    error: null,
    success: null,
    loading: false,
    
}

const fetchProductStart = (state, action) => {
    return updateObject(state,{loading:true})
}
const fetchProductSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        products: action.payload
    });

};
const fetchProductFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error:action.payload
    });

};


const addProductStart = (state, action) => {
    return updateObject(state, {
        loading: true
        
    });
    
}
const addProductSuccess = (state, action) => {
    const products = state.products;
    products.upshift(action.payload)
    return updateObject(state, {
        loading: false,
        products:products
        
    });

};
const addProductFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error:action.payload
    });

};




const reducer = (state = init, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT_START:
            return addProductStart(state, action)
        case actionTypes.ADD_PRODUCT_SUCCESS:
            return addProductSuccess(state, action)
        case actionTypes.ADD_PRODUCT_FAIL:
            return addProductFail(state, action);
        case actionTypes.FETCH_PRODUCT_START:
            return fetchProductStart(state, action)
        case actionTypes.FETCH_PRODUCT_SUCCESS:
            return fetchProductSuccess(state, action)
        case actionTypes.FETCH_PRODUCT_FAIL:
            return fetchProductFail(state,action)
            
            
    
        default:
            return state;
    }
    
}

export default reducer;

