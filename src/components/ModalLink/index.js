import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View, Share } from 'react-native';
import CardLink from '../CardLink';
import Menu from '../Menu';

import Clipboard from 'expo-clipboard';
import { useCallback } from 'react';

// import { Container } from './styles';

const ModalLink = ({setVisible,shortLinkData}) => {
 
  const copyLink = useCallback(()=>{

    Clipboard.setString(shortLinkData?.link);

  },[]);

  const handleShare = useCallback(()=>{
    try {
      const result = Share.share({
        message:shortLinkData?.link
      })
    } catch (error) {
      
    }
  },[]);

  return (
    <View style={styles.modalContainer}>
      <TouchableWithoutFeedback onPress={()=>setVisible(false)}>
        <View style={{flex:1}}/>
      </TouchableWithoutFeedback>
      
      <View style={styles.container}>

        <View style={styles.containerMenu}>

          <Menu 
            leftIcon={"x"} 
            leftIconColor={"#212743"} 
            leftIconPress={()=>setVisible(false)}
            rightIcon="share"
            rightIconColor={"#212743"}
            rightIconPress={handleShare}
            stylesContainer={{marginLeft:0}}
          />

        </View>

        <View style={styles.containerContent}>

          <Text style={styles.title}>Link encurtado:</Text>
          <Text numberOfLines={1} style={styles.longUrl}>{shortLinkData?.long_url}</Text>
          
          <CardLink link={shortLinkData?.link }rightIcon="copy" onPressCard={copyLink}/>
       
        </View>


      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  modalContainer:{
    flex: 1,
    
  },
  container:{
    flex:1,
    backgroundColor:'#fff',
    borderTopLeftRadius:7,
    borderTopRightRadius:7,
    paddingHorizontal:15,
  },
  containerMenu:{
    flex:1
  },
  containerContent:{
    flex: 4
  },
  title:{
    fontSize:33,
    fontWeight:'bold',
    color:'#1ccbae'
  },
  longUrl:{
    fontSize:17,
    color:'#a7a7a7',
    marginBottom:30,
  }
});

export default ModalLink;