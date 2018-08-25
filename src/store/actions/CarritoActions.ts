import { Carrito } from '../../mocks/Carrito';

export enum CarritoActionTypes {
    CARRITO_FETCH = '[CARRITO] FETCH',
    CARRITO_SUCCESS = '[CARRITO] SUCCESS',
    CARRITO_ERROR = '[CARRITO] ERROR',
    CARRITO_UPDATE = '[CARRITO] UPDATE',
    CARRITO_ADD_ITEM = '[CARRITO] ADD ITEM',
    UPDATE_PLATE = '[CARRITO] UPDATE ITEM',
    DELETE_PLATE = '[CARRITO] DELETE ITEM',

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

function addToCarrito(plate) {
    return {
        type: CarritoActionTypes.CARRITO_ADD_ITEM,
        payload: plate
    }
}

function updatePlate(payload) {
    return {
        type: CarritoActionTypes.UPDATE_PLATE,
        payload
    }
}

function deletePlate (payload) {
    return {
        type: CarritoActionTypes.DELETE_PLATE,
        payload
    }
}

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
    addToCarrito,
    updatePlate,
    deletePlate
}