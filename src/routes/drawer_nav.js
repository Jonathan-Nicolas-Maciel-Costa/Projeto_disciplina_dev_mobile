import { createDrawerNavigator } from '@react-navigation/drawer'

const {  Screen, Navigator } = createDrawerNavigator();

import { Login } from '../screens/login'
import { Cadastro } from '../screens/cadastro'
import { Home } from '../screens/home' 

import { Alterar_dados } from '../screens/alterar_dados'
import { Alterar_senha } from '../screens/alterar_senha'
import { DrawerContent } from '../screens/drawcontent.js'
import { Criar } from '../screens/criar';
import { listagem } from '../screens/listagem_movies';
import { Dados_colecao } from '../screens/dados_colecao';

import { Stack_routes } from './stack_nav';
const Drawer = createDrawerNavigator();

export function Drawer_routes(){

    return  (
        <Drawer.Navigator  drawerContent={props => <DrawerContent {... props}/>}>

            <Drawer.Screen
             name="Home"
             component={Home}
            />
            <Drawer.Screen nav
             name="Dados_colecao"
             component={Dados_colecao}
            />
            <Drawer.Screen nav
             name="Listagem"
             component={listagem}
            />
            <Drawer.Screen nav
             name="Criar"
             component={Criar}
            />
            <Drawer.Screen
             name="Alterar_senha"
             component={Alterar_senha}
            />
            <Drawer.Screen
             name="Alterar_dados"
             component={Alterar_dados}
            />
            <Drawer.Screen
             name="DrawerContent"
             component={DrawerContent}
            />
            <Drawer.Screen nav
             name="Logout"
             component={Stack_routes}
             options={{headerShown: false}}
            />
        </Drawer.Navigator>
    )
} 