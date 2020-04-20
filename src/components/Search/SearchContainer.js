import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { searchProduct } from '../../redux/productsReducer'
import Search from './Search'

const SearchContainer = compose(
    connect(null, {searchProduct})
)(Search)

export default SearchContainer