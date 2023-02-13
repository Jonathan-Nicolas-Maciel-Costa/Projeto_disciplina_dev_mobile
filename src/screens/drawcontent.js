import React from 'react';
import { StyleSheet, View, Text, Image,  TouchableOpacity} from 'react-native';
import {

    DrawerContentScrollView,
    DrawerView
    
} from '@react-navigation/drawer';

import Content from '../componentes/drawer_content'
import Teste from '../componentes/botão_verde_padrao'
import request from 'request';

export function DrawerContent( {navigation} , ...props) {
    function Home() {
        navigation.navigate('Home')
      }
    function Alterar() {
        navigation.navigate('Alterar_dados')
      }
    function listagem() {
        navigation.navigate('Listagem')
      }
    function Criar() {
        navigation.navigate('Criar')
      }
    function Logout() {
      navigation.navigate('Logout')
    }
    return (
        <View style={styles.main}>
            <DrawerContentScrollView  {... props} >
                <TouchableOpacity onPress={Alterar} style={styles.user_data}>
                    <Image style={styles.user_icon} source={require('../imgs/user_icon.jpg')}/>
                    <View style={styles.user_data_text}>
                        <Text style={styles.name}>Nome</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={Home} style={styles.home}>
                    <View style={styles.row}>
                        <Image style={styles.img} source={require('../imgs/icons/house.svg')} />
                        <Text style={{color:'white'}}> Home </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={listagem} style={styles.home}>
                    <View style={styles.row}>
                        <Image style={styles.img} source={require('../imgs/icons/notebook.svg')} />
                        <Text style={{color:'white'}}> Coleção </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={Home} style={styles.home}>
                    <View style={styles.row}>
                        <Image style={styles.img} source={require('../imgs/icons/star.svg')} />
                        <Text style={{color:'white'}}> Favoritos </Text>
                    </View>
                </TouchableOpacity>
            </DrawerContentScrollView>
            <View style={styles.create}>
                <TouchableOpacity onPress={Logout} >
                    <Text style={styles.logout}>
                        Logout
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={Criar}>
                    <View style={styles.plus_view}>
                        <Image style={styles.plus} source={require('../imgs/icons/plus.svg')}/>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main:
    {
        flex: 1,
        backgroundColor: 'black',
    },
    user_icon:
    {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        borderRadius: 5
    },
    user_data:
    {
        padding: 15,
        flexDirection: 'row',
    },
    name:
    {
        color: 'white',
        textAlign: 'center',
        marginTop: 15,
        width: 164
    },
    home:
    {
        height: 40,
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor: '#141414'
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
    },
    plus_view:
    {
        width: 50,
        height: 50,
        backgroundColor: '#F5A200',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
    plus:
    {
        width: 15,
        height: 15,
    },
    create:
    {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logout:
    {
        color: 'red',
        marginTop: 17,
    }
})
