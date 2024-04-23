import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from "react-native";
import styles from "../styleSheet/mainStyle";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ProfileData } from "./DataApi/Data";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.containerProfile}>
      <View style={styles.ProfileHeader}>
        <Text style={styles.ProfileHeadText}>My Profile</Text>
      </View>
      <View style={{flexDirection:"row"}}>
        <View style={{padding:12,}}>
          <Image source={require("../assets/user.jpg")} style={{width:90, height:90, borderRadius:50,}}></Image>
        </View>
        <View style={{padding:8}}>
          <Text style={{fontSize:20,fontWeight:'500' }}>Prashant Chauhan</Text>
          <Text style={{marginTop:2, marginBottom:12}}>prashant6787@gmail.com</Text>
          {/* <Text style={{paddingTop:2}}>+91-8802050387</Text> */}
          <TouchableOpacity style={{ flexDirection: 'row', }}
              onPress={() => {
                  navigation.navigate("Profile");
              }}>
              <Text style={{padding:6, marginTop:4, paddingRight:10,paddingLeft:10, backgroundColor:'#f8ebff', borderRadius:5, color:'#691A99'}}>Edit Profile</Text>
          </TouchableOpacity>
        </View>        
      </View>
      <View>
      <FlatList
        data={ProfileData}
          renderItem={({item, key}) =>  
          <TouchableOpacity key={item.id} style={{ flexDirection: 'row', }}
              onPress={() => {
                  navigation.navigate("Profile");
              }}>
              <View style={{flexDirection:'row',padding:10, justifyContent:'center' }}>
                <MaterialCommunityIcons name="arrow-left" size={20} color={'#691A99'} />
                <Text style={{color:'#000', fontSize:18}}>{item.name}</Text>
                <MaterialCommunityIcons name="arrow-right" size={20} color={'#691A99'} />
              </View>
          </TouchableOpacity>
          
        } />
      </View>
    </View>
  );
};

export default Profile;
