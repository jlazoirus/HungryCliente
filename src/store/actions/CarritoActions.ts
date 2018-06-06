import { Carrito } from '../../mocks/Carrito';

export enum CarritoActionTypes {
    CARRITO_FETCH = '[CARRITO] FETCH',
    CARRITO_SUCCESS = '[CARRITO] SUCCESS',
    CARRITO_ERROR = '[CARRITO] ERROR',
    CARRITO_UPDATE = '[CARRITO] UPDATE',

}

const fetchCarrito = (filter) => {
    return Promise.resolve(Carrito)
}

const CarritoSuccess = (list) => ({
    type: CarritoActionTypes.CARRITO_SUCCESS,
    payload: list
});

const UpdateCarrito = (list) => ({
    type: CarritoActionTypes.CARRITO_UPDATE,
    payload: list
});

// Function that return a Object
const CarritoError = () => ({
    type: CarritoActionTypes.CARRITO_ERROR
})

// Function that returns a Function that returns a Promise
export const getAll = (filter: string) => (dispatch) => {
    return fetchCarrito(filter).then(
        CarritoItems => dispatch(CarritoSuccess(CarritoItems)),
        error => dispatch(CarritoError())
    );
}
    

export const CarritoActions = {
    getAll,
    UpdateCarrito,
}