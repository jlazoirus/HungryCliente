import { CarritoActionTypes } from '../actions/CarritoActions';


type Action = {
    type: string,
    payload: any
}

export default function RestaurantsReducer (state = [], action: Action) {
    switch (action.type) {
        case CarritoActionTypes.CARRITO_ERROR:
            return [];
        case CarritoActionTypes.CARRITO_SUCCESS:
            return [...action.payload]
        default:
            return state;
    }
}