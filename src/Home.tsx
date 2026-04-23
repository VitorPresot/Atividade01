import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

import styles from './style';

const DATA = [
    { id: "1", title: "Lamborghini" },
    { id: "2", title: "Lancia" },
    { id: "3", title: "Chrysler" },
    { id: "4", title: "Toyota" },
    { id: "5", title: "Lotus" },
    { id: "6", title: "Pagani" },
    { id: "7", title: "Audi" },
    { id: "8", title: "Suzuki" },
    { id: "9", title: "Honda" },
    { id: "10", title: "Aston Martin" },
];

export default function Home() {

    const renderItem = ({ item }: { item: { title: string } }) => (
        <Pressable 
            onPress={() => alert(`Você selecionou: ${item.title}`)}
            style={({ pressed }) => [
                styles.carItem,
                { opacity: pressed ? 0.7 : 1 }
            ]}
        >
            <Text style={styles.carTitle}>{item.title}</Text>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Catálogo de Carros</Text>
            <FlatList
                numColumns={1}
                scrollEnabled={true}
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}