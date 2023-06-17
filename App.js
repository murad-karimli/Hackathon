import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './pages/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'; 
import RegisterScreen from './pages/Register';
import Report1 from './pages/Report1';
import Home from './pages/Home';
import ReportsPage from './pages/ReportsDash';
import AdminPanel from './AdminPanel';
import ForgotPasswordScreen from './pages/ForgotPass';
import Report2 from './pages/Report2';
import Report3 from './pages/Report3';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
       <Stack.Screen name='Home' component={Home}/> 
       <Stack.Screen name='Report1' component={Report1}/>
       <Stack.Screen name='Report2' component={Report2}/>
       <Stack.Screen name='Report3' component={Report3}/>
       <Stack.Screen name='Login' component={LoginScreen}/>
       <Stack.Screen name='Register' component={RegisterScreen}/>
       <Stack.Screen name='ReportsDash' component={ReportsPage}/>
       <Stack.Screen name='AdminPanel' component={AdminPanel}/>
       <Stack.Screen name='ForgotPass' component={ForgotPasswordScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
    
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
