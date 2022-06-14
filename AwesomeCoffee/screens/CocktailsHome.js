import { StyleSheet, Text, View,ScrollView,Image,FlatList,TouchableOpacity } from 'react-native'
import React,{ useState} from 'react'
import { BlurView } from "expo-blur";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import {Icon} from "react-native-elements"

const data=[
  {
    id:711,
    title:"Promotion"
  },
  {
    id:64363,
    title:"Free Drink"
  },
  {
    id:6434631,
    title:"Happy Hour"
  },
]
const navigators=[
  {
    id:4292,
    icon:"home",
    title:"Home",
    goto:"HomeScreen"
  },
  {
    id:9811,
    icon:"book",
    title:"Book",
    goto:"CocktailDetails"
  },
  {
    id:4241,
    icon:"search",
    title:"Search",
    goto:"CoffeDetail"
  },
]
const CocktailsHome = () => {
  const navigator = useNavigation();
  const [selected,setSelected]=useState(data[0]);
  const [page,setPage]=useState(navigators[0])
  return (
    <ScrollView style={{paddingTop:17,padding:20,paddingBottom:10,backgroundColor:"#2c2c2e"}}>
      <View style={tw`flex flex-row justify-between`}>
      <View style={tw`flex flex-col`}>

        <Text style={tw`text-3xl mt-7 font-semibold text-white`}>Tonight</Text>
      <Text style={tw`text-center text-white text-xs mt-2 `}>Monday,Novemebr 25</Text>

      </View>
      <BlurView style={tw` rounded-xl   flex flex-col   p-2 pt-1 h-28 w-20 mt-2`}  tint="dark" intensity={60}>
      <View style={{backgroundColor:"#3e3e42",height:20,width:20,borderRadius:75,marginLeft:20}}>
        <Text style={tw`m-auto text-white`}>3</Text>
      </View>
      <Image source={require('../assets/logo.png')} style={{height:40,width:40,resizeMode:"contain",marginLeft:13}}/>
      <View style={tw`flex flex-row m-auto`}><Text style={tw`text-white text-sm`}>$</Text><Text style={tw`text-white mt-1 text-lg ml-0.5`}>20</Text></View>
      <Text style={tw`text-center text-white text-xs `}>Total Price</Text>
      </BlurView>
      </View>   
      <View style={tw`mt-5`}>
        <FlatList data={data} horizontal keyExtractor={(item)=>item.id} renderItem={({item:{id,title},item})=>(
          <TouchableOpacity onPress={()=>setSelected(item)}><Text style={tw`text-white text-base font-semibold mr-20  ${selected.id==id? "border border-white rounded-2xl p-2":"mt-2"}`}>{title}</Text></TouchableOpacity>
        )} />
      </View>
      <View style={tw`relative mt-5`}>
        <Image source={require("../assets/cocktail1.jpg")} style={tw`w-full h-96 rounded-3xl`}/>
        <View style={{position:"absolute",backgroundColor:"#18181b",height:60,borderRadius:10,width:60,top:10,left:10}}>
        <View style={tw`flex flex-row m-auto mb-0 mt-1`}><Text style={tw`text-white  text-lg ml-0.5`}>20</Text><Text style={tw`text-white text-sm`}>%</Text></View>
      <Text style={tw`text-center text-white text-xs mt-1 `}>Discount</Text>
        </View>
        <View style={tw`flex flex-col absolute top-72 left-3`}>

        <Text style={tw`text-3xl mt-7 font-semibold text-white`}>Strawberry</Text>
      <Text style={tw` text-white text-xs mt-2 `}>Fresh Drink</Text>


      </View>
      </View>
      <View style={{backgroundColor:"#18181b",height:80,width:"100%",borderRadius:20,marginTop:40}}>
      <FlatList data={navigators} horizontal keyExtractor={(item)=>item.id}  style={tw`p-4`} renderItem={({item:{id,title,icon,goto},item})=>(
          <TouchableOpacity onPress={()=>{setPage(item);navigator.navigate(goto)}} style={tw`flex flex-row  w-28 ${page.id==id && "bg-gray-700"} rounded-3xl pl-2 mr-5 py-2.5 `}><Icon name={icon} type="ionicon"color="white" style={tw` mr-1.5`} />{page.id==id &&<Text style={tw`text-white text-base font-semibold  `}>{title}</Text>}</TouchableOpacity>
        )} />
      </View>

    </ScrollView>
  )
}

export default CocktailsHome

const styles = StyleSheet.create({})