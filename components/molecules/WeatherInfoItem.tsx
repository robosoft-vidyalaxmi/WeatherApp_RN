import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

interface WeatherInfoItemProps {
  icon: keyof typeof Feather.glyphMap;
  label: string;
  value: string;
}

export default function WeatherInfoItem({ icon, label, value }: WeatherInfoItemProps) {
  return (
    <View style={styles.item}>
      <Feather name={icon} size={18} color="#fff" />
      <View style={styles.dataContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    width: '18%',
    alignItems: 'center',
    marginBottom: 10,
  },
  dataContainer: {
    marginLeft: 8,
    flexDirection: 'column',
  },
  label: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
  value: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
