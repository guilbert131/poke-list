import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers";
import rootSaga from "./sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export default function configureReduxStore() {
  const store = configureStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
