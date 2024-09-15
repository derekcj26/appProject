import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants';
import { StyleSheet, StatusBar,Animated, Image, View, Text,  FlatList, TouchableOpacity, ScrollView } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView className ="bg-primary h-full">
      <ScrollView>

        <View className=" w-full ">
            
          <View className="absolute right-12 top-12">
					  <Image source={icons.profile} className="w-6 h-6 " />	
          </View>
          <View className="absolute items-start top-28 w-full ">
            <Text className="font-psemibold text-white text-2xl left-6 pb-4">BIRD OF THE DAY </Text>
            <View className="bg-white/60 w-11/12 h-40 left-4 rounded-2xl">

            </View>
          </View>
        </View>
        

      


      </ScrollView>

    </SafeAreaView>
  )
}

export default Home