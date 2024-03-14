
import { StyleSheet, Platform} from "react-native";

const styles = StyleSheet.create({
    MainContainer: {
        height: 120,
        backgroundColor: '#CBD2DA',
        borderRadius: 8,
        marginBottom: 8,
        flexDirection: 'row'
    },
    SectionContainer: {
        width: '50%',
        paddingLeft: 16,
        paddingVertical: 16,
        justifyContent: 'space-between'
    },
    SectionValue: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'blue',
        marginTop: 4
    },
    TimeText: {
        fontWeight: 'bold',
        color: '#2D3748',
        fontSize: 24,
        marginTop: 4
    },
    SectionText: {
        fontSize: 12,
        color: '#718096'
    },
    DateName: {
        fontWeight: 'bold',
        color: '#718096'
    }
});

export default styles;
