import { Carta } from '../../mocks/Carta';

export enum CartaActionTypes {
    CARTA_FETCH = '[CARTA] FETCH',
    CARTA_SUCCESS = '[CARTA] SUCCESS',
    CARTA_ERROR = '[CARTA] ERROR',

}

export const fetchCarta = (restaurantId: any) => {
    // return fetch('https://www.google.com/search?q=secret+sauce');
    // Coz We are using mocks , we will handle them as Promises
    return Promise.resolve(Carta.splice(0,4))
}

export const CartaFetchSuccess = (list) => ({
    type: CartaActionTypes.CARTA_SUCCESS,
    payload: list
});

// Function that return a Object
export const CartaFetchError = () => ({
    type: CartaActionTypes.CARTA_ERROR
})

// Function that returns a Function that returns a Promise
export const getCarta = (restaurantId) => (dispatch) => {
    return fetchCarta(restaurantId).then(
        list => dispatch(CartaFetchSuccess(list)),
        error => dispatch(CartaFetchError())
    );
}

export const CartaActions = {
    getCarta,
    fetchCarta,
}
