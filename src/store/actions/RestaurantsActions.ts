import { Locales } from '../../mocks/Locales';
import { shuffle } from '../../shared/utils';

export enum RestaurantsActionTypes {
    RESTAURANTS_FETCH = '[RESTAURANTS] FETCH',
    RESTAURANTS_SUCCESS = '[RESTAURANTS] SUCCESS',
    RESTAURANTS_ERROR = '[RESTAURANTS] ERROR',

}

const fetchRestaurants = (filter) => {
    return Promise.resolve(shuffle(Locales, 5))
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
export const getAll = (filter: string) => async (dispatch) => {
    try {
        const restaurants = await fetchRestaurants(filter);
        dispatch(RestaurantsSuccess(restaurants));
    } catch (error) {
        dispatch(RestaurantsError())
    }
}

export const RestaurantsActions = {
    getAll,
}