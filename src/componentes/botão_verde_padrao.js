import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


export default function (texto_botao) {
  return (
    <View style={styles.view_botao}>
        <TouchableOpacity style={styles.botao}>{texto_botao.texto_botao}</TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
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
    }   
});