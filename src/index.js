import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {AuthContextProvider} from './context/AuthContext.jsx'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MovieDetail from "./components/MovieDetail"
import {Provider} from "react-redux"
import store from "./redux/store"
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/movieDetail" element={<MovieDetail />}></Route>
      </Routes>
    </Provider>
  </Router>,
  document.getElementById("root")
);






