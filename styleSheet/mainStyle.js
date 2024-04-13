import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    LoginTop: {
        backgroundColor: "blue",
        height: 200,
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,

        justifyContent: 'center'
    },
    LoginTopText: {
        textAlign: 'center',
        fontSize: 24,
        color: '#fff',
        marginTop: 30,
    },
    LoginTopText1: {
        textAlign: 'center',
        fontSize: 28,
        color: '#000',
        marginTop: 60,
        marginBottom:50
    },
    LoginInput: {
        width: '80%',
        borderWidth: 1,
        borderColor: "#E3E2E2",
        padding:10,
        paddingLeft:30,
        margin:8,
        borderRadius:50,
        fontSize:16
    },
    LoginCheckBoxSection: {
        flexDirection: 'row',
        marginTop:10
      },
    LoginCheckBoxText:{
        paddingLeft:5,
        fontSize:14,
    }
 
});


export default styles;