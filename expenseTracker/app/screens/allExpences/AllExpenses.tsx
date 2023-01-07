// Outer

// Global
import { colors } from '../../utils/variables';

// Styles
import { StyleSheet } from 'react-native';

// Components
import { View} from 'react-native';
import Navigation from '../../components/navigation/Navigation';
import TotalDisplay from '../../components/totalDisplay/TotalDisplay';
import ExpencesList from '../../components/expencesList/ExpencesList';
import { LinearGradient } from 'expo-linear-gradient';

// Types


const AllExpenses = (): JSX.Element => {
  return (
      <View style={styles.container}>
        <LinearGradient colors={[colors.primary300,colors.primary500, colors.tertiary]} style={styles.gradient} locations={[0.2,0.7,0.9]}>
          <TotalDisplay title="All Expences" total={500} type="All" />
          <ExpencesList data={[]} />
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