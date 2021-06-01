import React from 'react';
import { View,Text, SafeAreaView } from 'react-native';
import StatusBarPage from '../../components/StatusBarPage';

// import { Container } from './styles';

const MyLinks = () => {
  return(
  <SafeAreaView>
    <StatusBarPage backgroundColor="#132742" barStyle="light-content" />
    <Text>Pagina MyLink</Text>
  </SafeAreaView>)
}

export default MyLinks;