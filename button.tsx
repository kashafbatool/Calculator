import { ThemeContext } from "@react-navigation/native";
import { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { myColours } from "../styles/Colours";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isPink?: boolean;  //im not sure about my colours right now. i want it to be the dark and light pink but i dont know how to write that 
    isLight?: boolean;
    isDark?: boolean;
}
export default function Button({ title, onPress, isPink, isLight }: ButtonProps) {
    const theme = useContext(ThemeContext);

    let buttonStyle = Styles.btn;
  let textStyle = Styles.btnText;

  if (isPink) {
    buttonStyle = { ...Styles.btn, backgroundColor: myColours.pink };
    textStyle = { ...Styles.btnText, color: "white" };
  } else if (isLight) {
    buttonStyle = { ...Styles.btn, backgroundColor: myColours.lightPink };
    textStyle = { ...Styles.btnText, color: "black" };
  } else {
    buttonStyle = { ...Styles.btn, backgroundColor: myColours.darkPink };
    textStyle = { ...Styles.btnText, color: "white" };
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
