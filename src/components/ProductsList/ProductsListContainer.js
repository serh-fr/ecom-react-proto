import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import ProductsList from './ProductsList'
import { deleteProduct, editProduct, loadProductToEdit } from '../../redux/productsReducer'
import { addToCart } from '../../redux/cartReducer'

const mapStateToProps = state => {
    return {
        ...state.products
    }
}

const ProductsListContainer = compose(
    connect(mapStateToProps, { deleteProduct, editProduct, loadProductToEdit, addToCart })(ProductsList)
)

export default ProductsListContainer