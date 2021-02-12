import React from 'react'

import {View, StyleSheet, Dimensions} from 'react-native'

import Layout from '../components/Layout.components'
import Title from '../components/Title.component'
import Text from '../components/Text.component'

import {Card} from 'react-native-elements'

export default function Recepcion() {
    return(
        <Layout>
            <Title h3 title="Recepción"/>
            {/* <View style={Styles.contTitle}>
                <Text style={Styles.title}>Recepción</Text>
            </View> */}
            {/* Temperatura y humedad */}
            <View style={Styles.row}>
                <View style={{flex : 1}}>
                    <Card containerStyle={{borderRadius : 10}}>
                        <Card.Title>Temperatura</Card.Title>
                        {/* <Card.Divider /> */}
                        <Text
                            size={30}
                        >55°</Text>
                    </Card>
                </View>
                <View style={{flex : 1}}>
                    <Card containerStyle={{borderRadius : 10}}>
                        <Card.Title>Humedad</Card.Title>
                        {/* <Card.Divider /> */}
                        <Text
                            size={30}
                        >35%</Text>
                    </Card>
                </View>
            </View>
        </Layout>
    )
}

const Styles = StyleSheet.create({
    row : {
        flex : 1,
        flexDirection : "row",
        justifyContent: 'space-between'
    },
    // contTitle : {
    //     alignItems : "center"
    // },
    // title : {
    //     marginBottom : 16,
    //     marginTop : 16,
    //     fontSize : 24,
    //     color : "#fff",
    //     fontWeight : "bold"
    // },
    // title2 : {
    //     // marginBottom : 8,
    //     marginTop : 8,
    //     fontSize : 14
    // },
    // values : {
    //     fontSize : 30
    // },
    // text : {
    //     fontSize : 16
    // },
    // card : {
    //     backgroundColor : "#fff",
    //     borderRadius : 10,
    //     display : "flex",
    //     alignItems : "center",
    //     justifyContent : "center",
    //     height : 100,
    //     width : (Dimensions.get('window').width / 2) - 24,
    //     marginRight : 8,
    //     marginLeft : 8
    // }
})