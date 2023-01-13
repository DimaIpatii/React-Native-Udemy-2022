import {useState, useLayoutEffect} from 'react'

// Outer
import { useRoute, RouteProp, useNavigation, NavigationProp } from '@react-navigation/native';
import moment from 'moment';

// Store
import { useDispatchApp, useRootState } from '../../store/hooks';
import { addExpenceThunk, updateExpenceThunk, deleteExpenceThunk } from '../../store/slices/expencesSlice';

// Global
import { colors } from '../../utils/variables';

// Styles
import { StyleSheet } from 'react-native';

// Components
import {View, Text, Pressable, TextInput, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import IconButton from '../../components/IconButton/IconButton';
import { MaterialIcons, Feather, Ionicons } from '@expo/vector-icons'; 
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 
import { IExpenseItem } from '../../types/global';


// Types

const ManageExpence = (): JSX.Element => {
  const {params}: RouteProp<any> = useRoute();
  const navigation: NavigationProp<any> = useNavigation();
  const expences = useRootState(state => state.expences);
  const dispatch = useDispatchApp();

  const isEditing = !!params?.expenceId
  const [formValues, setFormValues] = useState<{title: string, date: string, price: string}>({
    title: "",
    price: "",
    date: moment().format("DD/MM/yyyy")
  });

  /* ********************************** */
  
  const confirmHandler = async (): Promise<void> => {

    const expence: Partial<IExpenseItem> = {
      title: formValues.title,
      date: formValues.date,
      price: Number(formValues.price),
    }

    if(params?.expenceId){
        const currentExpence = expences ? expences.find(expence => expence.id === params?.expenceId) : null;

        if(currentExpence){
          await dispatch(updateExpenceThunk({
            ...currentExpence,
            ...expence
          }));
        }else{
            Alert.alert("Something wrong!", "Failed to update expence")
        }
        
    }else{
      await dispatch(addExpenceThunk(expence));
    };

    navigation.goBack();
  };

  const cancelHandler = (): void => {
    navigation.goBack();
  }

  const deleteHandler = async (): Promise<void> => {
    await dispatch(deleteExpenceThunk(params?.expenceId))
    navigation.goBack();
  }

  /* ********************************** */

  useLayoutEffect(() => {
    
    if(params?.expenceId){
      const currentExpence = expences ? expences.find(expence => expence.id === params?.expenceId) : null;

      if(currentExpence){
        setFormValues({
          title: currentExpence.title,
          price: String(currentExpence.price),
          date: currentExpence.date
        })
      }
    }
  },[expences]);
  /* ********************************** */


  return (
    <LinearGradient colors={[colors.primary300,colors.primary500]} style={styles.gradient} locations={[0.2,0.7]}>
      
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{isEditing ? "Update expence" : "Add expence"}</Text>

            <TextInput 
              placeholder='Title'
              value={formValues.title}
              onChangeText={(newTitle) => setFormValues({...formValues, title: newTitle})} 
              style={styles.titleInput} 
            />

            <View style={styles.infoContainer}>
              <View style={styles.infoWrapper}>
                <AntDesign name="calendar" size={15} color={colors.primary500} style={styles.infoIcon} />
                <TextInput 
                  placeholder='01/01/2023' 
                  value={formValues.date}
                  onChangeText={(newDate) => setFormValues({...formValues, date: newDate})} 
                  style={styles.dateInput} 
                />
              </View>
              <View style={styles.infoWrapper}>
                <FontAwesome name="dollar" size={15} color={colors.primary500} style={styles.infoIcon} />
                <TextInput 
                  value={formValues.price} 
                  placeholder='Price'
                  style={styles.priceInput} 
                  onChangeText={(newPrice) => setFormValues({...formValues, price: newPrice})} 
                  keyboardType="decimal-pad"
                  textContentType="telephoneNumber"
                />
              </View>
            </View>
          </View>

          <View style={styles.buttonsWrapper}>
            {isEditing && <IconButton 
              Icon={<MaterialIcons name="delete" size={20} color="red" />} 
              label="Delete" 
              overrideLabelStyles={[styles.label, {color: "red"}]} 
              overrideButtonStyles={styles.button}
              onPress={deleteHandler}
            />}
            <Pressable
              style={styles.button} 
              onPress={cancelHandler}
              >
                <Text style={styles.label}>Cancel</Text>
              </Pressable>

            <IconButton
              disable={formValues.title.trim().length === 0}
              Icon={isEditing ? <Feather name="refresh-cw" size={20} color="white" /> : <Ionicons name="ios-add" size={20} color="white" />} 
              label={isEditing ? "Update" : "Add"}  
              overrideLabelStyles={[styles.label]}
              overrideButtonStyles={styles.button}
              onPress={confirmHandler}
            />

          </View>
    </LinearGradient>
  )
}

export default ManageExpence;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    width: "100%",
    marginBottom: 30
  },
  title: {
    fontSize: 40,
    color: "white",
    marginBottom: 20
  },
  titleInput: {
    fontSize: 30,
    color: colors.primary600,
    marginBottom: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10
  },
  infoContainer: {
    flexDirection: "row",
  },
  infoWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  infoIcon: {
    position: "absolute",
    top: "50%",
    left: 20,
    transform: [{translateY: -7.5}],
    zIndex: 1
  },
  dateInput: {
    width: "95%",
    fontSize: 16,
    color: colors.primary500,
    backgroundColor: "#fff",
    paddingLeft: 35,
    paddingRight: 20,
    paddingVertical: 5,
    borderRadius: 10,
    textAlign: "center"
  },
  priceInput: {
    width: "95%",
    fontSize: 16,
    backgroundColor: "#fff",
    paddingLeft: 35,
    paddingRight: 20,
    paddingVertical: 5,
    borderRadius: 10,
    color: colors.primary500,
    textAlign: "center"
  },
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  label: {
    marginLeft: 4,
    color: "white",
    lineHeight: 20
  },
  button: {
    marginHorizontal: 10,
    backgroundColor: colors.primary500,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  }
})