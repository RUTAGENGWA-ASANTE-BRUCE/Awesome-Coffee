import { TouchableOpacity,StyleSheet, Text, View ,Image,FlatList    } from 'react-native'
import React from 'react'
import {SafeAreaProvider} from "react-native-safe-area-context"
import { BlurView } from "expo-blur";
import tw from "tailwind-react-native-classnames"
import {Icon} from "react-native-elements"
import { useNavigation } from "@react-navigation/native";
import Coffee1 from "../assets/coffee2.jpg"
import Coffee2 from "../assets/coffee1.jpeg"
import Coffee3 from "../assets/coffee3.jpg"
import CockTail1 from "../assets/cocktail1.jpg"
import SamosaImage from "../assets/samosas1.jpg"
import cockTail2 from "../assets/cocktail2.jpg"
import Bugger from "../assets/bugger.jpg"
import Steak1 from "../assets/steak1.jpg"
import Steak2 from "../assets/steak2.jpg"
const data=[
    {
        id:74928,
        image:cockTail2,
        Name:"Menta Cocktail",
        origin:"Manchester",
        fullStars:5,
        unFullStars:0,
        reviews:70,
        price:9.2,
        goto:"CocktailsHome"
    },
    {
        id:6463,
        image:Coffee1,
        Name:"Chocolate Coffee",
        origin:"London",
        fullStars:4,
        unFullStars:1,
        reviews:32,
        price:12.5,
        goto:"CoffeHome"
    },
    {
        id:6436332,
        image:SamosaImage,
        Name:"Chinese Samosa",
        origin:"Hashirama",
        fullStars:2,
        unFullStars:3,
        reviews:98,
        price:19.2,
        goto:"Samosas"
    },
    {
      id:858547444,
      image:Steak1,
      Name:"Beef Steak",
      origin:"Kentucky",
      fullStars:2,
      unFullStars:3,
      reviews:64,
      price:34.2,
      goto:"SteaksScreen"
  },
  
    {
      id:3395,
      image:Bugger,
      Name:"Creamy Bugger",
      origin:"Cincinatti",
      fullStars:4,
      unFullStars:1,
      reviews:428,
      price:15.2,
      goto:"BuggersScreen"
  },
    {
        id:4004,
        image:CockTail1,
        Name:"Strawberry Cocktail",
        origin:"Madrid",
        fullStars:2,
        unFullStars:3,
        reviews:90,
        price:10.8,
        goto:"CocktailsHome"
    },
    {
        id:752346858,
        image:Coffee2,
        Name:"Milk Coffee",
        origin:"Luxenburg",
        fullStars:3,
        unFullStars:2,
        reviews:70,
        price:14.5,
        goto:"CoffeHome"
    },
    {
      id:98244,
      image:Steak2,
      Name:"Grilled Steak",
      origin:"Kigali",
      fullStars:2,
      unFullStars:3,
      reviews:242,
      price:50.9,
      goto:"SteaksScreen"
  },
  
    {
        id:740638,
        image:Coffee3,
        Name:"Oat Milk Coffee",
        origin:"Berlin",
        fullStars:5,
        unFullStars:0,
        reviews:210,
        price:19.2,
        goto:"CoffeHome"
    },
    
]
const HomeScreen = () => {
  const navigator = useNavigation();

  return (
    <View style={tw`h-full w-full bg-black p-5 pt-5`}>
      <View style={tw`flex flex-row justify-between`}>
        <TouchableOpacity style={tw`bg-white h-10 w-10 rounded-md`}><Icon name="menu-sharp" color="black" style={tw`m-auto mt-1`} type="ionicon" /></TouchableOpacity>
        <Image source={require("../assets/logo.png")} style={{height:100,width:100,resizeMode:"contain",marginTop:-17}} />
        
        <TouchableOpacity style={tw`bg-white h-10 w-10 rounded-md`}><Icon name="notifications-sharp" color="black" style={tw`m-auto mt-1` } type="ionicon" /></TouchableOpacity>
      </View>

      <FlatList data={data} keyExtractor={(item)=>item.id} renderItem={({item:{id,image,Name,origin,fullStars,unFullStars,reviews,price,goto}})=>(
        <TouchableOpacity onPress={()=>navigator.navigate(goto)}>

      <BlurView style={tw` rounded-lg  justify-between flex flex-row px-1.5 py-1.5    w-full mb-10`}  tint="dark" intensity={120}>
        <Image source={image} style={{height:"100%",width:60,resizeMode:"contain"}}/>
        <View style={tw`flex flex-col w-40`}>
            <Text style={tw`text-white  text-base font-semibold`}>{Name}</Text>
            <Text style={tw`text-white mt-1 text-xs`}>{origin}</Text>
            <View style={tw`flex mt-1 flex-row`}>
            <Icon name={'star'} type="ionicon" color="darkorange" style={tw`mt-1`} size={13}/>
            <Icon name={'star'} type="ionicon" color="darkorange" style={tw`mt-1`} size={13}/>
            <Icon name={'star'} type="ionicon" color="darkorange" style={tw`mt-1`} size={13}/>
            <Icon name={'star'} type="ionicon" color="darkorange" style={tw`mt-1`} size={13}/>
                <Icon name={'star'} type="ionicon" color="darkorange" style={tw`mt-1`} size={13}/>
                <Text style={tw`text-white ml-2 text-sm`}>{reviews} Reviews</Text>
            </View>
            
        </View>
        <Text style={{color: "#c2410c",fontSize:20,marginTop:18}}>${price}</Text>
      </BlurView>
        </TouchableOpacity>
        
      )}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})