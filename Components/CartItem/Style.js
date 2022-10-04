import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    CartContainer: {
        width: '100%',
        height: 150,
        display: 'flex',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 20,
        borderRadius: 5,
        marginVertical: 5,
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
    },
    content:{
        width: '100%',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textContent:{
        fontSize: '16',
    },
    textBold:{
        fontSize: '17',
        fontWeight: 'bold',
    }
});