import AsyncStorage from "@react-native-async-storage/async-storage";

const GetData = async (key: string) => {
    //AsyncStorage.clear()
    try {
        const value = await AsyncStorage.getItem(key);
        
        if (typeof value === 'string') {
            const array = JSON.parse(value);
            return array
          } 
    } catch (error) {
        console.log(error)
    };
};

export default GetData;