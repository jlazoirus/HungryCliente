import { CarritoActionTypes } from '../actions/CarritoActions';
import { Carrito } from '../../mocks/Carrito';


type Action = {
    type: string,
    payload: any
}

export default function CarritoReducer (state = Carrito, action: Action) {
    switch (action.type) {
        case CarritoActionTypes.CARRITO_ERROR:
            return [];
        case CarritoActionTypes.CARRITO_SUCCESS:
            return [...action.payload];
        case CarritoActionTypes.CARRITO_UPDATE:
            return[...action.payload.map(item=>({...item}))];
        default:
            return state;
    }
}