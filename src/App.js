import React, {useEffect, useState} from 'react';
import './App.css';
import { fetchVenues, updateLocation, updateType, fetchLocation } from "./actions/venueActions";
import { useSelector, useDispatch } from "react-redux";
import VenueList from './components/VenueList';
import Form from './components/Form'

function App(props) {
 console.log("APP.js",props)
 const dispatch = useDispatch();
 const state = useSelector(state => state);
 console.log("appstsate",state)

//  const [newLocation, setNewLocation] = useState("");
//  const [category, setCategory] = useState("tacos");
 const [categoryID, setCategoryID] = useState("4bf58dd8d48988d1c1941735");

  useEffect(() => {
    // kick off our asyncronous action creator
    dispatch(fetchLocation())
  }, []);

  useEffect(()=>{
    dispatch(fetchVenues(state.userLocation, categoryID))
  },[state.userLocation])

  useEffect(()=>{
    dispatch(fetchVenues(state.location, categoryID))
  },[categoryID])

  

  return (
    <div className="App">
      
      <Form
      //location
      userLocation={state.userLocation} 
      //id
      categoryID={categoryID}
      setCategoryID={setCategoryID}
      //user Location
      userLocation={state.userLocation}
      />

      <VenueList
      userLocation={state.userLocation}
        categoryID={categoryID}
        venues={state.venues}/>
    </div>
  );
}

// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     isLoading: state.isLoading,
//     venues: state.venues,
//     error: state.error
//   };
// }

// const mapDispatchToProps = {
//   // send a version of our action creator that's attached to
//   // the dispatcher to the component as a prop
//   fetchVenues,
//   updateLocation,
//   updateType
// };

export default App;
