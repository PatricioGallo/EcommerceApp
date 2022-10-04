import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerOrder: {
        width: '100%',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
        borderRadius: 5,
        marginVertical: 5,
        paddingHorizontal: 40,
    },
    dateStyle:{
        fontSize: 17,
        marginBottom: 5,
        letterSpacing: 2,
    },
    containerDetail:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerText:{
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'left',
    },
    price:{
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text:{
        fontSize: 16
    }
});