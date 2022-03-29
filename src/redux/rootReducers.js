import { combineReducers } from "redux";
import trendingReducers from "./trendingReducers";
import popularReducers from "./popularReducers";
import movieDetailReducers from "./moviedetail";

const rootReducer = combineReducers({
  trending: trendingReducers,

  popular: popularReducers,
  detail: movieDetailReducers,
});

export default rootReducer;
