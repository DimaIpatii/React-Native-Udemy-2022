import React from 'react'

// Global
import {colors} from '../../utils/variables';

// Styles
import { StyleSheet } from 'react-native'

// Components
import {View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons'; 

// Types
interface ITotalDisplayProps {
    title: string,
    total: number,
    type: "All" | "Recent"
};

const TotalDisplay = (props: ITotalDisplayProps): JSX.Element => {
  return (
    <View style={styles.container}>
        <LinearGradient colors={[colors.primary300, colors.primary400]} style={styles.gradientContainer}>
            <View style={styles.titlleWrapper}>
                <Text style={styles.title}>{props.title}</Text>
                <View style={styles.typeLabelWrapper}>
                    <Text style={styles.typeLabel}>{props.type === "All" ? "Total" : "Last 7 Days"}</Text>
                </View>
            </View>
            <Text style={styles.total}><FontAwesome name="dollar" size={35} color={colors.gold} />{props.total}</Text>
        </LinearGradient>
    </View>
  )
}

export default TotalDisplay;


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "20%",
        shadowColor: colors.primary600,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 6,
        zIndex: 1,

    },
    gradientContainer: {
        flex: 1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        padding: 20,
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    title: {
        fontSize: 25,
        color: "#fff",
        fontWeight: "600"
    },
    titlleWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    typeLabelWrapper: {
        backgroundColor: colors.primary600,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    typeLabel: {
        //flex: 1,
        fontSize: 14,
        color: "#fff",  
    },
    total: {
        fontSize: 40,
        color: colors.gold,
        fontWeight: "600",
        textAlign: "center",
        
    }
})