import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Image } from 'react-native';


const Home = ({ navigation }) => {
  const goToReportPage = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('C:\Users\Admin\Desktop\ss\Mobile\img\download.png')} style={styles.logo} />
      <Text style={styles.heading}>Welcome to Incident Report App</Text>
      <Button title="Report Incident" onPress={goToReportPage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default Home;
