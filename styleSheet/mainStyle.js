import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerHome: {
        backgroundColor: '#ffeded',
        height: '100%'
    },
    DashboardHeader: {
        elevation: 5,
        shadowColor: '#000',
        backgroundColor: '#fff',
        paddingTop: 40,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20
    },
    RecentlyCardBox: {
        elevation: 1,
        shadowColor: '#000',
        backgroundColor: '#fff',
        width:'97%',
        borderRadius:10,
        padding:3,
        margin:'1.5%',
        margin:'1%'
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
        width: 55,
        height: 55,
        backgroundColor: '#F5F5F5',
        borderColor: '#d92622',
        borderWidth: 1,
        margin: 12,
        textAlign: 'center',
        textAlignVertical: "center",
        padding: 10,
        borderRadius: 50,
        color: '#fff',
        fontSize: 16
    },
    servicesCard: {
        width: '96%',
        marginStart: '2%',
        elevation: 1,
        shadowColor: '#000',
        margin: '2%',
        marginTop: '0%',
        borderRadius: 15,
        paddingBottom: 20,
        backgroundColor: '#fff',
        padding: 5,
        borderColor: '#E0E0E0',
        borderWidth: 1
    },
    RecentlyCard: {
        width: '100%',
        marginTop: '-2%',
        paddingBottom: 20,
        padding: 5,
    },
    ServicesList: {
        width: 68,
        height: 68,
        backgroundColor: '#f9f9f9',
        borderColor: '#f1f1f1',
        borderWidth: 1,
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