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
import { useDispatch } from "react-redux";
import { setChoosenSteak } from "../slices/navSlice";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Steak1 from "../assets/steak1.jpg";
import Steak2 from "../assets/steak2.jpg";
import Steak3 from "../assets/steak3.jpg";
import Steak4 from "../assets/steak4.jpg";

const Steaks = [
  {
    id: 452,
    image: Steak1,
    ingredients: "Grilled Steak with Stuffed Squash Blossoms & Crispy Onions",
    price: 4.5,
    calories: 300,
  },
    {
    id: 45522,
    image: Steak2,
    ingredients: "Ribeye steak with viggie & potatoes",
    price: 7.76,
    calories: 100,
  },
  {
    id: 455352,
    image: Steak3,
    ingredients: "Grilled steak with viggie & potatoes",
    price: 10.5,
    calories: 400,
  },
  {
    id: 7444,
    image: Steak4,
    ingredients: "Hanger steak with viggie & potatoes",
    price: 6.7,
    calories: 370,
  },
];
const SteaksScreen = () => {
  const navigator = useNavigation();
  const dispatch = useDispatch();

  return (
    <View
      style={{
        backgroundColor: "#26262b",
        paddingTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
        display:"flex",
        height:"100%",
        flexDirection:"column"
      }}
    >
      <View style={tw`flex flex-row justify-between`}>
        <TouchableOpacity onPress={() => navigator.navigate("HomeScreen")}>
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
      <View style={tw`flex flex-row justify-between`}>
        <View style={tw`flex flex-col`}>
          <Text style={tw`text-white text-xl font-semibold`}>We have</Text>
          <Text style={tw`text-white  text-xl font-semibold`}>
            Spescial offer
          </Text>
        </View>
        <Image
          source={require("../assets/icons8-fire.gif")}
          style={tw`w-10 h-10 rounded-full`}
        />
      </View>
        <FlatList
          data={Steaks}
          keyExtractor={(item) => item.id}
          renderItem={({
            item: { id, image, ingredients, price, calories },
            item
          }) => (
            <TouchableOpacity
              onPress={() => {
                navigator.navigate("Steak");
                dispatch(setChoosenSteak(item));
              }}
            >
              <BlurView
                style={tw` rounded-3xl rounded-3xl   flex flex-col px-5     h-72 w-80 mx-auto mb-4  bg-red-200 mt-3 pt-2`}
                tint="dark"
                intensity={3390}
              >
                <Image
                  source={image}
                  style={{
                    height: 160,
                    width: 160,
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderRadius: 75,
                  }}
                />
                <View
                  style={tw`flex flex-row justify-between mt-3 w-full mt-1`}
                >
                  <Text style={tw`text-white  text-lg font-semibold w-5/6`}>
                    {ingredients}
                  </Text>
                  <View style={tw`flex justify-between flex-col `}>
                    <View style={tw`flex flex-row`}>
                      <Text style={tw`text-gray-400`}>{price} </Text>
                      <Icon
                        name={"star"}
                        type="ionicon"
                        color="darkorange"
                        style={tw`mt-1`}
                        size={13}
                      />
                    </View>
                    <Text style={tw`text-gray-400`}>{calories} kcal</Text>
                  </View>
                </View>
              </BlurView>
            </TouchableOpacity>
          )}
        />
    </View>
  );
};

export default SteaksScreen;

const styles = StyleSheet.create({});
