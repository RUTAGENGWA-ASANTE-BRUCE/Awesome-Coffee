import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView } from 'react-native'
import tw from "tailwind-react-native-classnames";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import {Icon} from "react-native-elements"
import React from 'react'
import { useSelector } from 'react-redux';
import {selectChoosenBugger} from '../slices/navSlice'
import Bugger1 from "../assets/bugger1.png";
import Bugger2 from "../assets/bugger2.png";
import Bugger3 from "../assets/bugger3.png";
import Bugger4 from "../assets/bugger4.png";
const BuggerDetails = () => {
  const navigator = useNavigation();
  const bugger=useSelector(selectChoosenBugger)
  return (
    <ScrollView style={{paddingTop:17,backgroundColor:"#2c2c2e",padding:20}}>
    
    <View style={tw`flex flex-row justify-between`}>
       <TouchableOpacity
            onPress={()=>navigator.navigate("BuggersScreen")}
    
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
       <Image source={
        bugger.type=="Beef Burger"?Bugger1:bugger.type=="Chicken Burger"?Bugger2:bugger.type=="Classic Burger"?Bugger3:Bugger4
       } style={{height:400,width:"100%",marginTop:10,resizeMode:"contain"}}/>
    <View style={tw`flex flex-row justify-between`}>
    <View style={tw`flex flex-col`}>

    <Text style={tw`text-2xl font-bold text-white`}>{bugger?.type}</Text>
    <Text style={tw`text-lg font-bold text-white`}>Burger made of {bugger?.ingredients}</Text>
    </View>
    <BlurView style={tw` rounded-xl   flex flex-col   p-2 pt-1 h-28 w-20 `}  tint="dark" intensity={150}>
 <Icon name="add" type="ionicon" size={30} color="white" style={tw`my-2`}/>
 <View style={{backgroundColor:"#3e3e42",height:20,width:20,borderRadius:75,marginLeft:20,marginTop:2}}>
        <Text style={tw`m-auto text-white`}>3</Text>
      </View>
 <Icon name="remove" type="ionicon" size={30} color="white" style={tw`my-2`}/>

 </BlurView>
    </View>
    <Text style={tw`text-gray-400 mt-1.5 text-base`}>{bugger?.type} made of {bugger?.ingredients} served with fries and drink.Enjoy our 20% off with NEW Promo Code </Text>

    <View style={tw`flex flex-row justify-between mt-3`}>
        <View style={tw`flex flex-col`}>
    <Text style={tw`text-white mt-5`}>Total Price</Text>
    <Text style={tw`text-2xl font-bold text-white ml-2`}>$ {bugger?.price}</Text>
        </View>
        <View style={{backgroundColor:"#fbbf24",height:60,width:150,borderBottomLeftRadius:30,display:"flex",flexDirection:"row",borderTopRightRadius:40,borderBottomRightRadius:40,marginTop:20}}>
    <Text style={tw`text-xl font-semibold pl-2 pt-3 text-white`}>Order Now</Text>
    <View  style={{backgroundColor:"white",marginTop:13,marginLeft:8,borderRadius:75,height:30,width:30}}><Icon color="black" size={17} name="archive" style={tw`mt-1.5`} type="ionicon"/></View>

        </View>
    </View>
    </ScrollView>
  )
}

export default BuggerDetails

const styles = StyleSheet.create({})