import { StyleSheet } from "react-native";
import { colors } from "../../Contants/Colors";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    flatList: {
        width: "90%",
        flex: 1,
    },
    confirmButton: {
        width: "100%",
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTopWidth: 1,
        borderColor: "#ccc",
    },
    button:{
        width: "90%",
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 30,
    },
    textConfirm:{
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    totalContainer: {
        display: "flex",
        flexDirection: "row",
    },

    normalText: {
        fontSize: 16,
        color: "white",
    },
});