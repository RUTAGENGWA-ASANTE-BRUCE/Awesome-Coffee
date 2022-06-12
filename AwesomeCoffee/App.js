import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context"
import {KeyboardAvoidingView} from "react-native"
import {Provider} from "react-redux"
import HomeScreen from './screens/HomeScreen';
import CoffeeDetail from './screens/CoffeeDetail';
import CocktailDetails from './screens/CocktailDetails';
import CocktailsHome from './screens/CocktailsHome';
import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
    <SafeAreaProvider>

    <KeyboardAvoidingView
     style={{flex:1}}
     behavior={Platform.OS==="ios"?"padding":"height"}
     keyboardVerticalOffset={Platform.OS==="ios"?-64:0}>

      <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="CoffeDetail" component={CoffeeDetail} options={{headerShown:false}}/>
        <Stack.Screen name="CocktailDetails" component={CocktailDetails} options={{headerShown:false}}/>
        <Stack.Screen name="CocktailsHome" component={CocktailsHome} options={{headerShown:false}}/>
      </Stack.Navigator>

  
    </KeyboardAvoidingView>
    </SafeAreaProvider>
    </NavigationContainer>
  );
}
