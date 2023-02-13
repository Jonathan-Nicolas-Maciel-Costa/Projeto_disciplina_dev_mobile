import React from 'react';
import {  StyleSheet, View, Text, Image, TextInput, TouchableOpacity  } from 'react-native';


export function Dados_colecao( {navigation} ) {

  function Home() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
        <Image style={styles.img} source={require('../imgs/amostra.jpg')}/>
    </View>
    
  );
}
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#171717',
  },
  img:
  {
    height: 150,

  }
})