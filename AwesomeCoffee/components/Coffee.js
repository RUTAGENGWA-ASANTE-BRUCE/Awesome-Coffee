import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,Image,TextInput,FlatList } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import React from 'react'
import {SafeAreaProvider} from "react-native-safe-area-context"
import tw from "tailwind-react-native-classnames"
import {Icon} from "react-native-elements"
import {useState} from 'react'


const Coffee = () => {
  return (
    <TouchableOpacity>
    <LinearGradient
            colors={["#3b3b40", "#26262b",]}
            style={tw`rounded-md w-44 p-2 h-60 `}
        >
        <Image source={require("../assets/coffee1.jpeg")} style={tw`rounded-md w-full h-32`} />
        <Text style={tw`mt-1 text-white text-xl`}>Cappuccino</Text>
        <Text style={tw` text-gray-500 text-sm`}>With Oak mIlk</Text>
        <Text style={tw`text-white text-lg`}><Icon name</Text>
        </LinearGradient>
        </TouchableOpacity>
  )
}

export default Coffee

const styles = StyleSheet.create({})