import { useFocusEffect, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Animated, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { getRanking, RankingEntry } from './rankingData';
import styles from './style';

export default function Home() {
  const router = useRouter();
  const [ranking, setRanking] = useState<RankingEntry[]>([]);
  const scaleAnim = new Animated.Value(1);

  useFocusEffect(
    React.useCallback(() => {
      setRanking(getRanking());
    }, [])
  );

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.05,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const handleStartQuiz = () => {
    router.push({ pathname: '/Quiz1', params: { pontos: 0 } });
  };

  const getColorForPosition = (index: number) => {
    if (index === 0) return '#FFD700'; // Ouro
    if (index === 1) return '#C0C0C0'; // Prata
    if (index === 2) return '#CD7F32'; // Bronze
    return '#00F5FF'; // Ciano padrão
  };

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.backgroundGradient}
    >
      <View style={styles.container}>
        {/* HEADER COM LOGO */}
        <View style={{ marginTop: 40, marginBottom: 30, alignItems: 'center' }}>
          <Text style={styles.title}>NEXUS QUIZ</Text>
          <Text style={styles.subtitle}>Bem-vindo ao futuro</Text>
        </View>

        {/* BOTÃO COMEÇAR COM ANIMAÇÃO */}
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <TouchableOpacity 
            style={styles.button}
            onPress={handleStartQuiz}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>  COMEÇAR       </Text>
          </TouchableOpacity>
        </Animated.View>

        {/* DIVISOR VISUAL */}
        <View style={{
          width: '80%',
          height: 1,
          backgroundColor: 'rgba(0, 245, 255, 0.2)',
          marginVertical: 30,
          borderRadius: 1,
        }} />

        {/* RANKING */}
        {ranking.length > 0 && (
          <View style={styles.rankingContainer}>
            <Text style={styles.rankingTitle}>🎯 Ranking Global</Text>
            {ranking.slice(0, 5).map((entry, index) => (
              <View 
                key={index} 
                style={[
                  styles.rankingItem,
                  index === 0 && styles.rankingItemTop1,
                  index === 1 && styles.rankingItemTop2,
                  index === 2 && styles.rankingItemTop3,
                ]}
              >
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
                  {entry.score} pts
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}