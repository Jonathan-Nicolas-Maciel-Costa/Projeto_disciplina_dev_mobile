import { createNativeStackNavigator } from '@react-navigation/native-stack'

const {  Screen, Navigator} = createNativeStackNavigator();

import { Login } from '../screens/login'
import { Cadastro } from '../screens/cadastro'
import { Drawer_routes } from './drawer_nav'

export function Stack_routes(){

    return  (
        <Navigator
            initialRouteName="Login" 
            screenOptions={{
            headerShown: false
        }}>
            <Screen
             name="Login"
             component={Login}
            />
            <Screen
             name="Cadastro"
             component={Cadastro}
            />
            <Screen
             name="Logout"
             component={Drawer_routes}
            />
        </Navigator>
    )
} 