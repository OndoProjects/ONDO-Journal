import { StyleSheet } from "react-native";

export const pTextColors = StyleSheet.create({
  default: { color: "#333" },
  light: { color: "#999" },
  dark: { color: "#000" },
  primary: { color: "#2563eb" },
  secondary: { color: "#7c3aed" },
});

export const pTextSizes = StyleSheet.create({
  sm: { fontSize: 14 },
  base: { fontSize: 16 },
  lg: { fontSize: 18 },
  xl: { fontSize: 22 },
});

export const pTextAlign = StyleSheet.create({
  center: { textAlign: "center" },
  left: { textAlign: "left" },
  right: { textAlign: "right" },
});

export const pTextPadding = StyleSheet.create({
none: { padding: 0 },
sm: { padding: 4 },
base: { padding: 8 },
lg: { padding: 12 },
xl: { padding: 16 },
});
