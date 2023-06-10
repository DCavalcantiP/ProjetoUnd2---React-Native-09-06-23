import { View, Text, StyleSheet, Button } from "react-native";

export function Botao(props) {

    return (
        <View >

            <View>

                <Button title={props.title} color='lightblue'/>

            </View>

        </View>

    );
};

export default function App() {
    return (

        <View>

            <Botao title='Adicionar'/>
            <Botao title='Excluir'/>

        </View>
    );
};