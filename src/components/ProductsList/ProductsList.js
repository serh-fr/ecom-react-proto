import React from 'react'
import Product from './Product/Product'
import cs from './productsList.module.css'

const ProductsList = ({productsList, productsHeader, searchStr, ...props}) => {

    return <div className={cs.productsList}>
        <div className={cs.productsHeaders}>
            {productsHeader.map(p => <div key={p}>
                {p}
            </div>)}
        </div>
        <div>
            {productsList.filter(p => p.title.toLowerCase().includes(searchStr)).map(p => <Product 
                key={p.id} 
                product={p} 
                {...props}/>)}
        </div>
    </div>
}

export default ProductsList