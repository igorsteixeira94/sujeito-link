
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import MyLinks from './pages/MyLinks';
import { Ionicons } from '@expo/vector-icons';

const {Navigator,Screen} = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home"
      drawerContentOptions={{
        activeBackgroundColor:'#1DDBB9',
        activeTintColor:'#FFF',
        labelStyle:{
          fontSize:19,
          fontWeight:'bold'
        },
        contentContainerStyle:{
          marginTop:16,
        },
      }}
      >

        <Screen 
        name="Home" 
        component={Home} 
        options={{
          title:'Encurtar Link',
          drawerIcon:({color,focused,size})=> (
            <Ionicons name={focused ? 'cube' : 'cube-outline'} color={color} size={size} />
          )
        }} 
        />

        <Screen 
        name="MyLinks" 
        component={MyLinks} 
        options={{
          title:'Meus Links',
          drawerIcon:({color,focused,size})=> (
            <Ionicons name={focused ? 'stats-chart' : 'stats-chart-outline'} color={color} size={size} />
          ) 
        }} 
        />

      </Navigator>
    </NavigationContainer>
  );
}