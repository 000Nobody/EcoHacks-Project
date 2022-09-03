import React, { useRef } from 'react'
import { GoogleMap, useJsApiLoader, Marker, Autocomplete} from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '80vh',
  alignItems: 'center'
};

/*
//returns pounds of CO2 emitted
function C02Conv(miles,gasMilage) {
  let gallons = miles/gasMileage;
  return gallons * 20;
}*/

const center = {
  lat: -3.745,
  lng: -38.523
};
/*function calculatingRoute(){
  if(startLoc.current.value===''||endLoc.current.value===''){
    return
  }
  const direction
  return
}
*/
function GoogleMapsTest() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAWJtQDKBH-pWcSdqeuTiGIijpxHDqY8bs",
    libraries:['places']
  })
  const [distance, setDistance] = React.useState(null)
  const [duration, setduration] = React.useState(null)
  const [map, setMap] = React.useState(null)
  const startLoc=useRef()
  const endLoc=useRef()


  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  return isLoaded ? (
    <flex>
       <h2>
      <form id="route-form">
          <label for="starting-point">Starting Point: </label>
          <Autocomplete>
            <input type="text" placeholder='start' ref={startLoc}></input>
          </Autocomplete>
          <br></br>
          <label for="destination">Destination: </label>
          <Autocomplete>
          <input type="text" placeholder='end' ref={endLoc}></input>
          </Autocomplete>
        </form>
      </h2>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl:false
        }}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
     
    </flex>
  ) : <></>
}

export default React.memo(GoogleMapsTest)