import React, { useState } from 'react'
import cs from './footer.module.css'
import ModalContainer from '../common/Modal/ModalContainer'
import FormContainer from '../common/Form/FormContainer';
import { CSVLink } from 'react-csv';

const Footer = ({products, addProduct}) => {

    const [isOpenModal, setVisibleModal] = useState(false);

    const handleSubmit = formData => {
        setVisibleModal(false)
        addProduct(formData)
    }

    return <div className={cs.footer}>
        <button onClick={() => setVisibleModal(true)} className={`button button_add`}>Add product</button>
        <CSVLink className={cs.downloadCsv} filename={'catalog.csv'} data={products}>Download catalog to .csv</CSVLink>
        {isOpenModal && <ModalContainer setVisibleModal={setVisibleModal}>
            <FormContainer onSubmit={handleSubmit} labelButton={'Add'}/>
        </ModalContainer>}
    </div>
}

export default Footer