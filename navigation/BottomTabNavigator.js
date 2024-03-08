import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import CocktailScreen from "../screens/CoctailScreen";
import SearchScreen from "../screens/SearchScreen";
import History from "../screens/History";
import Login from "../screens/Login";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Search";

export default function BottomTabNavigator({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Cocktails"
        component={CocktailScreen}
        options={{
          title: "Cocktail",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-wine" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-search" />
          ),
        }}
      />
      <BottomTab.Screen
        name="History"
        component={History}
        options={{
          title: "History",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-star" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Login"
        component={Login}
        options={{
          title: "Login",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-body" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  return getFocusedRouteNameFromRoute(route) ?? INITIAL_ROUTE_NAME;
}
