import { StatusBar } from 'expo-status-bar';

// Outer

// Global
import { colors } from './app/utils/variables';
import { navigationRef } from './app/utils/RootNavigator';

// Styles

// Components
import { SafeAreaView, StyleSheet, View, Dimensions  } from 'react-native';
import AllExpenses from './app/screens/allExpences/AllExpenses';
import RecentExpenses from './app/screens/recentExpences/RecentExpenses';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import ExpenceForm from './app/screens/expenceForm/ExpenceForm';

import { LinearGradient } from 'expo-linear-gradient';
import Navigation from './app/components/navigation/Navigation';

// Types
import {Direction} from './app/types/global';


export default function App(): JSX.Element {
  
  return (
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
                <Stack.Screen name={Direction.NewEpence} component={ExpenceForm} />
                <Stack.Screen name={Direction.AllExpences} component={AllExpenses} />
              </Stack.Navigator>
              <StatusBar style="light" />
            </NavigationContainer>
            <Navigation />
          </View>
        </SafeAreaView>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
