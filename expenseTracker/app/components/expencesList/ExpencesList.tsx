import React from 'react'


// Global
import {colors} from '../../utils/variables';

// Style
import { StyleSheet } from 'react-native';

// Components
import {FlatList, View, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

// Types
export interface IExpenseItem{
    title: string,
    date: string,
    price: number
};

interface IExpenceListProps{
    data: IExpenseItem[]
}

const ExpencesList = (props: IExpenceListProps): JSX.Element => {
  return (
    <FlatList data={props.data} style={styles.listContainer} renderItem={({item, index}) => (
        <View style={[styles.container, {marginBottom: index === props.data.length ? 0 : 15}]}>
            <View >
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.date}>{item.date}</Text>
            </View>

            <View style={styles.priceContainer}>
                <View style={styles.priceWrapper}>
                    <Text style={styles.price}><FontAwesome name="dollar" size={14} color={colors.gold} />{item.price}</Text>
                </View>
            </View>
        </View>
    )}/>
  )
}

export default ExpencesList;

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        paddingHorizontal: "5%",
        paddingTop: 20
    },
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 15,
        shadowColor: colors.primary600,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
    },
    title: {
        color: colors.primary600,
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5
    },
    date: {
        color: colors.primary400
    },
    priceContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    priceWrapper: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: colors.primary600,
        borderRadius: 8,
        alignSelf: "center"
    },
    price: {
        color: colors.gold,
        fontSize: 14
    }
})