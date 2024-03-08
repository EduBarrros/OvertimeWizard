
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    SubContainer: {
        backgroundColor: "white",
        padding: 16,
        height: "40%",
        shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 3, // Para adicionar sombra no Android
    }
});

export default styles;
