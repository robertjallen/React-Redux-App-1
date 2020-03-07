import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {fetchDetails} from '../actions/venueActions'
import '../App.css';



export default function VenueDetails(props) {
    // console.log("details", props.history.location.state.venue.id)
    const id = props.history.location.state.venue.id
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [venueDetails, setVenueDetails] = useState(state.details)
    

    useEffect(()=>{
        dispatch(fetchDetails(id))
    },[])

    useEffect(()=>{
        setVenueDetails(state.details)
    },[state.details])
    
    useEffect(()=>{
        console.log("deets", venueDetails)
        // console.log(venueDetails.location.crossStreet)
    },[venueDetails])


    return (
            <div className="details-container">
                {venueDetails.bestPhoto && <img className="hero" src={venueDetails.bestPhoto.prefix + '900x700' + venueDetails.bestPhoto.suffix}/>}
                <div className="details-info">
                    <h3>{venueDetails.name}</h3>
                    <p>{venueDetails.url}</p>
                    {venueDetails.location && <>
                    {venueDetails.location.formattedAddress[0]}
                    {venueDetails.location.crossStreet}</>}
                    {venueDetails.contact && <p>{venueDetails.contact.formattedPhone}</p>}
                </div>
            </div>
        
    )
}

