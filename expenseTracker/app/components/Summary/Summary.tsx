import {useState, useLayoutEffect} from 'react'

// Global
import {colors} from '../../utils/variables';
import moment from 'moment';

// Store
import {useRootState } from '../../store/hooks';

// Styles
import { StyleSheet } from 'react-native'

// Components
import {View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons'; 

// Types
interface ISummaryProps {
    title: string,
    type: "All" | "Recent"
};

const Summary = (props: ISummaryProps): JSX.Element => {
    const expences = useRootState(state => state.expanceReducer.expences);
    const [total, setTotal] = useState<number>(0);

    useLayoutEffect(() => {

        if(props.type === "All"){
            const total = expences?.reduce((sum, expence) => sum + expence.price, 0);
            setTotal(total);
        }else if (props.type === "Recent" ){
            
            const recent = expences?.filter(expence => moment().diff(moment(expence.date, "DD/MM/yyyy"), "day") < 7);
            const total = recent.reduce((sum, expence) => sum + expence.price, 0);
            setTotal(total);
        }
    },[expences]);

  return (
    <View style={styles.container}>
        <LinearGradient colors={[colors.primary300, colors.primary400]} style={styles.gradientContainer}>
            <View style={styles.titlleWrapper}>
                <Text style={styles.title}>{props.title}</Text>
                <View style={styles.typeLabelWrapper}>
                    <Text style={styles.typeLabel}>{props.type === "All" ? "Total" : "Last 7 Days"}</Text>
                </View>
            </View>
            <Text style={styles.total}><FontAwesome name="dollar" size={35} color={colors.gold} />{total}</Text>
        </LinearGradient>
    </View>
  )
}

export default Summary;


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "20%",
        shadowColor: colors.primary600,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 6,
        zIndex: 1,
        elevation: 15,
        backgroundColor: 'transparent',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
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