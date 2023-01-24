// Outer

// Global
import { colors } from "../../../utils/variables";

// Components
import {
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Text,
  View,
} from "react-native";

// Types
export interface IButtonProps {
  label?: string;
  variant?: "contained" | "outlined";
  type?: "primary" | "secondary" | "disabled" | "default";
  color?: string;
  Icon?: JSX.Element;
  iconPosition?: "start" | "end";
  children?: any;
  onPressCallBack: () => void;
}

const Button: React.FunctionComponent<IButtonProps> = (
  props: IButtonProps
): JSX.Element => {
  const getColor = (): string => {
    switch (true) {
      case props.type === "secondary": {
        return colors.secondary600;
      }
      case typeof props.color === "string" && props.type === "default": {
        return props.color as string;
      }
      default: {
        return colors.primary500;
      }
    }
  };

  let buttonCustomStyles: StyleProp<ViewStyle> = {
    backgroundColor: getColor(),
  };

  let buttonLabelCustomStyles: StyleProp<TextStyle> = {
    color: colors.white,
  };

  if (props.variant === "outlined") {
    buttonCustomStyles.borderColor = getColor();
    buttonCustomStyles.borderWidth = 2;
    buttonCustomStyles.borderStyle = "solid";
    buttonCustomStyles.backgroundColor = "transparent";

    buttonLabelCustomStyles.color = getColor();
  }

  return (
    <Pressable
      style={(state) => [
        styles.button,
        buttonCustomStyles,
        state.pressed && { opacity: 0.9 },
      ]}
      onPress={props.onPressCallBack}
    >
      {(state) =>
        props.children || (
          <>
            {props.Icon && props.iconPosition !== "end" && (
              <View style={styles.iconStart}>{props.Icon}</View>
            )}
            <Text
              style={[
                buttonLabelCustomStyles,
                state.pressed && { opacity: 0.9 },
              ]}
            >
              {props.label}
            </Text>
            {props.Icon && props.iconPosition === "end" && (
              <View style={styles.iconEnd}>{props.Icon}</View>
            )}
          </>
        )
      }
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  iconStart: {
    marginRight: 5,
  },
  iconEnd: {
    marginLeft: 5,
  },
});
