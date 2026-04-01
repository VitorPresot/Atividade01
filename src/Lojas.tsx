import React from 'react';
import { View, Text, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import styles from './style';

export default function Lojas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lojas</Text>
      <Text style={styles.subtitle}>Confira nossas lojas</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Nike</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adidas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Zara</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Apple Store</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Samsung</Text>
        </TouchableOpacity>

    </View>
  );
}