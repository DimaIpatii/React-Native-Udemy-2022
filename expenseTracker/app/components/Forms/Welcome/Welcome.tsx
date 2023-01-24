import React from "react";

// Outer

// Global
import globalStrings from "../../../locale/globalStrings.module";

// Styles

// Components
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Logo from "../../Logo/Logo";
import WelcomeImage from "../../utils/Images/WelcomeImage";
import Button from "../../utils/Button/Button";
import { FontAwesome } from "@expo/vector-icons";
import Input from "../../utils/Input/Input";

// Types
import { Direction } from "../../../types/global";
import { colors } from "../../../utils/variables";

const Welcome: React.FunctionComponent = (): JSX.Element => {
  const navigator: NavigationProp<any> = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>

      <View style={styles.welcomeImageContainer}>
        <WelcomeImage />
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpLabel}>
          {globalStrings.en_en.DoesNotHaveAnAccount}
        </Text>
        <Pressable
          style={styles.signUpButtonContainer}
          onPress={() => navigator.navigate(Direction.SignUp)}
        >
          <Text style={styles.signUpButtonLabel}>
            {globalStrings.en_en.SignUp}
          </Text>
        </Pressable>
      </View>

      <Input
        label="User Name/Email"
        textInputProps={{
          placeholder: "your@email.com",
          autoCapitalize: "none",
        }}
        rootOverride={styles.inputRow}
        styleOverride={styles.inputStyle}
      />

      <Input
        label="Password"
        textInputProps={{
          placeholder: "Entre 6 characters or more",
          keyboardType: "numeric",
        }}
        rootOverride={styles.inputRow}
        styleOverride={styles.inputStyle}
      />

      <View style={styles.signUpButtonWrapper}>
        <Button
          onPressCallBack={() => navigator.navigate(Direction.SignIn)}
          label={globalStrings.en_en.SignIn}
        />
      </View>

      <View style={styles.divider}>
        <Text style={styles.dividerLabel}>
          {globalStrings.en_en.OrSignInWith}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={[styles.buttonWrapper, styles.googleButtonWrapper]}>
          <Button
            type="default"
            color={colors.google}
            variant="outlined"
            Icon={
              <FontAwesome name="google-plus" size={16} color={colors.google} />
            }
            label={globalStrings.en_en.Google}
            onPressCallBack={() => console.log("Authenticate with google")}
          />
        </View>

        <View style={[styles.buttonWrapper, styles.facebookButtonWrapper]}>
          <Button
            type="default"
            color={colors.facabook}
            variant="outlined"
            Icon={
              <FontAwesome name="facebook" size={16} color={colors.facabook} />
            }
            label={globalStrings.en_en.Facebook}
            onPressCallBack={() => console.log("Authenticate with facebook")}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "4%",
    position: "relative",
  },
  logoContainer: {
    zIndex: 10000,
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  signUpLabel: {
    color: colors.white,
    fontSize: 14,
    textAlign: "center",
  },
  signUpButtonContainer: {
    marginLeft: 10,
  },
  signUpButtonLabel: {
    color: colors.primary600,
    textDecorationLine: "underline",
    textDecorationColor: colors.primary600,
  },
  inputRow: {
    marginBottom: 10,
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
  signUpButtonWrapper: {
    marginTop: 5,
  },
  welcomeImageContainer: {
    width: "100%",
    height: "42%",

    /* borderWidth: 1,
    borderColor: "red", */
  },

  buttonsContainer: {
    flexDirection: "row",
  },
  divider: {
    marginVertical: 10,
  },
  dividerLabel: {
    color: colors.primary500,
    fontSize: 14,
    textAlign: "center",
  },
  buttonWrapper: {
    flex: 1,
  },
  googleButtonWrapper: {
    marginRight: 5,
  },
  facebookButtonWrapper: {
    marginLeft: 5,
  },
});
