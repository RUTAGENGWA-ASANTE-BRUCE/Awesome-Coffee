import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import {SafeAreaProvider} from "react-native-safe-area-context"
import tw from "tailwind-react-native-classnames"

const HomeScreen = () => {
  return (
    <View style={{backgroundColor:"#1c1717",height:"100%",paddingTop:16}}>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})