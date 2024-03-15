
import { Platform, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    MainContainer: {
        width: "95%",
        marginHorizontal: "2.5%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});

export default styles;
