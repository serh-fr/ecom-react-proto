import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import CartList from './CartList'
import { deleteFromCart } from '../../redux/cartReducer'

const CartContainer = compose(
    connect(state => ({
        ...state.cart
    }), { deleteFromCart })(CartList)
)

export default CartContainer