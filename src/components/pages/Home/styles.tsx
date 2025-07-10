import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";

export const LinearGradientView = styled(LinearGradient)({
  flex: 1,
  paddingVertical: 60,
  paddingHorizontal: 24,
  justifyContent: "space-between",
});

export const TitleText = styled.Text({
  fontSize: 24,
  fontWeight: "600",
});

export const FavoriteText = styled.Text({
  marginTop: 4,
});
