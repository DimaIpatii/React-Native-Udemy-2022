import React from 'react'

// Components
import {View, Text, StyleSheet} from 'react-native';

// Types
interface INoExpencesMessageProps{
    title: string,
    message?: string,
    rootStyles?: any,
    titleStyles?: any,
    messageStyles?: any,
}
const NoExpencesMessage: React.FunctionComponent<INoExpencesMessageProps> = (props: INoExpencesMessageProps): JSX.Element => {
  return (
    <View style={props.rootStyles || {}}>
        <Text style={[styles.title, props.titleStyles || {}]}>{props.title}</Text>
        {props.message && <Text style={[styles.message, props.messageStyles || {}]}>{props.message}</Text>}
    </View>
  )
}

export default NoExpencesMessage;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "400",
        color: "white",
        textAlign: "center"
    },
    message: {
        fontSize: 16,
        color: "white",
        textAlign: "center"
    }
})