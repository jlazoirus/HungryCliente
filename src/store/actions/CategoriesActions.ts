import { Categories } from '../../mocks/Categories';

export enum CategoriesActionTypes {
    CATEGORIES_FETCH = '[CATEGORIES] FETCH',
    CATEGORIES_SUCCESS = '[CATEGORIES] SUCCESS',
    CATEGORIES_ERROR = '[CATEGORIES] ERROR',

}

const fetchCategories = (filter) => {
    // return fetch('https://www.google.com/search?q=secret+sauce');
    // Coz We are using mocks , we will handle them as Promises
    return Promise.resolve(Categories);
}

const CategoriesSuccess = (list) => ({
    type: CategoriesActionTypes.CATEGORIES_SUCCESS,
    payload: list
});

// Function that return a Object
const CategoriesError = () => ({
    type: CategoriesActionTypes.CATEGORIES_ERROR
})

// Function that returns a Function that returns a Promise
export const getAll = (filter: string) => (dispatch) => {
    return fetchCategories(filter).then(
        categories => dispatch(CategoriesSuccess(categories)),
        error => dispatch(CategoriesError())
    );
}


export const CategoriesActions = {
    getAll,
}
