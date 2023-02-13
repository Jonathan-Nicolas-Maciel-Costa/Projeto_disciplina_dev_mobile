import React from 'react';
import {  StyleSheet, View, Text, Image, TextInput, TouchableOpacity  } from 'react-native';

import Input_text from '../componentes/caixa_de_texto_password'
import Botao_padrao from  '../componentes/botão_verde_padrao.js'

export function Alterar_senha( {navigation} ) {

  function Home() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>

        <View style={styles.inputs}>

            <Input_text place_holder='Senha Atual' />
            <Input_text place_holder='Nova Senha' />
            <Input_text place_holder='Confirme a Senha' />
        
        </View>
        
        <Botao_padrao texto_botao='Alterar Senha' />
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'auto',
    backgroundColor: '#171717',
  },
  inputs:
  {
    margin: '50%',
    justifyContent:'center',
    alignContent: 'center',
  }
})