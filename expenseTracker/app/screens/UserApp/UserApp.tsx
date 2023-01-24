import React from 'react';

// Outer

// Global
import { navigationRef } from '../../utils/RootNavigator';

// Styles

// Components
import AllExpenses from '../../screens/AllExpences/AllExpenses';
import RecentExpenses from '../../screens/RecentExpences/RecentExpenses';
import ManageExpence from '../../screens/ManageExpence/ManageExpence';
import Navigation from '../../components/Navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

// Types
import {Direction} from '../../types/global';

const UserApp: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
        <NavigationContainer ref={navigationRef}  >
            <Stack.Navigator screenOptions={{
                contentStyle: {
                    backgroundColor: "transparent",
                },
                headerShown: false,
                
                }}>
                <Stack.Screen name={Direction.RecentExpences} component={RecentExpenses} />
                <Stack.Screen name={Direction.ManageExpence} component={ManageExpence} options={{presentation: "modal"}} />
                <Stack.Screen name={Direction.AllExpences} component={AllExpenses} />
            </Stack.Navigator>

            </NavigationContainer>
        <Navigation />
    </>
  )
}

export default UserApp