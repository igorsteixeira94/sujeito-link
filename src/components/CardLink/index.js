import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Feather} from '@expo/vector-icons';


const CardLink = ({shortLink,leftIcon,rightIcon, onPressCard,stylesContainer}) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.9} 
      style={[styles.container,stylesContainer]} 
      onPress={()=>{onPressCard && onPressCard()}}
    >
      {leftIcon && (
        <View style={styles.iconLeft}>
          <Feather name={leftIcon} size={25} color="#fff" />
        </View>
      )}
      <Text numberOfLines={1} style={styles.textLink}>{shortLink}</Text>
      {rightIcon && (
        <View>
          <Feather name={rightIcon} size={25} color="#fff" />
        </View>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    height: 45,
    width:"100%",
    backgroundColor:"#172742",
    borderRadius:7,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10,
  },
  textLink:{
    fontSize:15,
    color:'#fff',
  },
  iconLeft:{
    marginRight:10,
  }
})

export default CardLink;