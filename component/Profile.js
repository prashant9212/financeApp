import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, ScrollView } from "react-native";
import styles from "../styleSheet/mainStyle";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ProfileData } from "./DataApi/Data";
import Icon from 'react-native-vector-icons/FontAwesome5';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.containerProfile}>
      <View style={styles.ProfileHeader}>
        <Text style={styles.ProfileHeadText}>My Profile</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <View style={{ padding: 5, backgroundColor: '#f8ebff', width: 100, height: 100, borderRadius: 50, margin: 8, marginLeft: 10 }}>
          <Image source={require("../assets/user.jpg")} style={{ width: 90, height: 90, borderRadius: 50, }}></Image>
        </View>
        <View style={{ padding: 8 }}>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>Prashant Chauhan</Text>
          <Text style={{ marginTop: 2, marginBottom: 12 }}>prashant6787@gmail.com</Text>
          {/* <Text style={{paddingTop:2}}>+91-8802050387</Text> */}
          <TouchableOpacity style={{ flexDirection: 'row', }}
            onPress={() => {
              navigation.navigate("Profile");
            }}>
            <Text style={{ padding: 6, marginTop: 4, paddingRight: 10, paddingLeft: 10, backgroundColor: '#f8ebff', borderRadius: 5, color: '#691A99' }}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={{ marginTop: 10 }}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            endFillColor="#000"
            overScrollMode="never">
            {ProfileData.map((item, number) => {
              return (
                <TouchableOpacity key={number.toString()}
                  onPress={() => {
                    navigation.navigate("Profile");
                  }}>
                  <View style={{ flexDirection: 'row', flex: 1, padding: 12, alignItems: 'center', borderBottomColor: '#eee', borderBottomWidth: 1 }}>
                    <MaterialCommunityIcons name={item.icon} size={20} color={'#777'} style={{ padding: 10, paddingRight: 15 }} />
                    <Text style={{ color: '#000', fontSize: 16, flex: 10, color: '#777' }}>{item.name}</Text>
                    {/* <Image source={require('../assets/next.png')} style={{ width: 14, height: 18, flex: 1 }}></Image> */}
                    <MaterialCommunityIcons name="chevron-right" size={24} color={'#999'} />
                  </View>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
