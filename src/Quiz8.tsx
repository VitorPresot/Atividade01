import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';

export default function Quiz8() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const pontos = Number(params.pontos) || 0;
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const question = "O que significa REST em desenvolvimento?";
  const options = [
    { id: '1', text: 'Representational State Transfer', correct: true },
    { id: '2', text: 'Rapid Electronic Service Technology', correct: false },
    { id: '3', text: 'Real-time Exchange System', correct: false },
    { id: '4', text: 'Reactive Environment Structure', correct: false },
  ];
  const checkAnswer = () => {
    const selectedOption = options.find(opt => opt.id === selectedAnswer);
    const isCorrect = selectedOption?.correct || false;
    const newPoints = isCorrect ? pontos + 10 : pontos;
    router.push({ pathname: '/Quiz9', params: { pontos: newPoints } });
  };
  const progressPercent = (8 / 10) * 100;
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#0A0F1F' }}>
      <View style={[styles.container, { paddingTop: 30, paddingBottom: 30 }]}>
        <View style={styles.hudContainer}>
          <View style={styles.hudItem}>
            <Text style={styles.hudLabel}>QUESTÃO</Text>
            <Text style={styles.hudValue}>8/10</Text>
          </View>
          <View style={styles.hudItem}>
            <Text style={styles.hudLabel}>PONTOS</Text>
            <Text style={styles.hudValue}>{pontos}</Text>
          </View>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progressPercent}%` }]} />
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.questionNumber}>⚔️ DESAFIO 8</Text>
          <Text style={styles.questionText}>{question}</Text>
          <Text style={{ fontSize: 12, color: '#8A2BE2', marginTop: 10, letterSpacing: 1 }}>SELECIONE UMA ALTERNATIVA</Text>
        </View>
        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity key={option.id} style={[styles.optionButton, selectedAnswer === option.id && styles.optionButtonSelected]} onPress={() => setSelectedAnswer(option.id)} activeOpacity={0.8}>
              <View style={[styles.checkbox, selectedAnswer === option.id && styles.checkboxSelected]}>
                {selectedAnswer === option.id && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={[styles.optionText, selectedAnswer === option.id && styles.optionTextSelected]}>{option.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={[styles.nextButton, !selectedAnswer && styles.nextButtonDisabled]} onPress={checkAnswer} disabled={!selectedAnswer} activeOpacity={0.8}>
          <Text style={styles.nextButtonText}>{selectedAnswer ? '▶ PRÓXIMA QUESTÃO' : '◀ SELECIONE UMA ALTERNATIVA'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')} activeOpacity={0.8}>
          <Text style={styles.backButtonText}>◄ VOLTAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
