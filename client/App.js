import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image, ScrollView, TouchableOpacity, Button, StyleSheet, FlatList } from "react-native";
import { NavegacaoStack } from "./src/StackNavigator/StackNavigator";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import axios, { Axios } from "axios";
import { Listastatusflat } from "./src/Components/FlatStatusList";
import { FontAwesome5 } from '@expo/vector-icons';
import { Botao } from "./src/Components/Buttons";


function Talents() {

  const raideconstw = require('./imgs/raidwartree.jpg');
  const raideconstf = require('./imgs/raidfurytree.jpg');
  const miticaconstw = require('./imgs/mwartree.jpg');
  const miticaconstf = require('./imgs/mfurytree.jpg');
  const selecione = require('./imgs/iconewar.jpg');

  const [mudar, mostrador] = useState(selecione);

  return (
    <View>

      <View style={{ backgroundColor: 'black' }}>

        <View style={styles.bgtalents}><Button color={'white'} title="Talentos de Raide - Classe" onPress={() => mostrador(raideconstw)} /></View>
        <View style={styles.bgtalents}><Button color={'white'} title="Talentos de Raide - Especialização" onPress={() => mostrador(raideconstf)} /></View>
        <View style={styles.bgtalents}><Button color={'white'} title="Talentos de Mítica - Classe" onPress={() => mostrador(miticaconstw)} /></View>
        <View style={styles.bgtalents}><Button color={'white'} title="Talentos de Mítica - Especialização" onPress={() => mostrador(miticaconstf)} /></View>

      </View>

      <Image style={{
        alignContent: 'space-around',
        justifyContent: 'space-around',
        height: 571,
        width: 420,
        resizeMode: 'stretch'
      }}
        source={mudar} />

    </View>
  )
}

function Equip() {

  const imgequip = require('./imgs/imgequipbis.jpg')

  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Image style={{
        alignContent: 'space-around',
        justifyContent: 'space-around',
        height: '100%',
        width: '100%',
        resizeMode: 'stretch'
      }}
        source={imgequip} />

    </View>
  );
}

function Stats() {

  const data = [
    { key: 1, name: 'Força', descri: 'Aumenta todo o dano causado por feitiços, habilidades e ataques automáticos de classe.' },
    { key: 2, name: 'Aceleração', descri: 'Comprime a rotação, aumenta a velocidade de ataque e reduz o GCD e o tempo de recarga das habilidades rotacionais Sede de sangue, Golpe Furioso e Executar.' },
    { key: 3, name: 'Maestria', descri: 'Aumenta o bônus de dano de Enfurecer. Não afeta danos que não sejam de classe, como berloques, poções e encantamentos.' },
    { key: 4, name: 'Crítico', descri: 'Aumenta o dano causado por habilidades, ataques automáticos e berloques.' },
    { key: 5, name: 'Versatilidade', descri: 'Aumenta o dano causado e reduz o dano recebido pela metade desse valor. Ao contrário da Maestria, afeta todos os danos causados, incluindo berloques, poções e encantamentos.' },
  ]

  const imgstats = 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/Featured---World-of-Warcraft-Dragonflight-Warrior-Evolution.jpg'

  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' }}>

      <Listastatusflat style={{}} data={data} />
      <View>
      </View>
      <Image source={{ uri: imgstats }} style={{ height: '50%', width: '100%', }} />

      <Text style={styles.textostats1}>Melhores estatísticas do Fury Warrior</Text>
      <Text style={styles.textostats2}>A prioridade de estatísticas do Fury Warrior enfatizam a força e o dano da arma via nível do item, seguido por Maestria e Crítico, embora todas as estatísticas do Fúria tendam a ser bastante próximas. Devido ao impacto e alta frequência de Enfurecer, Aceleração irá flutuar muito, começando alto e caindo em valor além de um ponto (~22-29%). No geral você terá que buscar: 15-20% Crítico/30-40% Aceleração/50-60% Maestria/ 4-8% Versatilidade.</Text>
    </View>


  );
}

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen
          name='HOME'
          component={NavegacaoStack}
          options={{
            tabBarIcon: ({ }) =>
              (<MaterialCommunityIcons name="shield-home" size={24} color="black" />)
          }}
        />

        <Tab.Screen name='TALENTOS'
          component={Talents}
          options={{
            tabBarIcon: ({ }) =>
              (<Entypo name="flow-tree" size={24} color="black" />)
          }}
        />

        <Tab.Screen name='EQUIPAMENTO'
          component={Equip}
          options={{
            tabBarIcon: ({ }) =>
              (<MaterialCommunityIcons name="sword-cross" size={24} color="black" />)
          }} />

        <Tab.Screen name='STATUS'
          component={Stats}
          options={{
            tabBarIcon: ({ }) =>
              (<Foundation name="graph-horizontal" size={24} color="black" />)
          }} />

      </Tab.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({

  bgtalents: {

    backgroundColor: '#8B0000',
    borderColor: 'white',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderRadius: 20,

  },

  textostats1: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold'

  },

  textostats2: {
    fontSize: 15,
    fontWeight: '500'

  },

});
