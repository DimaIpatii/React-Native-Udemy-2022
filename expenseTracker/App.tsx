// Outer
import { Provider } from 'react-redux';

// Store
import appStore from './app/store/store';

// Global
import { colors } from './app/utils/variables';

// Components
import { StyleSheet  } from 'react-native';
import Root from './app/screens/Root/Root';
import { LinearGradient } from 'expo-linear-gradient';

export default function App(): JSX.Element {

  // TODO:
  /* 
  Bodget Pro - Will help you manage your incomes and expences like a Pro
  * Add check to manage Expence form
  * Add sign in && log in screens
  * Add Drawer navigation on the left and the right sides
  */
 
  return (
    <Provider store={appStore}>
      <LinearGradient colors={[colors.primary300,  "#fff"]} style={styles.gradient} locations={[0.2,0.9]}>
        <Root />
      </LinearGradient>
    </Provider>
  );
}

const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    height: "100%",
    flex: 1
  },
});
