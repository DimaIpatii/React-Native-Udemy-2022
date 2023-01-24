import React from "react";

// Outer

// Store
import { useRootState } from "../../store/hooks";

// Global
import { Direction } from "../../types/global";

// Styles

// Components
import { View, Text, Button } from "react-native";
import SignUp from "../../components/Forms/SignUp/SignUp";
import SignIn from "../../components/Forms/SignIn/SignIn";
import Welcome from "../../components/Forms/Welcome/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

// Types

const UserAuthenticate: React.FunctionComponent = (): JSX.Element => {
  const token = useRootState((state) => state.authenticateReducer.token);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: "transparent",
          },
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={Direction.Welcome}
          component={Welcome}
        ></Stack.Screen>
        <Stack.Screen
          name={Direction.SignIn}
          component={SignIn}
          options={{ presentation: "modal" }}
        ></Stack.Screen>
        <Stack.Screen
          name={Direction.SignUp}
          component={SignUp}
          options={{ presentation: "modal" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UserAuthenticate;
