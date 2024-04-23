import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Cart1 from "./CartScreen/Cart1";
import Cart2 from "./CartScreen/Cart2";
import Cart3 from "./CartScreen/Cart3";

const Tab = createMaterialTopTabNavigator();

const Cart = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Cart1"
      screenOptions={{
        tabBarActiveTintColor: "#691A99",
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "500",
          marginTop: 40,
          textTransform: "capitalize",
        },
        tabBarStyle: { backgroundColor: "#f8ebff" },
        tabBarIndicatorStyle: {
          backgroundColor: "#691A99",
          height: 2,
          borderRadius: 100,
        },
      }}
    >
      <Tab.Screen
        name="Cart1"
        component={Cart1}
        options={{ tabBarLabel: "all Tranctions" }}
      />
      <Tab.Screen
        name="Cart2"
        component={Cart2}
        options={{ tabBarLabel: "Electronic" }}
      />
      <Tab.Screen
        name="Cart3"
        component={Cart3}
        options={{ tabBarLabel: "Fashion" }}
      />
    </Tab.Navigator>
  );
};

export default Cart;
