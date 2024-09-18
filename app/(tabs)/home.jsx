import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants';
import { StyleSheet, StatusBar,Animated, Image, View, Text,  FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { images } from "../../constants";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CircularProgress from 'react-native-circular-progress-indicator';


const Home = () => {

   const totalBirds = 100; // Total number of birds available to see
  const birdsSeen = 35;   // Number of birds seen by the user


  const events = [
    { id: '1', source: icons.fantail,title: 'SPECIES PROGRAMMES' }, 
    { id: '2', source: icons.pukeko,title: 'ATTRACTING BIRDS' },
    { id: '3', source: icons.banding,title: 'BIRD BANDING' },

  ];

  const renderEventItem = ({ item }) => (
    <TouchableOpacity className="mr-4">
    {/* Container for Image and Text */}
    <View className="relative rounded-xl overflow-hidden">
      
      {/* Bird Image */}
      <Image source={item.source} className="w-56 h-full" />

      {/* Text Overlay */}
      <View className="absolute bottom-0 left-0 right-0 p-2">
        <Text className="text-white font-pmedium text-xl">{item.title}</Text>
      </View>
    </View>
  </TouchableOpacity>
  );

  return (
    <SafeAreaView className ="bg-primary h-full">
      <ScrollView>

        <View className=" pb-48 w-full ">
            
        <View className="absolute top-12 w-full flex-row justify-between px-12">
					  <Image source={images.logo} className=" right-4 bottom-3 w-14 h-14"/>
            <Text className="font-psemibold text-white text-2xl right-5 ">HOME</Text>
            <Image source={icons.profile} className="w-6 h-6 " />	
          </View>
        
          <View className="  top-28 w-full ">
 
          <View className="left-16 flex-row items-center ">
                <View className="mr-4">
                  <CircularProgress 
                    value={birdsSeen}
                    maxValue={totalBirds}
                    radius={50}
                    duration={2000}
                    progressValueColor={'#ecf0f1'}
                    titleColor={'#ecf0f1'}
                    titleStyle={{fontWeight: 'bold'}}
                  />
                </View>
                <View className="flex-1">
                  <Text className="text-white font-psemibold text-lg">
                    Birds Seen
                  </Text>
                  <Text className="text-white font-pregular mt-2">
                    Seen {birdsSeen} out of {totalBirds} birds
                  </Text>
                </View>
              </View>                 
            <Text className="font-pregular text-white text-2xl left-6 pb-4 pt-10">BIRD OF THE DAY </Text>
            <View className="bg-white/60 w-11/12 h-40 left-4 rounded-2xl">
            <Image source ={icons.kereru}
            resizeMode='cover'
            className="w-full h-full rounded-2xl"
            />
            <Text className="text-white font-psemibold text-4xl -translate-y-10 left-4 ">KERERU</Text>
            </View>
      
            <Text className="font-pregular text-white text-2xl left-6 pb-4 pt-10">EVENTS NEAR YOU </Text>
            <View className="w-11/12 h-40 left-4 rounded-2xl">
              <FlatList
                data={events}
                renderItem={renderEventItem}
                keyExtractor={item => item.id}
                horizontal={true}  // Enables horizontal scrolling
                showsHorizontalScrollIndicator={false}
                className="p-1"
              />

            </View>
            
          </View>
        </View>
        

      


      </ScrollView>

    </SafeAreaView>
  )
}

export default Home
