import { View, Text, Image,StatusBar,SafeAreaView} from 'react-native'
import {Tabs, Redirect} from 'expo-router';
import {icons} from '../../constants';


const TabIcon =({icon, color, name, focused}) =>{
  return(
    <View className = "items-center justify-center gap-2">
      <Image
      source = {icon}
      resizeMode="contain"
      tintColor={color}
      className ="w-6 h-6"
      />
      <Text className={`${focused ?  'font-psemibold':'font-pregular'}text-xs`}style ={{color:color}}>
        {name}
      </Text>
    </View>
  )
}



const TabsLayout = () => {
  return (
    <>
   
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#FFA001',
      tabBarInactiveTintColor: 'white',
      tabBarStyle:{
        backgroundColor:'rgb(96,157,38)',
        borderTopWidth: 0.3,
        borderTopColor: 'rgb(96,157,38)',
        height: 84,

      }
    }
  }
    >
      <Tabs.Screen
      name="home"
      options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({color, focused}) =>(
          <TabIcon 
          icon ={icons.home}
          color={color}
          focused = {focused}
          />
        )
      }}
      />
       <Tabs.Screen
      name="book"
      options={{
        title: 'book',
        headerShown: false,
        tabBarIcon: ({color, focused}) =>(
          <TabIcon 
          icon ={icons.book}
          color={color}
          focused = {focused}
          />
        )
      }}
      />
       <Tabs.Screen
      name="camera"
      options={{
        title: 'camera',
        headerShown: false,
        tabBarIcon: ({color, focused}) =>(
          <TabIcon 
          icon ={icons.camera}
          color={color}
          focused = {focused}
          />
        )
      }}
      />
       <Tabs.Screen
      name="location"
      options={{
        title: 'location',
        headerShown: false,
        tabBarInactiveTintColor: 'rgb(96,157,38)',
        tabBarIcon: ({color, focused}) =>(
          <TabIcon 
          icon ={icons.location}
          color={color}
          focused = {focused}
          />
        ),
        tabBarStyle: { color: 'blue' }, 
      }}
      />

<Tabs.Screen
      name="badge"
      options={{
        title: 'badge',
        headerShown: false,
        tabBarIcon: ({color, focused}) =>(
          <TabIcon 
          icon ={icons.badge}
          color={color}
          focused = {focused}
          />
        )
      }}
      />
    
    </Tabs>
    
    </>
  )
}

export default TabsLayout