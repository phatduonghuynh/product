import { ACTION_TYPES } from "../constants/action-types"

const initialState = {
    products: [],
    product: {}, 
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_PRODUCTS:
            return {...state, products: action.payload}
        case ACTION_TYPES.SELECT_PRODUCT:
            return {...state, product: action.payload}
        case ACTION_TYPES.REMOVE_SELECTED_PRODUCT:
            return {...state, product: {}}
        default: 
        return state;
    }
}