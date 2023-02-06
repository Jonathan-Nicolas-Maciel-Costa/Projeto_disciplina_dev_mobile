import React from 'react';
import {  StyleSheet, View, Text, Image, TextInput, TouchableOpacity  } from 'react-native';

import Input_text from '../componentes/caixa_de_texto.js'
import Input_password from  '../componentes/caixa_de_texto_password.js'
import Botao_padrao from  '../componentes/botão_verde_padrao.js'

export function Cadastro() {

  function Tela_de_cadastro() {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.img}container onPress={Tela_de_cadastro}>O usuario deveria inserir uma img aq</TouchableOpacity>
        <View style={styles.inputs}>

          <Input_text place_holder='Nome de Usuario' />
          <Input_text place_holder='Nome de Completo' />
          <Input_text place_holder='Email' />
          <Input_password place_holder='Senha' />
          <Input_password place_holder='Confirme a Senha' />
          
        </View>
        
        <Botao_padrao texto_botao='Cadastrar-se' />
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },
  inputs:
  {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:
  {
    height: 150,
    justifyContent:'center',
    alignItems:'center'
  }
})