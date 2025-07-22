import styled from "@emotion/native";
import { Feather } from "@expo/vector-icons";

export const SearchWrapper = styled.View(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  borderRadius: 6,
  width: "50%",
  minWidth: 300,
  paddingHorizontal: 12,
  backgroundColor: theme.colors.searchBarBackgroundColor,
}));

export const SearchIcon = styled(Feather)(({ theme }) => ({
  marginLeft: 8,
  color: theme.colors.iconColor,
}));

export const SearchInput = styled.TextInput(({ theme }) => ({
  flex: 1,
  height: 40,
  color: theme.colors.searchInputColor,
  borderWidth: 0,
  outlineWidth: 0,
  outlineColor: "transparent",
  outlineOffset: 0,
}));

export const DropdownContainer = styled.View(({ theme }) => ({
  position: "absolute",
  top: 50,
  width: "100%",
  backgroundColor: theme.colors.primary1,
  borderWidth: 1,
  borderColor: theme.colors.dropdownBorderColor,
  borderRadius: 6,
  maxHeight: 200,
  zIndex: 999,
}));

export const DropdownItem = styled.Text(({ theme }) => ({
  padding: 12,
  borderBottomWidth: 1,
  borderBottomColor: theme.colors.dropdownItemBottomBorderColor,
}));
