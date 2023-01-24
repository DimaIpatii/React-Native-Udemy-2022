import React from "react";

// Global
import { colors } from "../../../utils/variables";

// Styles

// Compoents
import {
  View,
  TextInput,
  Text,
  TextInputProps,
  StyleSheet,
  TextStyle,
} from "react-native";

// Types
interface IInputProps {
  styleOverride?: any;
  rootOverride?: any;
  textInputProps?: TextInputProps;
  label?: string;
  laberlStylesOverride?: TextStyle | undefined;
  Icon?: JSX.Element;
}

const Input: React.FunctionComponent<IInputProps> = (
  props: IInputProps
): JSX.Element => {
  return (
    <View style={[styles.infoWrapper, props.rootOverride || {}]}>
      {props.Icon || null}
      {props.label && (
        <Text style={[styles.label, props.laberlStylesOverride || {}]}>
          {props.label}
        </Text>
      )}
      <TextInput
        style={[styles.titleInput, props.styleOverride || {}]}
        {...props.textInputProps}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  infoWrapper: {
    position: "relative",
  },
  infoIcon: {
    position: "absolute",
    top: "50%",
    left: 20,
    transform: [{ translateY: -7.5 }],
    zIndex: 1,
  },
  titleInput: {
    fontSize: 30,
    color: colors.primary600,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "400",
    color: colors.primary500,
  },
});
