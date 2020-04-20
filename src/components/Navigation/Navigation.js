import React from 'react'
import { NavLink } from 'react-router-dom'
import cs from './navigation.module.css'

const Navigation = ({numberProductsToCart}) => {
    return <nav>
        <NavLink to={'/catalog'} activeClassName={cs.active}>Catalog</NavLink>
        <NavLink to={'/cart'} activeClassName={cs.active}>Cart {numberProductsToCart > 0 && <span>{numberProductsToCart}</span>}</NavLink>
    </nav>
}

export default Navigation