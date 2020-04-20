const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'

const initialState = {
    cartProducts: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART: {
            let addedProducts = [...state.cartProducts]
            if(!state.cartProducts.length) {
                addedProducts.push(action.product)
            } else if(!addedProducts.find(p => p.id === action.product.id)) {
                addedProducts.push(action.product)
            }
            return {
                ...state,
                cartProducts: addedProducts
            }
        }
        case DELETE_FROM_CART: {
            return {
                ...state,
                cartProducts: state.cartProducts.filter(p => p.id !== action.productId)
            }
        }
        default: return state
    }
}

export const addToCart = product => ({type: ADD_TO_CART, product})
export const deleteFromCart = productId => ({type: DELETE_FROM_CART, productId})

export default cartReducer