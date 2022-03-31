const intialStore = {
  loading: false,
  data: [],
  error: "",
};

const searchMovieReducers = (store = intialStore, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return {
        ...store,
        loading: true,
      };

    case "SEARCH_MOVIE":
      return {
        ...store,
        loading: false,
        data: action.payload,
      };

    case "FETCH_USER_FAILURE":
      return {
        ...store,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return {
        ...store,
      };
  }
};

export default searchMovieReducers;
