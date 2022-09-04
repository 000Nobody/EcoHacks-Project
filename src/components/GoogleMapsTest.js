import React, { useRef } from 'react'
import { GoogleMap, useJsApiLoader, Marker, Autocomplete} from '@react-google-maps/api';

const containerStyle = {
  float: 'right',
  width: '70%',
  height: '1200px'
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
export function GoogleMapsTest() {
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