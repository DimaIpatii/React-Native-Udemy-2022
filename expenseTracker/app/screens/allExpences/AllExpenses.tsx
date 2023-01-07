// Outer

// Store
import { useRootState } from '../../store/hooks';

// Global
import { colors } from '../../utils/variables';

// Styles
import { StyleSheet } from 'react-native';

// Components
import { View} from 'react-native';
import Navigation from '../../components/Navigation/Navigation';
import Summary from '../../components/Summary/Summary';
import ExpencesList from '../../components/ExpencesList/ExpencesList';
import { LinearGradient } from 'expo-linear-gradient';

// Types


const AllExpenses = (): JSX.Element => {
  const expences = useRootState(state => state.expences);

  console.log(expences);
  
  return (
      <View style={styles.container}>
        <LinearGradient colors={[colors.primary300,colors.primary500, colors.tertiary]} style={styles.gradient} locations={[0.2,0.7,0.9]}>
          <Summary title="All Expences" type="All" />
          <ExpencesList data={expences} />
        </LinearGradient>
      </View>
  )
}

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1
  }
})