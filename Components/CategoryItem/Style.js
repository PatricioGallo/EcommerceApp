import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Opacity:{
        width: 150,
        height: 150,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title:{
        fontSize: 24,
        color: 'white',
    }
});