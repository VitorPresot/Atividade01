import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';

export default function Restaurantes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurantes</Text>
      <Text style={styles.subtitle}>Sabores incríveis para você</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>McDonald's</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Burger King</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Outback</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Habib's</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Spoleto</Text>
        </TouchableOpacity>

    </View>
  );
}