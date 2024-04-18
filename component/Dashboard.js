import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styleSheet/mainStyle'
import { SafeAreaView } from 'react-native-safe-area-context';
import { CardData, ServicesData, RecentlyCardData } from './DataApi/Data';
import { StatusBar } from 'expo-status-bar';


const Dashboard = ({ navigation }) => {

    return (
        <View style={styles.containerHome}>
            <StatusBar />
            <View style={styles.DashboardHeader}>
                <View style={{ flexDirection: 'row', alignContent: 'center', alignContent: 'center' }}>
                    <Text style={{ flex: 1, padding: 7, backgroundColor: '#E53935', width: 40, height: 40, margin: 12, textAlign: 'center', borderRadius: 50 }}>
                        <MaterialCommunityIcons name="home" size={24} color={'#fff'} />
                    </Text>
                    <Text style={{ flex: 10, fontSize: 13, marginTop: 13, color: '#000' }}>
                        Hello, Prashant, {"\n"}
                        <Text style={{ fontSize: 17, }}>Welcome Back!</Text>
                    </Text>
                    <Text style={{ flex: 1, padding: 7, width: 40, height: 40, margin: 12, borderRadius: 50 }}>
                        <MaterialCommunityIcons name="bell" size={24} color={'#000'} />
                    </Text>
                </View>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={{ width: '96%', marginStart: '2%', margin: '3%', elevation: 1, shadowColor: '#000', borderRadius: 20, paddingBottom: 20, backgroundColor: '#E53935', padding: 5, borderColor: '#E0E0E0', borderWidth: 1 }}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ padding: 7, }}>
                            <MaterialCommunityIcons name="wallet" size={26} color={'#fff'} />
                        </Text>
                        <Text style={{ flex: 10, fontSize: 14, marginTop: 11, color: '#fff' }}>
                            Your Wallet Balance
                        </Text>
                    </View>
                    <Text style={{ paddingLeft: 10, padding: 2, fontSize: 25, marginTop: 5, marginBottom: 8, color: '#fff', }}>
                        ₹ 25,48,212.00
                    </Text>
                    <View style={{ flexDirection: 'row', }}>
                        <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            endFillColor="#000"
                            overScrollMode="never">
                            {CardData.map((data, number) => {
                                return (
                                    <View key={number.toString()}>
                                        <TouchableOpacity style={{ flexDirection: 'row', }}
                                            onPress={() => {
                                                navigation.navigate("{data.page}");
                                            }}>
                                            <Text style={styles.DashCardList}>
                                                <MaterialCommunityIcons name={data.icon} size={24} color={'#E53935'} />
                                            </Text>
                                        </TouchableOpacity>
                                        <Text style={{ textAlign: 'center', fontSize: 12, color: '#fff' }}>{data.name}</Text>
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>

                {/* Other Services */}

                <View style={styles.servicesCard}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ flex: 10, fontSize: 18, padding: 11, color: '#666', fontWeight: '500' }}>
                            Other Services
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                        {ServicesData.map((data, number) => {
                            return (
                                <View key={number.toString()}>
                                    <TouchableOpacity style={{ flexDirection: 'row', }}
                                        onPress={() => {
                                            navigation.navigate("{data.page}");
                                        }}>
                                        <Text style={styles.ServicesList}>
                                            <MaterialCommunityIcons name={data.icon} size={28} color={'#E53935'} />
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={{ textAlign: 'center', fontSize: 12 }}>{data.name}</Text>
                                </View>
                            )
                        })}
                    </View>
                </View>

                {/* Other Services */}

                {/* Recently Activity */}
                <View style={styles.RecentlyCard}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ flex: 10, fontSize: 18, padding: 11, color: '#666', fontWeight: '500' }}>
                            Recent Activity
                        </Text>
                        <TouchableOpacity style={{ flexDirection: 'row-reverse', padding: 15, }}
                            onPress={() => {
                                navigation.navigate("{page}");
                            }}>
                            <Text style={{ color: '#E53935' }}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {RecentlyCardData.map((User, number) => {
                            return (
                                <View style={styles.RecentlyCardBox} key={number.toString()}>
                                    <View style={{ flexDirection: 'row', paddingRight: 5 }}>
                                        <Text style={{ flex: 1, padding: 7, backgroundColor: '#E53935', width: 40, height: 40, margin: 12, textAlign: 'center', borderRadius: 50 }}>
                                            <MaterialCommunityIcons name="home" size={24} color={'#fff'} />
                                        </Text>
                                        <Text style={{ flex: 6, fontSize: 17, marginTop: 13, color: '#000' }}>
                                            {User.name} {"\n"}
                                            <Text style={{ fontSize: 13, }}>{User.activity}</Text>
                                        </Text>
                                        <View style={{ flex: 5, flexDirection: 'row-reverse' }}>
                                            <Text style={{ fontSize: 17, marginTop: 13, color: '#E53935', textAlign: 'right' }}>
                                                ₹{User.amount} {"\n"}
                                                <Text style={{ fontSize: 13, color: '#777' }}>{User.date}</Text>
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })}

                    </View>
                </View>
                {/* Recently Activity */}

            </ScrollView>
        </View>
    )
}

export default Dashboard

