const intialStore = {
  loading: false,
  data: [],
  error: "",
};

const trendingReducers = (store = intialStore, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return {
        ...store,
        loading: true,
      };

    case "FETCH_DATA":
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

export default trendingReducers;
