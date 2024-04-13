import react, { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import styles from "../styleSheet/mainStyle";
import Checkbox from 'expo-checkbox';

const Login = () => {
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
                <View style={styles.LoginCheckBoxSection}>
                    <Checkbox                        
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? 'blue' : undefined}
                    />
                    <Text style={styles.LoginCheckBoxText}>Remember me</Text>
                </View>
            </SafeAreaView>
        </View>

    );
};


export default Login;


