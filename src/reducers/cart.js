import * as types from '../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'))
var initialState = data ? data : [];
//var initialState = [];

const cart = (state = initialState, action) => {
    var { product, qty } = action;
    
    switch(action.type) {
        case types.ADD_TO_CART:
            var index = findProductInCart(product, state);
            if(index !== -1 ) {
                state[index].qty += 1;
            }
            else {
                state.push({
                    product,
                    qty
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case types.REMOVE_CART_ITEM:
            var index = findProductInCart(product, state);
            if(index !== -1) {
                state.splice(index,1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case types.UPDATE_CART_ITEM:
            var index = findProductInCart(product, state);
            if(index !== -1 ) {
                if(state[index].qty === 1 && qty === -1) {
                    state.splice(index,1);
                }
                else {
                    state[index].qty += qty;
                }
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        
        default: return [...state];
    }
};

var findProductInCart = (product, cart) => {
    var index = -1;
    if(cart.length > 0) {
        for(let i = 0; i < cart.length; i ++ ) {
            if(product.id === cart[i].product.id) {
                index = i;
                break;
            }
        }
    }
    
    return index;
}

export default cart;