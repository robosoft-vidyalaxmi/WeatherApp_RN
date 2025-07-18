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
  return (
    <Pressable onPress={onPress}>
      <Text isActive={isActive}>{label}</Text>
    </Pressable>
  );
};

export default TabItem;
