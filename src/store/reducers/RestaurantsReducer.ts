import { RestaurantsActionTypes } from '../actions/RestaurantsActions';


type Action = {
    type: string,
    payload: any
}

export default function RestaurantsReducer (state = [], action: Action) {
    switch (action.type) {
        case RestaurantsActionTypes.RESTAURANTS_ERROR:
            return [];
        case RestaurantsActionTypes.RESTAURANTS_SUCCESS:
            return [...action.payload]
        default:
            return state;
    }
}