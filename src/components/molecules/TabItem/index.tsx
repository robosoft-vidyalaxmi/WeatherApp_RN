import { useTheme } from "@emotion/react";
import { Pressable, Text } from "./styles";

interface TabItemProps {
  label: string;
  isActive?: boolean;
  onPress?: () => void;
}

const TabItem: React.FC<TabItemProps> = ({
  label,
  isActive = false,
  onPress,
}) => {
  const theme = useTheme();
  const textColor = theme.colors.text;
  const activeTabColor = theme.colors.activeText;

  return (
    <Pressable onPress={onPress}>
      <Text
        style={[
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
};

export default TabItem;
