import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';



export default function (place_holder) {
  return (
    <View style={styles.view_text_input}>
        <TextInput  style={styles.text_input} placeholder = {place_holder.place_holder}>
        </TextInput>
        <TouchableOpacity >
            <Image style={styles.img} source={require('../../src/imgs/icons/lupa.svg')}/>
        </TouchableOpacity>
        
    </View>
  );
}
const styles = StyleSheet.create({

    view_text_input:
    {
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,

        marginTop: 25,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    text_input:
    {
        
        width: 320,
        height: 25,
        fontFamily: 'Comic Sans MS',
        outlineStyle: 'none',
        paddingLeft: 5,
        paddingRight: 5,

    },
    img:
    {
      width:20,
      height: 20,
      marginRight: 8,
    }
});