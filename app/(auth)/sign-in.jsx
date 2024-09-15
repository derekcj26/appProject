import { Image, View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { router, Link} from 'expo-router';
const SignIn = () => {
  const[form, setForm]=useState({
    email: '',
    password: ''
  })
  const[isSubmitting,setIsSubmitting]=useState(false)
  const submit = () =>{}
  return (
    <SafeAreaView className = "bg-primary h-full font-psemibold">
      <ScrollView >
        <View className = "w-full justify-center px-4 items-center">
        <Image source = {images.logo}
        className="h-[30%] w-[60%] self-center mt-20" 
        />
        <FormField 
        title = "Email"
        value={FormField.email}
        handleChangeText={(e) => setForm({...form, email: e})}
        otherStyles ="mt-7 "
        keyboardType="email-address"
        />

        <FormField 
        title = "Password"
        value={FormField.password}
        handleChangeText={(e) => setForm({...form, password: e})}
        otherStyles ="mt-7  "
        />

        <CustomButton 
          title = "Sign-in"
          handlePress={()=>router.push('(tabs)/home')}
          containerStyles = "mt-7 w-11/12"
          isLoading ={isSubmitting}
          />

        <View className = "justify-center pt-5 flex-row">
          <Text className="text-lg text-white font-pregular">
            Don't have an account?
          </Text>
        <Link href="/sign-up" className="text-lg font-psemibold text-secondary">Sign Up</Link>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn