
import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
        height: 70,
        borderRadius: 8,
        marginVertical: 8,
        ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
            },
            android: {
              elevation: 4,
            },
          }),
    },
    MainText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    }
});

export default styles;
  