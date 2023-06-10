import { View, Text, StyleSheet, FlatList } from "react-native";
import { Listastatus } from "../StatusList";

export function Listastatusflat(props) {
    return (

        <FlatList
            data={props.data}
            renderItem={({ item }) => (
                <Listastatus name={item.name} descri={item.descri} />
            )}
            keyExtractor={item => item.key}
            style={styles.container}
        />

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});