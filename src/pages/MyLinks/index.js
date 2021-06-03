import React from 'react';
import { View,Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import CardLink from '../../components/CardLink';
import Menu from '../../components/Menu';
import StatusBarPage from '../../components/StatusBarPage';

// import { Container } from './styles';

const MyLinks = () => {
  return(
    <SafeAreaView style={styles.container}>
      <StatusBarPage backgroundColor="#132742" barStyle="light-content" />
      <Menu />
      <Text style={styles.title}>MeusLinks</Text>

      <FlatList 
        data={[{id:1, link:'test.com'},{id:2, link:'test.com'}]}
        keyExtractor={(item)=>{String(item.id)}}
        renderItem={({item})=><CardLink stylesContainer={styles.cardLink} shortLink={item.link} leftIcon="link" />}
        contentContainerStyle={{padding:15}}
        ItemSeparatorComponent={()=><View style={styles.itemSeparator}/>}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#132742',
  },
  title:{
    marginTop:'20%',
    marginLeft:20,
    fontSize:33,
    fontWeight:'bold',
    color:"#fff"
  },
  cardLink:{
    justifyContent:'flex-start',
    backgroundColor:' rgba(255, 255, 255, 0.15)',
  },
  itemSeparator:{
    margin: 8,
  }

})

export default MyLinks;