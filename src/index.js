import React from "react";
import ReactDOM from "react-dom";
import "../src/index.scss";
import Game from "./Game";

//Redux Stuff
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Store/reducers";
import thunk from "redux-thunk";
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,

  document.getElementById("root")
);
