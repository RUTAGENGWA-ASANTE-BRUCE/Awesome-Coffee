import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity,FlatList } from 'react-native'
import tw from "tailwind-react-native-classnames";
import {Icon} from "react-native-elements"
import { useNavigation } from "@react-navigation/native";
import React from 'react'

import { BlurView } from "expo-blur";

const ingredients=[
  {
    id:6949,
    percentage:15,
    type:"Alcohol"
  },
  {
    id:5222,
    percentage:25,
    type:"Fruit"
  },
  {
    id:980,
    percentage:60,
    type:"Water"
  }
]
const CocktailDetails = () => {
  const navigator = useNavigation();

  return (
    <ScrollView style={{backgroundColor:"#18181b",height:"100%"}}>
    
      <Image source={require('../assets/cocktail2.jpg')} style={tw`h-96 w-full`} />
      <View style={{backgroundColor:"#2c2c2e",height:250,marginTop:-30,borderRadius:20,paddingTop:15,paddingLeft:15,paddingRight:15,width:"100%"}}>
      <View style={tw`flex flex-col`}>

<Text style={tw`text-3xl  font-semibold text-white`}>Menta Cocktail</Text>
<Text style={tw` text-white text-xs mt-2 `}>Fresh Drink</Text>

<View style={{}}>

<FlatList data={ingredients} horizontal keyExtractor={(item)=>item.id}  style={tw` pt-4`} renderItem={({item:{percentage,type}})=>(
    <View style={{marginRight:20,borderColor:"white",borderWidth:1,height:60,borderRadius:10,width:60}}>
  <View style={tw`flex flex-row m-auto mb-0 mt-1`}><Text style={tw`text-white  text-lg ml-0.5`}>{percentage}</Text><Text style={tw`text-white text-sm`}>%</Text></View>
<Text style={tw`text-center text-white text-xs mt-1 `}>{type}</Text>
  </View>
  )} />
</View>
<View style={tw`flex flex-row mt-4  justify-between`}>
  <TouchableOpacity onPress={()=>navigator.navigate("Samosas")} style={{backgroundColor:"#18181b",width:200,height:45,borderRadius:10 }}><Text style={tw`m-auto text-white pt-1`}><Text style={{color:"#4e4e52",fontSize:20}}>$8</Text> Price x Drink</Text></TouchableOpacity>
  <TouchableOpacity style={{backgroundColor:"#18181b",width:200,height:45,borderRadius:10 }}><Text style={tw`m-auto text-white pt-1`}><Text style={{color:"#4e4e52",fontSize:20}}>$16</Text> Total Price</Text></TouchableOpacity>
</View>
</View>
      </View>
      <TouchableOpacity onPress={()=>navigator.navigate("CocktailsHome")}  style={{position:"absolute",top:25,width:40,height:40,left:10,backgroundColor:"#18181b",borderRadius:10}}>

      <View style={tw`flex-1`}>

            <Icon color="white" name="chevron-left" type="fontawesome"  style={tw`mt-1.5`}/>
    </View>
      </TouchableOpacity>

 <BlurView style={tw` rounded-xl absolute  flex flex-col   p-2 pt-1 h-28 w-20 top-72 right-5`}  tint="dark" intensity={150}>
 <Icon name="add" type="ionicon" size={30} color="white" style={tw`my-2`}/>
 <View style={{backgroundColor:"#3e3e42",height:20,width:20,borderRadius:75,marginLeft:20,marginTop:2}}>
        <Text style={tw`m-auto text-white`}>3</Text>
      </View>
 <Icon name="remove" type="ionicon" size={30} color="white" style={tw`my-2`}/>

 </BlurView>
 <Text style={tw`text-white text-lg font-semibold mt-5 pl-4`}>Total Order</Text>
 <View style={tw`flex flex-row`}>
 <View style={tw`flex flex-row`}>

 <View style={tw`mt-7 pl-4 flex flex-col`}>
  <View style={tw`flex flex-row`}>
  <Icon name="wine-outline" type="ionicon" />
  <View style={{backgroundColor:"#3e3e42",position:"absolute",bottom:10,height:20,width:20,borderRadius:75,marginLeft:20}}>
        <Text style={tw`m-auto text-white`}>3</Text>
      </View>
  </View>
  <Text style={tw`text-white text-sm `}>Total Drinks</Text>
 </View>
 <View style={tw`flex flex-col ml-10`}>
 <View style={tw`flex flex-row m-auto`}><Text style={tw`text-white text-sm`}>$</Text><Text style={tw`text-white mt-1 text-lg ml-0.5`}>20</Text></View>
      <Text style={tw`text-center text-white text-sm `}>Total Price</Text>
 </View>
 </View>
 <BlurView style={tw` rounded-xl  flex flex-col    pt-1 h-28 w-20  ml-36  -mt-16`}  tint="light" intensity={100}>
 <Image source={require("../assets/mastercard.png")} style={{height:50,marginLeft:10,width:60,resizeMode:"contain",marginTop:5}}/>
 <Text style={tw`text-center  text-xs `}>Mastercard</Text>
 <Text style={tw`text-center font-bold text-xl `}>Pay</Text>

 </BlurView>
 </View>
    </ScrollView>
  )
}

export default CocktailDetails

const styles = StyleSheet.create({})