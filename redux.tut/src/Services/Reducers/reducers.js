import {ADD_TO_CART} from '../Constants'
//Defaine Intial state first

const initialStates={
    cartData:[]
}
export default function CartItem(state=initialStates,action)
{
switch(action.type){
    case ADD_TO_CART:
        return{
            ...state,
            cartData:action.date
        }
        break;
    default:
        return state
}
}