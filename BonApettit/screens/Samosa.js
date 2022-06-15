import { StyleSheet, Text, View,ScrollView,Image,FlatList,TouchableOpacity } from 'react-native'
import React,{ useState} from 'react'
import { BlurView } from "expo-blur";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
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
const Samosa = () => {
  const navigator = useNavigation();
  const [selected,setSelected]=useState(data[0]);
  const [page,setPage]=useState(navigators[0])
  return (
    <ScrollView style={{paddingTop:17,backgroundColor:"#2c2c2e"}}>
    <View >

    <View style={tw`flex flex-row justify-between mx-3`}>
       <TouchableOpacity
            onPress={()=>navigator.navigate("Samosas")}
    
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
        <Image source={require("../assets/samosas1.jpg")} style={{height:320,width:"100%",marginTop:10}}/>
        <View style={tw`mx-2 flex-1 pb-5`}>

      <BlurView style={tw` rounded-3xl rounded-3xl   flex flex-col px-5 pt-6    h-full w-full  bg-red-200 mt-3`}  tint="dark" intensity={100}>
      <Text style={tw`text-xl  text-white`}>Spicy</Text>
      <Text style={tw`text-2xl font-bold text-white mt-2`}>Chinese</Text>
      <Text style={tw`text-2xl font-bold text-white mt-2`}>Samosa</Text>
      <Text style={tw`text-lg  text-white mt-5`}>Chinese Samosa a deep-fried snack  prepared with homemade pasty sheets and tasty  noodles  stuffing.</Text>
      <Text style={tw`text-xl  text-white mt-3`}>$ 180</Text>

      <TouchableOpacity style={{backgroundColor:"#fdba74",marginLeft:10,width:"92%",display:"flex",flexDirection:"row",marginRight:10,borderRadius:10,height:40 ,marginTop:15}}>
        <Text style={tw`m-auto text-white text-base font-semibold`}>Add To dish</Text>
        {/* <Image source={require("../assets/forks.png")} style={tw`h-10 w-10`}/> */}
         </TouchableOpacity>
      </BlurView>
        </View>
    </View>

    </ScrollView>
  )
}

export default Samosa

const styles = StyleSheet.create({})