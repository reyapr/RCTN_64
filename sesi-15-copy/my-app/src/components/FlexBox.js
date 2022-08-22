import { StatusBar } from 'expo-status-bar';
import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TextInput
} from 'react-native';
import Example from './src/components/example';

export default function FlexBox() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 25,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  box1: {
    backgroundColor: 'red',
    width: 50,
    height: 50
  },
  box2: {
    
    backgroundColor: 'yellow',
    width: 50,
    height: 50
  },
  box3: {
    backgroundColor: 'green',
    width: 50,
    height: 50
  }
});
