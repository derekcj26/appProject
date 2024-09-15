import { useState } from 'react';
import { StyleSheet, StatusBar,Animated, Image, View, Text, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import {useRef} from 'react';
import { icons } from '../../constants';
import { router, Link} from 'expo-router';
import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const BANNER_H = 275;
const book = () => {
  const [data, setData] = useState([
    { id: '1', title: 'KERERU', image: icons.kereru, screen: 'kereruScreen' },
    { id: '2', title: 'TUI', image: icons.tui, screen: 'tuiScreen' },
    { id: '3', title: 'TAKAHE', image: icons.takahe, screen: 'takaheScreen' },
    { id: '4', title: 'PUKEKO', image: icons.pukeko, screen: 'pukekoScreen' },
    { id: '5', title: 'FANTAIL', image: icons.fantail, screen: 'fantailScreen' },
    { id: '6', title: 'KEA', image: icons.kea, screen: 'keaScreen' },
  ]);

  const [isAscending, setIsAscending] = useState(true);

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => {
      if (isAscending) {
        return a.title > b.title ? 1 : -1;
      } else {
        return a.title < b.title ? 1 : -1;
      }
    });
    setData(sortedData);
    setIsAscending(!isAscending);
  };
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
          <View className="items-center w-full ">
            <Animated.Image
              style={styles.banner(scrollA)}
              resizeMode={'contain'}
              height={BANNER_H}
              source={
            require('../../assets/images/learningCenterBG.jpeg')
              }
            />
                <View className="absolute top-24 items-center">
                  <Text className="text-2xl font-psemibold text-white">LEARNING CENTRE</Text>
                </View>
                <View className="absolute right-12 top-24">
					<Image source={icons.profile} className="w-6 h-6" />	
                </View>

                
            <View className="absolute p-4 bottom-4 right-2">
              <TouchableOpacity
                className="bg-white px-4 py-2 rounded-xl right-5"
                onPress={handleSort}
              >
                <Text className="text-primary font-psemibold">Sort {isAscending ? 'A-Z':'Z-A' }</Text>
              </TouchableOpacity>
            </View>
          </View>


					<View className = "w-full bg-primary rounded-3xl items-center pb-8">
      
  <View className="top-8 justify-evenly w-full ml-4">
  <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <Link href={`(info)/${item.screen}`}>
      <View className=" top-2 flex w-[160px] h-[255px]  bg-darkg m-2 items-center rounded-2xl">
        <View className="top-8">
        <Image 
        source={item.image}
        className="w-[121px] h-[150px] rounded-2xl" // Sets the image dimensions
        resizeMode="" // Adjusts the image scaling
        />
        </View>
        <Text className=" absolute inset-x-0 bottom-6 text-2xl text-center font-semibold text-white ">{item.title}</Text>
      </View>
      </Link>
      
    )}
    numColumns={2}
    columnWrapperStyle={{
      justifyContent: 'center',
    }} // Makes sure columns are spaced evenly
    
  />
</View>					
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

export default book;
