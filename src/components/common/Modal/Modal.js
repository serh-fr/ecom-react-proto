import React from 'react'

const Modal = ({children, setVisibleModal, loadProductToEdit}) => {
    return <div className={'modalOverlay'}>
        <div className='modal'>
            <div>
                {children}
            </div>
            <div className={'modalButtons'}>
                <button onClick={() => {
                    setVisibleModal(false)
                    loadProductToEdit({})}} className={`button button_cancel`}>Cancel</button>
            </div>
        </div>
    </div>
}

export default Modal