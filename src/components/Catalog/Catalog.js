import React from 'react'
import ProductsListContainer from '../ProductsList/ProductsListContainer'
import FooterContainer from '../Footer/FooterContainer'
import SearchContainer from '../Search/SearchContainer'

const Catalog = props => {
    return <>
        <SearchContainer />
        <ProductsListContainer />
        <FooterContainer />
    </>
}

export default Catalog