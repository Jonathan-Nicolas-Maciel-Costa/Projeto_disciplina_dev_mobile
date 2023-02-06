import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import image from '../../assets/logo.png'
import Input_text from '../componentes/caixa_de_texto.js'
import Input_password from  '../componentes/caixa_de_texto_password.js'
import Botao_padrao from  '../componentes/botão_verde_padrao.js'

export function Login({ navigation}) {

  function Tela_de_cadastro() {
    navigation.navigate('Cadastro')
  }

  return (
    <View style={styles.container}>

        <View style={styles.img_view}>
            <Image
            style={styles.logo_img}
            source= {require('../../assets/logo.png')}
            />
        </View>

        <Input_text place_holder='Nome de Usuario ou Email' />
        <Input_password place_holder='Senha' />

        <TouchableOpacity  style={styles.button} onPress={Tela_de_cadastro}>Não tenho conta ;-;</TouchableOpacity>

        <Botao_padrao texto_botao='Login' />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#171717',
    },
    img_view:
    {
        marginTop: 25,
        alignItems: 'center',
        marginBottom: 50,
    },
    logo_img:
    {
        width: '70%',
        height: 200,
        resizeMode: 'stretch',
    },
    button:
    {
        marginLeft: 21,
        fontFamily: 'Comic Sans MS',
        color: '#828EF4',
    },
  });