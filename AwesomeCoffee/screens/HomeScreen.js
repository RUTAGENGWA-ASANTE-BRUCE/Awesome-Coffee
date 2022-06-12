import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native'
// import { LinearGradient } from "expo-linear-gradient";
import React from 'react'
import {SafeAreaProvider} from "react-native-safe-area-context"
import tw from "tailwind-react-native-classnames"
import {Icon} from "react-native-elements"
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw``}>
    
    <View style={{backgroundColor:"#0e0e12",height:"100%",paddingTop:20,paddingLeft:10,paddingRight:10}}>
    <View style={tw`flex flex-row justify-between`}>
    <TouchableOpacity>
    <LinearGradient
            colors={["#09db9f", "#48e0b5", "#1bcc9a"]}
            start={[0, 1]}
            end={[1, 0]}
            style={tw`rounded-md w-40 py-2.5 `}
          >
      
          
      <Icon color="white" name="apps" type="ionicon"/>
          </LinearGradient>
    </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})