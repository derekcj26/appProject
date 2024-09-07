import React from 'react';
import { View, Text, Image } from 'react-native';
import { icons } from '../constants';
import { Link} from 'expo-router';



const BirdItem = ({ location }) => {

  const imageMap = {
    kea: require('../assets/icons/keaApp.jpeg'),
    fantail: require('../assets/icons/fantailApp.jpeg'),
    kereru: require('../assets/icons/kereruApp.jpeg'),
    pukeko: require('../assets/icons/pukekoApp.jpeg'),
    takahe: require('../assets/icons/takahaeApp.jpeg'),
    tui: require('../assets/icons/tuiApp.jpeg'),
  };

  // Get the image name from location
  const imageName = location.birdType.toLowerCase();

  // Retrieve the corresponding image from the map
  const imageSource = imageMap[imageName] || imageMap.default;

  // Check if location is undefined or null
  if (!location) {
    return (
      <View className="bg-white p-4 rounded-2xl shadow-md absolute bottom-6 left-0 right-0 items-center">
        <Text className="text-red-500">Error: No location data provided</Text>
      </View>
    );
  }

  return (
    <View className="absolute bottom-6  transform -translate-x-1/2 w-11/12 h-1/6">
      <View className="bg-white h-full rounded-3xl shadow-md p-1 flex-row items-start">
        <Image 
          source={imageSource} 
          className="h-32 w-32 rounded-2xl"
        />
        <View className="ml-4 flex-1">
          <Text className="text-xl font-psemibold text-gray-600">
            A {location.birdType} was spotted!
          </Text>
          <Text className="text-sm text-gray-500">
            This {location.birdType} was seen on: {location.date}
          </Text>
          <Text className="text-sm text-gray-500">
            It was seen at {location.time}
          </Text>
          <Text className="text-sm text-gray-500">
            Want to learn more about {location.birdType}'s?
          </Text>
          <Text className="text-sm ">
          <Link href={`(info)/${location.birdType.toLowerCase()}Screen`}className="text-bg-primary">Click here! </Link>
          </Text>
          
        </View>
      </View>
    </View>
  );
};

export default BirdItem;
