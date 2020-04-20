import React from 'react'
import {increment, decrement} from '../../../utils/helpers'

export const FormField = Element => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return <div className={`formField ${hasError && 'fieldError'}`}>
        <Element {...input} {...props}/>
        <span>{ hasError ? meta.error : ''}</span>
    </div>
}

export const FormFieldCounter = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    const {value, onChange} = input
    return <div className={`formField ${hasError && 'fieldError'}`}>
        <div className={'formCounter'}>
            <button 
                className={`button button_counter`} 
                onClick={() => {
                    onChange(increment(value))}} 
                type={'button'}>
                +
            </button>
            <input {...input} {...props} />
            <button 
                className={`button button_counter`} 
                onClick={() => {
                    onChange(decrement(value))}} 
                type={'button'}>
                -
            </button>
        </div>
        <span>{ hasError ? meta.error : ''}</span>
    </div>
}