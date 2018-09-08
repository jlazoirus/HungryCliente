import * as _ from 'lodash';
import BaseHttpService from '../../services/baseHttpService';
import { Categories } from '../../mocks/Categories';

// https://facebook.github.io/react-native/docs/network.html

export enum CategoriesActionTypes {
    CATEGORIES_FETCH = '[CATEGORIES] FETCH',
    CATEGORIES_SUCCESS = '[CATEGORIES] SUCCESS',
    CATEGORIES_ERROR = '[CATEGORIES] ERROR',

}

const fetchCategories = async (filter) => {
    // const response = await fetch(BaseHttpService.urls.categories);
    // console.log('BaseHttpService.urls.categories: ', BaseHttpService.urls.categories);
    // const Categories = await response.json();
    // Coz We are using mocks , we will handle them as Promises
    let result = _.filter(Categories, (category) => {
        let matched = _.includes(category.name.toLowerCase(), filter.toLowerCase());
        return matched;
    });
    return Promise.resolve(result);
}

const CategoriesSuccess = (list) => ({
    type: CategoriesActionTypes.CATEGORIES_SUCCESS,
    payload: list
});

// Function that return a Object
const CategoriesError = () => ({
    type: CategoriesActionTypes.CATEGORIES_ERROR
})

let selectedCategory = {id:0};

const selectCategory = (categoryId: number) => {
    selectedCategory.id = categoryId;
};

const getCategorySelected = () => {
    selectedCategory.id;
};

// Function that returns a Function that returns a Promise
export const getAll = (filter: string) => (dispatch) => {
    return fetchCategories(filter).then(
        categories => dispatch(CategoriesSuccess(categories)),
        error => dispatch(CategoriesError())
    );
}


export const CategoriesActions = {
    getAll,
    selectCategory,
    getCategorySelected
}
