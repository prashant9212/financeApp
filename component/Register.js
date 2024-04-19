import react, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styleSheet/mainStyle";


const Register = ({ navigation }) => {
    const [isChecked, setChecked] = useState(false);
    return (
        <View>
            <View style={styles.LoginTop}>
                <Text style={styles.LoginTopText}>Register Page</Text>
            </View>
            <Text style={styles.LoginTopText1}>Enter User Details!</Text>
            <SafeAreaView style={{ alignItems: "center" }}>
                <TextInput style={styles.LoginInput}
                    placeholder="User Name"
                />
                <TextInput style={styles.LoginInput}
                    placeholder="Mobile Number"
                />
                <TextInput style={styles.LoginInput}
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </SafeAreaView>

            <TouchableOpacity style={{ flexDirection: 'row', alignSelf: "center" }}
                onPress={() => {
                    navigation.navigate("Register");
                }}>
                <Text style={styles.RegisterBtn}>Register</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignSelf: "center", marginTop: 30, }}>
                <Text style={{ paddingTop: 5, fontSize: 15, color: "#777" }}>Already User? </Text>
                <TouchableOpacity style={{ alignSelf: "center", }}
                    onPress={() => {
                        navigation.navigate("Login");
                    }}>
                    <Text style={{ padding: 5, color: '#691A99', fontSize: 15 }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};


export default Register;


