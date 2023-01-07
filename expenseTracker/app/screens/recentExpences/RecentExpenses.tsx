import {useLayoutEffect, useState} from 'react'

// Outer
import moment from 'moment';

// Store 
import { useRootState } from '../../store/hooks';

// Gloabl
import { colors } from '../../utils/variables';

// Styles
import { StyleSheet } from 'react-native';

// Components
import {View, FlatList} from 'react-native';
import Summary from '../../components/Summary/Summary';
import ExpencesList from '../../components/ExpencesList/ExpencesList';
import { LinearGradient } from 'expo-linear-gradient';

// Types
import {IExpenseItem} from '../../types/global';


const RecentExpenses = (): JSX.Element => {
  const expences = useRootState(state => state.expences);
  const [data, setData] = useState<IExpenseItem[]>([]);

  useLayoutEffect(() => {
    if(expences.length > 0){
      setData(expences.filter(expence => moment().diff(moment(expence.date, "DD/MM/yyyy"), "day") < 7));
    }
  },[expences]);

  return (
    <View style={styles.conatiner}>
      <LinearGradient colors={[colors.primary300,colors.primary500, colors.tertiary]} style={styles.gradient} locations={[0.2,0.7,0.9]}>
        <Summary title="Recent Expences" type="Recent" />
        <ExpencesList data={data} />
      </LinearGradient>
    </View>
  )
}

export default RecentExpenses

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    
  },
  gradient: {
    flex: 1,
  }
})