import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { app } from '../utils/firebase';

const auth = getAuth(app);

const AuthScreen = ({ authFn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)


  const signIn = () => {
    auth.onAuthStateChanged(user => {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => authFn(true))
        .catch(error => alert(error))      
    })
  }

  const register = () => {
    auth.onAuthStateChanged(user => {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => authFn(true))
        .catch(error => alert(error))
    })
  }
   
  const handlePress = () => {
    isRegister ? register() : signIn();
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={{paddingTop: 50, paddingBottom: 50, fontStyle: 'italic', fontSize: 32, padding: 2, color: 'purple'}}>Go Bananas with {'\n'}some Peachy individuals</Text>
      <TextInput placeholder='email' style={styles.textInput} value={email} onChangeText={setEmail} />
      <TextInput placeholder='password' style={styles.textInput} value={password} secureTextEntry onChangeText={setPassword} />
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={{ color: 'white' }}>{!isRegister? "Sign in" : "Register"}</Text>
      </Pressable>
      <Pressable onPress={() => setIsRegister(!isRegister)} style={[styles.button, styles.specialButton]}>
        <Text>{isRegister? "Sign in" : "Register"}</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
    marginTop: 90,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 5,
    width: '90%',
  },
  textInput: {
    height: 40,
    margin: 12,
    width: '90%',
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    width: '90%',
    borderRadius: 5,
    borderColor: 'black',
    margin: 10,
  },
  specialButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '90%',
    borderRadius: 5,
    borderColor: 'black',
  }
});