import { createStore, combineReducers } from "redux"
import productsReducer from "./productsReducer"
import cartReducer from './cartReducer'
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    form: formReducer
})

const store = createStore(reducers)

export default store