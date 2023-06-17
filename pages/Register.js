import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import firebase from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = () => {
    const [username, setUsername] = useState('a');
    const [email, setEmail] = useState('a@com');
    const [password, setPassword] = useState('a');
    const auth= getAuth();
    const handleLogin = () => {
      createUserWithEmailAndPassword(auth,username, password, email)
        .then((userCredential) => {
          // Successful login
          const user = userCredential.user;
          alert(`Welcome, ${user.username}!`);
        })
        .catch((error) => {
          // Failed login
          const errorMessage = error.message;
          alert(errorMessage);
        });
    };
    
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Sign up</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Username"
            placeholderTextColor="#999"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        {/* <View style={styles.buttonCon}> */}
     

        <TouchableOpacity style={styles.registerBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
        {/* </View> */}
        <Text style={styles.texts}>
            OR
        </Text>
        <View style={styles.google}>
            <Text>Continue with google</Text>
        </View>
      </View>
    );

    };
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    logo: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 30,
    },
    inputView: {
      width: '80%',
      backgroundColor: '#f2f2f2',
      borderRadius: 10,
      height: 50,
      marginBottom: 20,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    inputText: {
      height: 50,
      color: '#000',
    },
    loginBtn: {
      width: '80%',
      backgroundColor: '#1a73e8',
      borderRadius: 10,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
    },
    loginText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    registerBtn:{
      width: '80%',
      backgroundColor: '#f0de',
      borderRadius: 10,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      color:'#000'
    },
    buttonCon:{
      flex:1,
      justifyContent:'space-between',
      flexDirection:'column',
      alignItems:'center',
      width:'100%',
      
    },
    google:{
       
            width: '80%',
            backgroundColor: '#30de',
            borderRadius: 10,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
        
    },
    texts:{
        fontSize:19,
        marginTop:25,
        fontWeight:'700'
      }
  });

  export default RegisterScreen
  