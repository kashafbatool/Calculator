import { StyleSheet } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import { myColours } from '../../src/styles/Colours';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import Button from '@/src/components/button';
import { useState } from 'react';

export default function HomeScreen() {
 const [currentInput, setCurrentInput] = useState<string>('');
 const [previousInput, setPreviousInput] = useState<string>('');
 const [operation, setOperation] = useState<string>('');
 const [result, setResult] = useState<string>('');

 const handleButtonPress = (buttonTitle: string) => {
   if (buttonTitle === 'C') {
     handleClear();
   } else if (buttonTitle === '=') {
     handleEquals();
   } else if (['+', '-', '×', '÷'].includes(buttonTitle)) {
     handleOperator(buttonTitle);
   } else if (buttonTitle === '+/-') {
     setCurrentInput((prev) => (parseFloat(prev) * -1).toString());
   } else if (buttonTitle === '%') {
     setCurrentInput((prev) => (parseFloat(prev) / 100).toString());
   } else if (buttonTitle === '⌫') {
     setCurrentInput((prev) => prev.slice(0, -1));
   } else {
     setCurrentInput(prev => prev + buttonTitle);
   }
 };

 const handleClear = () => {
   setCurrentInput('');
   setPreviousInput('');
   setOperation('');
   setResult('');
 };

 const handleEquals = () => {
   if (currentInput && previousInput && operation) {
     const prevNum = parseFloat(previousInput);
     const currentNum = parseFloat(currentInput);
     let resultValue = 0;

     switch (operation) {
       case '+':
         resultValue = prevNum + currentNum;
         break;
       case '-':
         resultValue = prevNum - currentNum;
         break;
       case '×':
         resultValue = prevNum * currentNum;
         break;
       case '÷':
         resultValue = prevNum / currentNum;
         break;
       default:
         break;
     }

     setResult(resultValue.toString());
     setCurrentInput('');
     setPreviousInput(resultValue.toString());
     setOperation('');
   }
 };

 const handleOperator = (operator: string) => {
   if (currentInput !== '') {
     if (previousInput !== '') {
       handleEquals();
     } else {
       setPreviousInput(currentInput);
       setCurrentInput('');
     }
     setOperation(operator);
   }
 };

 return (
   <ThemedView style={styles.container}>
     <ParallaxScrollView headerBackgroundColor={{ light: myColours.light, dark: myColours.light }} headerImage={undefined}>
       <ThemedView style={styles.calcContainer}>
         <Text style={styles.displayText}>{result || currentInput || '0'}</Text>

         <ThemedView style={styles.row}>
           <Button title="C" onPress={() => handleButtonPress('C')} isPink/>
           <Button title="+/-" onPress={() => handleButtonPress('+/-')} isPink />
           <Button title="%" onPress={() => handleButtonPress('%')} isPink />
           <Button title="÷" onPress={() => handleButtonPress('÷')} isDark />
         </ThemedView>

         <ThemedView style={styles.row}>
           <Button title="7" onPress={() => handleButtonPress('7')} isLight />
           <Button title="8" onPress={() => handleButtonPress('8')} isLight />
           <Button title="9" onPress={() => handleButtonPress('9')} isLight />
           <Button title="×" onPress={() => handleButtonPress('×')} isDark />
         </ThemedView>

         <ThemedView style={styles.row}>
           <Button title="4" onPress={() => handleButtonPress('4')} isLight />
           <Button title="5" onPress={() => handleButtonPress('5')} isLight />
           <Button title="6" onPress={() => handleButtonPress('6')} isLight />
           <Button title="-" onPress={() => handleButtonPress('-')} isDark />
         </ThemedView>

         <ThemedView style={styles.row}>
           <Button title="1" onPress={() => handleButtonPress('1')} isLight />
           <Button title="2" onPress={() => handleButtonPress('2')} isLight />
           <Button title="3" onPress={() => handleButtonPress('3')} isLight />
           <Button title="+" onPress={() => handleButtonPress('+')} isDark />
         </ThemedView>

         <ThemedView style={styles.row}>
           <Button title="." onPress={() => handleButtonPress('.')} isLight />
           <Button title="0" onPress={() => handleButtonPress('0')} isLight />
           <Button title="⌫" onPress={() => handleButtonPress('⌫')} isLight />
           <Button title="=" onPress={() => handleButtonPress('=')} isDark />
         </ThemedView>
       </ThemedView>
     </ParallaxScrollView>
   </ThemedView>
 );
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: myColours.light,
   justifyContent: 'center',
   alignItems: 'center',
   padding: 20,
 },
 display: {
   height: 120,
   width: '100%',
   justifyContent: 'center',
   alignItems: 'flex-end',
   padding: 20,
   backgroundColor: 'light',
   borderTopLeftRadius: 20,
   borderTopRightRadius: 20,
 },
 displayText: {
   color: 'white',
   fontSize: 25,
   fontWeight: 'bold',
   width: '100%',
   textAlign: 'right',
 },
 calcContainer: {
   marginTop: 20,
   alignItems: 'center',
   backgroundColor: myColours.light,  // Replace black with light
   borderRadius: 20,
   padding: 10,
 },
 row: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginBottom: 15,
 },
});