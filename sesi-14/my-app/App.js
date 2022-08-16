import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}
      />
      <Text>Learn React Native</Text>
      <TouchableOpacity
        onPress={() => {}}
        style={styles.btn}
      >
        <Text style={{color: 'white', textAlign: 'center'}}>Click</Text>
      </TouchableOpacity>
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
    height: 50
  },
  btn: {
    backgroundColor: 'green',
    color: 'white',
    padding: 10,
    width: 100,
  }
});
