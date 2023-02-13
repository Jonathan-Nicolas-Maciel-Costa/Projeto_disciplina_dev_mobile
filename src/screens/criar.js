import React from 'react';
import {  StyleSheet, View, Text, Image, TextInput, TouchableOpacity  } from 'react-native';

import Botão_verde from '../componentes/botão_verde_padrao'

export function Criar( {navigation} ) {

  function Home() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>

        <View style={styles.img_title}>
            <Image style={styles.img_input} source={require('../imgs/user_icon.jpg')}/>
            <TextInput style={styles.name} placeholder='Nome da Coleção' />
        </View>

        <View style={styles.second}>
            <View style={styles.colun}>
                <Text style={{color:'white'}}>Adicione Videos:</Text>
                <View style={styles.black}>

                    <TouchableOpacity style={styles.input}>
                        <Image style={styles.plus} source={require('../imgs/icons/plus.svg')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={styles.Text_area_view}>

            <View>
                <Text style={{color:'white'}}>Descrição: </Text>
                <TextInput style={styles.Text_area}
                multiline={true}
                numberOfLines={4}/>
            </View>
            
        </View>

        <View style={styles.create}>
            <View style={styles.create_view}>
                <Botão_verde texto_botao='Criar Coleção'/>
            </View>
        </View>

    </View>
    
  );
}
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#171717',
    },
    img_title:
    {
        alignItems: 'center',
    },
    img_input:
    {
        width: 230,
        height: 150,
        marginTop: 30,
        marginBottom: 20,
        borderRadius: 5,
    },
    name:
    {
        marginBottom: 20,
        color:  'white',
        outlineStyle: 'none',
        textAlign: 'center'
    },
    second:
    {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    },
    colun:
    {
        flexDirection: 'column'
    },
    row:
    {
        flexDirection: 'row'
    },
    black:
    {
        height: 125,
        width:  300,
        backgroundColor:  'black',
        alignItems: 'flex-end',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    Text_area_view:
    {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text_area:
    {
        height: 125,
        width:  300,
        backgroundColor: 'white',
        borderRadius: 5
    },
    input:
    {
        width: 75,
        height: 125,
        backgroundColor: '#F5A200',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    plus:
    {
        width: 20,
        height:  20,
        resizeMode: 'stretch',
    },
    create:
    {
        justifyContent: 'center',
        alignItems: 'center'
    },
    create_view:
    {
        width:  300,
        height: 'fit-content',
        alignContent:  'flex-end',
        justifyContent: 'flex-end',
        marginRight: '-37px',
        marginTop: 10
    },
})