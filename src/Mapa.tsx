import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';

export default function Mapa() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa do Shopping</Text>
      <Text style={styles.subtitle}>Toque em uma área</Text>

      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        
        {/* Linha 1 */}
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.mapBlock, { backgroundColor: '#fff' }]}>
            <Text style={styles.mapText}>Loja A</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.mapBlock, { backgroundColor: '#fff' }]}>
            <Text style={styles.mapText}>Loja B</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.mapBlock, { backgroundColor: '#ffd700' }]}>
            <Text style={styles.mapText}>Cinema</Text>
          </TouchableOpacity>
        </View>

        {/* Linha 2 */}
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.mapBlock, { backgroundColor: '#fff' }]}>
            <Text style={styles.mapText}>Loja C</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.mapBlock, { backgroundColor: '#fff' }]}>
            <Text style={styles.mapText}>Loja D</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.mapBlock, { backgroundColor: '#fff' }]}>
            <Text style={styles.mapText}>Loja E</Text>
          </TouchableOpacity>
        </View>

        {/* Linha 3 */}
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.mapBlock, { backgroundColor: '#ffcccc' }]}>
            <Text style={styles.mapText}>Restaurante 1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.mapBlock, { backgroundColor: '#ffcccc' }]}>
            <Text style={styles.mapText}>Restaurante 2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.mapBlock, { backgroundColor: '#ffcccc' }]}>
            <Text style={styles.mapText}>Restaurante 3</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}