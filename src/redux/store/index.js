// import {createStore, applyMiddleware, compose} from "redux";
// import {rootReducer} from "../reducers/index"
// import {forbiddenWordsMiddleware} from "../../js/middleware";
// import thunk from "redux-thunk";
//
// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
//
// export const store = createStore(rootReducer, storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk)))

import { createStore, applyMiddleware, compose } from "redux";
import {rootReducer} from "../reducers/index";
import { forbiddenWordsMiddleware } from "../../js/middleware";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../../js/sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    storeEnhancers(
        applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware)
    )
);

initialiseSagaMiddleware.run(apiSaga);
