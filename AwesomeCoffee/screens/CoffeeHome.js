import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,Image,TextInput,FlatList,ScrollView } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import React from 'react'
import {SafeAreaProvider} from "react-native-safe-area-context"
import tw from "tailwind-react-native-classnames"
import {Icon} from "react-native-elements"
import { useDispatch } from "react-redux";
import {setChoosenCoffee} from "../slices/navSlice"
import {useState} from 'react'
import Coffee from "../components/Coffee"
import coffee1 from '../assets/coffee2.jpg'
import coffee2 from '../assets/coffee1.jpeg'
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
const navigators=[
  {
    id:712,
    icon:"home",
    goto:"HomeScreen"

  },
  {
    id:353,
    icon:"book",
    goto:"CocktailsHome"

  },
  {
    id:7744,
    icon:"heart",
    goto:"CoffeDetail"

  },
  {
    id:533,
    icon:"notifications",
    goto:"CocktailDetails"

  }
]
const coffees=[
  {
    id:4125,
    madeOf:"Oat milk",
    coffeePrice:4.20,
    coffeeImage:coffee1
  },
  {
    id:6635,
    madeOf:"Chocolate",
    coffeePrice:3.14,
    coffeeImage:coffee2
  }
]
const CoffeeHome = () => {
  const [selectedItem,setSelectedItem]=useState(selections[0])
  const navigator = useNavigation();
  const dispatch=useDispatch();
  return (
    <ScrollView style={tw``}>
    
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
    <Image source={require("../assets/logo.png")} style={{height:100,width:100,resizeMode:"contain",marginTop:-17}} />

    </View>
    <Text style={tw`text-3xl mt-6 text-white font-semibold`}>
      Find the best 
    </Text>
    <Text style={tw`text-3xl  text-white font-semibold`}>
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
    {/* <View style={{backgroundColor:"black",opacity:0.8,left:380,position:"absolute",height:25,width:70,top:285}}/> */}
    <View style={tw`flex flex-row justify-between mt-5`}>

    <FlatList data={coffees} keyExtractor={(item)=>item.id} renderItem={({item:{id,coffeeImage,madeOf,coffeePrice}})=>(
      <Coffee coffeeImage={coffeeImage} coffeePrice={coffeePrice} madeOf={madeOf} />
    )} horizontal />
    </View>
    <Text style={tw`mt-3 text-xl text-white font-semibold`}>Special for you</Text>
    <LinearGradient
            colors={["#3b3b40", "#26262b"]}
            style={tw`rounded-md w-full mt-2 p-2 h-60 flex flex-row justify-between `}
        >
        <Image source={require("../assets/coffee3.jpg")} style={tw`h-56 w-44 rounded-md`}/>
        <View style={tw`flex flex-col p-3`}>
          <Text style={tw`text-xl text-white`}> 5 Coffee Beans You</Text>
          <Text style={tw`text-xl text-white mt-1`}>Must Try !</Text>
        </View> 
        </LinearGradient>
        
        <FlatList data={navigators} keyExtractor={(item)=>item.id} horizontal style={{paddingLeft:15,paddingTop:5,backgroundColor:"#0e0e12",width:500,height:40}} renderItem={({item:{id,icon,goto},item})=>(
          <TouchableOpacity onPress={()=>navigator.navigate(goto)}>

          <Icon name={icon} type="ionicon"  color={item.icon=="home"?"#ba572f":"#454341"} style={tw`mr-20`} />
          </TouchableOpacity>
        )} />
    </View>
    </ScrollView>
  )
}

export default CoffeeHome

const styles = StyleSheet.create({})