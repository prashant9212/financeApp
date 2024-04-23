import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styleSheet/mainStyle'
import { SafeAreaView } from 'react-native-safe-area-context';
import { CardData, ServicesData, RecentlyCardData } from './DataApi/Data';
import { StatusBar } from 'expo-status-bar';
import SliderMain from './SliderMain';
import SliderMain1 from './SliderMain1';
import Chart from './Chart';


const Dashboard = ({ navigation }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={styles.containerHome}>
            <StatusBar />

            {/* Popup Notification */}
            {isVisible && (
                <View style={styles.PopupMain}>
                    <View style={styles.PopupInner}>
                        <Text style={{ fontSize: 22, margin: 5, }} onPress={() => setIsVisible(!isVisible)}>X</Text>
                        <ScrollView>
                            {RecentlyCardData.map((User, number) => {
                                return (
                                    <View style={styles.RecentlyCardBox} key={number.toString()}>
                                        <View style={{ flexDirection: 'row', paddingRight: 5 }}>
                                            <Text style={{ flex: 1, padding: 7, backgroundColor: '#691A99', width: 40, height: 40, margin: 12, textAlign: 'center', borderRadius: 50 }}>
                                                <MaterialCommunityIcons name="home" size={24} color={'#fff'} />
                                            </Text>
                                            <Text style={{ flex: 6, fontSize: 17, marginTop: 13, color: '#000' }}>
                                                {User.name} {"\n"}
                                                <Text style={{ fontSize: 13, }}>{User.activity}</Text>
                                            </Text>
                                            <View style={{ flex: 5, flexDirection: 'row-reverse' }}>
                                                <Text style={{ fontSize: 17, marginTop: 13, color: '#691A99', textAlign: 'right' }}>
                                                    ₹{User.amount} {"\n"}
                                                    <Text style={{ fontSize: 13, color: '#777' }}>{User.date}</Text>
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
            )}
            {/* Popup Notification */}

            <View style={styles.DashboardHeader}>
                <View style={{ flexDirection: 'row', alignContent: 'center', alignContent: 'center' }}>
                    <View style={{ flex: 1, padding: 2, width: 80, height: 40, margin: 12, textAlign: 'center', borderRadius: 50 }}>
                        <Image style={{ resizeMode: "cover", width: 40, height: 40, borderRadius: 50, }}
                            source={require("../assets/user.jpg")}
                        ></Image>
                    </View>
                    <Text style={{ flex: 10, fontSize: 13, marginTop: 14, paddingLeft: 10, color: '#000' }}>
                        Hello, Prashant, {"\n"}
                        <Text style={{ fontSize: 17, }}>Welcome Back!</Text>
                    </Text>
                    <Text onPress={() => setIsVisible('!isVisible')}
                        style={{ flex: 1, padding: 7, width: 40, height: 40, margin: 12, borderRadius: 50 }}>
                        <MaterialCommunityIcons name="bell" size={24} color={'#691A99'} />
                    </Text>
                </View>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={{ width: '96%', marginStart: '2%', marginTop: '2%', elevation: 1, shadowColor: '#000', borderRadius: 20, paddingBottom: 0, backgroundColor: '#691A99', padding: 0, borderColor: '#E0E0E0', borderWidth: 1 }}>
                    <View style={{ backgroundColor: '#520481', borderTopEndRadius: 500, borderBottomEndRadius: 500, borderTopStartRadius: 100, borderBottomStartRadius:100, paddingBottom:15, }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ padding: 7, }}>
                                <MaterialCommunityIcons name="wallet" size={26} color={'#fff'} />
                            </Text>
                            <Text style={{ flex: 10, fontSize: 14, marginTop: 11, color: '#fff' }}>
                                Your Wallet Balance
                            </Text>
                        </View>
                        <Text style={{ paddingLeft: 10, padding: 2, fontSize: 25, marginTop: 4, marginBottom: 4, color: '#fff', }}>
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
                                                    <MaterialCommunityIcons name={data.icon} size={24} color={'#691A99'} />
                                                </Text>
                                            </TouchableOpacity>
                                            <Text style={{ textAlign: 'center', fontSize: 12, color: '#fff' }}>{data.name}</Text>
                                        </View>
                                    )
                                })}
                            </ScrollView>
                        </View>
                    </View>
                </View>

                <SliderMain1 />
                {/* Other Services */}

                <View style={styles.servicesCard}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ flex: 10, fontSize: 18, padding: 11, color: '#000' }}>
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
                                            <MaterialCommunityIcons name={data.icon} size={28} color={'#691A99'} />
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
                        <Text style={{ flex: 10, fontSize: 18, padding: 11, color: '#000', }}>
                            Recent Activity
                        </Text>
                        <TouchableOpacity style={{ flexDirection: 'row-reverse', padding: 15, }}
                            onPress={() => {
                                navigation.navigate('Cart', {screen:'Cart1'});
                            }}>
                            <Text style={{ color: '#691A99' }}>See All</Text>
                        </TouchableOpacity>

                    </View>
                    <View>
                        {RecentlyCardData.map((User, number) => {
                            return (
                                <View style={styles.RecentlyCardBox} key={number.toString()}>
                                    <View style={{ flexDirection: 'row', paddingRight: 5 }}>
                                        <Text style={{ flex: 1, padding: 7, backgroundColor: '#691A99', width: 40, height: 40, margin: 12, textAlign: 'center', borderRadius: 50 }}>
                                            <MaterialCommunityIcons name={User.icon} size={24} color={'#fff'} />
                                        </Text>
                                        <View style={{ flex: 6, marginTop: 10, color: '#000' }}>
                                            <Text style={{ fontSize: 17, }}>{User.name}</Text>
                                            <Text style={{ fontSize: 13, paddingTop: 2, color: '#777' }}>{User.activity}</Text>
                                        </View>
                                        <View style={{ flex: 5, flexDirection: 'row-reverse' }}>
                                            <View>
                                                <Text style={{ fontSize: 17, marginTop: 13, color: '#691A99', textAlign: 'right' }}> ₹{User.amount}</Text>
                                                <Text style={{ fontSize: 13, color: '#777', paddingTop: 2, }}>{User.date}</Text>
                                            </View>
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

