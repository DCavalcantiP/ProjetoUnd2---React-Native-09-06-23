import React, { useState } from "react";
import { View, Button, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView } from "react-native";


export function TelaDetalhes() {

    const [show, setshow] = useState(false);

    const mostratexto = () => {
        setshow(!show);
    };

    const [dados, setdados] = useState([
        {
            id: 1,
            title: '1 - AVATAR - imediatamente antes de "TEMERIDADE" com o talento "TORMENTO DO BERSERKER"',
            desc: 'Instantâneo \n1.5 min de recarga \nRequer nível 45 \nTransforma-se em um colosso por 20 seg, fazendo com que você cause 20% a mais de dano receba 10% a menos de dano, e removendo todos os efeitos de enraizamento e lerdeza.'
        },

        {
            id: 2,
            title: '2 - TEMERIDADE - junto com "AVATAR".',
            desc: 'Instantâneo \n1.5 min de recarga \n Entra em estado de Berserk, aumentando em 100% a geração de Raiva e concedendo às suas habilidades mais 20% de chance de acerto crítico por 12 seg.'
        },

        {
            id: 3,
            title: '3 - ENFURECER - usando "ALVOROÇO", "OFENSIVA" ou "SEDE DE SANGUE" se o buff não estiver ativo no momento.',
            desc: 'Requer nível 10 \nFicar Enfurecido aumenta o dano causado em X%, a Aceleração em 15% e a velocidade de movimento em 10% por 4 seg. \nSede de Sangue tem 30% de chance de Enfurecer você. \nAlvoroço sempre Enfurece você.'
        },

        {
            id: 4,
            title: '4 -ASSOLADOR - alinhado com "TEMERIDADE".',
            desc: 'Alcance de 40m \nInstantâneo	\nRecarga 1.5 min \n1 Cargas \nRequer nível 45 \nRequer Arma corpo a corpo \nArremessa no local selecionado uma arma giratória que persegue inimigos próximos, causando [6 * (84.8% of Attack power)] de dano Físico a todos os inimigos ao longo de 12 sec. Dano reduzido acima de 8 alvos. \nGera 10 de Raiva sempre que causar dano.'
        },

        {
            id: 5,
            title: '5 - LANÇA DO BASTIÃO - enquanto tiver "ENFURECER" ativo para causar maior dano.',
            desc: 'Alcance de 25m \nInstantâneo	\n1.5 min de recarga \nRequer nível 48 \nArremessa uma lança kyriana no local selecionado, causando (110% of Attack power) de dano Arcano e depois mais (120% of Attack power) de dano ao longo 4 sec. Causa dano reduzido se houver mais que 5 alvos. \nInimigos atingidos ficam presos à Lança do Bastião enquanto durar o efeito. \nGera 25 de Raiva.'
        },

        {
            id: 6,
            title: '6 - ALVOROÇO - para gastar raiva e manter "ENFURECER".',
            desc: '80 de Raiva \n Alcance corpo a corpo \n Instantâneo \n Requer Arma corpo a corpo \n Enfurece você e inicia uma série de 4 golpes brutais, causando um total de [(68.244% of Attack power) + (39.809% of Attack power) + (90.992% of Attack power) + (51.183% of Attack power)] de dano Físico.'
        },

        {
            id: 7,
            title: '7 - SEDE DE SANGUE - com mais de 95% de chance crítica para aplicar "AÇO FRIO, SANGUE QUENTE" (DOT do Talento).',
            desc: 'Alcance corpo a corpo \nInstantâneo \n4.5 seg de recarga \nRequer Arma corpo a corpo \nAtaca o alvo numa sede de sangue ensandecida, causando (80.3% of Attack power) de dano Físico e restaurando 3% dos seus pontos de vida. \nGera 8 de Raiva.'
        },

        {
            id: 8,
            title: '8 - EXECUTAR - sempre que disponível.',
            desc: 'Alcance corpo a corpo \nInstantâneo \n6 seg de recarga \nRequer nível 10 \nRequer Arma corpo a corpo \nTenta finalizar um inimigo ferido, causando [(129.72% of Attack power) + (146.049% of Attack power)] de dano Físico. Só pode ser usado em inimigos com menos de 20% dos pontos de vida. \nGera 20 de Raiva.'
        },

        {
            id: 9,
            title: '9 - OFENSIVA - enquanto o "ENFURECER" estiver ativo ou com o talento "AMACIAR".',
            desc: 'Alcance corpo a corpo \nInstantâneo \n18 seg de recarga \nRequer nível 30 \nRequer Arma corpo a corpo \nAtaca brutalmente um inimigo para causar (212.24% of Attack power) de dano Físico e ficar Enfurecido por 4 sec. \nGera 30 de Raiva.'
        },

        {
            id: 10,
            title: '10 - GOLPE FURIOSO - como o principal ataque rotacional de enchimento, seguido do "SEDE DE SANGUE como preenchimento enquanto não tiver cargas de "GOLPE FURIOSO".',
            desc: 'Alcance corpo a corpo \nInstantâneo \nRecarga 8 seg \n1 Cargas \nRequer Arma corpo a corpo \nUm poderoso golpe com ambas as armas que causa um total de [(72.6% of Attack power) + (72.6% of Attack power)] de dano Físico. \nGera 12 de Raiva.'
        },

        {
            id: 11,
            title: '11 - REDEMOINHO - como preenchimento quando nada mais estiver disponível.',
            desc: 'Instantâneo \nRequer nível 10 \nRequer Arma corpo a corpo \nLibera um redemoinho de aço, atingindo todos os inimigos próximos e causando [(8.3% of Attack power) + (8.9% of Attack power) + (2 * ((8.3% of Attack power) + (8.9% of Attack power)))] de dano Físico. Dano reduzido acima de 5 alvos. \nGera 3 de Raiva e mais 1 para cada alvo atingido.'
        },
    ])

    const [selecione, selectcall] = useState(null)

    const handlePress = (item) => {
        selectcall(item);
    };

    const renderitem = ({ item }) => (
        <TouchableOpacity style={[
            styles.item,
            selecione && selecione.id === item.id && styles.selecione,
        ]}
            onPress={() => handlePress(item)}>
            <Text style={styles.itemTitle}>{item.title}</Text>

        </TouchableOpacity>

    )

    return (

        <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>

            <TouchableOpacity onPress={mostratexto} style={{color: 'white', borderWidth: 2, borderRadius: 10,alignItems: 'center', backgroundColor: '#6A5ACD'}}>
                <Text style={{color: 'white', }}>
                    {show ? 'Esconder' : 'Mostrar'}
                </Text>
            </TouchableOpacity>

            < View style={{ alignItems: 'center', backgroundColor: '#1C1C1C', borderBottomWidth: 5}}>
                {show &&
                    <Text style={styles.textodetalhes}>
                        Visão geral do Guerreiro da Fúria - Guerreiros fúria tem como sua principal barra de recursos a 'RAIVA', eles tem um estilo de jogo acelerado que se concentra em danos sustentados em vez de picos de grande explosão. Com apenas uma habilidade de gasto de raiva, o objetivo da rotação é simples: gerar raiva suficiente para lançar
                        <Text style={{ color: 'red', fontWeight: 'bold' }}> Alvoroço
                            <Text style={styles.textodetalhes}> e manter o
                                <Text style={{ color: 'purple', fontWeight: 'bold' }}> Enfurecer
                                    <Text style={styles.textodetalhes}>
                                        , embora uma infinidade de habilidades diferentes sejam usadas ao longo do caminho. Guerreiro fúria é uma boa especificação para jogadores que procuram uma especificação que esteja sempre ativa, porque todas as outras habilidades são geradoras de recursos e têm um tempo de espera curto ou nenhum, sem qualquer tempo de inatividade gasto esperando por algo para fazer, isso o torna altamente envolvente.
                                    </Text>
                                </Text>
                            </Text>
                        </Text>
                    </Text>
                }
            </View >

            <ScrollView>
                <FlatList
                    data={dados}
                    renderItem={renderitem}
                    keyExtractor={(item) => item.desc.toString()}
                />
                {selecione && (
                    <View>
                        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>{selecione.title}</Text>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>{selecione.desc}</Text>
                    </View>
                )}
            </ScrollView>
        </View>



    );
}

const styles = StyleSheet.create({

    textodetalhes: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15,

    },

    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    selecione: {
        backgroundColor: 'green',
    },

})