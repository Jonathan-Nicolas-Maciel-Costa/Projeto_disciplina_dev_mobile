import React from 'react';
import {  StyleSheet, View, Text, Image, TextInput, TouchableOpacity  } from 'react-native';


export function listagem( {navigation} ) {

  function Home() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.fix}>
            <View style={styles.img_view} >
              <Image style={styles.img} source={require('../imgs/amostra.jpg')}/>
              <Text style={{color:'white', textAlign:'center'}}>Coleção x</Text>
            </View>
        </TouchableOpacity>
    </View>
    
  );
}
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#171717',
  },
  fix:
  {
    padding: 25,
  },
  img_view:
  {
    width: 100,
    height: 150,
  },
  img:
  {
    width: 100,
    height: 150,
    resizeMode: 'stretch',
  }
})