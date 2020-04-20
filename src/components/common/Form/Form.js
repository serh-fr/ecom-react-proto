import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, isNumber } from '../../../utils/validate'
import {FormField, FormFieldCounter} from '../FormControl/index'

const Input = FormField('input')

const Form = ({handleSubmit, labelButton}) => {

    return <form onSubmit={handleSubmit}>
        <Field type={'text'} placeholder={'Title product'} component={Input} name={'title'} validate={[required]} />
        <div>
            <Field 
              type={'text'} 
              name="quantity" 
              component={FormFieldCounter} 
              placeholder={'0'} 
              validate={[required, isNumber]}/>
        </div>
        <Field type={'text'} placeholder={'Price'} component={Input} name={'price'} validate={[required, isNumber]}/>
        <div>
            <button type={'submit'} className={`button button_add`}>{labelButton}</button>
        </div>
    </form>
}

export default reduxForm({
    form: 'Product'
})(Form)