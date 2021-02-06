import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducer/rootReducer";
import thunk from "redux-thunk";
// middleware Saga
import createMiddleWareSaga from "redux-saga"; // b1
import {rootSaga} from "../src/saga/rootSaga" // b2
const middlewareSaga = createMiddleWareSaga(rootSaga);// b3
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, middlewareSaga)) // b4
);
middlewareSaga.run(rootSaga) // b5
ReactDOM.render(
 
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
