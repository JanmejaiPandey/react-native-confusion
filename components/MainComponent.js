import React, { Component } from "react";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import Contact from './ContactComponent';
import About from './AboutComponent';
import { DISHES } from "../shared/dishes";
import { View, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import Home from "./HomeComponent";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MenuNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#512DA8",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }}
    >
      <Stack.Screen name="Menu" component={Menu} options={{ title: "Menu" }} />
      <Stack.Screen
        name="Dishdetail"
        component={Dishdetail}
        initialParams={{ title: "Dish Details" }}
      />
    </Stack.Navigator>
  );
}

function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff"  
    })}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        initialParams={{ title: "Home" }}
      />
    </Stack.Navigator>
  );
}

function ContactNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Contact"
      screenOptions={({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff"  
    })}
    >
      <Stack.Screen
        name="Contact"
        component={Contact}
        initialParams={{ title: "Contact Us" }}
      />
    </Stack.Navigator>
  );
}

function AboutNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff"  
    })}
    >
      <Stack.Screen
        name="About"
        component={About}
        initialParams={{ title: "About Us" }}
      />
    </Stack.Navigator>
  );
}

function MainNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeNavigator} />
      <Drawer.Screen name="Menu" component={MenuNavigator} />
      <Drawer.Screen name="Contact Us" component={ContactNavigator} />
      <Drawer.Screen name="About Us" component={AboutNavigator} />
    </Drawer.Navigator>
  );
}

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "android" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </View>
    );
  }
}

export default Main;
