import { View, Text, Image } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps';
import images from '../constants/images';
import icons from '../constants/icons';

const CustomMarker = ({ location, onPress}) => {
  return (
    <Marker 
        onPress={onPress}
      coordinate={{
        latitude: location.latitude,
        longitude: location.longitude,
      }}
    >
      <Image
        source={icons.pin}
        style={{ width: 20, height: 20 }}
      />
    </Marker>
  )
}

export default CustomMarker