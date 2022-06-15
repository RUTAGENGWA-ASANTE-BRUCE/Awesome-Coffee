import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import coffee1 from '../assets/coffee2.jpg'
import coffee2 from '../assets/coffee1.jpeg'
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import { selectChoosenCoffee } from "../slices/navSlice";
import {useSelector} from "react-redux"
const CoffeeDetail = () => {
  const navigator = useNavigation();
  const coffee=useSelector(selectChoosenCoffee)
  return (
    <ScrollView
      style={{
        backgroundColor: "#0e0e12",
        height: "100%",
        padding: 3,
      
      }}
    >
      <Image
        source={coffee.madeOf=="Oat milk"?coffee1:coffee2}
        style={tw`w-full rounded-md h-80`}
      />
      <View
        style={tw`absolute flex flex-row justify-between w-11/12 top-10 left-5 mr-20`}
      >
        <TouchableOpacity
          style={tw``}
          onPress={() => navigator.navigate("HomeScreen")}
        >
          <LinearGradient
            colors={["#3b3b40", "#26262b"]}
            style={tw`rounded-md w-12 py-2.5 `}
          >
            <Icon color="white" name="chevron-left" type="fontawesome" />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={tw``} onPress={()=>navigator.navigate("CocktailsHome")}>
          <LinearGradient
            colors={["#3b3b40", "#26262b"]}
            style={tw`rounded-md w-12 py-2.5 `}
          >
            <Icon color="white" name="heart" type="ionicon" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <BlurView style={tw` rounded-xl absolute   flex flex-row top-60  p-5 h-40 w-full`}  tint="dark" intensity={100}>

   
        <View style={tw`w-6/12 h-full`}>
          <Text style={tw`mt-1 text-white font-bold text-xl`}>Cappuccino</Text>
          <Text style={tw` text-white text-base font-bold`}>{coffee.madeOf}</Text>
          <View style={tw`flex flex-row mt-5`}>
            <Icon name="star" type="ionicon" style={tw``} color="#ba572f" />
            <Text style={tw`font-semibold mt-1.5 ml-2 text-white text-xl`}>
              {coffee.coffeePrice}<Text style={tw`text-sm`}>(6.899)</Text>
            </Text>
          </View>
        </View>
        <View style={tw`w-6/12 pl-10 flex flex-col h-full`}>
          <View style={tw`flex flex-row`}>
            <TouchableOpacity style={tw``}>
              <LinearGradient
                colors={["#3b3b40", "#26262b"]}
                style={tw`rounded-md w-16 py-2.5 `}
              >
                <Icon color="#ba572f" name="cafe" type="ionicon" />
                <Text style={tw`text-white m-auto`}>Coffee</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={tw`ml-3`}>
              <LinearGradient
                colors={["#3b3b40", "#26262b"]}
                style={tw`rounded-md w-16 py-2.5 `}
              >
                <Icon color="#ba572f" name="water" type="ionicon" />
                <Text style={tw`text-white m-auto`}>Milk</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={tw`mt-4`}>
            <LinearGradient
              colors={["#3b3b40", "#26262b"]}
              style={tw`rounded-md w-36 py-2.5 `}
            >
              <Text style={tw`text-white m-auto`}>Medium Roasted</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </BlurView>
      <Text style={tw`text-white mt-24 font-semibold text-base`}>
        Description
      </Text>
      <Text style={tw`text-white text-lg  mt-2`}>
        A cappuccino is a coffee-based drink made{" "}
      </Text>
      <Text style={tw`text-white  text-lg`}>
        primarly from espresso and milk...
        <Text style={{ color: "#ba572f", marginLeft: 4 }}>Read More</Text>{" "}
      </Text>
      <Text style={tw`text-white font-semibold mt-8 text-base`}>Size</Text>
      <View style={tw`flex flex-row justify-between mt-4 w-full`}>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: "#ba572f",
            width: 100,
            height: 50,
            borderRadius: 6,
          }}
        >
          <Text style={tw`text-center text-white  m-auto`}>S</Text>
        </Pressable>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: "white",
            width: 100,
            height: 50,
            borderRadius: 6,
          }}
        >
          <Text style={tw`text-center text-white m-auto`}>S</Text>
        </Pressable>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: "white",
            width: 100,
            height: 50,
            borderRadius: 6,
          }}
        >
          <Text style={tw`text-center text-white m-auto`}>S</Text>
        </Pressable>
      </View>
      <View style={tw`flex flex-row w-full mt-12 `}>
        <View style={tw`flex flex-col w-2/6`}>
          <Text style={tw`text-white text-lg ml-3`}>Price</Text>
          <Text style={tw`text-white text-2xl`}>
            <Text style={{ color: "#ba572f" }}>$</Text> 4.20
          </Text>
        </View>
        <TouchableOpacity
          style={{
            marginLeft: 10,
            backgroundColor: "#ba572f",
            flex: 1,
            borderRadius: 20,
          }}
        >
          <Text style={tw`text-white m-auto text-xl font-bold`}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CoffeeDetail;

const styles = StyleSheet.create({});
