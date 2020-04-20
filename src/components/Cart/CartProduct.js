import React, { useState } from 'react'
import cs from './cart.module.css'
import { increment, decrement } from '../../utils/helpers'

const CartProduct = ({product, deleteFromCart, calcTotalPrice}) => {

    const [count, setCount] = useState(1)

    let [price, setPrice] = useState(product.price)

    const handleChangeCount = e => {
        switch(e.target.name) {
            case 'inc': {
                if(count >= product.quantity) break
                setCount(increment(count))
                setPrice(price = +price + +product.price)
                break
            }
            case 'dec': {
                if(count <= 1) break
                setCount(decrement(count))
                setPrice(price = +price - +product.price)
                break
            }
            default: {}
        }
    }

    return <div className={cs.item}>
        <div className={cs.item__header}>
            <div className={cs.item__title}>
                {product.title}
            </div>
            <div className={cs.item_changeNumber}>
                <button name={'inc'} onClick={handleChangeCount} className={`button button_counter`}>+</button>
                <span>{count}</span>
                <button name={'dec'} onClick={handleChangeCount} className={`button button_counter`}>-</button>
            </div>
            <div className={cs.item__price}>
                {price > 999 ? Math.floor(price/1000) + ' ' + (price % 1000) + '₽' : price + '₽'}
            </div>
        </div>
        <div className={cs.item__footer}>
            <div>
                <button onClick={() => deleteFromCart(product.id)} className={`button button_delete`}>Delete</button>
            </div>
            <div className={cs.item__storage}>
                In storage: <span>{product.quantity}</span>
            </div>
        </div>
    </div>
}

export default CartProduct