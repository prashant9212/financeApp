import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Register from './component/Register';
import Profile from './component/Profile';
import Home from './component/Home';
import Offers from './component/Offers';
import BarCode from './component/BarCode';
import LocationApp from './component/Location';




const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LocationApp"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Location"
            component={LocationApp}
            options={{ title: "Location" }}
          />
         
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ title: "Dashboard" }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: "Register" }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: "Profile" }}
          />
           <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="Offers"
            component={Offers}
            options={{ title: "Offers" }}
          />
          <Stack.Screen
            name="BarCode"
            component={BarCode}
            options={{ title: "BarCode" }}
          />
          

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;