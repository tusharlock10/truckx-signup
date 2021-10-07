import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default LoginScreen = () => {
  const {name, setName} = useState('');
  const {email, setEmail} = useState('');
  const {password, setPassword} = useState('');

  useEffect(() => {
    StatusBar.setBackgroundColor('#222');
    StatusBar.setBarStyle('light-content', true);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <TextInput
        placeholder="John Bravo"
        placeholderTextColor="#808e9b"
        style={styles.input}
        autoCorrect={true}
        autoCompleteType="name"
        keyboardType="default"
        textContentType="name"
        onChangeText={setName}
      />
      <TextInput
        placeholder="email@example.com"
        placeholderTextColor="#808e9b"
        style={styles.input}
        autoCorrect={true}
        autoCompleteType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Shh..."
        placeholderTextColor="#808e9b"
        style={styles.input}
        secureTextEntry={true}
        textContentType="password"
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: '900',
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: 'white',
  },
  signUpButton: {
    backgroundColor: '#00C5CD',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 20,
  },
  signUpButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fafafa',
    alignSelf: 'center',
  },
});
