import { Feather } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search city"
          placeholderTextColor="#ccc"
        />
        <Feather name="search" size={18} color="#fff" style={styles.searchIcon} />
      </View>
  )
}

const styles = StyleSheet.create({
    searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff30',
    borderRadius: 6,
    width: '50%',
    minWidth: 300,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginLeft: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#fff',
    borderWidth: 0,
    outlineWidth: 0,
    outlineColor: 'transparent',
    outlineOffset: 0,
  },
})