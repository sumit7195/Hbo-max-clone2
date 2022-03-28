
const initalStore = {
    loading: false,
    data : [],
    error: ""
}



const popularReducers = (store=initalStore, action)=>{

  
    switch (action.type) {
      case "FETCH_USER_REQUEST":
        return {
          ...store,
          loadng: true,
        };

      case "FETCH_POPULAR":
        return {
          ...store,
          loading: false,
          data: action.payload,
        };

      case "fetchUserFailure":
        return {
          ...store,
          loading: false,
          data: action.payload,
        };

      default:
        return {
          ...store,
        };
    }




}


export default popularReducers;