import React from 'react'

// Outer

// Store
import { useRootState } from '../../store/hooks';


// Global


// Styles

// Components
import { SafeAreaView, StyleSheet, View, Platform  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import UserApp from '../UserApp/UserApp';
import UserAuthenticate from '../UserAuthenticate/UserAuthenticate';

// Types


const Root: React.FunctionComponent = (): JSX.Element => {
    const isLoged = useRootState(state => state.authenticateReducer.isLoged);

    
  return (
    <SafeAreaView style={styles.container} >
          <View style={styles.screens}>
          
            {!isLoged && <UserAuthenticate />}
            {isLoged && <UserApp />}
          </View>
          <StatusBar style="light" />
        </SafeAreaView>
        
    
  )
}

export default Root;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Platform.OS === "android" ? 30 : 0,
    },
    screens:{
      width: "100%",
      flex: 1,
    },
  });