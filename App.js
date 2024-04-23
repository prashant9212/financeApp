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
import Chart from './component/Chart';
import Orders from './component/OtherScreen/Orders';
import Transactions from './component/OtherScreen/Transactions';
import Other from './component/Other';
import Insurance from './component/Insurance';



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
            name="Other"
            component={Other}
            options={{ title: "Other" }}
          />
          <Stack.Screen
            name="Cart1"
            component={Orders}
            options={{ title: "Orders" }}
          />
          <Stack.Screen
            name="Transactions"
            component={Transactions}
            options={{ title: "Transactions" }}
          />
          <Stack.Screen
            name="Insurance"
            component={Insurance}
            options={{ title: "Insurance" }}
          />
          

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;