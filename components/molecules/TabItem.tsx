import { useThemeColor } from "@/hooks/useThemeColor";
import { Pressable, StyleSheet, Text } from "react-native";

type TabItemProps = {
  label: string;
  isActive?: boolean;
  onPress?: () => void;
};

export function TabItem({ label, isActive = false, onPress }: TabItemProps) {
  const textColor = useThemeColor({}, "text");
  const activeTabColor = useThemeColor({}, "activeText");

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text
        style={[
          styles.text,
          { color: isActive ? activeTabColor : textColor },
          isActive && {
            borderBottomColor: activeTabColor,
            borderBottomWidth: 2,
          },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingBottom: 4,
    paddingHorizontal: 20,
  },
});
