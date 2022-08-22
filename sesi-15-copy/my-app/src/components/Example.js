import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TextInput
} from 'react-native';

export default function Example() {
  return (
    <ScrollView>
      <View style={styles.view}>
        <Text>Some Text</Text>
        <View>
          <Text>Another Text</Text>
          <Image
            source={{
              uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
            }}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <TextInput
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            width: 250,
            height:40
          }}
          defaultValue='please type here'
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    paddingTop: 20
  }
});
