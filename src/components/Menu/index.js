import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity,View,Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"

const Menu = ({
  leftIcon = "menu", 
  leftIconColor="#fff", 
  leftIconPress, 
  rightIcon,
  rightIconColor,
  rightIconPress,
  stylesContainer,
}) => {
  
  const styles = styleSheet();

  const navigation = useNavigation();

  const {width} = Dimensions.get('screen')

    
  return (
    <SafeAreaView style={[styles.container,stylesContainer]}>

      <View style={{flexDirection:'row',justifyContent:'space-between',width:width*0.90}}>
      
        {leftIcon && (
       
        <TouchableOpacity onPress={ leftIcon === 'menu' ? ()=>{navigation.openDrawer()}: leftIconPress}>
         
          <Feather name={leftIcon} size={30} color={leftIconColor} />
       
        </TouchableOpacity>)
        }

       {rightIcon && (
       
       <TouchableOpacity onPress={()=>{rightIconPress && rightIconPress()}}>
       
         <Feather name={rightIcon} size={30} color={rightIconColor} />
       
        </TouchableOpacity>
       )}

      </View>

    </SafeAreaView>
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