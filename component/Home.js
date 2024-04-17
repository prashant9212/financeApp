import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Dashboard from './Dashboard';
import Profile from './Profile';
import Offers from './Offers';


const Tab = createMaterialBottomTabNavigator();

const Home = ({ navigation }) => {

    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
            activeColor="#E53935"
            barStyle={{ backgroundColor: '#fff', height: 65, }}
        >
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="Offers"
                component={Offers}
                options={{
                    tabBarLabel: 'Offers',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="wallet-giftcard" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={22} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


export default Home;