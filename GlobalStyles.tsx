import { StyleSheet } from "react-native";
import { myColours } from "./Colours";

export const Styles = StyleSheet.create({
  btn: {
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: myColours.darkPink, // default fallback color
  },
  
  btnText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "white", // default color
  },
});