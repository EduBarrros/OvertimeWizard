
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    SubContainer: {
        backgroundColor: "white",
        paddingHorizontal: "2.5%",
        paddingVertical: 16,
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
    StartContainer: {
        flexDirection: 'row',
        marginTop: 32
    },
    StartDateContainer: {
        width: '50%',
        marginRight: '5%'
    },
    StartHourContainer: {
        width: '50%'
    },
    DateInput: {
        height: 40,
        width: "90%",
        backgroundColor: '#EDF2F7',
        marginTop: 16,
        borderRadius: 8
    },
    EndContainer: {
        flexDirection: 'row',
        marginTop: 32,
        marginBottom: '10%'
    },
    EndDateContainer: {
        width: '50%',
        marginRight: '5%'
    },
    EndHourContainer: {
        width: '50%'
    },
    InputTitle: {
        color: '#2B6CB0'
    }
});

export default styles;
