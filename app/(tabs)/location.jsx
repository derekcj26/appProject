import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, Image } from 'react-native';
import * as Location from 'expo-location';
import locations from '../../data/locations.json';
import CustomMarker from '../../components/CustomMarker';
import BirdItem from '../../components/BirdItem';

const LocationScreen = () => {
  const [selectedBirdItem, setSelectedBirdItem] = useState(null);
  const [region, setRegion] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      setRegion({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    };

    fetchLocation();
  }, []);

  const handleMarkerPress = (location) => {
    setSelectedBirdItem(location);
  };

  const handleMapPress = (event) => {
    // Check if the press is near a marker by setting a threshold distance
    const { coordinate } = event.nativeEvent;
    let isMarkerPressed = false;

    for (const loc of locations) {
      const distance = Math.sqrt(
        Math.pow(loc.latitude - coordinate.latitude, 2) +
        Math.pow(loc.longitude - coordinate.longitude, 2)
      );

      if (distance < 0.001) { // Adjust this threshold based on the sensitivity you need
        isMarkerPressed = true;
        break;
      }
    }

    if (!isMarkerPressed) {
      setSelectedBirdItem(null);
    }
  };

  if (!region) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View className="items-center">
      <MapView
        className="h-full w-full"
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
        onPress={handleMapPress}
      >
        {locations.map((location) => (
          <CustomMarker
            key={location.id}
            location={location}
            onPress={() => handleMarkerPress(location)}
          />
        ))}
      </MapView>
      {selectedBirdItem && <BirdItem location={selectedBirdItem} />}
    </View>
  );
};

export default LocationScreen;
