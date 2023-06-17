import React, { useState } from 'react';
import { View, TextInput, Picker, Button, StyleSheet, Alert,Text } from 'react-native';
// import { firebase } from '../firebase';
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
// import firestore from '@react-native-firebase/firestore';

 

const IncidentReportForm = () => {
    const [uploading, setUploading]=useState(false)
    const [username, setUsername] = useState('');
    const [surname, setSurname] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [incidentType, setIncidentType] = useState('');
    const [description, setDescription] = useState('');


    const getReport= async () =>{
         
    }

        const handleReport = () => {
            // Perform validation before submitting the form
            if (username==" " || companyName==" " || incidentType==" " || description==" ") {
                Alert.alert('Error', 'Please fill in all fields');
                return;
            }
            // Save the report to Firebase Firestore

            firebase.firestore().collection('incidentReports').add({
                username,
                surname,
                companyName,
                email,
                phone,
                incidentType,
                description,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            
                .then(() => {
                    // Clear form fields after successful submission
                    setUsername('');
                    setCompanyName('');
                    setIncidentType('');
                    setDescription('');

                    // Show success message
                    Alert.alert('Success', 'Incident reported successfully');
                })
                .catch((error) => {
                    // Handle error while saving to Firestore
                    Alert.alert('Error', 'Failed to report incident');
                    console.error(error);
                });
        };

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={username}
                    onChangeText={setUsername}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Surname"
                    value={surname}
                    onChangeText={setSurname}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Company"
                    value={companyName}
                    onChangeText={setCompanyName}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    value={phone}
                    onChangeText={setPhone}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    multiline
                    numberOfLines={4}
                    value={description}
                    onChangeText={setDescription}
                />

                <Button title="Report Incident" style={styles.button} onPress={handleReport} /> 
            </View>
    )};
    ;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: '#fff',
        },
        input: {
            height: 60,
            borderColor: '#ccc',
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 10,
        },
      
    });

  
 export default IncidentReportForm;