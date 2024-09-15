import { Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../constants/';

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="align-baseline text-base text-white font-pmedium">{title}</Text>
      <View
        className={`align-baseline border-b-2 border-white w-9/12 h-12 rounded-md items-center flex-row`}
        style={{ backgroundColor: isFocused ? 'rgba(255, 255, 255, 0.2)' : 'transparent' }}
      >
        <TextInput
          className=" align-baseline flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="darkg"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          onFocus={() => setIsFocused(true)}  // When input is focused
          onBlur={() => setIsFocused(false)}  // When input is blurred
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eyeHide : icons.eye}
              className=" w-6 h-6 items-right"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
