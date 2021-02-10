import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

export default function Recepcion() {
    return(
        <View
            style={Styles.container}
        >
            <View style={Styles.contTitle}>
                <Text style={Styles.title}>Recepción</Text>
            </View>
            <View>
                <View style={Styles.card}>
                    <Text style={Styles.title2}>Temperatura</Text>
                    <Text style={Styles.text}>55°</Text>
                </View>
                <View style={Styles.card}>
                    <Text style={Styles.title2}>Humedad</Text>
                    <Text style={Styles.text}>35%</Text>
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:"#f6f6f6"
    },
    contTitle : {
        alignItems : "center"
    },
    title : {
        marginBottom : 16,
        marginTop : 16,
        fontSize : 20
    },
    title2 : {
        marginBottom : 8,
        marginTop : 8,
        fontSize : 18
    },
    text : {
        fontSize : 16
    },
    card : {
        backgroundColor : "#fff",
        borderRadius : 10,
        width : "45%",
        display : "flex",
        alignItems : "center"
    }
})