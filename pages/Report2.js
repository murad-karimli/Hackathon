import React, { useState } from 'react';
import storage from '@react-native-firebase/storage';

import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Report2 = () => {
  const [title, setTitle] = useState('aa');
  const [description, setDescription] = useState('bb');
  const [username, setUsername] = useState('');
  const [surname, setSurname] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [incidentType, setIncidentType] = useState('');
  const [operatorName, setOperatorName] = useState('');
  const [relationOp, setRelationOp] = useState('');
 
 

  const uploadFile = async () => {
    try {
      const fileUri = 'path/to/file'; // Replace with the actual file path
      const fileName = 'my-file.jpg'; // Replace with the desired file name
  
      const reference = storage().ref(fileName);
      await reference.putFile(fileUri);
  
      console.log('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  

  const handleReport = () => {
    // Perform validation before submitting the form
    if (!username || !companyName || !incidentType || !description) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
    }

    // Save the report to Firebase Firestore
    const firestore = firebase.firestore();
    firestore.collection('incidentReports').add({
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
        placeholder="operatorName"
        value={operatorName}
        onChangeText={setOperatorName}
    />

<TextInput
        style={styles.input}
        placeholder="relationOp"
        value={relationOp}
        onChangeText={setRelationOp}
    />


    {/* <Picker
style={styles.input}
selectedValue={incidentType}
onValueChange={(itemValue) => setIncidentType(itemValue)}
>
<Picker.Item label="Select Incident Type" value="" />
<Picker.Item label="Phishing" value="phishing" />
<Picker.Item label="Malware" value="malware" />
<Picker.Item label="Data Breach" value="data_breach" />

</Picker> */}
    {/* <Picker
selectedValue={selectedLanguage}
onValueChange={(itemValue, itemIndex) =>
setSelectedLanguage(itemValue)
}>
<Picker.Item label="Java" value="java" />
<Picker.Item label="JavaScript" value="js" />
</Picker> */}

    <TextInput
        style={styles.input}
        placeholder="Description"
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
    />

    <Button title="Report Incident" onPress={handleReport} /> 
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
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Report2;
