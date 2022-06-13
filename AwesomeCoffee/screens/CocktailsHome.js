import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React from 'react'
import { BlurView } from "expo-blur";
import tw from "tailwind-react-native-classnames";

const CocktailsHome = () => {
  return (
    <ScrollView style={{paddingTop:17,padding:10,backgroundColor:"#18181b"}}>
      <View style={tw`flex flex-row justify-between`}>
      <View style={tw`flex flex-col`}>

        <Text style={tw`text-3xl mt-7 font-semibold text-white`}>Tonight</Text>
      <Text style={tw`text-center text-white text-xs mt-2 `}>Monday,Novemebr 25</Text>

      </View>
      <BlurView style={tw` rounded-xl   flex flex-col   p-2 pt-1 h-28 w-20 mt-2`}  tint="light" intensity={50}>
      <View style={{backgroundColor:"#3e3e42",height:20,width:20,borderRadius:75,marginLeft:20}}>
        <Text style={tw`m-auto text-white`}>3</Text>
      </View>
      <Image source={require('../assets/logo5.png')} style={{height:35,width:40,resizeMode:"contain",marginLeft:13}}/>
      <View style={tw`flex flex-row m-auto`}><Text style={tw`text-white text-sm`}>$</Text><Text style={tw`text-white mt-1 text-lg ml-0.5`}>20</Text></View>
      <Text style={tw`text-center text-gray-700 text-xs `}>Total Price</Text>
      </BlurView>
        
      </View>
    </ScrollView>
  )
}

export default CocktailsHome

const styles = StyleSheet.create({})