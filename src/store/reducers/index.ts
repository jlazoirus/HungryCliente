import { combineReducers } from "redux";
import UserReducer from './userReducer';
import CallInProgressReducer from "./CallInProgressReducer";
import expoFontReducer from "./expoFontReducer";
import RestaurantsReducer from './RestaurantsReducer';

export interface IStore {
    user: Object,
    callInProgress: number,
    expoFont: boolean,
    restaurants: any[],
}

const rootReducer = combineReducers({
    user: UserReducer,
    callInProgress: CallInProgressReducer,
    expoFont: expoFontReducer,
    restaurants: RestaurantsReducer
});

export default rootReducer;