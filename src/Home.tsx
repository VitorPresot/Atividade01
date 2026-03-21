import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './style';
import { navigate } from 'expo-router/build/global-state/routing';



export default function Home() {
  function navToDetails() {
    navigate('Details');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navegação Stack</Text>
      <Pressable onPress={navToDetails} style={styles.button}>
         <Text style={styles.buttonText}>Ir para Detalhes</Text>
      </Pressable>
    </View>
  );
}