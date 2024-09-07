import React from 'react'
import { useState } from 'react';
import { Pressable,StyleSheet, StatusBar,Animated, Image, View, Text, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import {useRef} from 'react';
import { icons } from '../../constants';
import { images } from '../../constants';
import { router, Link} from 'expo-router';

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const BANNER_H = 400;

const kereruScreen = () => {
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <>
			
    <Animated.ScrollView
    showsVerticalScrollIndicator={false}
        // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
        onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollA } } }],
            { useNativeDriver: true }
        )}
        className = "top-0 flex-1 bg-primary"
    >
        <View className = "items-center h-full">
<View className="items-center w-full">
  <Animated.Image
    style={styles.banner(scrollA)}
    resizeMode={'contain'}
    height={BANNER_H}
    source={icons.kereru}
  />

  <View className="absolute top-24 w-full flex-row justify-between items-center px-4">
  <Pressable onPress={()=> router.back()}>
    <Image source={icons.backButton} className="w-6 h-6" />
    </Pressable>
    <Image source={icons.profile} className="w-8 h-8" />
  </View>
    <View className ="absolute left-6 bottom-20 ">
  < Text className="text-6xl font-psemibold text-white">KERERU</Text>
    </View>
</View>

<View className="bg-primary h-full rounded-2xl">

    <View className="p-4">
        <Text className= " text-2xl font-psemibold left-4 text-white">STATUS:</Text>
        <Text className= " text-2xl font-psemibold left-4 text-white">LOCATION:</Text>
        <Text className= " text-2xl font-psemibold left-4 text-white">BIRD CALL:</Text>
        <Text className= " text-2xl font-psemibold left-4 text-white">DESCRIPTION:</Text>
        <Text className= " text-2xl font-psemibold left-4 text-white">STATUS:</Text>
        <Text className= " text-2xl font-psemibold left-4 text-white">POPULATION:</Text>
        <Text className= " text-2xl font-psemibold left-4 text-white">THREATS:</Text>
    </View>
    <Text className ="px-8 text-white font-pregular">
							Storyline
							Seventeen-year-old Henry Page (Austin Abrams) has never been in love.
							He fancies himself a romantic, but the kind of once-in-a-lifetime love he's been hoping for just hasn't happened yet.
							Then, on the first day of senior year, he meets transfer student Grace Town (Lili Reinhart) and it seems all that is about to change.
							When Grace and Henry are chosen to co-edit the school paper,
							he is immediately drawn to the mysterious newcomer.
							As he learns the heartbreaking secret that has changed her life, he finds himself falling in love with her - or at least the person he thinks she is.

                            Storyline
							Seventeen-year-old Henry Page (Austin Abrams) has never been in love.
							He fancies himself a romantic, but the kind of once-in-a-lifetime love he's been hoping for just hasn't happened yet.
							Then, on the first day of senior year, he meets transfer student Grace Town (Lili Reinhart) and it seems all that is about to change.
							When Grace and Henry are chosen to co-edit the school paper,
							he is immediately drawn to the mysterious newcomer.
							As he learns the heartbreaking secret that has changed her life, he finds himself falling in love with her - or at least the person he thinks she is.Storyline
							Seventeen-year-old Henry Page (Austin Abrams) has never been in love.
							He fancies himself a romantic, but the kind of once-in-a-lifetime love he's been hoping for just hasn't happened yet.
							Then, on the first day of senior year, he meets transfer student Grace Town (Lili Reinhart) and it seems all that is about to change.
							When Grace and Henry are chosen to co-edit the school paper,
							he is immediately drawn to the mysterious newcomer.
							As he learns the heartbreaking secret that has changed her life, he finds himself falling in love with her - or at least the person he thinks she is.Storyline
							Seventeen-year-old Henry Page (Austin Abrams) has never been in love.
							He fancies himself a romantic, but the kind of once-in-a-lifetime love he's been hoping for just hasn't happened yet.
							Then, on the first day of senior year, he meets transfer student Grace Town (Lili Reinhart) and it seems all that is about to change.
							When Grace and Henry are chosen to co-edit the school paper,
							he is immediately drawn to the mysterious newcomer.
							As he learns the heartbreaking secret that has changed her life, he finds himself falling in love with her - or at least the person he thinks she is.Storyline
							Seventeen-year-old Henry Page (Austin Abrams) has never been in love.
							He fancies himself a romantic, but the kind of once-in-a-lifetime love he's been hoping for just hasn't happened yet.
							Then, on the first day of senior year, he meets transfer student Grace Town (Lili Reinhart) and it seems all that is about to change.
							When Grace and Henry are chosen to co-edit the school paper,
							he is immediately drawn to the mysterious newcomer.
							As he learns the heartbreaking secret that has changed her life, he finds himself falling in love with her - or at least the person he thinks she is.Storyline
							Seventeen-year-old Henry Page (Austin Abrams) has never been in love.
							He fancies himself a romantic, but the kind of once-in-a-lifetime love he's been hoping for just hasn't happened yet.
							Then, on the first day of senior year, he meets transfer student Grace Town (Lili Reinhart) and it seems all that is about to change.
							When Grace and Henry are chosen to co-edit the school paper,
							he is immediately drawn to the mysterious newcomer.
							As he learns the heartbreaking secret that has changed her life, he finds himself falling in love with her - or at least the person he thinks she is.Storyline
							Seventeen-year-old Henry Page (Austin Abrams) has never been in love.
							He fancies himself a romantic, but the kind of once-in-a-lifetime love he's been hoping for just hasn't happened yet.
							Then, on the first day of senior year, he meets transfer student Grace Town (Lili Reinhart) and it seems all that is about to change.
							When Grace and Henry are chosen to co-edit the school paper,
							he is immediately drawn to the mysterious newcomer.
							As he learns the heartbreaking secret that has changed her life, he finds himself falling in love with her - or at least the person he thinks she is.Storyline
							Seventeen-year-old Henry Page (Austin Abrams) has never been in love.
							He fancies himself a romantic, but the kind of once-in-a-lifetime love he's been hoping for just hasn't happened yet.
							Then, on the first day of senior year, he meets transfer student Grace Town (Lili Reinhart) and it seems all that is about to change.
							When Grace and Henry are chosen to co-edit the school paper,
							he is immediately drawn to the mysterious newcomer.
							As he learns the heartbreaking secret that has changed her life, he finds himself falling in love with her - or at least the person he thinks she is.Storyline
							Seventeen-year-old Henry Page (Austin Abrams) has never been in love.
							He fancies himself a romantic, but the kind of once-in-a-lifetime love he's been hoping for just hasn't happened yet.
							Then, on the first day of senior year, he meets transfer student Grace Town (Lili Reinhart) and it seems all that is about to change.
							When Grace and Henry are chosen to co-edit the school paper,
							he is immediately drawn to the mysterious newcomer.
							As he learns the heartbreaking secret that has changed her life, he finds himself falling in love with her - or at least the person he thinks she is.





							</Text>


</View>

</View>
    </Animated.ScrollView>
</>
);
};

const styles = StyleSheet.create({
title: {
color: '#000',
fontSize: 24,
fontWeight: '600',
lineHeight: 26,
padding: 20,
paddingBottom: 0,

},
TextView: {
justifyContent: 'center',
backgroundColor: '#fff',
borderTopLeftRadius: 30,
borderTopRightRadius: 30,
top: -30,

},
banner: scrollA => ({
height: BANNER_H,
transform: [{
    translateY: scrollA,
},
{
    scale: scrollA.interpolate({
        inputRange: [-BANNER_H, 5, BANNER_H, BANNER_H + 2],
        outputRange: [3, 1, 1.5, 3]
    })
}
]
}),
sectionContainer: {
marginTop: 32,
paddingHorizontal: 24,
},
sectionTitle: {
fontSize: 24,
fontWeight: '600',
color: Colors.black,
},
sectionDescription: {
marginTop: 8,
fontSize: 18,
fontWeight: '400',
color: Colors.dark,
},
highlight: {
fontWeight: '700',
},
footer: {
color: '#000',
fontSize: 16,
fontWeight: '400',
lineHeight: 24,
padding: 20,
marginBottom: 100,

},
});
export default kereruScreen