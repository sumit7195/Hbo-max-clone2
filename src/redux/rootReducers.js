import { combineReducers } from "redux";
import trendingReducers from "./trendingReducers";
import popularReducers from "./popularReducers";
import movieDetailReducers from "./moviedetail";
import searchMovieReducers from "./searchMovieReducers";
const rootReducer = combineReducers({
  trending: trendingReducers,
  popular: popularReducers,
  detail: movieDetailReducers,
  search : searchMovieReducers
});

export default rootReducer;
