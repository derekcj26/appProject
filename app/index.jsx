import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants';
import CustomButton from '../components/CustomButton';


export default function App() {
  return (
    < SafeAreaView className = "bg-primary h-full px-5 font-psemibold">
      <ScrollView contentContainerStyle ={{height:'100%'}}>
        <View className ="w-full justify-center items-center min-h-[55vh]">
          <Image 
          source={images.logo}
          className = "max-w-[380px] w-full h-[300px]"
          resizeMode="contain"
          />
        </View>

        <View className = "relative top-[-10%] ">
          <Text className="text-3xl top-[-25%] text-white font-psemibold text-center">
          Discover Aoeteroa's Native Birds
          </Text>

          <CustomButton
            title = "Continue with Email"
            handlePress={()=>router.push('/sign-in')}
            containerStyles = "mt-10 bg-white font-psemibold"
            
          />

        </View>

      </ScrollView>

      <StatusBar className = 'bg-primary'/>
    </SafeAreaView >
  );
}

 