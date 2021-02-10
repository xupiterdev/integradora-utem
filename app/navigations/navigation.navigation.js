import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Hospitalizacion from '../screens/hopitalizacion/hospitalizacion.screen'
import Urgencias from '../screens/urgencias.screen'
import Recepcion from '../screens/recepcion.screen'

import {Icon} from 'react-native-elements'

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="urgencias"
                tabBarOptions={{
                    inactiveTintColor:"#646464",
                    activeTintColor:"#00a680"
                }}
                screenOptions={({route}) => ({
                    tabBarIcon : ({color}) => ScreenOption(route, color)
                })}

            >
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

function ScreenOption(route, color) {
    let iconName;

    switch(route.name){
        case "hospitalizacion":
            iconName = "bed-outline"
            break;
        case "recepcion":
            iconName = "account"
            break;
        case "urgencias":
            iconName = "car-electric"
            break;
        default:break;
    }

    return(
        <Icon
            type="material-community"
            name={iconName}
            size={22}
            color={color}
        />
    )
}