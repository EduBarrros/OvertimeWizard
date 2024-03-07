
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: 'gray',
        width: '100%',
        height: 70,
        justifyContent: 'center',
        paddingHorizontal: '2.5%',
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
        fontSize: 20
    }
});

export default styles;
  