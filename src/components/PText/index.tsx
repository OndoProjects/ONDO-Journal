import React, { ReactNode } from "react";
import { Text, StyleSheet } from "react-native";
import { pTextColors, pTextSizes, pTextAlign, pTextPadding } from "./styles";

type Props = {
  children: ReactNode;
  color?: keyof typeof pTextColors;
  size?: keyof typeof pTextSizes;
  align?: keyof typeof pTextAlign;
  padding?: keyof typeof pTextPadding;
  style?: any;
};

export default function PText({ children, color = "default", size = "base", align = "left", padding = "none", style }: Props) {
  return (
    <Text style={[styles.base, pTextColors[color], pTextSizes[size], pTextAlign[align], pTextPadding[padding], style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    lineHeight: 22,
  },
});
