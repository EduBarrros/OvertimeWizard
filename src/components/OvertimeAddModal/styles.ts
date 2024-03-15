
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    SubContainer: {
        backgroundColor: "white",
        paddingHorizontal: "2.5%",
        paddingTop: 16,
        height: "55%",
        borderTopStartRadius: 16,
        borderTopEndRadius: 16,
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
        borderColor: "#021867",
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
