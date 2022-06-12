import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity } from 'react-native'
import {Icon} from "react-native-elements"
import tw from "tailwind-react-native-classnames"
import React from 'react'
const CoffeeDetail = () => {
  return (
    <SafeAreaView style={{backgroundColor:"#0e0e12",height:"100%",padding:3,paddingTop:23}}>
      <Image source={require("../assets/coffee2.jpg")} style={tw`w-full rounded-md h-80`} />
      <View style={tw`absolute flex flex-row justify-between w-11/12 top-10 left-5 mr-20`}>

      <TouchableOpacity style={tw``}>
    <LinearGradient
            colors={["#3b3b40", "#26262b",]}

            style={tw`rounded-md w-12 py-2.5 `}
          >
      
          
      <Icon color="white" name="chevron-left" type="fontawesome"/>
          </LinearGradient>
          
    </TouchableOpacity>

    <TouchableOpacity style={tw``}>
    <LinearGradient
            colors={["#3b3b40", "#26262b",]}

            style={tw`rounded-md w-12 py-2.5 `}
          >
      
          
      <Icon color="white" name="heart" type="ionicon"/>
          </LinearGradient>
          
    </TouchableOpacity>
      </View>
      <View style={tw`bg-red-300 rounded-xl absolute flex flex-row top-72 left-0.5 p-5 h-40 w-full`}>
        <View style={tw`w-6/12 h-full`}>
        <Text style={tw`mt-1 text-white font-bold text-xl`}>Cappuccino</Text>
        <Text style={tw` text-white text-base font-bold`}>With Oat Milk</Text>
        <View style={tw`flex flex-row mt-5`}>

        <Icon name="star" type="ionicon" style={tw``} color="#ba572f"/>
        <Text style={tw`font-semibold mt-1.5 ml-2 text-white text-xl`}>4.5<Text style={tw`text-sm`}>(6.899)</Text></Text>
        </View>
        </View>
        <View style={tw`w-6/12 pl-10 flex flex-col h-full`}>
        <View style={tw`flex flex-row`}>

        <TouchableOpacity style={tw``}>
    <LinearGradient
            colors={["#3b3b40", "#26262b",]}

            style={tw`rounded-md w-16 py-2.5 `}
          >
      
          
      <Icon color="#ba572f" name="cafe" type="ionicon"/>
        <Text style={tw`text-white m-auto`}>Coffee</Text>          
          </LinearGradient>
          
    </TouchableOpacity>

    <TouchableOpacity style={tw`ml-3`}>
    <LinearGradient
            colors={["#3b3b40", "#26262b",]}

            style={tw`rounded-md w-16 py-2.5 `}
          >
      
          
      <Icon color="#ba572f" name="water" type="ionicon"/>
        <Text style={tw`text-white m-auto`}>Milk</Text>          
          </LinearGradient>
          
    </TouchableOpacity>
        </View>
        <TouchableOpacity style={tw`mt-4`}>
    <LinearGradient
            colors={["#3b3b40", "#26262b",]}

            style={tw`rounded-md w-36 py-2.5 `}
          >
      
        <Text style={tw`text-white m-auto`}>Medium Roasted</Text>          
          </LinearGradient>
          
    </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CoffeeDetail

const styles = StyleSheet.create({})