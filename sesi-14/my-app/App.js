import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import MyButton from './src/components/MyButton';

export default function App() {
  const [counter, setCounter] = useState(0)
  
  const increment = () => {
    setCounter(counter + 1)
  }
  
  const decrement = () => {
    setCounter(counter - 1)
  }
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}
      />
      <View style={{ borderWidth: 1, padding: 5}}>
        <Text style={{textAlign: 'center'}}>{counter}</Text>
        <View style={styles.counterBtn}>
          <MyButton onPress={increment} style={styles.btn} textStyle={styles.textBtn}>
            +
          </MyButton>
          <MyButton onPress={decrement} style={styles.btnRed} textStyle={styles.textBtn}>
            -
          </MyButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 50,
    height: 50,
    marginBottom: 10
  },
  btn: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    width: 40,
    borderRadius: 10
  },
  btnRed: {
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
    width: 40,
    borderRadius: 10
  },
  counterBtn: {
    display: 'flex',
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between'
  },
  textBtn: {
    textAlign: 'center', 
    color: 'white'
  }
});
