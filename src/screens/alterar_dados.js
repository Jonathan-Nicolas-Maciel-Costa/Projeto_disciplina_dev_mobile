import React from 'react';
import {  StyleSheet, View, Text, Image, TextInput, TouchableOpacity  } from 'react-native';

import Input_text from '../componentes/caixa_de_texto.js'
import Botao_padrao from  '../componentes/botão_verde_padrao.js'

export function Alterar_dados( {navigation} ) {

  function Senha() {
    navigation.navigate('Alterar_senha')
  }
  return (
    <View style={styles.container}>

        <View  style={styles.img_view} >

          <Image style={styles.img} source={require('../imgs/user_icon.jpg')} />

        </View>

        <TextInput style={styles.name} placeholder='Nome'></TextInput>
        <View >

          <Input_text place_holder='Nome completo' />
          <Input_text place_holder='Email' />
          <Input_text place_holder='00/00/0000' />
        
        </View>

        <TouchableOpacity onPress={Senha}><Text style={styles.alt_senha}>Alterar Senha</Text></TouchableOpacity>
        
        <Botao_padrao texto_botao='Salvar' />
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
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
    marginTop: 50,
    marginBottom: 30,

    height: 200,
    width: 150,
    resizeMode: 'stretch',
    justifyContent:'center',
    alignItems:'center',
  },
  img_view:
  {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  alt_senha:
  {
    color:'red',
    textDecorationLine: 'underline',
    marginLeft: 16,
  },
  name:
  {
    marginBottom: 30,
    color: 'white',
    textAlign: 'center',
    outlineStyle: 'none',
  },
})