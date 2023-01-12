import {useState} from 'react'

// Outer
import { useNavigation, NavigationProp, useRoute, NavigationContainerRefWithCurrent } from '@react-navigation/native';

// Global
import {colors} from '../../utils/variables';
import {navigate} from '../../utils/RootNavigator';

// Styles
import { StyleSheet } from 'react-native';

// Components
import {View, Dimensions} from 'react-native';
import IconButton from '../IconButton/IconButton';
import { EvilIcons, AntDesign } from '@expo/vector-icons'; 

// Types
import { Direction } from '../../types/global';


const screenWidth = Dimensions.get("screen").width;

const Navigation = (): JSX.Element => {
    const [selectedScreen, setSelectedScreen] = useState<Direction.AllExpences | Direction.RecentExpences | null>(Direction.RecentExpences);
    
    const navigationHandler = (direction: Direction): void => {
        
        switch(direction){
            case Direction.AllExpences: 
                setSelectedScreen(Direction.AllExpences);
                navigate(Direction.AllExpences as never, {name: Direction.AllExpences} as never);
                break;
            case Direction.RecentExpences: 
                setSelectedScreen(Direction.RecentExpences);
                navigate(Direction.RecentExpences as never, {name: Direction.RecentExpences}  as never);
                break;
            case Direction.ManageExpence:
                navigate(Direction.ManageExpence as never, {name: Direction.ManageExpence}as never);
                break;
        }
        
    }

  return (
    <View style={styles.navigationContainer}>
        <View style={styles.buttonWrapper}>
            <IconButton 
                Icon={<EvilIcons name="tag" size={30} color={selectedScreen === Direction.RecentExpences ? colors.primary600 : colors.primary500} />} 
                label="Recent" position='bottom' overrideLabelStyles={[styles.button, {color: selectedScreen === Direction.RecentExpences ? colors.primary600 :  colors.primary500}]} 
                onPress={() => navigationHandler(Direction.RecentExpences)}
            />
        </View>

        <IconButton 
            Icon={<AntDesign name="plus" size={30} color="white" />} 
            overrideButtonStyles={styles.buttonAdd} 
            onPress={() => navigationHandler(Direction.ManageExpence)}
        />

        <View style={styles.buttonWrapper}>
            <IconButton 
            Icon={<EvilIcons name="calendar" size={30} color={selectedScreen === Direction.AllExpences ? colors.primary600 : colors.primary500} />} 
            label="All Expences" position='bottom' overrideLabelStyles={[styles.button, {color: selectedScreen === Direction.AllExpences ? colors.primary600 :  colors.primary500}]}
            onPress={() => navigationHandler(Direction.AllExpences)}
            />
        </View>    
    </View>
  )
}

export default Navigation;


const styles = StyleSheet.create({
    navigationContainer: {
        flexDirection: "row",
        paddingVertical: 15,
        backgroundColor: '#fff',
        shadowColor: colors.secondary400,
        shadowOffset: {
          width: 0,
          height: -1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 1
      },
      buttonWrapper: {flex: 1, justifyContent: "center"},
      button: {
        color: colors.primary500,
        marginTop: 5
      },
      buttonAdd: {
        width: 70,
        height: 70,
        backgroundColor: colors.primary600,
        borderRadius: 140,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: (screenWidth / 2) - 35,
        bottom: 40,
        shadowColor: colors.primary600,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3 
      }
})