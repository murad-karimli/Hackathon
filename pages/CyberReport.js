import React, { useState } from 'react';
import { View, TextInput, Picker, Button, StyleSheet, Alert, Text } from 'react-native';
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase';

const CyberReport = () => {
    const [username, setUsername] = useState('');
    const [surname, setSurname] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [incidentType, setIncidentType] = useState('');
    const [description, setDescription] = useState('');


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
    )
};


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



export default CyberReport