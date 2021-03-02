import React, { useState } from 'react'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import  TextField  from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { withStyles } from '@material-ui/core/styles'
import { Platform } from 'react-native'

const ValidationTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root' :{
      color: 'white',
      borderRadius: 25,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#e0dbdb',
      borderWidth: 2,
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline' :{
      borderColor: 'white',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: 3,
      borderColor: 'white'
    },
    '& .MuiFormLabel-root': {
      color: '#e0dbdb',
      fontSize: 18
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(16px, -6px) scale(0.70)',   
      color: 'white',
      fontWeight: 'bold'  
    },
    '& .PrivateNotchedOutline-legendLabelled-4': {
      fontSize: '0.85em'
    },
    '& .MuiIconButton-edgeEnd': {
      color: 'white'
    }
  },
})(TextField);

export const FloatLabelInput = props => {
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = () => (event) => {
    props.onChangeText(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const fliStyles = {
    customLabelStyles: {
      colorFocused: '#aaa',
      colorBlurred: 'white',
      fontSizeFocused: 12,
    },
    containerStyles: {
      borderWidth: 1,
      paddingHorizontal: 10,
      // backgroundColor: '#fff',
      borderColor: 'white',
      borderRadius: 25,
      height: 60, 
      color: 'white'
    },
    labelStyles: {
      // backgroundColor: '#000',
      paddingHorizontal: 5,
      color: 'white'
    },
    inputStyles: {
      color: 'white',
      paddingHorizontal: 10,
    }
  }  

  return (
    Platform.OS === 'web' ?
      <ValidationTextField
        // id="outlined-adornment-password"
        label={props.label}
        value={props.value}
        type={!props.isPassword ? 'text' : showPassword ? 'text' : 'password'}
        // autoComplete="current-password"
        variant="outlined"
        onChange={handleChange()}
        InputProps={{ 
          endAdornment: !props.isPassword ? '' : (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                color='primary'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
      /> 
      :
      <FloatingLabelInput 
        label={props.label}
        isPassword={props.isPassword}
        // togglePassword={show}
        // onTogglePassword={(bool) => {handlePassword(bool)}}
        value={props.value}
        hintTextColor={props.hintTextColor}
        onChangeText={props.onChangeText}
        // customShowPasswordComponent={<Text>{props.customShowPasswordComponent}</Text>}
        // customHidePasswordComponent={<Text>{props.customHidePasswordComponent}</Text>}
        containerStyles={fliStyles.containerStyles}
        customLabelStyles={fliStyles.customLabelStyles}
        labelStyles={fliStyles.labelStyles}
        inputStyles={fliStyles.inputStyles}
      />
  )
}