import React from 'react';
import { StyleSheet, View, Text, Image,  Dimensions } from 'react-native';

import Input_text from '../componentes/caixa_de_texto_com_lupa'
import Carrosel  from '../componentes/carrosel'

export function Home() {
  const data = [
    {
      image : require('../imgs/amostra.jpg'),
    },
    {
      image : require('../imgs/amostra.jpg'),
    },
    {
      image : require('../imgs/amostra.jpg'),
    },
    {
      image : require('../imgs/amostra.jpg'),
    },
    {
      image : require('../imgs/amostra.jpg'),
    },
    {
      image : require('../imgs/amostra.jpg'),
    },
    {
      image : require('../imgs/amostra.jpg'),
    },
  ] 
  return (   
    <View style={styles.container}>
        <Input_text place_holder='Pesquise...'/>

        <Text style={styles.title}>
          O Que Esta Popular no Momento
        </Text>

        <View style={styles.carrousel_view}>
          <Image style={styles.pointer} source={require('../imgs/icons/left_pointer.svg')}/>

          
          <View style={styles.carrousel_view_teste}>
            <Carrosel data={data}/>
          </View>


          <Image style={styles.pointer} source={require('../imgs/icons/right_pointer.svg')}/>
        </View>

        <View  style={styles.collection_view}>
          <Text style={{textAlign:'center', color: 'white'}}>Ultimas Coleções Adicionadas</Text>
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
  title:
  {
    marginTop: "5%",
    marginBottom: "10%",
    color: 'white',
    textAlign: 'center',
  },
  pointer:
  {
    height: 8,
    width: 4,
  },
  carrousel_view:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 8,
    paddingRight: 8,
    alignItems: 'center'
  },
  carrousel_view_teste:
  {
    width: 325,
    heigh: 100,
  },
  collection_view:
  {
    marginTop: "10%",
    marginBottom: "10%",
  }
})