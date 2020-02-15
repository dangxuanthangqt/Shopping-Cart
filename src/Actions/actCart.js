import * as types from '../Constants/ActionTypes'
 export const AddToCart = (product)=>{
    return {
        type: types.ADD_CART,
        product : product
    }
 }
 export const changeQuantity = (value, id)=>{
     return {
         type : types.CHANGE_QUANTITY,
         value: value,
         id: id
     }
 }
 export const deleteItem = (id)=>{
     return {
         type : types.DELETE_ITEM,
        id: id
     }
 }

