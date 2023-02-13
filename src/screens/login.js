import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

import image from '../../assets/logo.png'
import Input_text from '../componentes/caixa_de_texto.js'
import Input_password from  '../componentes/caixa_de_texto_password.js'
import Botao_padrao from  '../componentes/botao_login'

import { TarefaService } from '../api/tarefas/tarefas_service';



export function Login({ navigation}) {
  const [user, userList]=useState([]);
  const [username, usernameupdate]=useState('');
  const [password, passwordupdate]=useState('');


  useEffect(() => {
    TarefaService.getALL()
    .then((resultado) => {
      userList(resultado)

      console.log(resultado,'<<<<<<<')
    })
  }, []);

  function Tela_de_cadastro() {
    navigation.navigate('Cadastro')
  }
  function Logout() {
    navigation.navigate('Logout')
  }

  function alterar_username (value)
  {
    usernameupdate(value);
    console.log(username)
  }
  function alterar_senha (value)
  {
    passwordupdate(value);
    console.log(password)
  }

  

  function logar(){
    console.log(user, username, password,'<<<<<<<')
    for ( let x = 0; x < user.length; ++x)
    {
      console.log(user[x].Senha, username, password,'<<<<<<<')
      if (user[x].Nome == username)
      {
        if (user[x].Senha == password)
        {
          return Logout()
        }
      }    
    }
  }

  return (
    <View style={styles.container}>

        <View style={styles.img_view}>
            <Image
            style={styles.logo_img}
            source= {require('../../assets/logo.png')}
            />
        </View>

        <View style={styles.view_text_input}>
          <TextInput style={styles.text_input} onChangeText={(texto)=> alterar_username(texto)} placeholder = 'Nome'/>
        </View>
        <View style={styles.view_text_input}>
          <TextInput secureTextEntry={true}  style={styles.text_input} onChangeText={(texto)=> alterar_senha(texto)} placeholder = 'Senha'/>
        </View>

        <TouchableOpacity  style={styles.button} onPress={Tela_de_cadastro}>
          <View style={styles.n_tenho_conta_view}>
            <Text style={styles.n_tenho_conta}>Não tenho conta ;-;</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.view_botao}>
          <TouchableOpacity onPress={logar} style={styles.botao}>Login</TouchableOpacity>
        </View>
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
        fontFamily: 'Comic Sans MS',
        color: '#828EF4',
        alignItems: 'center'
    },
    view_botao:
    {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    botao:
    {
        width: 150,
        height: 45,
        backgroundColor: '#80F38B',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        
        fontWeight: 'bold',
        fontFamily: 'Comic Sans MS',
        marginRight: 18,
        marginBottom: 18,
    },
    view_text_input:
    {
        alignItems: 'center',
        marginBottom: 15,
    },
    n_tenho_conta_view:
    {
      width: 340,
        height: 25,
    },
    n_tenho_conta:
    {
      color: 'red'
    },
    text_input:
    {
        
        width: 340,
        height: 25,
        fontFamily: 'Comic Sans MS',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 25,
    },
  });