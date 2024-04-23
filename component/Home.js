import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Offers from './Offers';
import BarCode from './BarCode';
import Other from './Other';
import Insurance from './Insurance';


const Tab = createMaterialBottomTabNavigator();

const Home = ({ navigation }) => {

    return (
          <Tab.Navigator
            initialRouteName="Dashboard"
            activeColor="#691A99"
            barStyle={{ backgroundColor: '#fff', height: 68, borderColor:'#eee', borderWidth:1,}}
        >
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={18} />
                    ),
                }}
            />
             <Tab.Screen
                name="BarCode"
                component={BarCode}
                options={{
                    tabBarLabel: 'Scan & Pay',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="barcode-scan" color={color} size={18} />
                    ),
                }}
            />
            <Tab.Screen
                name="Insurance"
                component={Insurance}
                options={{
                    tabBarLabel: 'Insurance',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="shield-alert" color={color} size={18} />
                    ),
                }}
            />    
            <Tab.Screen
                name="Other"
                component={Other}
                options={{
                    tabBarLabel: 'Transactions',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="gender-transgender" color={color} size={18} />
                    ),
                }}
            />           
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={18} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


export default Home;