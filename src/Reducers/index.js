import { combineReducers } from 'redux';
import Products from './Products'
import Cart from './Reducer_cart'
 const myReducer = combineReducers({
    Products : Products,
    Cart : Cart
 })
 export default myReducer;