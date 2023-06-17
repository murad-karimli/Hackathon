import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import firebase from '../firebase';
import { navigation } from '@react-navigation/native'; 
import { getAuth, signInWithEmailAndPassword,  } from 'firebase/auth';

    

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('murad@mx.com');
  const [password, setPassword] = useState('password1');

  const goToRegisterPage = () => {
    navigation.navigate('Register');
  };
  const goToFogPassPage = () => {
    navigation.navigate('ForgotPass');
  };
  const goToReportPage = () => {
    navigation.navigate('ReportsDash');
  };
  const goToAdminPanel = () => {
    navigation.navigate('AdminPanel');
  };

  const auth= getAuth();
  const handleLogin = () => {
    signInWithEmailAndPassword(auth,username, password)
      .then((userCredential) => {
        // Successful login
        if(username=="admin@mx.com"){
            goToAdminPanel()
        }
        else{
            goToReportPage()
        }
      


      })
      .catch((error) => {
        // Failed login
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Log In</Text>
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
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.forgot} onPress={goToFogPassPage}>
           <Text style={styles.fogPass}>
           Did you forget your password?
           </Text>
      </TouchableOpacity>
      {/* <View style={styles.buttonCon}> */}
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

       <Text style={styles.texts}>
            OR if you don't have account
        </Text>

      <TouchableOpacity style={styles.registerBtn} onPress={goToRegisterPage}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>

      {/* </View> */}
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
  texts:{
    fontSize:19,
    margin:5,
    fontWeight:'700'
  },
  forgot:{
    backgroundColor:'#fff',
    marginTop:15,
   
  },
  fogPass:{
    fontWeight:'700',
    textDecorationLine:'underline'
  }
});

export default LoginScreen;
