import { useTheme } from "@emotion/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "react-native";
import {
  ButtonRow,
  ButtonText,
  CancelButton,
  ConfirmButton,
  MessageText,
  ModalContainer,
  Overlay,
} from "./styles";

interface ConfirmModalProps {
  visible: boolean;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  visible,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const confirmLabel = confirmText ?? t("confirmationModal.confirmText");
  const cancelLabel = cancelText ?? t("confirmationModal.cancelText");

  return (
    <Modal transparent visible={visible} animationType="fade">
      <Overlay>
        <ModalContainer>
          <MessageText>{message}</MessageText>
          <ButtonRow>
            <CancelButton onPress={onCancel}>
              <ButtonText>{cancelLabel}</ButtonText>
            </CancelButton>
            <ConfirmButton onPress={onConfirm}>
              <ButtonText color={theme.colors.text}>{confirmLabel}</ButtonText>
            </ConfirmButton>
          </ButtonRow>
        </ModalContainer>
      </Overlay>
    </Modal>
  );
};

export default ConfirmModal;
