import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

export default function Urgencias() {
    return(
        <View
            style={Styles.container}
        >
            <Text>Soy la vista urgencias</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : "center",
        alignItems : "center"
    }
})