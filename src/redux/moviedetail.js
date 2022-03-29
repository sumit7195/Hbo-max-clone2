const intialStore = {
  loading: false,
  data: [],
  error: "",
};

const movieDetailReducers = (store = intialStore, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return {
        ...store,
        loading: true,
      };

    case "FETCH_DETAIL_MOVIE":
      return {
        ...store,
        loading: false,
        data: [action.payload],
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

export default movieDetailReducers ;
