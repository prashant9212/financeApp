import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    LoginTop: {
        backgroundColor: "#E53935",
        height: 200,
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,

        justifyContent: 'center'
    },
    LoginTopText: {
        textAlign: 'center',
        fontSize: 28,
        color: '#fff',
        marginTop: 30,
    },
    LoginTopText1: {
        textAlign: 'center',
        fontSize: 28,
        color: '#000',
        marginTop: 60,
        marginBottom: 50
    },
    LoginInput: {
        width: '80%',
        borderWidth: 1,
        borderColor: "#E3E2E2",
        padding: 10,
        paddingLeft: 30,
        margin: 8,
        borderRadius: 50,
        fontSize: 16
    },
    LoginCheckBoxSection: {
        flexDirection: 'row',
        marginTop: 10,
    },
    LoginCheckBoxText: {
        paddingLeft: 10,
        fontSize: 14,
        color: '#777'
    },
    loginBtn: {
        width: 200,
        backgroundColor: '#E53935',
        marginTop: 50,
        textAlign: 'center',
        padding: 10,
        borderRadius: 50,
        color: '#fff',
        fontSize: 16
    },
    RegisterBtn: {
        width: 200,
        backgroundColor: '#E53935',
        marginTop: 30,
        textAlign: 'center',
        padding: 10,
        borderRadius: 50,
        color: '#fff',
        fontSize: 16
    },
    DashCardList: {
        width: 51,
        height: 51,
        backgroundColor: '#F5F5F5',
        borderColor:'#E0E0E0',
        borderWidth:1,
        margin: 10,
        textAlign: 'center',
        textAlignVertical: "center",
        padding: 10,
        borderRadius: 50,
        color: '#fff',
        fontSize: 16
    },
});


export default styles;