import { useTheme } from "@emotion/react";
import { Feather } from "@expo/vector-icons";
import { EmptyStateText, EmptyWrapper, IconWrapper } from "./styles";

interface EmptyStateProps {
  emptyStateText: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ emptyStateText }) => {
  const theme = useTheme();
  return (
    <EmptyWrapper>
      <IconWrapper>
        <Feather name="meh" size={60} color={theme.colors.iconColor} />
      </IconWrapper>
      <EmptyStateText>{emptyStateText}</EmptyStateText>
    </EmptyWrapper>
  );
};

export default EmptyState;
