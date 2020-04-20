import React from 'react'
import CartProduct from './CartProduct'
import cs from './cart.module.css'

const CartList = ({cartProducts, ...props}) => {

    return <div className={cs.cart}>
        <h1>Cart {cartProducts.length > 0 && <span>products: {cartProducts.length}</span>}</h1>
        {cartProducts.length ? <div className={cs.cartContainer}>
            <div>
                {cartProducts.map(p => <CartProduct product={p} {...props}/>)}
            </div>
        </div> : 
        <div>
            Cart is empty    
        </div>}
    </div>
}

export default CartList