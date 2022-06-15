import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectChoosenSteak } from "../slices/navSlice";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Steak1 from "../assets/steak1.jpg";
import Steak2 from "../assets/steak2.jpg";
import Steak3 from "../assets/steak3.jpg";
import Steak4 from "../assets/steak4.jpg";
const Steak = () => {
  const navigator = useNavigation();
  const steak = useSelector(selectChoosenSteak);
  return (
    <View
      style={{
        backgroundColor: "#26262b",
        height: "100%",
        paddingTop: 20,
        paddingLeft: 25,
        paddingRight: 25,
      }}
    >
      <View style={tw`flex flex-row justify-between`}>
        <TouchableOpacity onPress={() => navigator.navigate("SteaksScreen")}>
           <LinearGradient
           colors={["#3b3b40", "#26262b"]}
            style={tw`rounded-md w-12 py-2.5 `}
          >
            <Icon color="white" name="chevron-left" type="fontawesome" />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require("../assets/logo.png")} style={tw`h-20 w-20`} />
        </TouchableOpacity>
      </View>

      <Image
        source={steak.ingredients == "Grilled steak with viggie & potatoes" ? Steak1 :steak.ingredients=="Ribeye steak with viggie & potatoes"?Steak2:steak.ingredients=="Grilled steak with viggie & potatoes"?Steak3:Steak4}
        style={{
          height: 400,
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 6,
        }}
      />
      <View style={tw`flex flex-row justify-between w-full mt-8`}>
        <Text style={tw`text-white  text-xl font-semibold w-4/6`}>
          {steak?.ingredients}
        </Text>
        <View style={tw`flex justify-between flex-col `}>
          <View style={tw`flex flex-row`}>
            <Text style={tw`text-gray-400`}>{steak?.price} </Text>
            <Icon
              name={"star"}
              type="ionicon"
              color="darkorange"
              style={tw`mt-1`}
              size={13}
            />
          </View>
          <Text style={tw`text-gray-400`}>{steak?.calories} kcal</Text>
        </View>
      </View>
      <Text style={tw`mt-5 text-gray-400 text-base`}>{steak?.ingredients} with Our chefs special recipes.</Text>
      <Text style={tw`text-white  text-xl font-semibold  mt-1`}>Ingredients</Text>
     
      <BlurView
              style={{width:620,height:300,borderTopRightRadius:500,display:"flex",flexDirection:"column",borderTopLeftRadius:500,top:700,right:-86,position:"absolute"}}
              tint="light"
              intensity={100}
            >
            <Icon color="black" name="caret-down-outline" type="ionicon" style={tw`mt-6 mx-auto`}/>
            <Text style={tw`text-black text-lg font-semibold mt-2 mx-auto`}>Show more details</Text>
            </BlurView>
            
            <View style={tw`absolute bottom-5 left-5 flex h-10 w-10 bg-black rounded-full`}>

<Image style={tw`h-8 w-7 m-auto `} source={require("../assets/icons8-tomato-48.png")}/>
  </View>
  <View style={tw`absolute bottom-16 left-28 flex h-10 w-10 bg-black rounded-full`}>

<Image style={tw`h-8 w-7 m-auto `} source={require("../assets/icons8-potato-48.png")}/>
  </View>
  <View style={tw`absolute bottom-16 mb-1 left-60 ml-12 flex h-10 w-10 bg-black rounded-full`}>

<Image style={tw`h-8 w-7 m-auto `} source={require("../assets/icons8-sauce-bottle-48.png")}/>
  </View>
  <View style={tw`absolute bottom-12 left-80 ml-16 -mb-4  flex h-10 w-10 bg-black rounded-full`}>

<Image style={tw`h-8 w-7 m-auto `} source={require("../assets/icons8-mustard-48.png")}/>
  </View>
    </View>
  );
};

export default Steak;

const styles = StyleSheet.create({});
