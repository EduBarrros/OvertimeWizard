
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    MainContainer: {
        height: 70,
        justifyContent: 'center',
    },
    UserImage: {
        width: 48,
        height: 48,
        backgroundColor: 'black',
        borderRadius: 26
    },
    UserContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    UserName: {
        fontSize: 24,
        fontWeight: "bold"
    }
});

export default styles;
  