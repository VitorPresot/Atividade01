import React from 'react';
import { View, Text, TextInput, Alert, Image, TouchableOpacity } from 'react-native';
import styles from './style';

export default function Home() {
  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/images/profile.jpg')}
        resizeMode="cover"
        accessible
        accessibilityLabel="Imagem de Perfil"
        style={styles.image}
      />

      <Text style={styles.title}>Cadastro</Text>

      <TextInput style={styles.input} placeholder="Digite seu nome" />
      <TextInput style={styles.input} placeholder="Digite seu email" />
      <TextInput style={styles.input} placeholder="Digite seu telefone" />
      <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry />

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Bem-vindo!')}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  );
}