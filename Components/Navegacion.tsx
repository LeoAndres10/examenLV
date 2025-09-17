import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Inicio from '../Pages/Inicio';
import Transferencia from '../Pages/Transferencia';
import Historial from '../Pages/Historial';

export default function NavBar() {

  const tab=createBottomTabNavigator();

  return (
    <View>
        <Text>Bienvenido a su banco de Preferencia</Text>
    
    <NavigationContainer>
        <tab.Navigator>
            <tab.Screen name='Inicio' component={Inicio}></tab.Screen>
             <tab.Screen name='Transferencia' component={Transferencia}></tab.Screen>
              <tab.Screen name='Historico' component={Historial}></tab.Screen>
        </tab.Navigator>
    </NavigationContainer>
    </View>
  )
}