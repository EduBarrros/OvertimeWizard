import React from "react";
import { Text, SafeAreaView} from "react-native";

import { Header, OvertimeResume } from "../../components";

const Home = () => {
    return(
        <SafeAreaView>
           <Header />
           <OvertimeResume />
        </SafeAreaView>
    )
};

export default Home;