import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TelaInicio } from "../screens/tela1";
import { TelaDetalhes } from "../screens/tela2";

const Stack = createNativeStackNavigator();

export function NavegacaoStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Guia - guerreiro fúria' component={TelaInicio}/>
            <Stack.Screen name='Detalhes' component={TelaDetalhes}/>
        </Stack.Navigator>
    )
}