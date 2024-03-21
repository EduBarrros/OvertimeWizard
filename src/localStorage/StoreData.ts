import AsyncStorage from "@react-native-async-storage/async-storage";

const StoreData = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
        console.log("Sucesso");
    } catch (error) {
        return {
            error: 1,
            errorMessage: error
        };
    };
};

export default StoreData;