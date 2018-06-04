import { Locales } from '../../mocks/Locales';

export enum RestaurantsActionTypes {
    RESTAURANTS_FETCH = '[RESTAURANTS] FETCH',
    RESTAURANTS_SUCCESS = '[RESTAURANTS] SUCCESS',
    RESTAURANTS_ERROR = '[RESTAURANTS] ERROR',

}

const fetchRestaurants = (filter) => {
    // return fetch('https://www.google.com/search?q=secret+sauce');
    // Coz We are using mocks , we will handle them as Promises
    return Promise.resolve(Locales.splice(0,4))
}

const RestaurantsSuccess = (list) => ({
    type: RestaurantsActionTypes.RESTAURANTS_SUCCESS,
    payload: list
});

// Function that return a Object
const RestaurantsError = () => ({
    type: RestaurantsActionTypes.RESTAURANTS_ERROR
})

// Function that returns a Function that returns a Promise
export const getAll = (filter: string) => (dispatch) => {
    return fetchRestaurants(filter).then(
        restaurants => dispatch(RestaurantsSuccess(restaurants)),
        error => dispatch(RestaurantsError())
    );
}
    

export const RestaurantsActions = {
    getAll,
}
