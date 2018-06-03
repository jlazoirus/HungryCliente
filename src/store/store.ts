import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './epics';
import logger from "./middlewares/Logger";

const initialState = {};
const epicMiddleware = createEpicMiddleware(rootEpic);
const middleware = applyMiddleware(logger, epicMiddleware, thunk);
let store = createStore(rootReducer, initialState, middleware);

export default store;