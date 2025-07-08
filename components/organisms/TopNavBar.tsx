import { DateTimeDisplay } from '@/components/molecules/DateTimeDisplay';
import { TabItem } from '@/components/molecules/TabItem';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const navItems = ['HOME', 'FAVOURITE', 'RECENT SEARCH'];

export default function TopNavBar() {
  const [activeTab, setActiveTab] = useState('HOME');

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {navItems.map((item) => (
          <TabItem
            key={item}
            label={item}
            isActive={activeTab === item}
            onPress={() => setActiveTab(item)}
          />
        ))}
      </View>
      <View style={styles.right}>
        <DateTimeDisplay />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255,255,255,0.3)',
    paddingVertical: 12,
  },
  left: {
    flexDirection: 'row',
    gap: 24,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
});
