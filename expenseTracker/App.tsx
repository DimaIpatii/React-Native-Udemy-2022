import { StatusBar } from 'expo-status-bar';

// Outer
import { Provider } from 'react-redux';

// Store
import appStore from './app/store/store';

// Global
import { colors } from './app/utils/variables';
import { navigationRef } from './app/utils/RootNavigator';

// Styles

// Components
import { SafeAreaView, StyleSheet, View, Platform  } from 'react-native';
import AllExpenses from './app/screens/AllExpences/AllExpenses';
import RecentExpenses from './app/screens/RecentExpences/RecentExpenses';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import ManageExpence from './app/screens/ManageExpence/ManageExpence';

import { LinearGradient } from 'expo-linear-gradient';
import Navigation from './app/components/Navigation/Navigation';

// Types
import {Direction} from './app/types/global';


export default function App(): JSX.Element {
  return (
    <Provider store={appStore}>
      <LinearGradient colors={[colors.primary300,  "#fff"]} style={styles.gradient} locations={[0.2,0.9]}>
        <SafeAreaView style={styles.container} >
          <View style={styles.screens}>
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
              <StatusBar style="light" />
            </NavigationContainer>
            <Navigation />
          </View>
        </SafeAreaView>
      </LinearGradient>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  gradient: {
    width: "100%",
    height: "100%",
    flex: 1
  },
  screens:{
    width: "100%",
    flex: 1,
  },
});
