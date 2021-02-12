import React from 'react'

import {View, StyleSheet} from 'react-native'

export default function Layout({children}) {
    return(
        <View style={Styles.container}>{children}</View>
    )
}

const Styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:"#e6eefb",
        // paddingLeft : 8,
        // paddingRight : 8
    }
})