
const initialState = {
    products:[{
        id:1,
        item:'Apple',
        price:1000
        },
        {
        id:4,
        item:'Samsung',
        price:900
        },]
}
export const productReducer = (state = initialState ,action) =>{
    switch(action.type){
        case 'SET_PRODUCT':
            return {...state}
        default:
            return state
    }
}