import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Transactions from "./OtherScreen/Transactions";
import Orders from "./OtherScreen/Orders";

const Tab = createMaterialTopTabNavigator();

const Other = ({ navigation }) => {
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
        name="Transactions"
        component={Transactions}
        options={{ tabBarLabel: "all Tranctions" }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{ tabBarLabel: "All Orders" }}
      />
      {/* <Tab.Screen
        name="Cart3"
        component={Cart3}
        options={{ tabBarLabel: "Fashion" }}
      /> */}
    </Tab.Navigator>
  );
};

export default Other;
