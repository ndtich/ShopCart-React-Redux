import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import PropTypes from 'prop-types';
import { removeCartItem, updateCartItem, changeMessage } from './../actions/index';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                { this.showCart(cart) }
                { this.showCartResult(cart) }
            </Cart>
        );
    }

    showCart(Carts) {
        var result = null;
        var {  onRemoveCartItem, onUpDateCartItem, onChangeMessage } = this.props;
        //console.log(this.props);
        if(Carts.length > 0) {
            result = Carts.map((cart, index) => {
                return <CartItem key={index} cart={cart} onRemoveCartItem={ onRemoveCartItem } onUpdateCartItem={ onUpDateCartItem } onChangeMessage={ onChangeMessage }/>
            });
        }
        
        return  result;
    } 

    showCartResult(Carts) {
        var total = 0;
        if(Carts.length > 0) {
            for(let i = 0; i < Carts.length; i++ ) {
                total += Carts[i].product.price*Carts[i].qty;
            }
        }
        
        return  <CartResult total={total} />
    } 

}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: 
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    image: PropTypes.string.isRequired,
                    description: PropTypes.string.isRequired,
                    inventory: PropTypes.number.isRequired,
                    rating: PropTypes.number.isRequired
                })
            ,
            qty: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onRemoveCartItem: (product) => {
            dispatch(removeCartItem(product));
        },
        onUpDateCartItem: (product, qty) => {
            dispatch(updateCartItem(product,qty));
        },
        onChangeMessage: (message) => {
            dispatch(changeMessage(message));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
