import React from 'react'

// Outer

// Gloabl
import { colors } from '../../utils/variables';

// Styles
import { StyleSheet } from 'react-native';

// Components
import {View, FlatList} from 'react-native';
import TotalDisplay from '../../components/totalDisplay/TotalDisplay';
import ExpencesList from '../../components/expencesList/ExpencesList';
import { LinearGradient } from 'expo-linear-gradient';

// Types
import {IExpenseItem} from '../../components/expencesList/ExpencesList';


const RecentExpenses = (): JSX.Element => {
    const data: IExpenseItem[] = [
      {title: "Item", price: 120, date: "10/01/2023" },
      {title: "Item 2", price: 600, date: "12/01/2023" },
      {title: "Item 3", price: 20, date: "21/01/2023" },
      {title: "Item 4", price: 20, date: "21/01/2023" },
      {title: "Item 5", price: 20, date: "21/01/2023" },
      {title: "Item 6", price: 20, date: "21/01/2023" },
      {title: "Item 7", price: 20, date: "21/01/2023" },
      {title: "Item 8", price: 20, date: "21/01/2023" },
      {title: "Item 9", price: 20, date: "21/01/2023" },
      {title: "Item 10", price: 20, date: "21/01/2023" },
    ]
    
  return (
    <View style={styles.conatiner}>
      <LinearGradient colors={[colors.primary300,colors.primary500, colors.tertiary]} style={styles.gradient} locations={[0.2,0.7,0.9]}>
        <TotalDisplay title="Recent Expences" total={500} type="Recent" />
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