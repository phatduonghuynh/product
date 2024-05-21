import { ACTION_TYPES } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type: ACTION_TYPES.SET_PRODUCTS,
        payload: products,
    }
}

export const selectProduct = (product) => {
    return {
        type: ACTION_TYPES.SELECT_PRODUCT,
        payload: product,
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ACTION_TYPES.REMOVE_SELECTED_PRODUCT
    }
}