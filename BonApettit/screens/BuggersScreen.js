import { StyleSheet, Text, View,TouchableOpacity,Image,FlatList } from 'react-native'
import tw from "tailwind-react-native-classnames"
import {Icon} from "react-native-elements"
import React,{ useState} from 'react'
import { useDispatch } from "react-redux";
import {setChoosenBugger} from "../slices/navSlice"
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Bugger1 from "../assets/bugger1.png";
import Bugger2 from "../assets/bugger2.png";
import Bugger3 from "../assets/bugger3.png";
import Bugger4 from "../assets/bugger4.png";
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

const buggers=[
    {
        id:2989360,
        image:Bugger1,
        type:"Beef Burger",
        ingredients:"Onions with Cheese",
        price:18.00
    },
    {
        id:558242,
        image:Bugger2,
        type:"Chicken Burger",
        ingredients:"Cheese with Chicken",
        price:12.00
    },
    {
        id:89533,
        image:Bugger3,
        type:"Classic Burger",
        ingredients:"Beef with Laticce",
        price:24.00
    },
    {
        id:5385922,
        image:Bugger4,
        type:"Grilled Burger",
        ingredients:"Griller Chicken",
        price:14.00
    },
]
const BuggersScreen = () => {
  const navigator = useNavigation();
  const [selectedItem,setSelectedItem]=useState(selections[0])
const dispatch=useDispatch()
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
    <Text style={tw`text-lg  text-white`}>Better burger !</Text>

    <View style={tw`flex flex-row justify-between`}>

    <FlatList data={selections} style={tw`mt-6`} keyExtractor={(item)=>item.id} horizontal renderItem={({item:{id,title},item})=>(
      <TouchableOpacity  style={tw`mr-10 `} onPress={()=>setSelectedItem(item)}>

      <View style={tw`h-10 flex flex-row`}>
       {selectedItem.id==id && (<View style={{height:10,width:10,backgroundColor:"#fbbf24",borderRadius:75,marginLeft:30,marginTop:10,marginRight:3}}/>)}
        <Text style={{color:"white",fontSize:20}}>{title}</Text>

      </View>
      </TouchableOpacity>
    )}/>
    <Icon style={tw`h-10 mt-5 w-10 pt-1 border border-white rounded-md`} name="options" type="ionicon" color="white"/>
    </View>
    <View style={tw`w-full h-4/6  p-3`}>
        <FlatList data={buggers} numColumns={2} keyExtractor={(item)=>item.id} renderItem={({item:{id,image,type,ingredients,price},item})=>(
            <TouchableOpacity style={tw`flex w-3/6 m-2 flex-col`} onPress={()=>{navigator.navigate("BuggerDetails");dispatch(setChoosenBugger(item))}}>
                <Image source={image} style={{height:150,width:150,resizeMode:"contain"}}/>
                <Text style={tw`text-white text-xl font-semibold`}>{type}</Text>
                <Text style={tw`text-gray-400 text-base`}>{ingredients}</Text>
                <View style={tw`flex flex-row w-4/6 mt-2 justify-between`}>
                    <Text style={tw`text-white`}>${price}</Text>
        <TouchableOpacity onPress={()=>navigator.navigate("")} style={{backgroundColor:"white",borderRadius:75,height:20,width:20}}><Icon color="black" size={20} name="add" style={tw`m-auto`} type="ionicon"/></TouchableOpacity>

                </View>
            </TouchableOpacity>
        )} />
    </View>
    <View style={tw`flex flex-row mt-2 w-full justify-between`}>
        <TouchableOpacity ><Icon color="white" name="mail" type="ionicon"/></TouchableOpacity>
        <TouchableOpacity ><Icon color="white" name="heart" type="ionicon"/></TouchableOpacity>
        <TouchableOpacity  style={{backgroundColor:"#fbbf24",borderRadius:75,height:30,width:30}}><Icon color="white" name="add" style={tw`m-auto`} type="ionicon"/></TouchableOpacity>
        <TouchableOpacity ><Icon color="white" name="cube" type="ionicon"/></TouchableOpacity>
        <TouchableOpacity ><Icon color="white" name="person" type="ionicon"/></TouchableOpacity>
        </View>
    </View>
  )
}

export default BuggersScreen

const styles = StyleSheet.create({})