import * as types from './../constants/ActionType';

export const addToCard = (product, qty) => {
    return {
        type: types.ADD_TO_CART,
        product,
        qty
    }
}

export const changeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}

export const removeCartItem = (product) => {
    return {
        type: types.REMOVE_CART_ITEM,
        product
    }
}

export const updateCartItem = (product, qty) => {
    return {
        type: types.UPDATE_CART_ITEM,
        product,
        qty
    }
}