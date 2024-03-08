
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    SubContainer: {
        backgroundColor: "white",
        paddingHorizontal: "2.5%",
        paddingTop: 16,
        height: "55%",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        borderTopStartRadius: 16,
        borderTopEndRadius: 16
    },
    HeaderModal: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16
    },
    HeaderTitle: {
        fontSize: 24,
        fontWeight: "bold"
    },
    DateSelect: {
        borderWidth: 1,
        borderColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        marginTop: 16,
        borderRadius: 8,
    },
    DateSelectText: {
        fontWeight: "bold"
    }
});

export default styles;
