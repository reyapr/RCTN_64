import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TextInput,
  FlatList
} from 'react-native';
import Example from './src/components/Example';

export default function App() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5000')
      .then(({data}) => {
        setUsers(data.results)
      })
  }, [])
  
  return (
    <View style={styles.container}>
      {/* <ScrollView>
        {
          users.map(item => {
            return (
              <View style={styles.user}>
                <View style={{ flex: 2 }}>
                  <Image
                    style={styles.img}
                    source={{
                      uri: item.picture.medium
                    }}
                  />
                </View>
                <View style={{ flex: 13 }}>
                  <Text>{item.name.title} {item.name.first} {item.name.last}</Text>
                  <Text>{item.email}</Text>
                </View>
              </View>
            )
          })
        }
      </ScrollView> */}
      
      <FlatList
        data={users}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) =>{
          return (
            <View style={styles.user}>
              <View style={{ flex: 2 }}>
                <Image
                  style={styles.img}
                  source={{
                    uri: item.picture.medium
                  }}
                />
              </View>
              <View style={{ flex: 13 }}>
                <Text>{item.name.title} {item.name.first} {item.name.last}</Text>
                <Text>{item.email}</Text>
              </View>
            </View>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25
  },
  user: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'grey',
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    padding: 5
  },
  img: {
    width: 40,
    height: 40
  },
  info: {
    flex: 1,
    backgroundColor: 'grey'
  }
});
