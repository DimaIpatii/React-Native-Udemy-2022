import React, { CSSProperties } from 'react'


// Style
import { StyleSheet } from 'react-native';

// Component
import {View, Pressable, Text} from 'react-native';

// Types
interface IIconButtonProps{
    onPress?: () => void,
    label?: string,
    position?: "top" | "bottom" | "left" | "right",
    Icon: JSX.Element,
    overrideButtonStyles?: any,
    overrideLabelStyles?: any,
    disable?: boolean
}
const IconButton = (props: IIconButtonProps): JSX.Element => {
  return (
    <Pressable
        disabled={props.disable === true}
        onPress={props.onPress || null}
        style={[(props.position === "top" || props.position === "bottom") ? buttonStyles.vertical : buttonStyles.horisontal, props.overrideButtonStyles || {}]}
    >
        {props.label && (props.position === "top" || props.position === "left") && <Text style={[buttonStyles.label, props.position === "left" ? buttonStyles.labelLeft : buttonStyles.labelTop, props.overrideLabelStyles || {} ] }>{props.label}</Text>}
        {props.Icon}
        {props.label && (!props.position || (props.position === "right" || props.position === "bottom")) && <Text style={[ buttonStyles.label ,props.position === "bottom" ? buttonStyles.labelBottom : buttonStyles.labelRight, props.overrideLabelStyles || {}]}>{props.label}</Text>}

    </Pressable>
  )
}

export default IconButton;


const buttonStyles = StyleSheet.create({
    vertical: {
        flexDirection: "column",
        alignItems: 'center',
    },
    horisontal: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',

    },
    label: {
        color: "black"
    },
    labelTop: {
        marginBottom: 10,
    },
    labelBottom: {
        marginTop: 10
    },
    labelLeft: {
        marginRight: 10,
    },
    labelRight: {
        marginLeft: 10,
    }
})