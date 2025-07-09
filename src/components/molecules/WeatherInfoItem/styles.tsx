// const styles = StyleSheet.create({
//   item: {
//     flexDirection: "row",
//     width: "18%",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   dataContainer: {
//     marginLeft: 8,
//     flexDirection: "column",
//   },
//   label: {
//     fontSize: 12,
//     marginTop: 4,
//   },
//   value: {
//     fontSize: 14,
//     fontWeight: "600",
//   },
// });

import styled from "@emotion/native";

export const ContainerView = styled.View({
  flexDirection: "row",
  width: "18%",
  alignItems: "center",
  marginBottom: 10,
});

export const DataContainerView = styled.View({
  marginLeft: 8,
  flexDirection: "column",
});

export const LabelText = styled.Text(({ theme }) => ({
  fontSize: 12,
  marginTop: 4,
  color: theme.colors.text,
}));

export const ValueText = styled.Text(({ theme }) => ({
  fontSize: 14,
  fontWeight: "600",
  color: theme.colors.text,
}));
