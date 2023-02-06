import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


export default function (place_holder) {
  return (
    <View style={styles.view_text_input}>
        <TextInput secureTextEntry={true} style={styles.text_input} placeholder = {place_holder.place_holder}/>
    </View>
  );
}
const styles = StyleSheet.create({

    view_text_input:
    {
        alignItems: 'center',
        marginBottom: 15,
    
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