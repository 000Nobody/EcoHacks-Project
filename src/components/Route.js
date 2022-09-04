import { Autocomplete } from '@react-google-maps/api';
import React, { useState } from 'react';

async function getCarbonEmmission(start, end) {

  const directionService = new window.google.maps.DirectionsService()
  let results = await directionService.route({
    origin: start,
    destination: end,
    travelMode: window.google.maps.TravelMode.DRIVING
  })

  const distance = results.routes[0].legs[0].distance.value;
  alert("By taking this route, you would be emmitting " + calcCarbonEmmission(distance) + " grams of CO2 into the atmosphere.");

}

function calcCarbonEmmission(distance) {
  const distanceMeters = distance
  const distanceMiles = distanceMeters / 1609;
  const gallonsUsed = distanceMiles / 22; // assuming the car has 22mpg
  const co2Emitted = gallonsUsed * 8887; // grams of co2 

  return co2Emitted.toString();

}

const Route = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const start = document.getElementById("starting-point").value;
    const end = document.getElementById("destination").value;
    getCarbonEmmission(start, end)
  };

  return (
    <div className = "route">
        <h1 className ="route-title">ROUTE</h1>
        <form id="route-form" onSubmit={handleSubmit}>
          <label for="starting-point">Starting Point: </label>
          <Autocomplete><input type="text" id="starting-point" placeholder = "start" required></input></Autocomplete>
          <br />
          <br />
          <label for="destination">Destination: </label>
          <Autocomplete><input type="text" id="destination" placeholder="end" required></input></Autocomplete>
          <br />
          <button type="submit" id="submit">Submit </button>
        </form>
        <div className = "carbon-info">
            <h1 className = "carbon-footprint-title">Carbon Footprint</h1>
            <h2 className = "carbon-footprint">TEST</h2>
        </div>
    </div>
  )
}

export default Route