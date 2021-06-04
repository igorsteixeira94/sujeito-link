import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Feather} from '@expo/vector-icons';


const CardLink = ({link,leftIcon,rightIcon, stylesContainer,onPressCard,deleteLink}) => {

  const rightAction = ()=>{
    return (
      <TouchableOpacity onPress={deleteLink} style={styles.containerDelete}>
        <Feather 
          name="trash"
          color="#fff"
          size={24}
        />
      </TouchableOpacity>
    )
  }
  
  return (
    <View>
      <Swipeable renderRightActions={rightAction}>
        <TouchableOpacity 
          activeOpacity={0.9} 
          style={[styles.container,stylesContainer]} 
          onPress={onPressCard}
        >
          
          {leftIcon && (
            <View style={styles.iconLeft}>
              <Feather name={leftIcon} size={25} color="#fff" />
            </View>
          )}
          <Text numberOfLines={1} style={styles.textLink}>{link}</Text>
          {rightIcon && (
            <View>
              <Feather name={rightIcon} size={25} color="#fff" />
            </View>
          )}
        
        </TouchableOpacity>
      </Swipeable>
    </View>
    
  );
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
  },
  containerDelete:{
    width: '15%',
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,
    marginLeft:10,
  }
})

export default CardLink;