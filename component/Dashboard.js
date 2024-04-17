import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styleSheet/mainStyle'
import { SafeAreaView } from 'react-native-safe-area-context';

const CardData = [
    {
        id: "1",
        page: "Balance",
        icon: "currency-inr",
        name: "Balance"
    },
    {
        id: "2",
        page: "Send",
        icon: "arrow-up",
        name: "Send",
    },
    {
        id: "3",
        page: "Recived",
        icon: "account-question",
        name: "Recived",
    },
    {
        id: "4",
        page: "Transfer",
        icon: "arrow-decision-outline",
        name: "Transfer"
    },
    {
        id: "5",
        page: "History",
        icon: "history",
        name: "History"
    },
]

const Dashboard = ({ navigation }) => {

    return (
        <>
            <View style={{ backgroundColor: '#E53935', paddingTop: 40, borderBottomEndRadius: 20, borderBottomStartRadius: 20 }}>
                <View style={{ flexDirection: 'row', alignContent: 'center', alignContent: 'center' }}>
                    <Text style={{ flex: 1, padding: 7, backgroundColor: '#fff', width: 40, height: 40, margin: 12, textAlign: 'center', borderRadius: 50 }}>
                        <MaterialCommunityIcons name="home" size={24} color={'#777'} />
                    </Text>
                    <Text style={{ flex: 10, fontSize: 13, marginTop: 13, color: '#fff' }}>
                        Hello, Prashant, {"\n"}
                        <Text style={{ fontSize: 17, }}>Welcome Back!</Text>
                    </Text>
                    <Text style={{ flex: 1, padding: 7, width: 40, height: 40, margin: 12, borderRadius: 50 }}>
                        <MaterialCommunityIcons name="bell" size={24} color={'#fff'} />
                    </Text>
                </View>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={{ width: '96%', marginStart: '2%', margin: '2%', borderRadius: 10, paddingBottom: 20, backgroundColor: '#fff', padding: 5, borderColor: '#E0E0E0', borderWidth: 1 }}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ padding: 7, }}>
                            <MaterialCommunityIcons name="wallet" size={26} color={'#E53935'} />
                        </Text>
                        <Text style={{ flex: 10, fontSize: 13, marginTop: 11, color: '#777' }}>
                            Your Wallet Balance
                        </Text>
                    </View>
                    <Text style={{ paddingLeft: 10, fontSize: 25, marginTop: 0, marginBottom: 8, color: '#555', }}>
                        ₹ 25,48,212.00
                    </Text>
                    <View style={{ flexDirection: 'row', }}>
                        {CardData.map((data, number) => {
                            return (
                                <View key={number.toString()}>
                                    <TouchableOpacity style={{ flexDirection: 'row', }}
                                        onPress={() => {
                                            navigation.navigate("{data.page}");
                                        }}>
                                        <Text style={styles.DashCardList}>
                                            <MaterialCommunityIcons name={data.icon} size={26} color={'#E53935'} />
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={{ textAlign: 'center', fontSize: 12 }}>{data.name}</Text>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default Dashboard

