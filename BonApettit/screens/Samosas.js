import { StyleSheet, Text, View,ScrollView,Image,FlatList,TouchableOpacity } from 'react-native'
import React,{ useState} from 'react'
import { LinearGradient } from "expo-linear-gradient";
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
    goto:"Samosa"
  },
  {
    id:4241,
    icon:"search",
    title:"Search",
    goto:"CoffeDetail"
  },
]
const Samosas = () => {
  const navigator = useNavigation();
  const [selected,setSelected]=useState(data[0]);
  const [page,setPage]=useState(navigators[0])
  return (
    <ScrollView style={{paddingTop:17,padding:20,paddingBottom:10,backgroundColor:"#2c2c2e"}}>
     
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
        <Text style={tw`text-xl font-bold text-white mt-2`}>Types of Samosa</Text>
        <Text style={tw`text-sm  text-gray-400`}>Select favorite samosa dish</Text>
        <View style={tw`flex mt-10 flex-row w-5/6 justify-between`}>
            <View style={{backgroundColor:"#fdba74",height:10,width:100,borderRadius:10}}/>
            <View style={{backgroundColor:"#fdba74",height:10,width:80,borderRadius:10}}/>
            <View style={{backgroundColor:"#fdba74",height:10,width:60,borderRadius:10}}/>
        </View>
        <View style={tw`flex flex-row mt-12`}>

        <LinearGradient
            colors={["#3b3b40", "#26262b"]}
            style={tw`rounded-3xl w-60 mt-2 mr-20 p-2 h-96 flex flex-col`}
        >
        <Image source={require("../assets/samosas.png")} style={{height:180,width:180,marginTop:10,marginLeft:25,resizeMode:"contain"}}/>
        <Text style={tw`text-xl font-bold text-white mt-2`}>Chinese Samosa</Text>
        <Text style={tw`text-sm  text-gray-400`}>Chinese Samosa a deep-fried snack  prepared with homemade pasty sheets and tasty  noodles  stuffing.</Text>
        <TouchableOpacity style={{backgroundColor:"#fdba74",marginLeft:10,width:"92%",marginRight:10,borderRadius:20,height:40 ,marginTop:30}}><Text style={tw`m-auto text-white text-base font-semibold`}>Add To dish</Text></TouchableOpacity>
        </LinearGradient>
        <LinearGradient
            colors={["#3b3b40", "#26262b"]}
            style={tw`rounded-3xl w-60 mt-2 p-2 mr-20 h-96 flex flex-col`}
        >
        <Image source={require("../assets/samosas.png")} style={{height:180,width:180,marginTop:10,marginLeft:25,resizeMode:"contain"}}/>
        <Text style={tw`text-xl font-bold text-white mt-2`}>Chinese Samosa</Text>
        <Text style={tw`text-sm  text-gray-400`}>Chinese Samosa a deep-fried snack  prepared with homemade pasty sheets and tasty  noodles  stuffing.</Text>
        <TouchableOpacity style={{backgroundColor:"#fdba74",marginLeft:10,width:"92%",display:"flex",flexDirection:"row",marginRight:10,borderRadius:20,height:40 ,marginTop:30}}>
        <Text style={tw`m-auto text-white text-base font-semibold`}>Add To dish</Text>
        {/* <Image source={require("../assets/forks.png")} style={tw`h-10 w-10`}/> */}
         </TouchableOpacity>
        </LinearGradient>
        </View>
        <View style={{backgroundColor:"#18181b",height:80,width:"100%",borderRadius:20,marginTop:60}}>
      <FlatList data={navigators} horizontal keyExtractor={(item)=>item.id}  style={tw`p-4`} renderItem={({item:{id,title,icon,goto},item})=>(
          <TouchableOpacity onPress={()=>{setPage(item);navigator.navigate(goto)}} style={tw`flex flex-col  w-28 ${page.id==id && "bg-gray-700"} rounded-3xl pl-2 mr-5  `}><Icon name={icon} type="ionicon"color="white" style={tw` mr-1.5`} size={20} />{page.id==id &&<Text style={tw`text-white text-base font-semibold text-center `}>{title}</Text>}</TouchableOpacity>
        )} />
      </View>
    </ScrollView>
  )
}

export default Samosas

const styles = StyleSheet.create({})