import {Autocomplete} from '@react-google-maps/api';
/*import { findAllByDisplayValue } from '@testing-library/react'; need this??*/
import React, { useRef } from 'react';


const Route = () => {

  const startLoc=useRef();
  const endLoc=useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const start = document.getElementById("starting-point").value;
    const end = document.getElementById("destination").value;
    alert("Hello! \n Start: " + start + " End: " + end);
    /*Call function here using start and end maybe*/
  };

  return (
    <div className = "route">
        <h1 className ="route-title">ROUTE</h1>
        <form id="route-form" onSubmit={handleSubmit}>
          <label for="starting-point">Starting Point: </label>
          <Autocomplete><input type="text" id="starting-point" placeholder = "start" ref={startLoc} required></input></Autocomplete>
          <br />
          <br />
          <label for="destination">Destination: </label>
          <Autocomplete><input type="text" id="destination" placeholder="end" ref ={endLoc} required></input></Autocomplete>
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
/*
const footprint = document.getElementById('carbon-footprint');

const generateFootprint = (miles,gasMileage) => {
  let gallons = miles/gasMileage;
  footprint.textContent = gallons * 20;
}

generateFootprint(50,80);*/

export default Route