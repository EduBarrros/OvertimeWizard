import moment from "moment";
import "moment/locale/pt-br";
import * as React from "react";
import AppNavigator from "./src/routes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  moment.locale("pt-br");
  return (
    <>
      <StatusBar 
        style="dark"
      />
      <AppNavigator />
    </>
  );
}
