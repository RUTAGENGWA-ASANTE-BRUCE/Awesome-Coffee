import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,Image,TextInput,FlatList } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import React from 'react'
import {SafeAreaProvider} from "react-native-safe-area-context"
import tw from "tailwind-react-native-classnames"
import {Icon} from "react-native-elements"
import {useState} from 'react'
import Coffee from "../components/Coffee"
const selections=[
  {
    id:611,
    title:'Capuccino',
  },
  {
    id:1141,
    title:'Espresso',
  },
  {
    id:222,
    title:'Latte',
  },
  {
    id:6332,
    title:'Flat wi',
  }
]
const HomeScreen = () => {
  const [selectedItem,setSelectedItem]=useState(selections[0])
  return (
    <SafeAreaView style={tw``}>
    
    <View style={{backgroundColor:"#0e0e12",height:"100%",paddingTop:20,paddingLeft:15,paddingRight:15}}>
    <View style={tw`flex flex-row justify-between`}>
    <TouchableOpacity>
    <LinearGradient
            colors={["#3b3b40", "#26262b",]}

            style={tw`rounded-md w-16 py-2.5 `}
          >
      
          
      <Icon color="white" name="apps" type="ionicon"/>
          </LinearGradient>
    </TouchableOpacity>
          <Image source={require("../assets/avatar17.jpg")} style={tw`h-10 w-10 rounded-md`} />
    </View>
    <Text style={tw`text-3xl mt-10 text-white font-semibold`}>
      Find the best 
    </Text>
    <Text style={tw`text-3xl mt-2 text-white font-semibold`}>
      Coffee for you
    </Text>
    <View style={{backgroundColor:"#26262b",display:"flex",flexDirection:"row",marginTop:26,width:"100%",borderRadius:6,height:45}}>
      <Icon name="search" type="ionicon" color="white" style={tw`ml-4 my-auto`} />
      <TextInput style={tw`flex-1 ml-2 my-auto text-white text-xl`} placeholder="Find Your Coffee..." placeholderTextColor="white"/>
    </View>
    <View>

    <FlatList data={selections} style={tw`mt-6`} keyExtractor={(item)=>item.id} horizontal renderItem={({item:{id,title},item})=>(
      <TouchableOpacity  style={tw`mr-10 `} onPress={()=>setSelectedItem(item)}>

      <View style={tw`h-10`}>
        <Text style={{color:selectedItem.id==id?"#ba572f":"white",fontSize:20}}>{title}</Text>

       {selectedItem.id==id && (<View style={{height:10,width:10,backgroundColor:"#ba572f",borderRadius:75,marginLeft:30,marginTop:5}}/>)}
      </View>
      </TouchableOpacity>
    )}/>
    </View>
    <View style={{backgroundColor:"black",opacity:0.8,left:380,position:"absolute",height:25,width:70,top:285}}/>
    <View style={tw`flex flex-row justify-between mt-8`}>

    <Coffee/>
    <Coffee/>
    </View>
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})