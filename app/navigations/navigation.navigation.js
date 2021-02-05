import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Hospitalizacion from '../screens/hopitalizacion/hospitalizacion.screen'
import Urgencias from '../screens/urgencias.screen'
import Recepcion from '../screens/recepcion.screen'
// prueba de rama 1
const Tab = createBottomTabNavigator();

export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="hospitalizacion"
                    component={Hospitalizacion}
                    options={{
                        title:"Hospitalizacion"
                    }}
                />
                <Tab.Screen 
                    name="urgencias"
                    component={Urgencias}
                    options={{
                        title:"Urgencias"
                    }}
                />
                <Tab.Screen 
                    name="recepcion"
                    component={Recepcion}
                    options={{
                        title : "Recepcion"
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}