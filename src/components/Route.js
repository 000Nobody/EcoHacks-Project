import {Autocomplete} from '@react-google-maps/api';
import React, { useRef } from 'react';


export function Route() {

  const startLoc=useRef()
  const endLoc=useRef()

  return (
    <div className = "route">
        <h1 className ="route-title">ROUTE</h1>
        <form id="route-form">
          <label for="starting-point">Starting Point: </label>
          <Autocomplete><input type="text" id="starting-point" placeholder = "start" ref={startLoc} required></input></Autocomplete>
          <br />
          <br />
          <label for="destination">Destination: </label>
          <Autocomplete><input type="text" id="destination" placeholder="end" ref ={endLoc} required></input></Autocomplete>
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