import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";

export const LinearGradientView = styled(LinearGradient)<{ isWeb: boolean }>(
  ({ isWeb }) => ({
    flex: 1,
    paddingTop: 60,
    paddingBottom: isWeb ? 60 : 20,
    paddingHorizontal: 24,
    justifyContent: "space-between",
  })
);
