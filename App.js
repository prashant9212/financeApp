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
import LocationNew from './component/LocationNew';
import Cart from './component/Cart';
import Cart1 from './component/CartScreen/Cart1';
import Cart2 from './component/CartScreen/Cart1';
import Cart3 from './component/CartScreen/Cart1';
import Chart from './component/Chart';



const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
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
          <Stack.Screen
            name="LocationNew"
            component={LocationNew}
            options={{ title: "LocationNew" }}
          />
          <Stack.Screen
            name="Chart"
            component={Chart}
            options={{ title: "Chart" }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ title: "Cart" }}
          />
          <Stack.Screen
            name="Cart1"
            component={Cart1}
            options={{ title: "Cart1" }}
          />
          <Stack.Screen
            name="Cart2"
            component={Cart2}
            options={{ title: "Cart2" }}
          />
          <Stack.Screen
            name="Cart3"
            component={Cart3}
            options={{ title: "Cart3" }}
          />
          

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;