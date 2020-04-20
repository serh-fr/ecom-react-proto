import React from 'react'
import cs from './search.module.css'

const Search = ({searchProduct}) => {

    const handleChange = e => {
        searchProduct(e.target.value.toLowerCase())
    }

    return <div className={cs.search}>
        <form>
            <input
                onChange={handleChange} 
                type={'text'} 
                placeholder={'Search Product'} 
                name={'searchProduct'} />
        </form>
    </div>
}

export default Search