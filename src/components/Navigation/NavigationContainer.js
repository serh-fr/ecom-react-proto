import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Navigation from './Navigation'

const NavigationContainer = compose(
    connect(state => ({
        numberProductsToCart: state.cart.cartProducts.length
    }), {})(Navigation)
)

export default NavigationContainer