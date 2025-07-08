import { STRINGS } from '@/constants/strings';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../molecules/SearchBar';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>{STRINGS.appTitle}</Text>
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 8,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 12,
    alignSelf: 'center',
  },
});