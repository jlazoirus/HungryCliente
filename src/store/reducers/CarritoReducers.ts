import { CarritoActionTypes } from '../actions/CarritoActions';
import { Carrito } from '../../mocks/Carrito';


type Action = {
    type: string,
    payload: any
}

type CheckoutState = {
    [key: string]: any
}

export function getCheckoutListArray (state = {}) {
    return Object.keys(state).map(key => state[key]);
}

export const CheckoutNewItem  = (item) => {
    return {
        ...item,
        amount: 1
    }
}


export default function CarritoReducer (state: CheckoutState = {}, action: Action) {
    switch (action.type) {
        case CarritoActionTypes.CARRITO_ERROR:
            return [];
        case CarritoActionTypes.CARRITO_SUCCESS:
            return state;
        case CarritoActionTypes.CARRITO_UPDATE:
            return state
        case CarritoActionTypes.CARRITO_ADD_ITEM: 
            return {
                ...state,
                [action.payload._id]: CheckoutNewItem(action.payload)
            };
        default:
            return state
    }
}