import React from 'react'
import { initialize } from 'redux-form'
import {connect} from 'react-redux';

import Form from './Form'

const FormContainer = ({quantity, title, ...props}) => {

    let {product, initializeProduct} = props
    
    initializeProduct(product)

    return <Form onSubmit={props.onSubmit} labelButton={props.labelButton}/>

}

const mapStateToProps = state => {
    return {
        product: state.products.productsEditInitial
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initializeProduct: product => {
            dispatch(initialize('Product', product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)