import { NavigationContainer } from '@react-navigation/native'

import { Stack_routes } from './stack_nav'
import { Drawer_routes } from './drawer_nav'

export function Routes (){
    return (
        <NavigationContainer>
            <Stack_routes/>
        </NavigationContainer>
    )
}