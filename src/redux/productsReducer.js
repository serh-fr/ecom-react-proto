const DELETE_PRODUCT = 'DELETE_PRODUCT'
const EDIT_PRODUCT = 'EDIT_PRODUCT'
const ADD_PRODUCT = 'ADD_PRODUCT'
const LOAD_PRODUCT_TO_EDIT = 'LOAD_PRODUCT_TO_EDIT'
const SEARCH_PRODUCT = 'SEARCH_PRODUCT'

const initialState = {
    productsList: [
        {id: 1, title: '6.4" Смартфон Samsung Galaxy S10+ 128 ГБ красный', quantity: 12, price: '69999'},
        {id: 2, title: '15.6" Ноутбук Acer Aspire 3 A315-53-P8FK черный', quantity: 10, price: '22999'},
        {id: 3, title: 'Видеокарта MSI GeForce GTX 1650 SUPER GAMING X [GTX 1650 SUPER GAMING X 4G]', quantity: 3, price: '16599'},
        {id: 4, title: '50" (126 см) Телевизор LED Philips 50PUS6704 черный', quantity: 44, price: '38999'},
        {id: 5, title: 'ПК Acer Aspire XC-885 [DT.BAQER.027]', quantity: 5, price: '28899'},
        {id: 6, title: 'Оперативная память Kingston HyperX FURY Blue Series [HX318C10F/4] 4 ГБ', quantity: 8, price: '2299'},
        {id: 7, title: '27" Монитор Acer XZ271Abmiiphzx [UM.HX1EE.A12]', quantity: 34, price: '22999'},
        {id: 8, title: 'Процессор Intel Core i9-9900KF BOX', quantity: 15, price: '45999'},
        {id: 9, title: '23.8" Моноблок HP 24-f0085ur [4RK55EA]', quantity: 20, price: '30999'},
        {id: 10, title: '10.1" Планшет Dexp Ursus K11 32 ГБ 3G серый', quantity: 56, price: '7199'},
        {id: 11, title: 'Зеркальная камера Canon EOS 250D Kit 18-55mm IS STM серебристый', quantity: 34, price: '46999'},
        {id: 12, title: 'Проводная стереогарнитура Defender Aura HN-102 черный', quantity: 8, price: '450'},
        {id: 13, title: 'Wi-Fi роутер TP-LINK Archer C5400X', quantity: 24, price: '25499'},
        {id: 14, title: 'Холодильник LG GA-B499YQJL белый', quantity: 4, price: '34999'},
        {id: 15, title: 'Пылесос MIE Acqua серый', quantity: 7, price: '10199'}
    ],
    productsHeader: ['Title', 'Quantity', 'Price'],
    productsEditInitial: {
        id: null,
        title: null,
        quantity: null,
        price: null
    },
    searchStr: ''
}

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_PRODUCT_TO_EDIT: {
            return {
                ...state,
                productsEditInitial: action.product
            }
        }
        case DELETE_PRODUCT: {
            return {
                ...state,
                productsList: state.productsList.filter(i => i.id !== action.productId)
            }
        }
        case EDIT_PRODUCT: {
            return {
                ...state,
                productsList: state.productsList.map(p => p.id === action.product.id ? p = action.product : p)
            }
        }
        case SEARCH_PRODUCT: {
            return {
                ...state,
                searchStr: action.value
            }
        }
        case ADD_PRODUCT: {
            const product = {
                id: state.productsList.length + 1,
                ...action.product
            }
            return {
                ...state,
                productsList: [...state.productsList, product]
            }
        }
        default: return state
    }
}

export const deleteProduct = productId => ({type: DELETE_PRODUCT, productId})
export const addProduct = product => ({type: ADD_PRODUCT, product})
export const editProduct = product => ({type: EDIT_PRODUCT, product})
export const loadProductToEdit = product => ({type: LOAD_PRODUCT_TO_EDIT, product})
export const searchProduct = value => ({type: SEARCH_PRODUCT, value})

export default productsReducer