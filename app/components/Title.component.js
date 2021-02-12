import React from 'react'

import {View} from 'react-native'
import {Text} from 'react-native-elements'

export default function Layout({h1, h2, h3, h4, title, align="center", color="#000"}) {
    return(
        <View style={{
            alignItems : align,
            marginTop : 8,
            marginBottom : 8
        }}>
            <Text 
                h1={h1}
                h2={h2}
                h3={h3}
                h4={h4}
                style={{color : color}}
            >{title}</Text>
        </View>
        
    )
}