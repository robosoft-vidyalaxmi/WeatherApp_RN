import styled from "@emotion/native";
import { Pressable } from "react-native";

export const Overlay = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.overlayBackgroundColor,
  justifyContent: "center",
  alignItems: "center",
}));

export const ModalContainer = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.modalBackgroundColor,
  borderRadius: 4,
  paddingVertical: 24,
  paddingHorizontal: 50,
  alignItems: "center",
  elevation: 5,
  shadowColor: theme.colors.modalShadowColor,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
}));

export const MessageText = styled.Text(({ theme }) => ({
  fontSize: 16,
  textAlign: "center",
  marginBottom: 20,
  color: theme.colors.text2,
  fontFamily: theme.fonts.medium,
}));

export const ButtonRow = styled.View({
  flexDirection: "row",
  justifyContent: "space-around",
  width: "100%",
  gap: 12,
});

export const CancelButton = styled(Pressable)({
  padding: 12,
  paddingHorizontal: 50,
  alignItems: "center",
});

export const ConfirmButton = styled(Pressable)(({ theme }) => ({
  padding: 12,
  paddingHorizontal: 50,
  backgroundColor: theme.colors.modalConfirmButtonBackgroundColor,
  alignItems: "center",
  borderRadius: 4,
}));

export const ButtonText = styled.Text<{ color?: string }>(
  ({ color, theme }) => ({
    fontSize: 14,
    fontWeight: "bold",
    color: color ?? theme.colors.text2,
  })
);
