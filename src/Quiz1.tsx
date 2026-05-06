import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';

export default function Quiz1() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const pontos = Number(params.pontos) || 0;

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const question = "Qual das alternativas abaixo relaciona-se com desenvolvimento WEB? (Selecione 2)";
  
  const options = [
    { id: '1', text: 'HTML', correct: true },
    { id: '2', text: 'JavaScript', correct: true },
    { id: '3', text: 'Panetone', correct: false },
    { id: '4', text: 'Bolo de chocolate', correct: false },
  ];

  const toggleAnswer = (id: string) => {
    if (selectedAnswers.includes(id)) {
      setSelectedAnswers(selectedAnswers.filter(a => a !== id));
    } else {
      if (selectedAnswers.length < 2) {
        setSelectedAnswers([...selectedAnswers, id]);
      }
    }
  };

  const checkAnswer = () => {
    const correctAnswers = options.filter(opt => opt.correct).map(opt => opt.id);
    const isCorrect = 
      selectedAnswers.length === 2 &&
      selectedAnswers.every(id => correctAnswers.includes(id));
    
    const newPoints = isCorrect ? pontos + 10 : pontos;
    router.push({ pathname: '/Quiz2', params: { pontos: newPoints } });
  };

  const canSubmit = selectedAnswers.length === 2;
  const progressPercent = (1 / 10) * 100;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#0A0F1F' }}>
      <View style={[styles.container, { paddingTop: 30, paddingBottom: 30 }]}>
        
        {/* HUD SUPERIOR */}
        <View style={styles.hudContainer}>
          <View style={styles.hudItem}>
            <Text style={styles.hudLabel}>QUESTÃO</Text>
            <Text style={styles.hudValue}>1/10</Text>
          </View>
          <View style={styles.hudItem}>
            <Text style={styles.hudLabel}>PONTOS</Text>
            <Text style={styles.hudValue}>{pontos}</Text>
          </View>
        </View>

        {/* BARRA DE PROGRESSO */}
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progressPercent}%` }]} />
        </View>

        {/* PERGUNTA */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionNumber}>⚔️ DESAFIO 1</Text>
          <Text style={styles.questionText}>{question}</Text>
          <Text style={{ fontSize: 12, color: '#8A2BE2', marginTop: 10, letterSpacing: 1 }}>
            SELECIONE 2 ALTERNATIVAS
          </Text>
        </View>

        {/* OPÇÕES */}
        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionButton,
                selectedAnswers.includes(option.id) && styles.optionButtonSelected,
              ]}
              onPress={() => toggleAnswer(option.id)}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.checkbox,
                  selectedAnswers.includes(option.id) && styles.checkboxSelected,
                ]}
              >
                {selectedAnswers.includes(option.id) && (
                  <Text style={styles.checkmark}>✓</Text>
                )}
              </View>
              <Text
                style={[
                  styles.optionText,
                  selectedAnswers.includes(option.id) && styles.optionTextSelected,
                ]}
              >
                {option.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* BOTÃO PRÓXIMO */}
        <TouchableOpacity
          style={[styles.nextButton, !canSubmit && styles.nextButtonDisabled]}
          onPress={checkAnswer}
          disabled={!canSubmit}
          activeOpacity={0.8}
        >
          <Text style={styles.nextButtonText}>
            {canSubmit ? '▶ PRÓXIMA QUESTÃO' : '◀ SELECIONE 2 ALTERNATIVAS'}
          </Text>
        </TouchableOpacity>

        {/* BOTÃO VOLTAR */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push('/')}
          activeOpacity={0.8}
        >
          <Text style={styles.backButtonText}>◄ VOLTAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}