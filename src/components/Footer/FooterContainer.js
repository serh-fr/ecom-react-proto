import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Footer from './Footer'
import { addProduct } from '../../redux/productsReducer'

const mapStateToProps = state => {
    return {
        products: state.products.productsList
    }
}

const FooterContainer =  compose(
    connect(mapStateToProps, {addProduct})
)(Footer)

export default FooterContainer