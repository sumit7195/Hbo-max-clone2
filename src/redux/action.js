
import axios from "axios";


export const fetchUserRequest = () => {
  return {
    type: "FETCH_USER_REQUEST",
  };
};
export const fetchData = (data) => {
  return {
    type: "FETCH_DATA",
    payload: data
  };
};


export const fetchPopular  = (data)=>{
  
    return {
        type:"FETCH_POPULAR",
        payload: data,
        loading: false
    }

}





export const fetchUserFailure = () => {
  return {
    type: "FETCH_USER_FAILURE",
  };
};


export function fetch() {
  return function (dispatch) {
        dispatch(fetchUserRequest());

    return axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=b44716bfb3d62913eb0e7024880e9455")
      .then(({ data }) => {
        dispatch(fetchPopular(data));
      })
      .catch((error)=>{
          dispatch(fetchUserFailure(error.message))
      });
  };
}


export function fetchLatest(){

    return function (dispatch) {
      dispatch(fetchUserRequest());

      return axios
        .get(
          "https://api.themoviedb.org/3/trending/tv/day?api_key=b44716bfb3d62913eb0e7024880e9455"
        )
        .then(({ data }) => {
          dispatch(fetchData(data));
        })
        .catch((error) => {
          dispatch(fetchUserFailure(error.message));
        });
    };



}














// export const fetchUserRequest = () => {
//   return {
//     type: "FETCH_USER_REQUEST",
//   };
// };
