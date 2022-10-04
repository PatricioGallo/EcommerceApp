import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoContainer:{
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle:{
        fontSize: 17,
        fontStyle: 'italic',
        marginBottom: 10,
        marginTop: 30,
    },
    description:{
        fontSize: 16,
    },
});