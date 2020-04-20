import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import Modal from './Modal'
import { connect } from 'react-redux'
import { loadProductToEdit } from '../../../redux/productsReducer'

const ModalContainer = props => {
    const el = document.createElement('div')

    useEffect(() => {
        document.body.appendChild(el)

        return () => {
            document.body.removeChild(el)
        }
    })

    return ReactDOM.createPortal(<Modal {...props} />, el)
}

export default connect(null, {loadProductToEdit})(ModalContainer)