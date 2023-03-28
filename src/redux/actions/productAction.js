export const setProduct = (products) => {
    return{
        type: 'SET_PRODUCT',
        payload:products
    }
}

export const selectedProduct = (product) => {
    return{
        type: 'SELECTED_PRODUCT',
        payload:product
    }
}

export const removedProduct = (product) => {
    return{
        type: 'REMOVED_PRODUCT',
        payload:product
    }
}