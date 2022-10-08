import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    Opacity:{
        width: 300,
        height: 150,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: Colors.primary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        borderRadius: 10,
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
    text:{
        fontSize: 20,
        color: 'black',
    }
});