import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import GuardDashboard from './src/screens/GuardDashboard';
import RegisterVisitor from './src/screens/RegisterVisitor';
import ScanScreen from './src/screens/ScanScreen';
import VisitorDetails from './src/screens/VisitorDetails';
import AdminDashboard from './src/screens/AdminDashboard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:true}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="GuardDashboard" component={GuardDashboard} />
        <Stack.Screen name="RegisterVisitor" component={RegisterVisitor} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="VisitorDetails" component={VisitorDetails} />
        <Stack.Screen name="Admin" component={AdminDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
