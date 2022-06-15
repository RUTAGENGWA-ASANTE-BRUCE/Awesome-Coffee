import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context"
import {KeyboardAvoidingView} from "react-native"
import {Provider} from "react-redux"
import CoffeeHome from './screens/CoffeeHome';
import CoffeeDetail from './screens/CoffeeDetail';
import CocktailDetails from './screens/CocktailDetails';
import Samosas from './screens/Samosas';
import Samosa from './screens/Samosa';
import CocktailsHome from './screens/CocktailsHome';
import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from "./store"
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import Steak from './screens/Steak';
import SteaksScreen from './screens/SteaksScreen';
import BuggersScreen from './screens/BuggersScreen';
import BuggerDetails from './screens/BuggerDetails';
export default function App() {
  const Stack=createNativeStackNavigator();
  return (
    <Provider store={store}>

    <NavigationContainer>
    <SafeAreaProvider>

    <KeyboardAvoidingView
     style={{flex:1}}
     behavior={Platform.OS==="ios"?"padding":"height"}
     keyboardVerticalOffset={Platform.OS==="ios"?-64:0}>

      <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="CoffeHome" component={CoffeeHome} options={{headerShown:false}}/>
        <Stack.Screen name="CoffeDetail" component={CoffeeDetail} options={{headerShown:false}}/>
        <Stack.Screen name="CocktailDetails" component={CocktailDetails} options={{headerShown:false}}/>
        <Stack.Screen name="CocktailsHome" component={CocktailsHome} options={{headerShown:false}}/>
        <Stack.Screen name="Samosas" component={Samosas} options={{headerShown:false}}/>
        <Stack.Screen name="Samosa" component={Samosa} options={{headerShown:false}}/>
        <Stack.Screen name="BuggersScreen" component={BuggersScreen} options={{headerShown:false}}/>
        <Stack.Screen name="BuggerDetails" component={BuggerDetails} options={{headerShown:false}}/>
        <Stack.Screen name="SteaksScreen" component={SteaksScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Steak" component={Steak} options={{headerShown:false}}/>
      </Stack.Navigator>

  
    </KeyboardAvoidingView>
    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>

  );
}
