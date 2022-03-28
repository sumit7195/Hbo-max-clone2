import { combineReducers } from "redux";
import trendingReducers from "./trendingReducers";
import popularReducers from "./popularReducers";

const rootReducer = combineReducers({
  trending: trendingReducers,

  popular: popularReducers,
});

export default rootReducer;
