import react, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styleSheet/mainStyle";
import Checkbox from 'expo-checkbox';


const Login = ({ navigation }) => {
    const [isChecked, setChecked] = useState(false);
    return (
        <View>
            <View style={styles.LoginTop}>
                <Text style={styles.LoginTopText}>Login Page</Text>
            </View>
            <Text style={styles.LoginTopText1}>Welcome back !</Text>
            <SafeAreaView style={{ alignItems: "center" }}>
                <TextInput style={styles.LoginInput}
                    placeholder="Username"
                />
                <TextInput style={styles.LoginInput}
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </SafeAreaView>
            <View style={{ width: '80%', marginStart: '12%' }}>
                <View style={styles.LoginCheckBoxSection}>
                    <Checkbox
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#E53935' : undefined}
                        style={{ width: 16, height: 16, marginTop: 3 }}
                    />
                    <Text style={styles.LoginCheckBoxText}>Remember me</Text>
                </View>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', alignSelf: "center" }}
                onPress={() => {
                    navigation.navigate("Home");
                }}>
                <Text style={styles.loginBtn}>Login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignSelf: "center", marginTop: 30, }}>
                <Text style={{ paddingTop: 5, fontSize: 15, color: "#777" }}>New User? </Text>
                <TouchableOpacity style={{ alignSelf: "center", }}
                    onPress={() => {
                        navigation.navigate("Register");
                    }}>
                    <Text style={{ padding: 5, color: '#E53935', fontSize: 15 }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};


export default Login;


