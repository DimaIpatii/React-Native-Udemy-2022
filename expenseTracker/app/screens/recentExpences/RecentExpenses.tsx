import {useEffect, useLayoutEffect, useState} from 'react'

// Outer
import moment from 'moment';

// Store 
import { useRootState, useDispatchApp } from '../../store/hooks';
import {getAllExpencesThunk} from '../../store/slices/expencesSlice';

// Gloabl
import { colors } from '../../utils/variables';

// Styles
import { StyleSheet, ActivityIndicator } from 'react-native';

// Components
import {View} from 'react-native';
import Summary from '../../components/Summary/Summary';
import ExpencesList from '../../components/ExpencesList/ExpencesList';
import { LinearGradient } from 'expo-linear-gradient';
import NoExpencesMessage from '../../components/NoExpencesMessage/NoExpencesMessage';

// Types
import {IExpenseItem} from '../../types/global';


const RecentExpenses = (): JSX.Element => {
  const expences = useRootState(state => state.expanceReducer.expences);
  const [data, setData] = useState<IExpenseItem[]>([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatchApp();

  useLayoutEffect(() => {
    if(expences){
      setData(expences.filter(expence => moment().diff(moment(expence.date, "DD/MM/yyyy"), "day") < 7));
    }
  },[expences]);

  useEffect(() => {
    const fetchExpences = async () => {
      setLoading(true);
      try{
         await dispatch(getAllExpencesThunk())
      }catch(error){
        console.error("Error, in fetching expences.", error);
      }finally{
        setLoading(false);
      }
    }

    fetchExpences()
  },[]);

  return (
    <View style={styles.conatiner}>
      <LinearGradient colors={[colors.primary300,colors.primary500, colors.tertiary]} style={styles.conatiner} locations={[0.2,0.7,0.9]}>
        {loading 
        ? <ActivityIndicator size={"large"} color="white" style={styles.conatiner} /> 
        : (
        <> 
          <Summary title="Recent Expences" type="Recent" />
          {data && data.length > 0 ? <ExpencesList data={data} /> : (
              <NoExpencesMessage title="No expences in the last 7 days" rootStyles={styles.messageContainer} />
          ) }
        </>)}
      </LinearGradient>
    </View>
  )
}

export default RecentExpenses

const styles = StyleSheet.create({
  conatiner: {
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