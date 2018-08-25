import { CarritoActionTypes } from '../actions/CarritoActions';
import { PaymentsActionTypes } from '../actions/PaymentsActions';

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

export const getTotal = (carritoList) => {
    return getCheckoutListArray(carritoList).reduce((acc, item) => {
        const itemTotal = item.amount * item.price
        return (+acc + +(itemTotal.toFixed(2))).toFixed(2)
    } , 0);
}

export default function CarritoReducer (state: CheckoutState = {}, action: Action) {
    switch (action.type) {
        case CarritoActionTypes.CARRITO_ERROR:
        case PaymentsActionTypes.end:
            return {};
        case CarritoActionTypes.CARRITO_SUCCESS:
            return state;
        case CarritoActionTypes.CARRITO_UPDATE:
            return state
        case CarritoActionTypes.CARRITO_ADD_ITEM: 
            return {
                ...state,
                [action.payload._id]: CheckoutNewItem(action.payload)
            };
        case CarritoActionTypes.UPDATE_PLATE:
            return {
                ...state,
                [action.payload._id]: action.payload
            }
        case CarritoActionTypes.DELETE_PLATE:
            const newState  = { ...state };
            delete newState[action.payload._id];
            return newState;
        default:
            return state
    }
}