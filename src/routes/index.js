import { NavigationContainer } from '@react-navigation/native'

import { Stack_routes } from './stack_nav'

export function Routes (){
    return (
        <NavigationContainer>
            <Stack_routes/>
        </NavigationContainer>
    )
}