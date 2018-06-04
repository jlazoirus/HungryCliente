import { CategoriesActionTypes } from '../actions/CategoriesActions';

type Action = {
    type: string,
    payload: any
}

export default function CategoriesReducer (state = [], action: Action) {
    switch (action.type) {
        case CategoriesActionTypes.CATEGORIES_ERROR:
            return [];
        case CategoriesActionTypes.CATEGORIES_SUCCESS:
            return [...action.payload]
        default:
            return state;
    }
}