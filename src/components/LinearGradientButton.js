import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Text, TouchableOpacity } from 'react-native'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { Platform } from 'react-native'

export const LinearGradientButton = props => {

  const BootstrapButton = withStyles({
    root: {
      borderRadius: props.buttonStyle,
      width: '100%',
      height: '100%',
      '&:hover': {
        boxShadow: '0 0 0 0.4rem rgba(20, 97, 133,.5)',
        fontWeight: 'bold'
      },
      '&:focus': {
        boxShadow: '0 0 0 0.4rem rgba(20, 97, 133,.5)',
        fontWeight: 'bold'
      },
      '& .MuiButton-label':{
        color: 'white',
        fontSize: 15,
        letterSpacing : 1,
      }  
    }
  })(Button)

  return (
    Platform.OS === 'web' ?
    <LinearGradient colors={props.backgroundColor} style={props.buttonStyle}> 
      <BootstrapButton 
        onClick={props.onPress} 
        >{props.text}
      </BootstrapButton>
    </LinearGradient>
    :
    <TouchableOpacity 
      onPress={props.onPress} 
      style={props.buttonLocation}>
      <LinearGradient colors={props.backgroundColor} style={props.buttonStyle}> 
        <Text style={props.buttonTextStyle}>{props.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

