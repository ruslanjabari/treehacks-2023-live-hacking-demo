import { useState } from 'react';
import { StyleSheet, View, LogBox, Image, SafeAreaView, Text } from 'react-native';
import Cards from './components/swipecards';
import AuthScreen from './components/auth';

LogBox.ignoreAllLogs();

export default function App() {
  const [isAuthed, setIsAuthed] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
    <View style={{ flexDirection: 'row', top: 50, left: 20, width: '100%', alignItems: 'center'}}>
      <Image style={{width: 50, height: 50, resizeMode: 'contain',  }} source={{ uri: ('https://clipartix.com/wp-content/uploads/2018/03/smoothie-clipart-2018-15.png')}} />
      <Text style={{fontSize: 20, fontWeight: '700'}}>smoothie</Text>
    </View>
    {!isAuthed ? (
    <AuthScreen authFn={setIsAuthed} />
    ) : (
      <Cards authed={isAuthed} />
    )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
});
