import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';

export default function Cinema() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cinema</Text>
      <Text style={styles.subtitle}>Filmes em cartaz</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Vingadores: Recomeço</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Homem-Aranha: Multiverso</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Invocação do Mal 4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Frozen 3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Transformers: Ascensão</Text>
        </TouchableOpacity>

    </View>
  );
}