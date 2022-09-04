import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  float: 'right',
  width: '70%',
  height: '1200px'
};

const center = {
  lat: 0,
  lng: 0
};

export function GoogleMapsTest() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAWJtQDKBH-pWcSdqeuTiGIijpxHDqY8bs",
    libraries:['places']
  })
  const [map, setMap] = React.useState(null)

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
        zoom={3}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl:false
        }}
      >
        <></>
      </GoogleMap>
     
    </flex>
  ) : <></>
}

export default React.memo(GoogleMapsTest)