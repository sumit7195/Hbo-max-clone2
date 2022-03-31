import axios from "axios";

export const fetchUserRequest = (loading) => {
  return {
    type: "FETCH_USER_REQUEST",
    loading: loading,
  };
};
export const fetchData = (data) => {
  return {
    type: "FETCH_DATA",
    payload: data,
  };
};

export const fetchPopular = (data) => {
  return {
    type: "FETCH_POPULAR",
    payload: data,
    loading: false,
  };
};

export const fetchUserFailure = () => {
  return {
    type: "FETCH_USER_FAILURE",
  };
};

export function fetch() {
  return function (dispatch) {
    dispatch(fetchUserRequest());

    return axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(({ data }) => {
        dispatch(fetchPopular(data));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
}

export function fetchLatest() {
  return function (dispatch) {
    dispatch(fetchUserRequest(true));

    return axios
      .get(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(({ data }) => {
        dispatch(fetchData(data));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
}

// movieDetails

export const fetchDetailMovie = (data) => {
  return {
    type: "FETCH_DETAIL_MOVIE",
    payload: data,
    loading: false,
  };
};

export function fetchMovieDetail(id, type) {
  return function (dispatch) {
    dispatch(fetchUserRequest(true));

    return axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`
      )
      .then(({ data }) => {
        dispatch(fetchDetailMovie(data));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
}

// search Movie

export const searchMovie = (data) => {
  return {
    type: "SEARCH_MOVIE",
    payload: data,
    error: "",
  };
};

export function searchMovieDetail(query) {
  // console.log(query);
  return function (dispatch) {
    dispatch(fetchUserRequest(true));

    return query !== undefined
      ? axios
          .get(
            `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=1&limit=5&include_adult=false&region=India`
          )
          .then(({ data }) => {
            dispatch(searchMovie(data.results));
          })
          .catch((error) => {
            dispatch(fetchUserFailure(error.message));
          })
      : dispatch(searchMovie(""));
  };
}
