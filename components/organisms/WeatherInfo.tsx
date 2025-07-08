import WeatherInfoFooter from '@/components/organisms/WeatherInfoFooter';
import { useWeather } from '@/hooks/useWeather';
import { StyleSheet, Text, View } from 'react-native';

export default function WeatherInfo() {
  const { data } = useWeather();

  return (
    <View style={styles.container}>
      <Text style={styles.temp}>{data.temperature}°</Text>
      <Text style={styles.condition}>{data.condition}</Text>
      <WeatherInfoFooter />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
  },
  temp: {
    fontSize: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  condition: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
});