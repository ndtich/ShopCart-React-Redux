import React, { Component } from 'react';
import * as message from './../constants/Message';

class CartItem extends Component {
    onRemoveCartItem(product) {
        //console.log(product);
        this.props.onRemoveCartItem(product);
        this.props.onChangeMessage(message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    onUpdateCartItem(product,qty) {
        this.props.onUpdateCartItem(product,qty);
        //console.log(this.props);
        this.props.onChangeMessage(message.MSG_UPDATE_CART_SUCCESS);
    }

  render() {
    var { cart } = this.props;
    return (
        <tr>
            <th scope="row">
                <img src= { cart.product.image}
                    alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{ cart.product.name }</strong>
                </h5>
            </td>
            <td>{ cart.product.price } $</td>
            <td className="center-on-small-only">
                <span className="qty">{ cart.qty } </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label onClick = { () => { this.onUpdateCartItem(cart.product, -1) } } className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a
                            
                        >—</a>
                    </label>
                    <label onClick = { () => { this.onUpdateCartItem(cart.product, 1) } } className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a
                        
                        >+</a>
                    </label>
                </div>
            </td>
            <td>{ cart.product.price * cart.qty }$</td>
            <td>
                <button
                type="button" 
                className="btn btn-sm btn-primary waves-effect waves-light" 
                data-toggle="tooltip" 
                data-placement="top"
                title="" data-original-title="Remove item"
                onClick = { () => { this.onRemoveCartItem(cart.product) } }
                >
                    X
                </button>
            </td>
        </tr>   
    );
  }
}

export default CartItem;
