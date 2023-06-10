import { View, Text, StyleSheet } from "react-native";

export function Listastatus(props) {
    return (
        <View style={styles.container}>

            <View style={styles.info}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.descri}>{props.descri}</Text>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        
        padding: 10,
        borderBottomWidth: 1,
        backgroundColor: 'gray'
    },

    info:{
        justifyContent: 'center,'
    },

    name:{
        fontSize: 15,
        fontWeight: 'bold',
        margin: 3,
    },
    descri:{
        fontSize: 13,
        color: 'white',
        fontWeight: '500'
    }

});

