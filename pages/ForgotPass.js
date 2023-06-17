import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('a@example.com');
  
    const handleResetPassword = () => {
      if (!email) {
        Alert.alert('Error', 'Please enter your email');
        return;
      }
  
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          Alert.alert('Password Reset', 'A password reset email has been sent to your email address');
        })
        .catch((error) => {
          Alert.alert('Error', 'Failed to send password reset email. Please try again.');
          console.error(error);
        });
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Forgot Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Button title="Reset Password" onPress={handleResetPassword} />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    heading: {
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  });

  export default ForgotPasswordScreen;
