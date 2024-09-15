import { Image, View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {
  const[form, setForm]=useState({
    username:'',
    email: '',
    password: ''
  })
  const[isSubmitting,setIsSubmitting]=useState(false)
  const submit = () =>{}
  return (
    <SafeAreaView className = "bg-primary h-full">
      <ScrollView>
        <View className = "w-full justify-center items-center px-4 ">
        <Image source = {images.logo}
        className="h-[30%] w-[60%] mt-20"/>

        <FormField 
        title = "Username"
        value={FormField.username}
        handleChangeText={(e) => setForm({...form, username: e})}
        otherStyles =""
        />

        <FormField 
        title = "Email"
        value={FormField.email}
        handleChangeText={(e) => setForm({...form, email: e})}
        otherStyles ="mt-7"
        keyboardType="email-address"
        />

        <FormField 
        title = "Password"
        value={FormField.password}
        handleChangeText={(e) => setForm({...form, password: e})}
        otherStyles ="mt-7"
        />

        <CustomButton 
          title = "Sign-Up"
          handlePress = {submit}
          containerStyles = "mt-7 w-11/12"
          isLoading ={isSubmitting}
          />

        <View className = "justify-center pt-5 flex-row">
          <Text className="text-lg text-gray-100 font-pregular">
            Have an account already?
          </Text>
        <Link href="/sign-in" className="text-lg font-psemibold text-secondary">Sign in</Link>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp