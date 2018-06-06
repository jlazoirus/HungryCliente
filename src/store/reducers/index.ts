import { combineReducers } from "redux";
import UserReducer from './userReducer';
import CallInProgressReducer from "./CallInProgressReducer";
import expoFontReducer from "./expoFontReducer";
import RestaurantsReducer from './RestaurantsReducer';
import CategoriesReducer from './CategoriesReduce';
import CarritoReducer from './CarritoReducers';


export interface IStore {
    user: Object,
    callInProgress: number,
    expoFont: boolean,
    restaurants: any[],
    categories: any[],
    Carrito: any[],
}

const rootReducer = combineReducers({
    user: UserReducer,
    callInProgress: CallInProgressReducer,
    expoFont: expoFontReducer,
    restaurants: RestaurantsReducer,
    categories: CategoriesReducer,
    Carrito: CarritoReducer
});

export default rootReducer;