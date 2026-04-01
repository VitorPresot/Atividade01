import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';

export default function Promocoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Promoções</Text>
      <Text style={styles.subtitle}>Ofertas imperdíveis</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Nike - 30% OFF</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>McDonald's - Combo por R$19,90</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Zara - Liquidação de Inverno</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Outback - Bloomin' Onion grátis</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cinema - Meia entrada para estudantes</Text>
        </TouchableOpacity>

    </View>
  );
}