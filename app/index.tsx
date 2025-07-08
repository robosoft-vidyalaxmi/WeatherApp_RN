import Header from '@/components/organisms/Header';
import TopNavBar from '@/components/organisms/TopNavBar';
import WeatherInfo from '@/components/organisms/WeatherInfo';
import { STRINGS } from '@/constants/strings';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#5B2EFF", "#FF5CA8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <Header />
      <TopNavBar />

      <Text style={styles.title}>{STRINGS.location}</Text>
      <Text style={styles.favorite}><Feather name="heart" size={16} /> Add to favourite</Text>

      <WeatherInfo />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
  },
  favorite: {
    color: '#fff',
    marginTop: 4,
  },
});