import React from "react";
import { View, Button, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { TelaDetalhes } from "./tela2";

export function TelaInicio({ navigation }) {

    const imgwar = 'https://wow.zamimg.com/images/content/tall-headers/retail/categories/classes-warrior-arms.jpg?maxWidth=1630';

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#1C1C1C', }}>
            <View style={{}}>

                <Text style={styles.textohome}>
                    Neste guia você irá aprender o básico da classe guerreiro fúria. Bem como rotação, equipamento BiS, talentos necessários e status.
                </Text >

                <TouchableOpacity>
                    <Image style={styles.warhomeimg} source={{uri:imgwar}} />
                </TouchableOpacity>

            </View>

            <View style={styles.botaodetalhes}>

                <TouchableOpacity onPress={() => navigation.navigate('Detalhes')}>
                    <Text style={{ fontSize: 30, color: 'white', borderWidth: 4, borderRadius: 10, borderColor: '#C0C0C0', fontWeight: 'bold', paddingRight: 5, }}>
                        Habilidades e Rotação
                        <View >
                            <AntDesign style={{marginLeft: 20, marginTop: 5}} name="rightcircleo" size={40} color="#C0C0C0" />
                        </View>
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    warhomeimg: {

        height: 250,
        width: 400,
        borderRadius: 25,
        resizeMode: 'stretch'

    },

    textohome: {

        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
        marginBottom: 100,
        backgroundColor: '#4682B4',

    },

    botaodetalhes: {
        
        color: 'white',
        backgroundColor: '#8B0000',
        borderColor: '#8B0000',
        borderRadius: 10,
        borderWidth: 4,
        marginTop: 10,           

    },

})