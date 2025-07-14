import styled from "@emotion/native";

export const ToggleContainer = styled.View(({ theme }) => ({
  flexDirection: "row",
  borderWidth: 1,
  borderRadius: 6,
  overflow: "hidden",
  borderColor: theme.colors.border,
}));

interface ToggleOptionProps {
  selected: boolean;
}

export const ToggleOption = styled.Pressable<ToggleOptionProps>(
  ({ selected, theme }) => ({
    paddingVertical: 3,
    paddingHorizontal: 3,
    backgroundColor: selected ? theme.colors.primary1 : "transparent",
  })
);

export const ToggleText = styled.Text<ToggleOptionProps>(
  ({ selected, theme }) => ({
    paddingVertical: 3,
    paddingHorizontal: 3,
    backgroundColor: selected ? theme.colors.primary1 : "transparent",
    color: selected ? theme.colors.activeText2 : theme.colors.text,
  })
);
