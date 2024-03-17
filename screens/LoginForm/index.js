import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

export default function LoginForm() {
  const navigation = useNavigation()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Username:', username)
    console.log('Password:', password)
    
    if (username === 'pengguna' && password === 'masuk') {
      alert('Login berhasil!');
      navigation.navigate('Catalog')
    } else {
      alert('Login gagal! Coba lagi.');
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title_h1}>Welcome Back!</Text>
        <Text style={styles.title_h2}>TK 2 - Mobile Programming</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder='Username'
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Text style={styles.forgot}>Forgot your password?</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  title_h1: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 37,
    marginBottom: 20,
    color: 'green'
  },
  title_h2: {
    textAlign: 'center',
    fontWeight: '400',
    marginBottom: 17,
    fontSize: 15,
  },
  forgot: {
    marginBottom: 10,
    marginRight: 200,
    marginBottom: 15,
    color: '#696969'
  }
})
