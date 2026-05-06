import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';

type QuizProps = {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  options: Array<{ id: string; text: string; correct: boolean }>;
  currentPontos: number;
  nextScreen: string;
};

export const QuizTemplate = (props: QuizProps) => {
  const router = useRouter();
  const { questionNumber, totalQuestions, question, options, currentPontos, nextScreen } = props;
  
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const checkAnswer = () => {
    const selectedOption = options.find(opt => opt.id === selectedAnswer);
    const isCorrect = selectedOption?.correct || false;
    
    const newPoints = isCorrect ? currentPontos + 10 : currentPontos;
    router.push({ pathname: nextScreen, params: { pontos: newPoints } });
  };

  const progressPercent = (questionNumber / totalQuestions) * 100;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#0A0F1F' }}>
      <View style={[styles.container, { paddingTop: 30, paddingBottom: 30 }]}>
        
        {/* HUD SUPERIOR */}
        <View style={styles.hudContainer}>
          <View style={styles.hudItem}>
            <Text style={styles.hudLabel}>QUESTÃO</Text>
            <Text style={styles.hudValue}>{questionNumber}/{totalQuestions}</Text>
          </View>
          <View style={styles.hudItem}>
            <Text style={styles.hudLabel}>PONTOS</Text>
            <Text style={styles.hudValue}>{currentPontos}</Text>
          </View>
        </View>

        {/* BARRA DE PROGRESSO */}
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progressPercent}%` }]} />
        </View>

        {/* PERGUNTA */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionNumber}>⚔️ DESAFIO {questionNumber}</Text>
          <Text style={styles.questionText}>{question}</Text>
          <Text style={{ fontSize: 12, color: '#8A2BE2', marginTop: 10, letterSpacing: 1 }}>
            SELECIONE UMA ALTERNATIVA
          </Text>
        </View>

        {/* OPÇÕES */}
        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionButton,
                selectedAnswer === option.id && styles.optionButtonSelected,
              ]}
              onPress={() => setSelectedAnswer(option.id)}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.checkbox,
                  selectedAnswer === option.id && styles.checkboxSelected,
                ]}
              >
                {selectedAnswer === option.id && (
                  <Text style={styles.checkmark}>✓</Text>
                )}
              </View>
              <Text
                style={[
                  styles.optionText,
                  selectedAnswer === option.id && styles.optionTextSelected,
                ]}
              >
                {option.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* BOTÃO PRÓXIMO */}
        <TouchableOpacity
          style={[styles.nextButton, !selectedAnswer && styles.nextButtonDisabled]}
          onPress={checkAnswer}
          disabled={!selectedAnswer}
          activeOpacity={0.8}
        >
          <Text style={styles.nextButtonText}>
            {selectedAnswer ? '▶ PRÓXIMA QUESTÃO' : '◀ SELECIONE UMA ALTERNATIVA'}
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
};
