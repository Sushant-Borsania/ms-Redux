import React from "react";
import ReactDOM from "react-dom";
import "../src/index.scss";
import Game from "./Game";

//Redux Stuff
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Store/reducers";
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,

  document.getElementById("root")
);
