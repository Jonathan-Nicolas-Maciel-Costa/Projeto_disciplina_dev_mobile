import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';


export default function (texto_botao) {
  return (
    <View style={styles.home}>
        <View style={styles.row}>
            <Image style={styles.img} source={require('../imgs/icons/house.svg')} />
            <Text style={{color:'white'}}> aaaaaaaaaa </Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    home:
    {
        height: 40,
        backgroundColor: '#F5A200',
        justifyContent: 'center'
    },
    row:
    {
        flexDirection: 'row',
        alignContent: 'center',
        padding: 15
    },
    img:
    {
        width: 17,
        height: 17,
        paddingRight: 5,
        resizeMode: 'stretch',
    }
});