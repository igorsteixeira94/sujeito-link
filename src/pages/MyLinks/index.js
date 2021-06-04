import React,{ useState, useEffect, useCallback } from 'react';
import { View,Text, SafeAreaView, StyleSheet, FlatList, Modal, ActivityIndicator } from 'react-native';
import {useIsFocused} from '@react-navigation/native';


import ShortLinkStorage from '../../utils/ShortLinkStorage';

import ModalLink from '../../components/ModalLink';
import CardLink from '../../components/CardLink';
import Menu from '../../components/Menu';
import StatusBarPage from '../../components/StatusBarPage';
import { set } from 'react-native-reanimated';

const MyLinks = () => {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);

  const [shortLinks, setShortLinks] = useState([]);
  const [shortLinkData,setShortLinkData] = useState('');
  const [modalVisible,setModalVisible] = useState(false);

  const loadData = useCallback(async ()=>{
    setLoading(true);
    try {
      const myLinks = await ShortLinkStorage.getLinksSave();
      setShortLinks(myLinks);
    } catch (error) {
      
    }finally{
      setLoading(false);
    }

  },[]);

  const handleItem = useCallback((link)=>{
    setShortLinkData(link);
    setModalVisible(true);
  },[shortLinks]);

  const deleteLink = useCallback(async (link)=>{
    const result = await ShortLinkStorage.deleteLink(shortLinks,link.id);
    setShortLinks(result);
  },[shortLinks]);

  const EmptyShortLink = () =>{
    if(loading){
      return(
        <View style={styles.emptyContainer}>
          <ActivityIndicator color="#fff" size={24} />
        </View>
      );
    }
    if(!loading && shortLinks.length === 0){
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Você ainda não possui nenhum link :(</Text>
        </View>
      );
    }
    return(null);
  }

  useEffect(()=>{
    loadData()
  },[isFocused]);
  return(
    <SafeAreaView style={styles.container}>
      <StatusBarPage backgroundColor="#132742" barStyle="light-content" />
      <Menu />
      <Text style={styles.title}>MeusLinks</Text>

      <FlatList
        ListEmptyComponent={EmptyShortLink}
        key={String(Math.random())}
        data={shortLinks}
        keyExtractor={(item)=>{String(item.id)}}
        renderItem={
          ({item})=>
          <CardLink
            onPressCard={()=>{handleItem(item)}}
            stylesContainer={styles.cardLink}
            link={item.long_url}
            leftIcon="link"
            deleteLink={()=>deleteLink(item)}
          />}
        contentContainerStyle={{padding:15}}
        ItemSeparatorComponent={()=><View style={styles.itemSeparator}/>}
        showsVerticalScrollIndicator={false}
      />
      <Modal visible={modalVisible} transparent animationType="slide">  
        <ModalLink setVisible={setModalVisible} shortLinkData={shortLinkData} />
      </Modal>
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
  },
  emptyContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  emptyText:{
    fontSize:18,
    color: '#fff',
    textAlign:'center',
    fontWeight:'bold',
    marginTop:20,
  }

})

export default MyLinks;