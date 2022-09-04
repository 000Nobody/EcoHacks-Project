import { Autocomplete } from '@react-google-maps/api';
import React, { useState } from 'react';
async function getCarbonEmmission(start, end, mileage) {
const directionService = new window.google.maps.DirectionsService()
let results = await directionService.route({
  origin: start,
  destination: end,
  travelMode: window.google.maps.TravelMode.DRIVING
})
const distance = results.routes[0].legs[0].distance.value;
/*alert("By taking this route, you would be emmitting " + calcCarbonEmmission(distance) + " grams of CO2 into the atmosphere.");*/
document.getElementById("carbon-footprint").innerHTML = "Distance: " + Math.round(distance/1609) + " miles <br\><br\> By taking this route by car, you would be emmitting roughly " + calcCarbonEmmission(distance,mileage) + " grams of CO2 into the atmosphere. Please consider biking, walking, or taking public transit if possible!";
}
function calcCarbonEmmission(distance,mileage) {
const distanceMeters = distance
const distanceMiles = distanceMeters / 1609;
const gallonsUsed = distanceMiles / mileage; // based on user input
const co2Emitted = gallonsUsed * 8887; // grams of co2
return Math.round(co2Emitted).toString();
}
const Route = () => {
const handleSubmit = (event) => {
  event.preventDefault();
  const start = document.getElementById("starting-point").value;
  const end = document.getElementById("destination").value;
  const mileage = document.getElementById("mileage").value;
  getCarbonEmmission(start, end,mileage)
};
 
return (
  <div className = "route">
      <h1 className ="route-title">Carbon Footprint Route Calculator</h1>
      <form id="route-form" onSubmit={handleSubmit}>
        <label for="starting-point">Starting Point: </label>
        <Autocomplete><input type="text" id="starting-point" placeholder = "start" required></input></Autocomplete>
        <br />
        <br />
        <label for="destination">Destination: </label>
        <Autocomplete><input type="text" id="destination" placeholder="end" required></input></Autocomplete>
        <br />
        <label for="mileage">Estimated Gas Mileage: </label>
        <input type="text" id="mileage" placeholder="25" required></input>
        <br />
        <br />
        <button type="submit" id="submit">Submit</button>
        <br />
      </form>
      <div className = "carbon-info">
         {/*<h1 className = "carbon-footprint-title">Carbon Footprint</h1>*/}
         <h2 id = "carbon-footprint"></h2>
      </div>
  </div>
)
}
export default Route
