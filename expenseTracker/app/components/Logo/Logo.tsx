import React from "react";

// Outer

// Global
import { colors } from "../../utils/variables";

// Styles

// Components
import { View, Text, StyleSheet } from "react-native";

// Types

const Logo: React.FunctionComponent = (): JSX.Element => {
  return (
    <Text style={styles.logo}>
      Budget <Text style={styles.proLabel}>PRO</Text>
    </Text>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    color: "white",
    fontSize: 30,
    fontWeight: "500",
  },
  proLabel: {
    color: colors.primary600,
    fontWeight: "600",
  },
});
