import React from "react";

// Outer

// Store
import { useRootState } from "../../store/hooks";

// Global
import { Direction } from "../../types/global";

// Styles

// Components

import SignUp from "../../components/Forms/SignUp/SignUp";
import Welcome from "../Welcome/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

// Types

const UserAuthenticate: React.FunctionComponent = (): JSX.Element => {
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
          name={Direction.SignUp}
          component={SignUp}
          options={{ presentation: "modal" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UserAuthenticate;
