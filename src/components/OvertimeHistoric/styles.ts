
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        marginTop: 8,
    },
    EmptyMainContainer: {
        height: 430,
        justifyContent: 'center',
        alignItems: 'center'
    },
    EmptyTitle: {
        marginTop: 12,
        fontSize: 16,
        fontWeight: 'bold'
    },
    OrderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18
    },
    OrderText:{
        color:'#2B6CB0',
        fontWeight: '700',
        fontSize: 14,
        marginLeft: 4
    },
    ItensCounter: {
        color:'#2B6CB0',
        fontWeight: '700',
        fontSize: 14
    },
    IconOrder: {
        flexDirection: 'row'
    }
});

export default styles;
