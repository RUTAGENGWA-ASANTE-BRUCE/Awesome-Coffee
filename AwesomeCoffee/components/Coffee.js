import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,Image,TextInput,FlatList,Pressable } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import React from 'react'
import {SafeAreaProvider} from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames"
import {Icon} from "react-native-elements"
import {useState} from 'react'


const Coffee = ({coffeeImage,coffeePrice,madeOf}) => {
    const navigator = useNavigation();

  return (
    <TouchableOpacity style={tw`mr-5`}    onPress={() => navigator.navigate("CoffeDetail")}>
    <LinearGradient
            colors={["#3b3b40", "#26262b",]}
            style={tw`rounded-md w-44 p-2 h-60 `}
        >
        {/* <View style={{backgroundImage:linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0));}}/> */}
        <Image source={coffeeImage} style={tw`rounded-md w-full h-32`} />
        <Text style={tw`mt-1 text-white text-xl font-semibold`}>Cappuccino</Text>
        <Text style={tw` text-gray-500 text-sm`}>With {madeOf}</Text>
        <View style={tw`flex flex-row justify-between`}>
 
        <Text style={tw`text-white text-lg`}>
        <Text style={{color:"#ba572f"}}>$</Text> {coffeePrice}
        </Text>
        <Pressable style={{height:30,borderRadius:6,width:30,backgroundColor:"#ba572f"}}>
            <Icon name="add" type="ionicon" color="white" style={tw`mt-0.5`}/>
        </Pressable>
        </View>
        </LinearGradient>
        </TouchableOpacity>
  )
}

export default Coffee

const styles = StyleSheet.create({})