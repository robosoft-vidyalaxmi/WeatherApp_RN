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
  const activeTabColor = theme.colors.activeText1;

  return (
    <Pressable onPress={onPress}>
      <Text isActive={isActive}>{label}</Text>
    </Pressable>
  );
};

export default TabItem;
