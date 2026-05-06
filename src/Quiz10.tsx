import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Animated, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { addToRanking, getRanking, RankingEntry } from './rankingData';
import styles from './style';

export default function Quiz10() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const pontos = Number(params.pontos) || 0;
  const acertos = pontos / 10;

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [ranking, setRanking] = useState<RankingEntry[]>([]);
  const pulseAnim = new Animated.Value(1);

  useEffect(() => {
    if (showResults) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [showResults]);

  const question = "Qual é o melhor recurso de um bom desenvolvedor?";
  
  const options = [
    { id: '1', text: 'Pensamento lógico e resolução de problemas', correct: true },
    { id: '2', text: 'Conhecer todas as linguagens de programação', correct: false },
    { id: '3', text: 'Programar rápido sem pensar', correct: false },
    { id: '4', text: 'Copiar código de outros projetos', correct: false },
  ];

  const checkAnswer = () => {
    const selectedOption = options.find(opt => opt.id === selectedAnswer);
    const isCorrect = selectedOption?.correct || false;
    
    const finalPoints = isCorrect ? pontos + 10 : pontos;
    setShowResults(true);
  };

  const finishQuiz = () => {
    if (playerName.trim()) {
      addToRanking(playerName, pontos);
      setRanking(getRanking());
      setPlayerName('');
      
      setTimeout(() => {
        router.push('/');
      }, 1500);
    } else {
      alert('Por favor, digite seu nome');
    }
  };

  if (showResults) {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#0A0F1F' }}>
        <View style={[styles.container, { paddingTop: 40, paddingBottom: 40 }]}>
          <View style={styles.resultsContainer}>
            <Text style={{ fontSize: 28, color: '#00F5FF', marginBottom: 20, fontWeight: 'bold', letterSpacing: 2 }}>MISSÃO COMPLETA!</Text>
            
            <Animated.View style={[{ transform: [{ scale: pulseAnim }] }]}>
              <Text style={styles.scoreText}>{pontos}</Text>
            </Animated.View>
            
            <Text style={styles.scoreLabel}>Pontos Conquistados</Text>

            <View style={styles.resultCard}>
              <View style={styles.resultStats}>
                <View style={styles.statBox}>
                  <Text style={styles.statNumber}>{acertos}</Text>
                  <Text style={styles.statLabel}>Acertos</Text>
                </View>
                <View style={styles.statBox}>
                  <Text style={styles.statNumber}>{pontos}/100</Text>
                  <Text style={styles.statLabel}>Máximo</Text>
                </View>
              </View>
            </View>

            <TextInput
              style={styles.inputName}
              placeholder="Digite seu nome para registrar"
              placeholderTextColor="rgba(0, 245, 255, 0.5)"
              value={playerName}
              onChangeText={setPlayerName}
            />

            <TouchableOpacity
              style={styles.finishButton}
              onPress={finishQuiz}
              activeOpacity={0.8}
            >
              <Text style={styles.finishButtonText}>🏆 REGISTRAR PONTUAÇÃO</Text>
            </TouchableOpacity>

            {ranking.length > 0 && (
              <View style={styles.rankingContainer}>
                <Text style={styles.rankingTitle}>🎯 Sua Posição no Ranking</Text>
                {ranking.slice(0, 5).map((entry, index) => (
                  <View key={index} style={[
                    styles.rankingItem,
                    index === 0 && styles.rankingItemTop1,
                    index === 1 && styles.rankingItemTop2,
                    index === 2 && styles.rankingItemTop3,
                  ]}>
                    <Text style={[
                      styles.rankingPosition,
                      index === 0 && styles.rankingPositionTop1,
                      index === 1 && styles.rankingPositionTop2,
                      index === 2 && styles.rankingPositionTop3,
                    ]}>
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
                    </Text>
                    <Text style={styles.rankingName}>{entry.name}</Text>
                    <Text style={[
                      styles.rankingScore,
                      index === 0 && styles.rankingScoreTop1,
                      index === 1 && styles.rankingScoreTop2,
                      index === 2 && styles.rankingScoreTop3,
                    ]}>
                      {entry.score}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.push('/')}
              activeOpacity={0.8}
            >
              <Text style={styles.backButtonText}>◄ VOLTAR AO MENU</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#0A0F1F' }}>
      <View style={[styles.container, { paddingTop: 20 }]}>
        
        <View style={styles.hudContainer}>
          <View style={styles.hudItem}>
            <Text style={styles.hudLabel}>DESAFIO FINAL</Text>
            <Text style={styles.hudValue}>10/10</Text>
          </View>
          <View style={styles.hudItem}>
            <Text style={styles.hudLabel}>PONTOS</Text>
            <Text style={styles.hudValue}>{pontos}</Text>
          </View>
        </View>

        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '100%' }]} />
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.questionNumber}>⚔️ QUESTÃO FINAL</Text>
          <Text style={styles.questionText}>{question}</Text>
        </View>

        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionButton,
                selectedAnswer === option.id && styles.optionButtonSelected,
              ]}
              onPress={() => setSelectedAnswer(option.id)}
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

        <TouchableOpacity
          style={[styles.nextButton, !selectedAnswer && styles.nextButtonDisabled]}
          onPress={checkAnswer}
          disabled={!selectedAnswer}
        >
          <Text style={styles.nextButtonText}>
            {selectedAnswer ? '▶ FINALIZAR' : '◀ SELECIONE UMA ALTERNATIVA'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push('/')}
          activeOpacity={0.8}
        >
          <Text style={styles.backButtonText}>◄ VOLTAR AO MENU</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
