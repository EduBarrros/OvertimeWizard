
import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    MainContainer: {
        height: 140,
        marginTop: 8,
        backgroundColor: 'gray',
        borderRadius: 10,
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
    SubContainer: {
        flexDirection: 'row'
    },
});

export default styles;
  