import axios from "axios";

export const FETCH_START = "FETCH_TACO_START";
export const FETCH_SUCCESS = "FETCH_TACO_SUCCESS";
export const FETCH_ERROR = "FETCH_TACO_ERROR";
export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const UPDATE_TYPE = "UPDATE_TYPE";

export function fetchVenues(city, queryType) {
    const REACT_APP_ID = process.env.REACT_APP_ID;
    const REACT_APP_SECRET = process.env.REACT_APP_SECRET;
    // console.log(REACT_APP_ID)
  // this is our "thunk" function. redux-thunk middleware
  // automatically gives us access to the dispatcher as a parameter
  return dispatch => {
    // we can kick off as many actions as we want,
    // whenever we want. allows our action creator to be asyncronous.
    dispatch({ type: FETCH_START });

    axios
    .get(`https://api.foursquare.com/v2/venues/search?client_id=${REACT_APP_ID}&client_secret=${REACT_APP_SECRET}&v=20180323&limit=20&near=${city}&query=${queryType}&&radius=10000`)
    .then(res => {
        // Code for handling API response
        console.log("FSQ", res.data.response.venues)
        dispatch({ type: FETCH_SUCCESS, payload: res.data.response.venues});
    })
    .catch(function() {
        // Code for handling errors
    });
  };
}