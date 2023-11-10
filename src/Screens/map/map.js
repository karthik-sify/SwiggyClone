import React, { useEffect,useState } from 'react';
import { View, StyleSheet ,Text,Pressable} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import getUserLocation from "../../Services/GetLocation";
import requestLocationPermission from "../../Services/LocationPermission";

import styles from './style';


const MapComponent = () => {

  const [latitude,setLatitude]=useState(12.9895418)
  const [longitude,setLongitude]=useState(80.2492562)
  const [locationFlag,setLocationFlag]=useState(false);

  useEffect(()=>{
     accessLocation();
  },[])
  
  const accessLocation = async () => {
    setLocationFlag(true)
    if (await requestLocationPermission() === true) {
        try {
            const locationResult = await getUserLocation();  
            setLatitude(locationResult[0])
            setLongitude(locationResult[1])
            alert("location Stored")

        } catch (error) {
            console.error(error);
            alert('Location not accessed')
        }
    }
    setLocationFlag(false);
};
  return (
    <View style={styles.container}>
      {locationFlag && (<Text style={styles.Loading}>Retriving Location...</Text>)}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          longitudeDelta:0.1,
          latitudeDelta:0.1
        }}
        >
         { <Marker coordinate={{ latitude, longitude }} title="Marker Title" description="Marker Description" /> }
      </MapView>
    </View>
  );
};

export default MapComponent;
