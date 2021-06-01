import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, SafeAreaView, Image, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Menu from '../../components/Menu';
import StatusBarPage from '../../components/StatusBarPage';
import { Feather } from '@expo/vector-icons';
// import { Container } from './styles';

const Home = () => {
  return(
  <SafeAreaView style={{flex:1}}>
    <StatusBarPage backgroundColor="#1DDBB9" barStyle="light-content" />
    <LinearGradient 
    colors={['#1DDBB9','#132742']}
    style={{flex:1,justifyContent:'center'}}
    
    >
    <Menu />
    
    <View style={styles.containerImage}>
      <Image style={styles.image} resizeMode="contain" source={require('../../assets/Logo.png')}/>
    </View>

    <View style={styles.containerContent}>
      <Text style={styles.title}>SujeitoLink</Text>
      <Text style={styles.subTitle}>Cole seu link para encurtar</Text>

      <View style={styles.containerInput}>
        <View style={styles.inputIcon}>
        <Feather  name='link' size={22} color='#fff' />
        </View>

        <TextInput 
        style={styles.input} 
        placeholder="Cole seu link aqui..." 
        placeholderTextColor="white"

        />
      </View>

      <TouchableOpacity style={styles.btnLink} >
        <Text style={styles.btnTitle}>Gerar Link</Text>
      </TouchableOpacity>
    </View>


    </LinearGradient>
    
  </SafeAreaView>);
};

const styles = StyleSheet.create({
  containerImage: {
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
  },
  image:{
    width: 150,
    height: 150,
  },
  containerContent: {
    marginTop:'15%',
  },
  title:{
    fontSize:35,
    color:'#fff',
    fontWeight:'bold',
    textAlign:'center',
  },
  subTitle:{
    fontSize:18,
    color:'#fff',
    textAlign:'center',
    paddingBottom:'10%'
  },
  containerInput:{
    alignItems:'center',
    paddingHorizontal:15,
    flexDirection:'row',
    width: '100%',
    borderRadius:7,
    marginVertical: 15,
  },
  input:{
    alignItems:'center',
    justifyContent:'center',
    paddingLeft:10,
    fontSize:17,
    
    width: '90%',
    height: 55,
    
    backgroundColor: "rgba(255,255,255,0.15)",
    color: '#ddd',

    borderTopRightRadius:7,
    borderBottomRightRadius:7,
  },
  inputIcon:{
    alignItems:'center',
    justifyContent:'center',
    paddingLeft:10,
    width: '11%',
    height: 55,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderTopLeftRadius:7,
    borderBottomLeftRadius:7,
  },
  btnLink:{
    alignItems:'center',
    justifyContent:'center',
    height: 45,
    backgroundColor:'#fff',
    marginHorizontal:15,
    borderRadius:7,
    marginBottom:15,
  },
  btnTitle:{
    fontSize:18,
    
  },
});

export default Home;