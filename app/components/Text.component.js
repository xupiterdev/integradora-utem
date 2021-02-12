import React from 'react'

import {View, Text} from 'react-native'

export default function TextComponent({align="center", color="#000", size=16, children}) {
    return(
        <View style={{
            alignItems : align
        }}>
            <Text 
                style={{color : color, fontSize: size}}
            >{children}</Text>
        </View>
        
    )
}