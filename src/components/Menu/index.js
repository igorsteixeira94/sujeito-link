import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"

const Menu = () => {
  
  const styles = styleSheet();

  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
        <Feather name="menu" size={30} color="#FFF" />
      </TouchableOpacity>
    </View>
  )
};

const styleSheet = () => StyleSheet.create({
  container:{
    position: 'absolute',
    top:10,
    marginLeft:15,
    justifyContent:'space-around',
  }
})

export default Menu;