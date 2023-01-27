import React from "react";
const { useState, useEffect } = React;

// Outer
import { colors } from "../../../utils/variables";

// Global
import globalStrings from "../../../locale/globalStrings.module";

// Navigation
import { useNavigation, NavigationProp } from "@react-navigation/native";

// Styles

// Components
import { View, Text, StyleSheet } from "react-native";
import Logo from "../../Logo/Logo";
import Input from "../../utils/Input/Input";
import Button from "../../utils/Button/Button";
import { LinearGradient } from "expo-linear-gradient";

// Types
import { Direction } from "../../../types/global";
interface IFormData {
  userName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const initialFormData: IFormData = {
  userName: "",
  email: "",
  password: "",
  repeatPassword: "",
};
const SignUp: React.FunctionComponent = (): JSX.Element => {
  const [formData, setFormData] = useState<IFormData>(initialFormData);
  const navigator: NavigationProp<any> = useNavigation();

  /* *************************** */
  const acceptForm = (): void => {
    console.log(formData);
  };
  /* *************************** */

  return (
    <LinearGradient
      colors={[colors.primary300, colors.primary500]}
      style={styles.container}
      locations={[0.2, 0.7]}
    >
      <View>
        <Text style={styles.title}>{globalStrings.en_en.SignUp}</Text>
      </View>

      <Input
        label="User Name"
        laberlStylesOverride={styles.label}
        styleOverride={styles.inputStyle}
        rootOverride={styles.inputRow}
        textInputProps={{
          placeholder: "Your Name",
          onChangeText: (newValue: any) =>
            setFormData({ ...formData, userName: newValue }),
        }}
      />

      <Input
        label="Email"
        laberlStylesOverride={styles.label}
        styleOverride={styles.inputStyle}
        rootOverride={styles.inputRow}
        textInputProps={{
          autoCapitalize: "none",
          placeholder: "your@email.com",
          keyboardType: "email-address",
          value: formData.email,
          onChangeText: (newValue: any) =>
            setFormData({ ...formData, email: newValue }),
        }}
      />

      <Input
        label="Password"
        laberlStylesOverride={styles.label}
        styleOverride={styles.inputStyle}
        rootOverride={styles.inputRow}
        textInputProps={{
          placeholder: "*******",
          value: formData.password,
          onChangeText: (newValue: any) =>
            setFormData({ ...formData, password: newValue }),
        }}
      />

      <Input
        label="Repeat Password"
        laberlStylesOverride={styles.label}
        styleOverride={styles.inputStyle}
        rootOverride={styles.inputRow}
        textInputProps={{
          placeholder: "*******",
          value: formData.repeatPassword,
          onChangeText: (newValue: any) =>
            setFormData({ ...formData, repeatPassword: newValue }),
        }}
      />

      <View style={styles.buttonsContainer}>
        <View style={[styles.buttonWrapper, styles.signUpButton]}>
          <Button
            label={globalStrings.en_en.SignUp}
            onPressCallBack={acceptForm}
          />
        </View>

        <View style={[styles.buttonWrapper, styles.cancelButton]}>
          <Button
            label={globalStrings.en_en.Cancel}
            color={colors.alert}
            type="default"
            onPressCallBack={() => navigator.navigate(Direction.Welcome)}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "4%",
  },
  title: {
    fontSize: 30,
    color: colors.white,
    marginBottom: 40,
  },
  inputRow: {
    marginBottom: 10,
  },
  label: {
    color: colors.primary600,
  },
  inputStyle: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    color: colors.primary600,
  },
  inputLabelStyles: {
    fontSize: 16,
  },
  buttonsContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  buttonWrapper: {
    flex: 1,
  },
  signUpButton: {
    marginRight: 10,
  },
  cancelButton: {
    marginLeft: 10,
  },
});
