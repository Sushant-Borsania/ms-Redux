import gameReducers from "./gameReducers";
import boardReducers from "./boardReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  gameReducers: gameReducers,
  boardReducers: boardReducers
});

export default rootReducer;
