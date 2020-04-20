import React, { useState } from 'react'
import cs from '../productsList.module.css'
import ModalContainer from '../../common/Modal/ModalContainer';
import FormContainer from '../../common/Form/FormContainer';

const Product = ({product, deleteProduct, editProduct, loadProductToEdit, addToCart}) => {

    const [isOpenModal, setVisibleModal] = useState(false);

    const handleSubmit = formData => {
        setVisibleModal(false)
        editProduct(formData)
        loadProductToEdit({})
    }

    return <div className={cs.products}>
        <div className={cs.productTitle}>
            {product.title}
        </div>
        <div>
            {product.quantity} 
        </div>
        <div>
            {product.price.length > 4 ? product.price[0] + product.price[1] + ' ' + product.price.slice(2) + '₽' : product.price + '₽'}
        </div>
        <div>
            <button onClick={() => deleteProduct(product.id)} className={`button button_delete`}>Delete</button>
        </div>
        <div>
            <button onClick={() => {
                loadProductToEdit(product)
                setVisibleModal(true)
                }} className={`button button_edit`}>Edit</button>
        </div>
        <div>
            <button onClick={() => addToCart(product)} className={`button button_add-cart`}>Add to cart</button>
        </div>
        {isOpenModal && <ModalContainer setVisibleModal={setVisibleModal}>
            <FormContainer onSubmit={handleSubmit} labelButton={'Save'}/>
        </ModalContainer>}
    </div>
}

export default Product