// Outer

// Store
import { useRootState } from '../../store/hooks';

// Global
import { colors } from '../../utils/variables';

// Styles
import { StyleSheet } from 'react-native';

// Components
import { View} from 'react-native';
import Summary from '../../components/Summary/Summary';
import ExpencesList from '../../components/ExpencesList/ExpencesList';
import { LinearGradient } from 'expo-linear-gradient';
import NoExpencesMessage from '../../components/NoExpencesMessage/NoExpencesMessage';

// Types


const AllExpenses = (): JSX.Element => {
  const expences = useRootState(state => state.expanceReducer.expences);

  return (
      <View style={styles.container}>
        <LinearGradient colors={[colors.primary300,colors.primary500, colors.tertiary]} style={styles.container} locations={[0.2,0.7,0.9]}>
          <Summary title="All Expences" type="All" />
          {expences && expences.length > 0 ? <ExpencesList data={expences} /> : <NoExpencesMessage title='No expences.' rootStyles={styles.messageContainer} />}
        </LinearGradient>
      </View>
  )
}

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
})