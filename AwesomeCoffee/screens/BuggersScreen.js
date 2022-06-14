import { StyleSheet, Text, View,TouchableOpacity,Image,FlatList } from 'react-native'
import tw from "tailwind-react-native-classnames"
import {Icon} from "react-native-elements"
import React,{ useState} from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
const selections=[
    {
      id:8463,
      title:'Burger',
    },
    {
      id:1141259252,
      title:'Pasta',
    },
    {
      id:222398535,
      title:'Salads',
    },
  ]
const BuggersScreen = () => {
  const navigator = useNavigation();
  const [selectedItem,setSelectedItem]=useState(selections[0])

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
    <Text style={tw`text-2xl font-bold text-white`}>Every Bite a</Text>
    <Text style={tw`text-lg  text-white`}>Better burger!</Text>

    <View style={tw`flex flex-row justify-between`}>

    <FlatList data={selections} style={tw`mt-6`} keyExtractor={(item)=>item.id} horizontal renderItem={({item:{id,title},item})=>(
      <TouchableOpacity  style={tw`mr-10 `} onPress={()=>setSelectedItem(item)}>

      <View style={tw`h-10 flex flex-row`}>
       {selectedItem.id==id && (<View style={{height:10,width:10,backgroundColor:"#ba572f",borderRadius:75,marginLeft:30,marginTop:10,marginRight:3}}/>)}
        <Text style={{color:"white",fontSize:20}}>{title}</Text>

      </View>
      </TouchableOpacity>
    )}/>
    <Icon style={tw`h-10 mt-5 w-10 pt-1 border border-white rounded-md`} name="options" type="ionicon" color="white"/>
    </View>

    <View style={tw`flex flex-row mt-5 w-full justify-between`}>
        <TouchableOpacity onPress={()=>navigator.navigate("")}><Icon color="white" name="mail" type="ionicon"/></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigator.navigate("")}><Icon color="white" name="heart" type="ionicon"/></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigator.navigate("")} style={{backgroundColor:"#fbbf24",borderRadius:75,height:30,width:0}}><Icon color="white" name="add" style={tw`m-auto`} type="ionicon"/></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigator.navigate("")}><Icon color="white" name="cube" type="ionicon"/></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigator.navigate("")}><Icon color="white" name="person" type="ionicon"/></TouchableOpacity>
        </View>
    </View>
  )
}

export default BuggersScreen

const styles = StyleSheet.create({})