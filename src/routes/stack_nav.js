import { createNativeStackNavigator } from '@react-navigation/native-stack'

const {  Screen, Navigator} = createNativeStackNavigator();

import { Login } from '../screens/login'
import { Cadastro } from '../screens/cadastro'

export function Stack_routes(){

    return  (
        <Navigator
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
        </Navigator>
    )
} 