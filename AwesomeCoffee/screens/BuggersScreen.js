import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import tw from "tailwind-react-native-classnames"
import {Icon} from "react-native-elements"
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const BuggersScreen = () => {
  const navigator = useNavigation();

  return (
       
    <View style={{backgroundColor:"#0e0e12",height:"100%",paddingTop:20,paddingLeft:15,paddingRight:15}}>
       <View style={tw`flex flex-row justify-between`}>
       <TouchableOpacity
            onPress={()=>navigator.navigate("HomeScreen")}
    
    >
    <LinearGradient
            colors={["#3b3b40", "#26262b",]}

            style={tw`rounded-md w-12 py-2.5 `}
          >
      
          
      <Icon color="white" name="chevron-left" type="fontawesome"/>
          </LinearGradient>
    </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require("../assets/logo.png")} style={tw`h-20 w-20`} />
            </TouchableOpacity>
        </View>
        
    </View>
  )
}

export default BuggersScreen

const styles = StyleSheet.create({})