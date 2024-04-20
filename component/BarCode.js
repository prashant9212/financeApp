import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";
import { CameraView, Camera } from "expo-camera/next";
import { PaymentUser, } from './DataApi/Data';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styleSheet/mainStyle'
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

const BarCode = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    console.log(data);    
  };


  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.containerBarcode}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={{ backgroundColor: '#fff', height: 210, borderTopEndRadius: 30, borderTopStartRadius: 30, }}>
        <TextInput keyboardType="number-pad" placeholder="Enter Mobile Number" style={{ fontSize: 18, borderColor: '#ccc', borderWidth: 1, width: '90%', margin: '5%', padding: 13, borderRadius: 15 }} />
        <View style={{ flexDirection: 'row', }}>
          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}
            endFillColor="#000"
            overScrollMode="never">
            {PaymentUser.map((data, number) => {
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
                  <Text style={{ textAlign: 'center', fontSize: 12, color: '#691A99' }}>{data.name}</Text>
                </View>
              )
            })}
          </ScrollView>
        </View>
      </View>
      {scanned && (
        <TouchableOpacity style={styles.ScanAgainBtn} title={"Tap to Scan Again"} onPress={() => setScanned(false)}>
          <Text style={{ fontSize: 16 }}>Scan Again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}


export default BarCode