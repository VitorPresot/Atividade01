import React from 'react';
import { View, Text, TextInput, Alert, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './style';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Grand Palace Mall</Text>
      <Text style={styles.subtitle}>Experiência Exclusiva</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/lojas')}
      >
        <Text style={styles.buttonText}>Lojas</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/restaurante')}
      >
        <Text style={styles.buttonText}>Restaurantes</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/cinema')}
      >
        <Text style={styles.buttonText}>Cinema</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/promocoes')}
      >
        <Text style={styles.buttonText}>Promoções</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/mapa')}
      >
        <Text style={styles.buttonText}>Mapa do Shopping</Text>
      </TouchableOpacity>


    </View>
  );
}