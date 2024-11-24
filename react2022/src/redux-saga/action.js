
import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constant"
export const addtoCart=(data)=>{
    console.log("action called", data)
    return {
        type: ADD_TO_CART,
        data: data
    }
}
export const removeFromCart=(data)=>{
    console.log("action removeCart called", data)
    return {
        type: REMOVE_TO_CART,
         data
    }
}
export const emptyCart=(data)=>{
    console.log("action emptyCart Called", data)
    return {
        type: EMPTY_CART,
        
    }
}
