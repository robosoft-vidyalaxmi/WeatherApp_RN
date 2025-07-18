import styled from "@emotion/native";

export const Container = styled.View<{ isWeb: boolean }>(({ isWeb }) => ({
  paddingHorizontal: 24,
  paddingVertical: 12,
  gap: 10,
  alignItems: isWeb ? "flex-start" : "center",
}));
